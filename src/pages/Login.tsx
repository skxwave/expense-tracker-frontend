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

const Login = () => {
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

        {isRegister && (
          <InputField
            label="Username"
            autoComplete="username"
            variant="outlined"
          />
        )}
        <InputField
          label="Email"
          type="email"
          autoComplete="email"
          variant="outlined"
        />
        <InputField
          label="Password"
          type="password"
          variant="outlined"
          autoComplete={isRegister ? 'new-password' : 'current-password'}
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
        >
          <Typography>
            {isRegister ? 'Sign Up' : 'Sign In'}
          </Typography>
        </CustomButton>

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
