import express from 'express';

import usersRouter from './users.routes';
import sessionRouter from './session.routes';
import productsRouter from './products.routes';

const router = express();

router.use('/users', usersRouter);
router.use('/sessions', sessionRouter);
router.use('/products', productsRouter);

export default router;
