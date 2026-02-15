import { Box, Paper, Typography, useTheme, Divider } from '@mui/material';
import { type ReactNode } from 'react';
import CustomButton from '../base/Button';
import { useNavigate } from 'react-router-dom';

interface AccountBoxProps {
  accountId: number;
  name: string;
  value: string | number;
  icon: ReactNode;
  transactions?: string[];
}

const AccountBox = ({ accountId, name, value, icon }: AccountBoxProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '100%',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        mb={2}
      >
        <Box sx={{
          mr: 2,
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.primary.light,
          p: 1,
          borderRadius: 2,
          '& svg': { display: 'block' }
        }}>
          {icon}
        </Box>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />


      <Box
        display="flex"
        gap={2}
        justifyContent="space-between"
        mt={2}
      >
        <Typography 
          variant="h5"
          fontWeight="bold"
          sx={{
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {value}
        </Typography>
        <CustomButton
          isActive
          isCentral
          onClick={() => {navigate(`${accountId}`)}}
          sx={{
            py: 1,
            width: { xs: '100%', sm: 'auto' },
          }}>
          <Typography>
            View
          </Typography>
        </CustomButton>
      </Box>
    </Paper>
  );
};

export default AccountBox;
