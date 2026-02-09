import { Box, Paper, Typography, useTheme } from '@mui/material';
import { ImPaypal } from "react-icons/im";

const AccountBox = () => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '100%',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        transition: 'transform 0.2s',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
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
          <ImPaypal size={24} />
        </Box>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Account
        </Typography>
      </Box>
      <Typography 
        variant="h5" 
        fontWeight="bold"
        sx={{
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        Value
      </Typography>
    </Paper>
  );
};

export default AccountBox;
