import express from 'express';
import { academicSemesterRoutes } from '../app/modules/academicSemester/academicSemester.route';
import { userRoutes } from '../app/modules/user/user.route';
const router = express.Router();

const moduleRoute = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/semester',
    route: academicSemesterRoutes,
  },
];

moduleRoute.forEach(route => router.use(route.path, route.route));

export default router;
