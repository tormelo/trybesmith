import { Request, Response } from 'express';
import IOrder from '../interfaces/IOrder';
import ordersService from '../services/orders.service';
import mapError from '../utils/errorMap';

async function register(req: Request, res:Response) {
  console.log(req.body);
  const { payload, productsIds } = req.body;
  const order: IOrder = { userId: payload.id, productsIds };

  const { type, message } = await ordersService.register(order);

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(201).json(message);
}

async function getAll(req: Request, res:Response) {
  const { message } = await ordersService.getAll();
  return res.status(200).json(message);
}

export default {
  register,
  getAll,
};
