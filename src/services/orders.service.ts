import ordersModel from '../models/orders.model';

async function getAll() {
  const orders = await ordersModel.getAll();
  return { type: null, message: orders };
}

export default {
  getAll,
};