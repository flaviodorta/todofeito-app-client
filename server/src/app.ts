import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
const helmet = require('helmet');

import { connectDB } from './config/database';

import { usersRouter } from './routes/users.routes';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

connectDB();

app.use(helmet());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.send('coe');
});

app.use(usersRouter);

const money = '\u{1F911} \u{1F911} \u{1F911}';

app.listen(PORT, () => {
  console.log(`${money}[todofeito-server]: server running on port ${PORT}`);
});
