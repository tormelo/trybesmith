import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/IOrder';
import connection from './connection';

async function register(userId: number): Promise<ResultSetHeader> {
  const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?);';
  const values = [userId];

  const [result] = await connection.execute<ResultSetHeader>(query, values);

  return result;
}

async function getAll(): Promise<IOrder[]> {
  const query = `
  SELECT 
    o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
  FROM
    Trybesmith.orders AS o
  INNER JOIN
    Trybesmith.products AS p ON p.order_id = o.id
  GROUP BY o.id;`;

  const [orders] = await connection.execute<RowDataPacket[]>(query);
  
  return orders as IOrder[];
}

export default {
  register,
  getAll,
};