import IProduct from '../../interfaces/IProduct';
import IUser from '../../interfaces/IUser';
import { productBodySchema, userBodySchema } from './schemas';

export function validateProductBody(productBody: IProduct) {
  const { error } = productBodySchema.validate(productBody);
  if (error) {
    const { message } = error;
    if (message.includes('required')) return { type: 'REQUIRED_FIELD', message };
    return { type: 'INVALID_VALUE', message: error.message };
  }

  return { type: null, message: '' };
}

export function validateUserBody(userBody: IUser) {
  const { error } = userBodySchema.validate(userBody);
  if (error) {
    const { message } = error;
    if (message.includes('required')) return { type: 'REQUIRED_FIELD', message };
    return { type: 'INVALID_VALUE', message: error.message };
  }

  return { type: null, message: '' };
}
