import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { userController } from './user.controller';
import { userValidation } from './user.validation';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(userValidation.createUserZodSchema),
  userController.createUser,
);

export const userRoutes = router;
