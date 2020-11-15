import express from 'express';

import usersRouter from './users.routes';
import sessionRouter from './session.routes';
import productsRouter from './products.routes';

const router = express();

router.use('/v1/users', usersRouter);
router.use('/v1/sessions', sessionRouter);
router.use('/v1/products', productsRouter);

export default router;
