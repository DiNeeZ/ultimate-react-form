import { Controller, Control, FieldErrors } from 'react-hook-form';
import Dropzone from 'react-dropzone';
import { alpha } from '@mui/material/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  SxProps,
  Theme,
  Typography
} from '@mui/material';
import { CloudUpload, InsertDriveFile } from '@mui/icons-material';
import type { StepThreeFields } from '../models/step.three.model';
// import { IMAGE_ERROR_MESSAGES } from '../models/step.three.model';

interface FileInputProps {
  control: Control<StepThreeFields>;
  name: keyof StepThreeFields;
  errors: FieldErrors<StepThreeFields> | undefined;
  isValid: boolean;
}

type MySxProps = SxProps & {
  borderColor: (theme: Theme) => string;
  bgcolor: (theme: Theme) => string;
};

const stylesPaper: MySxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  borderWidth: 3,
  borderColor: (theme: Theme) => alpha(theme.palette.primary.dark, 0.8),
  borderStyle: 'dashed',
  borderRadius: 3,
  bgcolor: (theme: Theme) => alpha(theme.palette.primary.dark, 0.12),
  overflow: 'hidden',
  py: 3,
  cursor: 'pointer'
};

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toLocaleUpperCase() + string.slice(1);
const bytesToMegabytes = (bytes: number) => `${(bytes / 1048576).toFixed(2)} MB`;
const sliceImageType = (imageType: string) =>
  `Type: ${capitalizeFirstLetter(imageType.slice(imageType.indexOf('/') + 1))}`;

const renderFiles = (file: File, index: number, isValid: boolean) => (
  <ListItem key={index}>
    <ListItemIcon>
      <InsertDriveFile />
    </ListItemIcon>
    <ListItemText
      primary={file.name}
      secondary={`${bytesToMegabytes(file.size)} ${sliceImageType(file.type)}`}
      secondaryTypographyProps={{ color: `${!isValid ? 'red' : 'inherit'}` }}
    />
  </ListItem>
);

const FileInput = (props: FileInputProps) => {
  const { control, name, errors, isValid } = props;
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
                sx={stylesPaper}
                elevation={0}
                {...getRootProps()}>
                <CloudUpload />
                <input
                  name={name}
                  onBlur={onBlur}
                  {...getInputProps()}
                />
                <Typography align='center'>
                  Drag 'n' Drop files here, or click to select files
                </Typography>
              </Paper>
            )}
          </Dropzone>
          {!!errors?.image && (
            <Typography
              color={'red'}
              sx={{ mt: 3 }}>
              {errors.image.message as string}
            </Typography>
          )}
          <List>{files.map((file: File, index: number) => renderFiles(file, index, isValid))}</List>
        </>
      )}
    />
  );
};

export default FileInput;
