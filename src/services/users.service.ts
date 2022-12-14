import IUser from '../interfaces/IUser';
import usersModel from '../models/users.model';
import { createToken } from '../auth';
import { validateUserBody } from './validations/inputValidations';

async function register(user: IUser) {
  const error = validateUserBody(user);
  if (error.type) return error;

  const { insertId: id } = await usersModel.register(user);

  const { password, ...userSafe } = user;

  const payload: IUser = {
    id,
    ...userSafe,
  };
  
  const token = createToken(payload);

  return { type: null, message: { token } };
}

export default {
  register,
};
