import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormValues } from '@/schemas/auth.schema';
import InputField from '@/components/base/InputField';
import CustomButton from '@/components/base/Button';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { login } from '@/redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';

const LoginForm = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error: serverError } = useAppSelector(state => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    dispatch(login(data))
    .unwrap()
    .then(() => navigate("/"))
    .catch(err => {
      console.error("Login failed:", err);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputField 
          label="Username"
          {...register('username')}
          error={!!errors.username}
          helperText={errors.username?.message}
          sx={{ mb: 2 }}
        />
        <InputField 
          label="Password"
          type="password"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{ mb: 3 }}
        />
        <CustomButton type="submit" disabled={loading} isCentral isActive sx={{ mb: 2 }}>
          {loading ? 'Signing In...' : 'Sign In'}
        </CustomButton>
      </form>

      {serverError && (
        <Box textAlign="center">
          <Typography color={theme.palette.error.main} variant="body2" mb={2}>
            {serverError}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default LoginForm;
