import { styled } from '@mui/material/styles';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface IForm extends ComponentPropsWithoutRef<'form'> {
  children: ReactNode;
}

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2)
}));

const Form = ({ children, ...rest }: IForm) => {
  return (
    <StyledForm
      noValidate
      {...rest}>
      {children}
    </StyledForm>
  );
};

export default Form;
