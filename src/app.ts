import express, { Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';

import * as middlewares from './middlewares';
import MessageResponse from './interfaces/MessageResponse';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response<MessageResponse>) => {
  res.json({
    message: 'Adarsh Desai says Hi.'
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
