import {
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  Link,
  Stack,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa";

import ThemeSwitcher from "@/components/base/ThemeSwitcher";

import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';

const AuthForm = () => {
  const theme = useTheme();
  const [isRegister, setIsRegister] = useState(false);

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
            Sign {isRegister ? 'up' : 'in'}
          </Button>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<FaGithub size={28} />}
            sx={{ textTransform: 'none', fontWeight: 500 }}
          >
            Sign {isRegister ? 'up' : 'in'}
          </Button>
        </Stack>

        <Divider sx={{ my: 2 }}>or {isRegister ? 'sign up' : 'sign in'} with</Divider>

        {isRegister ? <RegisterForm /> : <LoginForm />}

        <Box textAlign="center">
          <Typography>
            {isRegister ? "Already have an account? " : "New? "}
            <Link
              component="button"
              variant="body2"
              fontWeight="bold"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? 'Sign in' : 'Create an account'}
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default AuthForm;