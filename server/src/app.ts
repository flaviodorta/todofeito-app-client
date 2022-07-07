import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('coe');
});

const money = '\u{1F911} \u{1F911} \u{1F911}';

app.listen(PORT, () => {
  console.log(`${money}[todofeito-server]: server running on port ${PORT}`);
});
