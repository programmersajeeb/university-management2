import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middleWares/globalErrorHandler';
import router from './routes';
const app: Application = express();

// cors use
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use('/api/v1', router);

// testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // Promise.reject(new Error('unhandle promise rejection'));
//   // throw new Error('testing logger error');
// });

// global error handler
app.use(globalErrorHandler);

// handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API route not founds',
      },
    ],
  });
  next();
});

export default app;
