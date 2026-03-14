import { Request, Response } from 'express';
import OpenAI from 'openai';

// Helper to get openai instance with user overrides or fallback to env
export const getOpenAIClient = (req: Request) => {
  const customApiKey = req.headers['x-ai-api-key'] as string;
  const customBaseUrl = req.headers['x-ai-base-url'] as string;
  const customModel = req.headers['x-ai-model'] as string;

  const apiKey = customApiKey || process.env.LLM_API_KEY || '';
  const baseURL = customBaseUrl || process.env.LLM_BASE_URL || 'https://api.deepseek.com/v1';
  const model = customModel || process.env.LLM_MODEL || 'deepseek-chat';

  const openai = new OpenAI({ apiKey, baseURL });
  return { openai, model };
};

export const generatePlanInquiry = async (req: Request, res: Response) => {
  try {
    const { methodologies } = req.body;

    if (!methodologies || methodologies.length === 0) {
      return res.status(400).json({ error: 'At least one methodology is required' });
    }

    const { openai, model } = getOpenAIClient(req);

    const methodologyContext = methodologies.map((m: any, idx: number) =>
      `${idx + 1}. [${m.name}] (来自 《${m.book?.title || '未知书籍'}》)\n简介：${m.description}\n步骤：${m.steps?.map((s: any) => s.content).join(' -> ')}`
    ).join('\n\n');

    const prompt = `你是一位专业的阅读实践转化教练。

## 背景
用户希望将以下读书方法论落地为个人可执行的计划：
<methodology>
${methodologyContext}
</methodology>

## 你的任务
在给出方案之前，先提出 2-3 个追问，帮助你深入了解用户的实际情况。

## 追问质量标准
- 紧扣上方方法论的核心执行难点，而非泛泛而问
- 每个问题聚焦一个维度（如：当前瓶颈、可用时间、执行偏好）
- 措辞具体、易于回答，避免抽象提问

## 输出格式
严格返回合法 JSON，不要包含任何额外文字：
{
  "opening": "<1-2 句友好的开场白，不含问题>",
  "questions": [
    "<追问1，完整的问句>",
    "<追问2，完整的问句>",
    "<追问3，完整的问句（可选）>"
  ]
}`;

    const completion = await openai.chat.completions.create({
      model,
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.7,
    });

    const resultText = completion.choices[0].message.content || '{}';
    const result = JSON.parse(resultText);

    res.json(result);
  } catch (error) {
    console.error("AI Error (Inquiry):", error);
    res.status(500).json({ error: 'Failed to generate plan inquiry' });
  }
};

export const semanticMatchMethodologies = async (req: Request, query: string, methodologies: any[]) => {
  try {
    const { openai, model } = getOpenAIClient(req);

    const context = methodologies.map((m, idx) =>
      `${idx}. [ID: ${m.id}] 名称: ${m.name}\n简介: ${m.description}\n场景: ${m.applicableScenarios}`
    ).join('\n\n');

    const prompt = `你是一个精准的主题匹配专家。
用户提出了一个需求或现状描述：
"${query}"

以下是方法库中的方法论列表：
${context}

请从以上列表中筛选出与用户需求**最相关**的 3-5 个方法论。
要求：
1. 即使名称不直接包含关键词，只要原理或场景契合，也请选中。
2. 即使完全不相关，也请返回空数组。
3. 请严格返回合法的 JSON 数组，仅包含被选中的 ID。格式：["id1", "id2", ...]`;

    const completion = await openai.chat.completions.create({
      model,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
    });

    const resultText = completion.choices[0].message.content?.trim() || '[]';
    // Match potential JSON array in case of extra text
    const jsonMatch = resultText.match(/\[.*\]/s);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    return [];
  } catch (error) {
    console.error("AI Error (Semantic Match):", error);
    return [];
  }
};

export const generatePlan = async (req: Request, res: Response) => {
  try {
    const { methodologies, userContext } = req.body;

    if (!methodologies || !userContext) {
      return res.status(400).json({ error: 'Methodologies and user context are required' });
    }

    const { openai, model } = getOpenAIClient(req);

    const methodologyContext = methodologies.map((m: any, idx: number) =>
      `${idx + 1}. [${m.name}] (来自 《${m.book?.title || '未知书籍'}》)\n简介：${m.description}\n步骤：${m.steps?.map((s: any) => s.content).join(' -> ')}`
    ).join('\n\n');

    const prompt = `你是一个专业的阅读转化与行动规划教练。
用户选择了以下读书方法论：
${methodologyContext}

${req.body.previousPlan ? `这是之前的计划方案：
${JSON.stringify(req.body.previousPlan, null, 2)}

用户的反馈/修改要求是：
"${userContext}"

请基于以上反馈，对原有的计划进行针对性的微调或重构。` : `用户对自身情况的描述/回答是：
"${userContext}"

请结合所选的方法论以及用户的个人实际情况，为他/她生成一份具体、可落地的专属行动计划。`}

要求：
1. 计划应当具有**阶段性**（例如：第一阶段环境准备，第二阶段核心练习，第三阶段习惯巩固）。
2. 将抽象的"方法论步骤"转化为用户当前可执行的**明确动作**。
3. 请严格返回合法的 JSON 格式，包含 title, summary, phases 数组：
{
  "title": "<计划标题>",
  "summary": "<简述计划重点与鼓励语>",
  "phases": [
    {
      "name": "<阶段名称，例如：第一阶段：破冰 (第1-3天)>",
      "actions": [
        "<具体动作1>",
        "<具体动作2>"
      ]
    }
  ]
}`;

    const completion = await openai.chat.completions.create({
      model,
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.7,
    });

    const resultText = completion.choices[0].message.content || '{}';
    const result = JSON.parse(resultText);

    res.json(result);
  } catch (error: any) {
    console.error("AI Error (Generate):", error.message || error);
    if (error.response) {
      console.error("API Response Error:", error.response.data);
    }
    res.status(500).json({ error: 'Failed to generate specific plan', details: error.message });
  }
};

