import { z } from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
export const IMAGE_ERROR_MESSAGES = {
  imageType: 'Only .jpg, .jpeg, .png and .webp formats are supported.',
  imageSize: 'Max image size is 5MB.'
};

const isAcceptedImageType = (image: Array<File>) => ACCEPTED_IMAGE_TYPES.includes(image?.[0]?.type);
const isAcceptedImageSize = (image: Array<File>) => image?.[0]?.size <= MAX_FILE_SIZE;

export const StepThreeFieldsSchema = z.object({
  image: z
    .any()
    .refine((image) => isAcceptedImageType(image), IMAGE_ERROR_MESSAGES.imageType)
    .refine((image) => isAcceptedImageSize(image), IMAGE_ERROR_MESSAGES.imageSize)
});

export type StepThreeFields = z.infer<typeof StepThreeFieldsSchema>;
