import { Box, Grid, Paper, Typography, useTheme } from '@mui/material';
import RevenueChart from '@/components/RevenueChart';

const Dashboard = () => {
  const theme = useTheme();
  const statsData = [
    { title: 'Total Balance', value: '$123,123,345', color: '#4caf50' },
    { title: 'Income', value: '$8,500', color: '#2196f3' },
    { title: 'Expenses', value: '$3,245', color: '#f44336' },
    { title: 'Savings', value: '$9,100', color: '#ff9800' },
  ];

  return (
    <Box 
      sx={{
        pt: 3,
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      <Grid 
        container
        spacing={2}
      >
        {statsData.map((stat) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.title}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                borderLeft: `4px solid ${stat.color}`,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                transition: 'transform 0.2s',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {stat.title}
              </Typography>
              <Typography 
                variant="h5" 
                fontWeight="bold"
                sx={{
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                {stat.value}
              </Typography>
            </Paper>
          </Grid>
        ))}

        {/* Revenue Chart */}
        <Grid size={{ xs: 12 }}>
          <RevenueChart />
        </Grid>
      </Grid>
    </Box>
  )
};

export default Dashboard;