import { TextField, useTheme, type TextFieldProps } from '@mui/material';
import { forwardRef } from 'react';

const InputField = forwardRef<HTMLDivElement, TextFieldProps>(
  ({ label, type = 'text', variant = 'outlined', sx, error, helperText, ...props }, ref) => {
    const theme = useTheme();

    return (
      <TextField
        {...props}
        ref={ref}
        label={label}
        type={type}
        variant={variant}
        error={error}
        helperText={helperText}
        fullWidth
        margin="normal"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 3,
            color: theme.palette.text.primary,
            '& fieldset': {
              borderColor: error ? undefined : theme.palette.text.primary,
            },
            '&:hover fieldset': {
              borderColor: error ? undefined : theme.palette.text.primary,
            },
            '&.Mui-focused fieldset': {
              borderColor: error ? undefined : theme.palette.text.primary,
            },
          },
          '& .MuiInputLabel-root': {
            color: error ? undefined : theme.palette.text.primary,
          },
          ...sx,
        }}
      />
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;