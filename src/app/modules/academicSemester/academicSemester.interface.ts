import { Model } from 'mongoose';

export type IAcademicSemester = {
  title: string;
  code: string;
  year: number;
  startMonth: string;
  endMonth: string;
};

export type semesterModel = Model<IAcademicSemester>;
