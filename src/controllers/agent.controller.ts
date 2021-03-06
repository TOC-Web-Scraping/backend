import { Request, Response } from 'express';
import { cache } from '../middlewares/cache';
import AgentService from '../services/agent.service';
import { Agent } from '../models';

async function getAgents(req: Request, res: Response) {
  try {
    const query = Agent.find();
    const result = await query;
    const filteredResult = AgentService.filterString(result);

    const jsonResult = filteredResult.map((r) => r.toJSON());

    cache.set(req.originalUrl, jsonResult, 60);

    res.status(200).json(jsonResult);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export default {
  getAgents,
};
