import IProduct from '../interfaces/IProduct';
import productsModel from '../models/products.model';
import validateProductBody from './validations/inputValidations';

async function register(product: IProduct) {
  const error = validateProductBody(product);
  if (error.type) return error;
  const newProduct = await productsModel.register(product);
  return { type: null, message: newProduct };
}

export default {
  register,
};