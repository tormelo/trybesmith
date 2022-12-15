import { ObjectSchema } from 'joi';
import IProduct from '../../interfaces/IProduct';
import IUser from '../../interfaces/IUser';
import { productBodySchema, userBodySchema } from './schemas';

function validateSchema<T>(data: T, schema: ObjectSchema) {
  const { error } = schema.validate(data);
  if (error) {
    const { message } = error;
    if (message.includes('required')) return { type: 'REQUIRED_FIELD', message };
    return { type: 'INVALID_VALUE', message: error.message };
  }

  return { type: null, message: '' };
}

export function validateProductBody(productBody: IProduct) {
  return validateSchema<IProduct>(productBody, productBodySchema);
}

export function validateUserBody(userBody: IUser) {
  return validateSchema<IUser>(userBody, userBodySchema);
}
