import IProduct from '../../interfaces/IProduct';
import productBodySchema from './schemas';

const validateProductBody = (productBody: IProduct) => {
  const { error } = productBodySchema.validate(productBody);
  if (error) {
    const { message } = error;
    if (message.includes('required')) return { type: 'REQUIRED_FIELD', message };
    return { type: 'INVALID_VALUE', message: error.message };
  }

  return { type: null, message: '' };
};

export default validateProductBody;
