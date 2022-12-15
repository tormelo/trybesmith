import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function getAll(req: Request, res:Response) {
  const { message } = await ordersService.getAll();
  return res.status(200).json(message);
}

export default {
  getAll,
};
