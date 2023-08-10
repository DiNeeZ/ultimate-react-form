import { Controller, Control } from 'react-hook-form';
import { StepThreeFields } from '../models/step.three.model';
import Dropzone from 'react-dropzone';
import { List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { InsertDriveFile } from '@mui/icons-material';

const FileInput = ({
  control,
  name
}: {
  control: Control<StepThreeFields>;
  name: keyof StepThreeFields;
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value: files } }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                variant='outlined'
                {...getRootProps()}>
                <input
                  name={name}
                  onBlur={onBlur}
                  {...getInputProps()}
                />
                <p>Drag 'n' Drop files here, or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {files.map((file: File, index: number) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText
                  primary={file.name}
                  secondary={file.size}
                />
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  );
};

export default FileInput;
