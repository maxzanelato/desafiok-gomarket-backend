import 'reflect-metadata';

import cors from 'cors';
import express, { Response, Request, NextFunction } from 'express';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './documentation/swagger.json';

import 'express-async-errors';

import routes from './routes';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

import './database';

const app = express();
app.use(cors());

app.use(express.json());
app.use('/v1/files', express.static(uploadConfig.directory));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('====================================');
  console.log('😎😎😎 Server started on port 3333! 😎😎😎');
  console.log('====================================');
});
