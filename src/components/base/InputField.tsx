import { TextField, useTheme } from '@mui/material';

const InputField = ({
  label,
  value,
  type = 'text',
  autoComplete,
  variant = 'outlined',
  sx,
  onChange,
}: {
  label: string;
  value?: string;
  type?: 'text' | 'password' | 'email';
  autoComplete?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  sx?: object;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
      value={value}
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
      onChange={onChange}
    />
  )
}

export default InputField;
