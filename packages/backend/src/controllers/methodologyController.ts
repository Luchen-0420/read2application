import { Request, Response } from 'express';
import { prisma } from '../index';
import { semanticMatchMethodologies } from '../services/aiService';

export const createMethodology = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const { name, description, steps, applicableScenarios, tags = [] } = req.body;

    if (!bookId || typeof bookId !== 'string') {
      return res.status(400).json({ error: 'Invalid bookId' });
    }

    // tags parameter is expected to be an array of string tag names
    const methodology = await prisma.methodology.create({
      data: {
        bookId,
        name,
        description,
        steps,
        applicableScenarios,
        tags: {
          create: tags.map((tagName: string) => ({
            tag: {
              connectOrCreate: {
                where: { name: tagName },
                create: { name: tagName }
              }
            }
          }))
        }
      },
      include: {
        tags: {
          include: { tag: true }
        }
      }
    });

    res.status(201).json(methodology);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create methodology' });
  }
};

export const matchMethodologies = async (req: Request, res: Response) => {
  try {
    const query = req.query.query as string;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    // A simple basic ILIKE matching engine for keyword search
    let results = await prisma.methodology.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          { applicableScenarios: { contains: query, mode: 'insensitive' } },
          {
            tags: {
              some: {
                tag: {
                  name: { contains: query, mode: 'insensitive' }
                }
              }
            }
          }
        ]
      },
      include: {
        book: true,
        tags: {
          include: { tag: true }
        }
      }
    });

    // If no results and AI settings are likely present, try semantic match
    const hasAIConfig = (req.headers['x-ai-api-key'] as string) || process.env.LLM_API_KEY;
    if (results.length === 0 && hasAIConfig) {
      // Fetch all methodologies to rank them (for small-scale libraries)
      // For large libraries, we'd use vector search, but for this app this is fine
      const allMethodologies = await prisma.methodology.findMany({
        include: {
          book: true,
          tags: {
            include: { tag: true }
          }
        }
      });
      
      if (allMethodologies.length > 0) {
        const matchedIds = await semanticMatchMethodologies(req, query, allMethodologies);
        if (matchedIds && matchedIds.length > 0) {
          results = allMethodologies.filter(m => matchedIds.includes(m.id));
        }
      }
    }

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to match methodologies' });
  }
};

export const deleteMethodology = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== 'string') return res.status(400).json({ error: 'ID is required' });
    
    await prisma.methodology.delete({
      where: { id: id as string },
    });
    
    res.json({ message: 'Methodology deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete methodology' });
  }
};

import { getOpenAIClient } from '../services/aiService';

export const generateTags = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }

    const { openai, model } = getOpenAIClient(req);
    const prompt = `你是一个知识管理专家。请根据以下方法论的名称和描述，提炼出 3-5 个核心标签（Tag）。
标签应该简洁、准确，涵盖所属领域、核心目的或适用场景。
直接返回以逗号分隔的标签字符串，不要包含其他解释文字。

方法论名称：${name}
描述：${description}

标签示例：理财, 习惯养成, 心态管理`;

    const completion = await openai.chat.completions.create({
      model,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.5,
    });

    const tags = completion.choices[0].message.content?.trim().replace(/，/g, ',') || '';
    res.json({ tags });
  } catch (error) {
    console.error('AI tag generation failed:', error);
    res.status(500).json({ error: 'Failed to generate tags via AI' });
  }
};
