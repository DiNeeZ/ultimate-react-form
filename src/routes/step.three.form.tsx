import { useForm } from 'react-hook-form';
import { type StepThreeFields, StepThreeFieldsSchema } from '../models/step.three.model';
import { zodResolver } from '@hookform/resolvers/zod';
import { Typography } from '@mui/material';
import { Form } from 'react-router-dom';
import FileInput from '../components/file.input';
import { SubmitButton } from '../components';

const StepThreeForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<StepThreeFields>({
    mode: 'onChange',
    resolver: zodResolver(StepThreeFieldsSchema)
  });

  const onSubmit = () => {
    console.log('form');
  };

  return (
    <>
      <Typography
        textAlign='center'
        component='h2'
        variant='h5'>
        📷 Upload an Image
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput
          name='image'
          control={control}
          errors={errors}
          isValid={isValid}
        />

        {/* Submit and go to next step */}
        <SubmitButton isValid={isValid}>Next</SubmitButton>
      </Form>
    </>
  );
};

export default StepThreeForm;
