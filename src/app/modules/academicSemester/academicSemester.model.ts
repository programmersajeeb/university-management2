import httpStatus from 'http-status';
import { Schema, model } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import {
  academicSemesterCodes,
  academicSemesterMonts,
  academicSemesterTitles,
} from './academicSemester.const';
import { IAcademicSemester, semesterModel } from './academicSemester.interface';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCodes,
    },
    year: {
      type: Number,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonts,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonts,
    },
  },
  {
    timestamps: true,
  },
);

academicSemesterSchema.pre('save', async function (next) {
  const isExist = await academicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Academic semester already added');
  }
  {
    next();
  }
});

export const academicSemester = model<IAcademicSemester, semesterModel>(
  'academicSemester',
  academicSemesterSchema,
);
