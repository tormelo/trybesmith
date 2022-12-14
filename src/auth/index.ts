import jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';

const secret = 'trybesmithjwtsecret';

const config = {
  expiresIn: '6h',
};

export function createToken(payload: IUser) {
  const token = jwt.sign(payload, secret, config);
  return token;
}

export function verifyToken(token: string) {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (error) {
    return { isInvalid: true, error };
  }
}