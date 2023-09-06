import { IAcademicSemester } from './academicSemester.interface';
import { academicSemester } from './academicSemester.model';

const createSemester = async (payload: IAcademicSemester) => {
  const result = await academicSemester.create(payload);
  return result;
};

export const academicSemesterService = {
  createSemester,
};
