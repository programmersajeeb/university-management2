import express, { Application, Request, Response } from 'express';
import cors from 'cors';
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

// https://us02web.zoom.us/j/87577910537...

// Meeting ID: 875 7791 0537
// Passcode: 242350
