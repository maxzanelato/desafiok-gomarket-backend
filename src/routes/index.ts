import express from 'express';

import usersRouter from './users.routes';
import sessionRouter from './session.routes';

const router = express();

router.use('/users', usersRouter);
router.use('/sessions', sessionRouter);

export default router;
