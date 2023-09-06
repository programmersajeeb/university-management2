import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { academicSemesterController } from './academicSemester.controller';
import { academicSemesterValidation } from './academicSemester.validation';
const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(academicSemesterValidation.createSemesterZodSchema),
  academicSemesterController.createSemester,
);

export const academicSemesterRoutes = router;
