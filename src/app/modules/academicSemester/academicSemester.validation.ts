import { z } from 'zod';
import {
  academicSemesterCodes,
  academicSemesterMonts,
  academicSemesterTitles,
} from './academicSemester.const';

const createSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]], {
      required_error: 'Code is required',
    }),
    year: z.number({
      required_error: 'Year is required',
    }),
    startMonth: z.enum([...academicSemesterMonts] as [string, ...string[]], {
      required_error: 'Start month is required',
    }),
    endMonth: z.enum([...academicSemesterMonts] as [string, ...string[]], {
      required_error: 'End month is required',
    }),
  }),
});

export const academicSemesterValidation = {
  createSemesterZodSchema,
};
