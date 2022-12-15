import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IUser from '../interfaces/IUser';
import IUserCredentials from '../interfaces/IUserCredentials';
import connection from './connection';

async function register(user: IUser): Promise<ResultSetHeader> {
  const { username, vocation, level, password } = user;

  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password) 
  VALUES (?, ?, ?, ?);`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);

  return result;
}

async function getByCredentials(userCredentials: IUserCredentials): Promise<IUser[]> {
  const { username, password } = userCredentials;

  const query = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?;';
  const values = [username, password];

  const [users] = await connection.execute<RowDataPacket[]>(query, values);
  
  return users as IUser[];
}

export default {
  register,
  getByCredentials,
};