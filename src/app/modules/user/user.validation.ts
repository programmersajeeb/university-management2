import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.string({
    required_error: 'role is required',
  }),
  password: z.string().optional(),
});

export const userValidation = {
  createUserZodSchema,
};