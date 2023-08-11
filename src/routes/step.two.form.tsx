import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form, Input, SubmitButton } from '../components';
import { type StepTwoFields, StepTwoFieldsSchema } from '../models/step.two.model';
import parsePhoneNumberFromString from 'libphonenumber-js';

const nolmalizePhoneNumber = (value: string) => {
  const phoneNumber = parsePhoneNumberFromString(value);

  if (!phoneNumber) return value;

  console.log(phoneNumber);

  return phoneNumber.formatInternational();
};

const StepTwoForm = () => {
  const navigete = useNavigate();

  const {
    register,
    unregister,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<StepTwoFields>({
    mode: 'onBlur',
    resolver: zodResolver(StepTwoFieldsSchema)
  });

  const hasPhone = watch('hasPhone');

  const onSubmit: SubmitHandler<StepTwoFields> = (data) => {
    console.log(data);
    navigete('/step-three');
  };

  useEffect(() => {
    if (!hasPhone) {
      unregister('phoneNumber');
    }
  }, [hasPhone, unregister]);

  return (
    <>
      <Typography
        textAlign='center'
        component='h2'
        variant='h5'>
        🦄 Second Step
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Inputs */}

        <Box sx={{ mb: 4 }}>
          {/* Email */}
          <Input
            id='email'
            type='email'
            label='E-mail'
            error={!!errors.email}
            helperText={errors?.email?.message}
            {...register('email')}
          />

          {/* Check is phone */}
          <FormControlLabel
            control={
              <Checkbox
                id='hasPhone'
                {...register('hasPhone')}
              />
            }
            label='Do you have a phone'
          />

          {/* Phone number */}
          {hasPhone && (
            <Input
              id='phoneNumber'
              type='tel'
              label='Phone Number'
              error={!!errors.phoneNumber}
              helperText={errors?.phoneNumber?.message}
              {...register('phoneNumber')}
              onChange={(e) => (e.target.value = nolmalizePhoneNumber(e.target.value))}
            />
          )}
        </Box>

        {/* Submit and go to next step */}
        <SubmitButton isValid={isValid}>Next</SubmitButton>
      </Form>
    </>
  );
};

export default StepTwoForm;
