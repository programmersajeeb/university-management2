import { Schema, model } from 'mongoose';
import { IAcademicSemester, semesterModel } from './academicSemester.interface';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    // firstName: { type: String, required: true },
    // lastName: { type: String, required: true }
    title: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
    },
    endMonth: {
      type: String,
      required: true,
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
