import type { ReactNode } from 'react';
import { SxProps } from '@mui/system';
import Container from '@mui/material/Container';

const styles: SxProps = {
  mt: 2,
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 5
};

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      sx={styles}
      maxWidth='xs'
      component='main'>
      {children}
    </Container>
  );
};

export default MainContainer;
