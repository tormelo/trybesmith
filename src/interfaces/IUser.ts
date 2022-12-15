import IUserCredentials from './IUserCredentials';

interface IUser extends IUserCredentials{
  id?: number,
  vocation: string,
  level: number,
}

export default IUser;
