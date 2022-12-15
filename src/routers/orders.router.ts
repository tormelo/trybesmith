import express from 'express';
import ordersController from '../controllers/orders.controller';

export const router = express.Router();

router.get(
  '/',
  ordersController.getAll,
);

export default router;
