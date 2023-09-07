import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { academicSemesterService } from './academicSemester.service';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result =
      await academicSemesterService.createSemester(academicSemesterData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester created successfully',
      data: result,
    });
    next();
  },
);

export const academicSemesterController = {
  createSemester,
};
