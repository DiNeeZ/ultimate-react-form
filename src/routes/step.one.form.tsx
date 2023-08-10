import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

import { Form, Input, SubmitButton } from '../components';
import { type StepOneFields, StepOneFieldsSchema } from '../models/step.one.model';

const StepOneForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<StepOneFields>({
    mode: 'onBlur',
    resolver: zodResolver(StepOneFieldsSchema)
  });

  const onSubmit: SubmitHandler<StepOneFields> = (data) => {
    console.log(data);
    navigate('/step-two');
  };

  return (
    <>
      <Typography
        textAlign='center'
        component='h2'
        variant='h5'>
        🦄 Step One
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Inputs */}

        <Box sx={{ mb: 4 }}>
          {/* First Name */}
          <Input
            id='firstName'
            type='text'
            label='First Name'
            error={!!errors.firstName}
            helperText={errors?.firstName?.message}
            {...register('firstName')}
          />
          {/* Last Name */}
          <Input
            id='lastName'
            type='text'
            label='Last Name'
            error={!!errors.lastName}
            helperText={errors?.lastName?.message}
            {...register('lastName')}
          />
        </Box>

        {/* Submit and go to next step */}
        <SubmitButton>Next</SubmitButton>
      </Form>
    </>
  );
};

export default StepOneForm;
