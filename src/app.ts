import express, { Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

import * as middlewares from './middlewares';
import MessageResponse from './interfaces/MessageResponse';

const app = express();
const prisma = new PrismaClient();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response<MessageResponse>) => {
  res.json({
    message: 'Adarsh Desai says Hi.'
  });
});

async function main() {
  await prisma.user.create({
    data: {
      name: 'Adarsh Desai',
      email: 'adarshdesai01@gmail.com',
      posts: {
        create: {
          title: 'my first post',
          body: 'my first post description and content',
          slug: 'my-first-post90'
        }
      },
      address: {
        street: '12th Street',
        city: 'San Francisco',
        state: 'CA',
        zip: '12345'
      }
    }
  });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true
    }
  });

  console.log(allUsers);
}

main();

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
