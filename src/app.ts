import express from 'express';
import productsRouter from './routers/products.router';
import usersRouter from './routers/users.router';
import loginRouter from './routers/login.router';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

export default app;
