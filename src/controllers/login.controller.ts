import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapError from '../utils/errorMap';

async function login(req: Request, res:Response) {
  const { type, message } = await loginService.login(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  return res.status(200).json(message);
}

export default {
  login,
};
