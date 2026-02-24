import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormValues } from '@/schemas/auth.schema';
import InputField from '@/components/base/InputField';
import CustomButton from '@/components/base/Button';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { login } from '@/redux/slices/authSlice';
import { register as registerApi } from '@/api/auth';
import { useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';
import { Box, Typography, useTheme } from '@mui/material';
import { useState } from 'react';

const RegisterForm = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>(null);
  const { loading } = useAppSelector(state => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

const onSubmit = async (data: RegisterFormValues) => {
    try {
      await registerApi(data);
      await dispatch(login({ username: data.username, password: data.password })).unwrap();
      navigate('/');
    } catch (err: unknown) {
      if (isAxiosError(err)) {
        const serverMsg = err.response?.data?.message;
        setError(serverMsg || 'Registration failed. Please try again.');
        return;
      }
      console.error("Registration flow error:", err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputField 
          label="First Name"
          {...register('first_name')}
          error={!!errors.first_name}
          helperText={errors.first_name?.message}
          sx={{ mb: 2 }}
        />
        <InputField 
          label="Last Name"
          {...register('last_name')}
          error={!!errors.last_name}
          helperText={errors.last_name?.message}
          sx={{ mb: 2 }}
        />
        <InputField 
          label="Email"
          {...register('email')}
          error={!!errors.email}
          sx={{ mb: 2 }}
        />
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
          {loading ? 'Signing Up...' : 'Sign Up'}
        </CustomButton>
      </form>

      {error && (
        <Box textAlign="center">
          <Typography color={theme.palette.error.main} variant="body2" mb={2}>
            {error}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default RegisterForm;
