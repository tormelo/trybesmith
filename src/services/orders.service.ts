import IOrder from '../interfaces/IOrder';
import ordersModel from '../models/orders.model';
import productsModel from '../models/products.model';
import { validateOrderBody } from './validations/inputValidations';

async function register(order: IOrder) {
  const error = validateOrderBody(order);
  if (error.type) return error;

  const { productsIds, userId } = order;
  
  const { insertId: orderId } = await ordersModel.register(userId);

  await Promise.all(productsIds.map(async (productId) => {
    await productsModel.update(productId, orderId);
  }));

  return { type: null, message: { userId, productsIds } };
}

async function getAll() {
  const orders = await ordersModel.getAll();
  return { type: null, message: orders };
}

export default {
  register,
  getAll,
};