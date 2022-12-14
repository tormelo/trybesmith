import { ResultSetHeader } from 'mysql2/promise';
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

export default {
  register,
};