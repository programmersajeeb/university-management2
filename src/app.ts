import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import userRouter from './app/modules/user/user.route';
const app: Application = express();

// cors use
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use('/api/v1/users/', userRouter);

// testing
app.get('/', (req: Request, res: Response) => {
  res.send('helo mongoose !');
});

export default app;
