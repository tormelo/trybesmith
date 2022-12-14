import { ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/IUser';
import connection from './connection';

async function register(user: IUser): Promise<ResultSetHeader> {
  const { username, vocation, level, password } = user;

  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password) 
  VALUES (?, ?, ?, ?);`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);

  return result;
}

export default {
  register,
};