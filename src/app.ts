import express from 'express';
import productsRouter from './routers/products.router';
import usersRouter from './routers/users.router';
import loginRouter from './routers/login.router';
import ordersRouter from './routers/orders.router';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/orders', ordersRouter);

export default app;
