import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middleWares/globalErrorHandler';
import { academicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
import { userRoutes } from './app/modules/user/user.route';
const app: Application = express();

// cors use
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use('/api/v1/users/', userRoutes);
app.use('/api/v1/semester', academicSemesterRoutes);

// testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // Promise.reject(new Error('unhandle promise rejection'));
//   // throw new Error('testing logger error');
// });

// global error handler
app.use(globalErrorHandler);

export default app;
