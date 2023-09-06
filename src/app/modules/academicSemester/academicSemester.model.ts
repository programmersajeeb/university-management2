import { Schema, model } from 'mongoose';
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

export const academicSemester = model<IAcademicSemester, semesterModel>(
  'academicSemester',
  academicSemesterSchema,
);
