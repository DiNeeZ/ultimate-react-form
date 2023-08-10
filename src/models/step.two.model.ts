import { z } from 'zod';

const validatePhoneNumberRegex: RegExp =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const StepTwoFieldsSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: 'Email field is required' })
    .email({ message: 'Email should have correct format' }),
  hasPhone: z.boolean().optional(),
  phoneNumber: z
    .string()
    .trim()
    .nonempty({ message: "Phone number field shouldn't be empty" })
    .regex(validatePhoneNumberRegex, { message: 'Phone number is invalid' })
    .optional()
});

export type StepTwoFields = z.infer<typeof StepTwoFieldsSchema>;
