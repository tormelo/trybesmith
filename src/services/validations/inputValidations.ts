import { ObjectSchema } from 'joi';
import IProduct from '../../interfaces/IProduct';
import IUser from '../../interfaces/IUser';
import IUserCredentials from '../../interfaces/IUserCredentials';
import usersModel from '../../models/users.model';
import { credentialsBodySchema, productBodySchema, userBodySchema } from './schemas';

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

function validateCredentialsData(userCredentials: IUserCredentials) {
  return validateSchema<IUserCredentials>(userCredentials, credentialsBodySchema);
}

async function validateCredentialsAuth(userCredentials: IUserCredentials) {
  const [user] = await usersModel.getByCredentials(userCredentials);

  console.log(user);

  if (!user) {
    return { type: 'UNAUTHORIZED', message: 'Username or password invalid' }; 
  }

  return { type: null, message: user };
}

export async function validateUserCredentials(userCredentials: IUserCredentials) {
  const dataVal = validateCredentialsData(userCredentials);
  if (dataVal.type) return dataVal;

  const authVal = await validateCredentialsAuth(userCredentials);
  return authVal;
}