export const extractMethodology = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text content is required' });
    }

    const { openai, model } = getOpenAIClient(req);

    const prompt = `你是一位专业的阅读方法论提炼专家。

## 你的任务
从下方文本中提炼出核心方法论，结构化为可直接执行的步骤框架。
忽略感悟、故事、举例等冗余内容，只保留可复用的方法本质。

## 待提炼文本
<source_text>
${text}
</source_text>

## 提炼质量标准
1. steps 控制在 3-7 步，每步描述一个独立的具体动作
2. 每步的 content 以动词开头（如"列出…"、"回顾…"、"对比…"）
3. tags 提取 2-5 个，优先使用已有通用标签（如：效率、习惯养成、学习、写作、理财）

## 输出格式
严格返回合法 JSON，不要包含任何额外文字：
{
  "name": "<方法论名称，如：费曼技巧、3分钟法则>",
  "description": "<1-2 句话：核心原理 + 解决什么问题>",
  "applicableScenarios": ["<场景1>", "<场景2>"],
  "steps": [
    {
      "index": 1,
      "content": "<以动词开头的具体动作>"
    }
  ],
  "tags": ["<标签1>", "<标签2>"]
}`;

    const completion = await openai.chat.completions.create({
      model,
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.3,
    });

    const resultText = completion.choices[0].message.content || '{}';
    const result = JSON.parse(resultText);

    res.json(result);
  } catch (error) {
    console.error("AI Error (Extract):", error);
    res.status(500).json({ error: 'Failed to extract methodology' });
  }
};

export const classifyBook = async (req: Request, book: { title: string; author?: string; summary?: string }) => {
  try {
    const { openai, model } = getOpenAIClient(req);

    // We pre-define some common categories
    const categories = ["理财", "自我成长", "心理学", "商业", "科技", "文学", "生活方式", "其他"];

    const prompt = `你是一个专业的图书分类专家。
请根据以下书籍的信息，从给定的分类列表中选择最适合的一个分类。

书籍名称：《${book.title}》
作者：${book.author || '未知'}
简介：${book.summary || '无'}

可选分类：${categories.join(', ')}

请只返回分类名称本身，不要包含任何其他说明字符。若无法准确判断，请返回“其他”。`;

    const completion = await openai.chat.completions.create({
      model,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
    });

    const category = completion.choices[0].message.content?.trim() || '其他';
    return categories.includes(category) ? category : '其他';
  } catch (error) {
    console.error("AI Error (Classify):", error);
    return '其他';
  }
};

export const generatePlanReflection = async (req: Request, res: Response) => {
  try {
    const { plan, logs } = req.body;

    if (!plan || !logs) {
      return res.status(400).json({ error: 'Plan context and logs are required' });
    }

    const { openai, model } = getOpenAIClient(req);

    const logContext = logs.map((l: any, idx: number) =>
      `记录 ${idx + 1} [${new Date(l.timestamp).toLocaleDateString()}] 心情: ${l.mood || '平稳'}\n内容: ${l.content}`
    ).join('\n\n');

    const prompt = `你是用户的个人实践教练，擅长从行动记录中发现成长模式，以真诚、有温度的方式帮助用户看见自己的成长。

## 本次复盘的背景

用户完成了以下实践计划：
<plan>
计划名称：${plan.title}
计划概述：${plan.summary}
执行阶段：${plan.phases.map((p, i) => `${i + 1}. ${p.name}（${p.duration}）`).join('、')}
</plan>

用户在执行过程中的真实记录：
<logs>
${logContext}
</logs>

## 复盘结构
请按以下三个部分撰写复盘，每部分 1-3 段：

1. **执行洞察**：用户做得好的地方 + 日志中暴露的情绪波动或卡点，要结合日志中的具体细节，不要泛泛而谈
2. **成长提炼**：从这段经历中，用户真正习得了什么？聚焦在超越计划本身的认知或能力变化
3. **下一步建议**：给出 2-3 条具体的进阶方向，每条建议需可直接行动，而非方向性口号

## 输出约束
- 语气：真诚有温度，鼓励为主，但不要过度赞美，保持真实感
- 格式：Markdown，可用加粗和列表，不要用二级以上标题
- 篇幅：300-500 字
- 直接输出复盘正文，不要有任何前置说明`;

    const completion = await openai.chat.completions.create({
      model,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8,
    });

    const reflection = completion.choices[0].message.content || '未生成总结内容';
    res.json({ reflection });
  } catch (error) {
    console.error("AI Error (Reflection):", error);
    res.status(500).json({ error: 'Failed to generate plan reflection' });
  }
};
