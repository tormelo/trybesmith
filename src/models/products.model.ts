import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IProduct from '../interfaces/IProduct';
import connection from './connection';

async function register(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: IProduct = { id, name, amount };
  return newProduct;
}

async function getAll(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.products;';

  const [products] = await connection.execute<RowDataPacket[]>(query);
  
  return products as IProduct[];
}

export default {
  register,
  getAll,
};