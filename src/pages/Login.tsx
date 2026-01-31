import {
  Box,
  Paper,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  Link,
  Stack,
  useTheme,
} from '@mui/material';
import CustomButton from '@/components/base/Button';
import InputField from '@/components/base/InputField';
import ThemeSwitcher from "@/components/base/ThemeSwitcher";
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa";
import { login } from '@/redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { register } from '@/api/auth';

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(state => state.auth);
  const [isRegister, setIsRegister] = useState(false);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(await login({ username, password }))
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register({
        first_name,
        last_name,
        username,
        email,
        password,
      });
      navigate('/');
    } catch (err) {
      console.error("Registration failed:", err);
      return;
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.background.default,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          maxWidth: 420,
          minHeight: 600,
          borderRadius: 3,
          border: `1px solid ${theme.palette.divider}`,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='flex-start'
          mb={3}
        >
          <Box>
            <Typography variant="h5" fontWeight="bold" mb={1}>
              {isRegister ? 'Register' : 'Sign In'}
            </Typography>
            <Typography variant="body2">
              {isRegister ? 'Create your account' : 'Your Dashboard'}
            </Typography>
          </Box>

          <ThemeSwitcher sx={{ p: 0 }}/>
        </Box>

        <Stack direction="row" spacing={2} mb={2}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<FcGoogle size={28} />}
            sx={{ textTransform: 'none', fontWeight: 500 }}
          >
            Sign {isRegister ? 'up' : 'in'} with Google
          </Button>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<FaGithub size={28} />}
            sx={{ textTransform: 'none', fontWeight: 500 }}
          >
            Sign {isRegister ? 'up' : 'in'} with GitHub
          </Button>
        </Stack>

        <Divider sx={{ my: 2 }}>or {isRegister ? 'sign up' : 'sign in'} with</Divider>

        <form onSubmit={isRegister ? handleRegister : handleLogin}>
          {isRegister && (
            <>
              <InputField
                label="First Name"
                type="text"
                autoComplete="first-name"
                variant="outlined"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputField
                label="Last Name"
                type="text"
                autoComplete="last-name"
                variant="outlined"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
              <InputField
                label="Email"
                type="text"
                autoComplete="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          )}
          <InputField
            label="Username"
            type="text"
            autoComplete="username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            variant="outlined"
            autoComplete={isRegister ? 'new-password' : 'current-password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              mb: isRegister ? 3 : 0,
            }}
          />

          {!isRegister && (
            <Box display="flex" alignItems="center" justifyContent="space-between" mt={1} mb={2}>
              <FormControlLabel
                control={<Checkbox defaultChecked size="small" />}
                label={<Typography variant="body2">Remember this Device</Typography>}
                sx={{ m: 0 }}
              />
              <Link href="#" variant="body2" color="primary" underline="hover">
                Forgot Password?
              </Link>
            </Box>
          )}

          <CustomButton
            isCentral
            isActive
            sx={{ mb: 2 }}
            type="submit"
          >
            <Typography>
              {isRegister ? (loading ? 'Signing Up...' : 'Sign Up') : (loading ? 'Signing In...' : 'Sign In')}
            </Typography>
          </CustomButton>
        </form>

        {error && (
          <Box textAlign="center">
            <Typography color={theme.palette.error.main} variant="body2" mb={2}>
              {error}
            </Typography>
          </Box>
        )}

        <Box textAlign="center">
          {isRegister ? (
            <Typography>
              Already have an account?{' '}
              <Link
                component="button"
                onClick={() => setIsRegister(false)}
              >
                Sign in
              </Link>
            </Typography>
          ) : (
            <Typography>
              New?{' '}
              <Link
                component="button"
                onClick={() => setIsRegister(true)}
              >
                Create an account
              </Link>
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
