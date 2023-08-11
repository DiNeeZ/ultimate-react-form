import { styled } from '@mui/material/styles';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface FormProps extends ComponentPropsWithoutRef<'form'> {
  children: ReactNode;
}

const StyledForm = styled('form')(() => ({ width: '100%' }));

const Form = ({ children, ...rest }: FormProps) => {
  return (
    <StyledForm
      noValidate
      {...rest}>
      {children}
    </StyledForm>
  );
};

export default Form;
