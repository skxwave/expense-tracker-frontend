import { useEffect, useState } from 'react';
import { Box, Grid, Paper, Typography, useTheme } from '@mui/material';
import RevenueChart from '@/components/dashboard/RevenueChart';
import PaymentGateways from '@/components/dashboard/PaymentGatewaysTab';
import RecentTransactions from '@/components/dashboard/RecentTransactionsTab';
import GoalsTab from '@/components/dashboard/GoalsTab';
import { dashboard } from '@/api/transactions';
import type { TransactionSummary } from '@/types/transactions';

const formatCurrency = (value: number) =>
  `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const Dashboard = () => {
  const theme = useTheme();
  const [summary, setSummary] = useState<TransactionSummary | null>(null);

  useEffect(() => {
    dashboard().then(setSummary).catch(console.error);
  }, []);

  const statsData = [
    { title: 'Total Balance', value: summary ? formatCurrency(summary.total_balance) : '—' },
    { title: 'Income', value: summary ? formatCurrency(summary.total_incomes) : '—' },
    { title: 'Expenses', value: summary ? formatCurrency(summary.total_expenses) : '—' },
    { title: 'Savings', value: '-' },
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
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.title} sx={{ order: { xs: 2, lg: 1 } }}>
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
              <Typography variant="body2" gutterBottom>
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
        <Grid size={{ xs: 12 }} sx={{ order: { xs: 1, lg: 2 } }}>
          <RevenueChart />
        </Grid>

        <Grid
          container
          spacing={2}
          size={{ xs: 12 }}
          sx={{ order: 3 }}
        >
          {/* Payment Gateways */}
          <Grid size={{ xs: 12, sm: 12, lg: 4 }}>
            <PaymentGateways />
          </Grid>

          {/* Recent Transactions */}
          <Grid size={{ xs: 12, sm: 12, lg: 4 }}>
            <RecentTransactions />
          </Grid>

          <Grid size={{ xs: 12, sm: 12, lg: 4 }}>
            <GoalsTab />
          </Grid>

        </Grid>
      </Grid>
    </Box>
  )
};

export default Dashboard;