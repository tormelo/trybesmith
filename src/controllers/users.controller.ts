import { Request, Response } from 'express';
import usersService from '../services/users.service';
import mapError from '../utils/errorMap';

async function register(req: Request, res:Response) {
  const { type, message } = await usersService.register(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  return res.status(201).json(message);
}

export default {
  register,
};
