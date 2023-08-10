import Button from '@mui/material/Button';
import type { ReactNode } from 'react';
import type { ButtonProps } from '@mui/material/Button';

interface PrimaryButtonProps extends ButtonProps {
  children: ReactNode;
}

const SubmitButton = ({ children, ...rest }: PrimaryButtonProps) => {
  return (
    <Button
      type='submit'
      variant='contained'
      fullWidth
      {...rest}>
      {children}
    </Button>
  );
};

export default SubmitButton;
