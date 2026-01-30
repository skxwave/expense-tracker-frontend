import {
  Box,
  Grid,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import CustomButton from './Button';

const RecentTransactions = () => {
  const theme = useTheme();
  const transactionsData = [
    {
      time: '09:30 am',
      color: '#3f51b5',
      title: 'Payment received from John Doe of $385.90',
    },
    {
      time: '10:00 am',
      color: '#1976d2',
      title: 'New sale recorded',
    },
    {
      time: '12:00 am',
      color: '#43a047',
      title: 'Payment was made of $64.95 to Michael',
    },
    {
      time: '09:30 am',
      color: '#ffb300',
      title: 'New sale recorded',
    },
    {
      time: '09:30 am',
      color: '#d32f2f',
      title: 'New arrival recorded',
    },
    {
      time: '09:30 am',
      color: '#3f51b5',
      title: 'Payment received from John Doe of $385.90',
    },
    {
      time: '10:00 am',
      color: '#1976d2',
      title: 'New sale recorded',
    },
    {
      time: '12:00 am',
      color: '#43a047',
      title: 'Payment was made of $64.95 to Michael',
    },
    {
      time: '09:30 am',
      color: '#ffb300',
      title: 'New sale recorded',
    },
    {
      time: '09:30 am',
      color: '#d32f2f',
      title: 'New arrival recorded',
    },
  ];

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
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Recent Transactions
      </Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>
        Latest activities on your account
      </Typography>

      <Box
        sx={{
          maxHeight: 250,
          overflowY: 'auto',
          pr: 1,
          '&::-webkit-scrollbar': {
            width: '8px',
            backgroundColor: theme.palette.background.paper,
            borderRadius: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: '8px',
          },
        }}>
        {transactionsData.map((stat, idx) => (
          <Grid
            container
            key={stat.time + stat.title + idx}
            sx={{
              mb: 2,
            }}
          >
            {/* Time */}
            <Grid size={{ lg: 4, md: 4, xs: 4 }} sx={{ color: theme.palette.text.primary }}>
              {stat.time}
            </Grid>

            {/* Dot */}
            <Grid size={{ lg: 2, md: 2, xs: 2 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: stat.color,
                  mt: '4px',
                  mr: 2,
                  zIndex: 2,
                }}
              />
            </Grid>

            {/* Content */}
            <Grid size={{ lg: 6, md: 6, xs: 6 }}>
              <Typography
                variant="body2"
                gutterBottom
              >
                {stat.title}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
      
      <CustomButton isCentral isActive sx={{ mt: 1, p: 1 }}>
        View All
      </CustomButton>
    </Paper>
  );
};

export default RecentTransactions;
