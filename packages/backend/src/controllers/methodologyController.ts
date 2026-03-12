import { Request, Response } from 'express';
import { prisma } from '../index';
import { semanticMatchMethodologies } from '../services/aiService';

export const createMethodology = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const { name, description, steps, applicableScenarios, tags = [] } = req.body;

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
