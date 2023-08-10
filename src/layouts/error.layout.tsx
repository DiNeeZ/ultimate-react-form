import { SxProps } from '@mui/material';
import Container from '@mui/material/Container';
import { ReactNode } from 'react';

const styles: SxProps = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const ErrorLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      component='main'
      sx={styles}>
      {children}
    </Container>
  );
};

export default ErrorLayout;
