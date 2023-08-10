import Container from '@mui/material/Container';
import type { ReactNode } from 'react';

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      sx={{ mt: 2, flexGrow: 1 }}
      maxWidth='xs'
      component='main'>
      {children}
    </Container>
  );
};

export default MainContainer;
