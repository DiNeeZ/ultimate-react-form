import Button from '@mui/material/Button';
import type { ReactNode } from 'react';
import type { ButtonProps } from '@mui/material/Button';

interface PrimaryButtonProps extends ButtonProps {
  children: ReactNode;
  isValid: boolean;
}

const SubmitButton = ({ children, isValid, ...rest }: PrimaryButtonProps) => {
  return (
    <Button
      disabled={!isValid}
      type='submit'
      variant='contained'
      fullWidth
      sx={{ mt: 2 }}
      {...rest}>
      {children}
    </Button>
  );
};

export default SubmitButton;
