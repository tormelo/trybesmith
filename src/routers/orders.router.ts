import express from 'express';
import ordersController from '../controllers/orders.controller';
import validateToken from '../middlewares/validateToken';

export const router = express.Router();

router.get(
  '/',
  ordersController.getAll,
);

router.post(
  '/',
  validateToken,
  ordersController.register,
);

export default router;
