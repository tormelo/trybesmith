import express from 'express';
import productsController from '../controllers/products.controller';

export const router = express.Router();

router.get(
  '/',
  productsController.getAll,
);

router.post(
  '/',
  productsController.register,
);

export default router;
