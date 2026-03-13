import { Request, Response } from 'express';
import { prisma } from '../index';
import { Plan } from '../generated/client';

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
    const { title, content, methodologyId } = req.body;
    
    if (!title || !content || !methodologyId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const plan = await prisma.plan.create({
      data: {
        title,
        content,
        methodologyId
      }
    });
    
    res.status(201).json(plan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create plan' });
  }
};

export const addPlanLog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { content, mood } = req.body;

    if (!content) return res.status(400).json({ error: 'Log content is required' });

    const plan = await prisma.plan.findUnique({ where: { id: id as string } });
    if (!plan) return res.status(404).json({ error: 'Plan not found' });

    const currentLogs = (plan.logs as any[]) || [];
    const newLog = {
      timestamp: new Date().toISOString(),
      content,
      mood: mood || '平稳'
    };

    const updatedPlan = await prisma.plan.update({
      where: { id: id as string },
      data: {
        logs: [...currentLogs, newLog]
      }
    });

    res.json(updatedPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add plan log' });
  }
};

export const completePlan = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { reflection } = req.body;

    if (!reflection) return res.status(400).json({ error: 'Reflection content is required' });

    const updatedPlan = await prisma.plan.update({
      where: { id: id as string },
      data: {
        status: 'completed',
        reflection,
        completedAt: new Date()
      }
    });

    res.json(updatedPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to complete plan' });
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
