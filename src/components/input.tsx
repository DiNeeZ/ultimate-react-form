import { forwardRef } from 'react';
import TextField from '@mui/material/TextField';

import type { TextFieldProps } from '@mui/material/TextField';

const Input = forwardRef((props: TextFieldProps, ref) => {
  return (
    <TextField
      variant='outlined'
      margin='normal'
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});

export default Input;
