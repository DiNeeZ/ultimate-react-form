import Typography from '@mui/material/Typography';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Typography
        variant='h1'
        component='h1'
        gutterBottom>
        Oops!
      </Typography>
      <Typography paragraph>Sorry, an unexpected error has occurred.</Typography>
      <Typography paragraph>
        <i>
          {(error as Error)?.message ||
            `${(error as { status?: number })?.status} ${
              (error as { statusText?: string })?.statusText
            }`}
        </i>
      </Typography>
    </>
  );
}
