import express from 'express';
import productsController from '../controllers/products.controller';

export const router = express.Router();

router.post(
  '/',
  productsController.register,
);

export default router;
