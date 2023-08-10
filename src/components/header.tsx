import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/material/styles';
import '@fontsource/permanent-marker/400.css';

const titleStyles: SxProps = {
  fontSize: '40px',
  color: 'deeppink',
  textShadow: '1px 1px darkmagenta',
  fontFamily: 'Permanent Marker, cursive'
};

const StyledHeader = styled('header')(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  textAlign: 'center'
}));

const Header = () => {
  return (
    <StyledHeader>
      <Typography
        component='h1'
        sx={titleStyles}>
        The Ultimate React Form
      </Typography>
    </StyledHeader>
  );
};

export default Header;
