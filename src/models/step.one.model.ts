import { z } from 'zod';

export const StepOneFieldsSchema = z.object({
  firstName: z
    .string()
    .trim()
    .nonempty({ message: 'First Name is required' })
    .min(2, { message: 'First Name must contain at least 2 characters' })
    .regex(/^([^0-9]*)$/, { message: 'First Name should not contain numbers' }),
  lastName: z
    .string()
    .trim()
    .nonempty({ message: 'Last Name is required' })
    .min(2, { message: 'Last Name must contain at least 2 characters' })
    .regex(/^([^0-9]*)$/, { message: 'Last Name should not contain numbers' })
});

export type StepOneFields = z.infer<typeof StepOneFieldsSchema>;
