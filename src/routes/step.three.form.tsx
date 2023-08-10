import { useForm } from 'react-hook-form';
import { type StepThreeFields, StepThreeFieldsSchema } from '../models/step.three.model';
import { zodResolver } from '@hookform/resolvers/zod';
import { Typography } from '@mui/material';
import { Form } from 'react-router-dom';
import FileInput from '../components/file.input';

const StepThreeForm = () => {
  const { control, handleSubmit } = useForm<StepThreeFields>({
    mode: 'onBlur',
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
        🦄 Step Three Files
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput
          name='files'
          control={control}
        />
      </Form>
    </>
  );
};

export default StepThreeForm;
