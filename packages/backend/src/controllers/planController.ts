import { Request, Response } from 'express';
import { prisma } from '../index';

export const getPlans = async (req: Request, res: Response) => {
  try {
    const plans = await prisma.plan.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(plans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch plans' });
  }
};

export const createPlan = async (req: Request, res: Response) => {
  try {
    const { title, summary, content } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const plan = await prisma.plan.create({
      data: {
        title,
        summary: summary || '',
        content
      }
    });
    
    res.status(201).json(plan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create plan' });
  }
};

export const deletePlan = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: 'ID is required' });
    await prisma.plan.delete({
      where: { id: id as string },
    });
    res.json({ message: 'Plan deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete plan' });
  }
};
