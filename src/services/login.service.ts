import { createToken } from '../auth';
import IUser from '../interfaces/IUser';
import IUserCredentials from '../interfaces/IUserCredentials';
import { validateUserCredentials } from './validations/inputValidations';

async function login(userCredentials: IUserCredentials) {
  const result = await validateUserCredentials(userCredentials);
  if (result.type) return result;

  const { password, ...userSafe } = result.message as IUser;
  const token = createToken(userSafe);

  return { type: null, message: { token } };
}

export default {
  login,
};
