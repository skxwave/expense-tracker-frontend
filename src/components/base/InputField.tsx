import { TextField, useTheme } from '@mui/material';

const InputField = ({
  label,
  type = 'text',
  autoComplete,
  variant = 'outlined',
  sx,
}: {
  label: string;
  type?: 'text' | 'password' | 'email';
  autoComplete?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  sx?: object;
}) => {
  const theme = useTheme();

  return (
    <TextField
      label={label}
      type={type}
      variant={variant}
      fullWidth
      margin="normal"
      autoComplete={autoComplete}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 3,
          color: theme.palette.text.primary,
          '& fieldset': {
            borderColor: theme.palette.text.primary,
          },
          '&:hover fieldset': {
            borderColor: theme.palette.text.primary,
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.text.primary,
          },
        },
        '& .MuiInputLabel-root': {
          color: theme.palette.text.primary,
        },
        ...sx,
      }}
    />
  )
}

export default InputField;
