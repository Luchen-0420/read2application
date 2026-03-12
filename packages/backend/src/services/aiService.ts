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

    const prompt = `你是一个专业的阅读转化与行动规划教练。
用户希望将以下读书方法论转化为个人的落地实践：
${methodologyContext}

为了给用户提供一份最适合他当前实际情况、生活习惯和痛点的实施计划，你需要先向用户提出 2-3 个关键的追问。
要求：
1. 追问必须具有启发性且容易回答（例如：你的具体瓶颈是什么？你每周能固定出多少时间？你个人的执行力风格偏向哪种？）
2. 不要一次性直接给方案，而是仅仅提出"追问"。
3. 请严格返回合法的 JSON 格式，结构如下：
{
  "message": "<一段简短友好的开场白，包含具体的追问内容，使用 \\n 换行>",
  "questions": ["<核心痛点>", "<可用时间>", "<个人习惯/能力>"]
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

    const prompt = `你是一个出色的阅读笔记专家。
请从以下长文本中提取出核心的"方法论"，并将其结构化为可执行的步骤。
这段文本可能包含了一些感悟、故事，请忽略冗余信息，只提炼最核心的框架。

待提炼文本：
"""
${text}
"""

请严格返回合法的 JSON 格式，不要多余字符，结构如下：
{
  "name": "<提炼出的方法论名称，比如：费曼技巧、3分钟法则等>",
  "description": "<用一两句话简述它的核心原理和目的>",
  "applicableScenarios": "<这个方法论适合用来解决什么样的痛点或场景？>",
  "steps": [
    { "content": "<第1步具体做什么>" },
    { "content": "<第2步具体做什么>" }
  ],
  "tags": ["<相关的标签，比如：理财, 效率, 习惯养成>"]
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
