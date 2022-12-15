import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { verifyToken } from '../auth';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const payload = verifyToken(token) as JwtPayload;
  const { isInvalid } = payload;
  if (isInvalid) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  
  req.body = { ...req.body, payload };

  return next();
};
