import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapError from '../utils/errorMap';

async function register(req: Request, res:Response) {
  const { type, message } = await productsService.register(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  return res.status(201).json(message);
}

async function getAll(req: Request, res:Response) {
  const { message } = await productsService.getAll();
  return res.status(200).json(message);
}

export default {
  register,
  getAll,
};