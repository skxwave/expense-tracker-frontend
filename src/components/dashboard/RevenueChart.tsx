import { Box, Paper, Typography, MenuItem, useTheme, Grid } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import SelectInput from '../base/SelectInput';
import CustomButton from '../base/Button';

const RevenueChart = () => {
  const theme = useTheme();

  const dataset = [
    [354, 520, '1st'],
    [0, 512, '2nd'],
    [252, 225, '3rd'],
    [522, 402, '4th'],
    [0, 242, '5th'],
    [0, 1020, '6th'],
    [0, 300, '7th'],
  ].map(([incomes, expenses, order]) => ({
    incomes,
    expenses,
    order,
  }));

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Your money overview
          </Typography>
          <Typography variant="body2">
            Revenue and expenses over the period
          </Typography>
        </Box>
        <SelectInput defaultValue="March 2025">
          <MenuItem value="March 2025">March 2025</MenuItem>
          <MenuItem value="February 2025">February 2025</MenuItem>
          <MenuItem value="January 2025">January 2025</MenuItem>
        </SelectInput>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4 }}>
        <Box sx={{ width: '100%', height: 300, minHeight: { xs: 250, md: 300 }}}>
          <BarChart
            series={[
              { dataKey: 'incomes', label: 'Incomes', layout: 'vertical', stack: 'stack' },
              { dataKey: 'expenses', label: 'Expenses', layout: 'vertical', stack: 'stack' },
            ]}
            dataset={dataset}
            margin={{ left: 0 }}
            borderRadius={10}
            colors={['#818CF8', '#FFB74D']}
          />
        </Box>

        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid size={{ lg: 12, xs: 12, md: 4,  sm: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  $63,489.50
                </Typography>
                <Typography variant="body2">
                  Total Earnings
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ lg: 12,xs: 12, md: 4,  sm: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#6C8EF2',
                }}
              />
              <Typography variant="body2">
                Earnings this month
              </Typography>
            </Box>
            <Typography variant="h5" fontWeight="bold">
              $48,820
            </Typography>
          </Grid>

          <Grid size={{ lg: 12, xs: 12, md: 4,  sm: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#4A5F7F',
                }}
              />
              <Typography variant="body2">
                Expense this month
              </Typography>
            </Box>
            <Typography variant="h5" fontWeight="bold">
              $26,498
            </Typography>
          </Grid>

          <Grid size={{ lg: 12, xs: 12, md: 12, sm: 12 }}>
            <CustomButton isCentral isActive>
              <Typography>
                View Full Report
              </Typography>
            </CustomButton>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default RevenueChart;
