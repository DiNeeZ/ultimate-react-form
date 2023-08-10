import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

import Header from '../components/header';
import MainContainer from '../components/main.container';

const PageLayout = () => {
  return (
    <Box
      height={'100%'}
      display='flex'
      flexDirection='column'>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>

      <footer>Footer</footer>
    </Box>
  );
};

export default PageLayout;
