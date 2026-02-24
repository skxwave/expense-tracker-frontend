import { Box, Typography, MenuItem, Grid } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import SelectInput from '../base/SelectInput';
import CustomButton from '../base/Button';
import StyledPaper from '../base/StyledPaper';

const RevenueChart = () => {
  const totalIncomes = 5251
  const totalExpenses = 3142

  const donutData = [
    { id: 0, value: totalIncomes },
    { id: 1, value: totalExpenses },
  ];

  return (
    <StyledPaper padding={3} withBorder customSx={{ borderRadius: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Your money overview
          </Typography>
          <Typography variant="body2">
            Revenue and expenses over the period
          </Typography>
        </Box>
        <SelectInput defaultValue="Last 30 days">
          <MenuItem value="Last 30 days">Last 30 days</MenuItem>
          <MenuItem value="Last 90 days">Last 90 days</MenuItem>
          <MenuItem value="Last 365 days">Last 365 days</MenuItem>
        </SelectInput>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4 }}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <Box sx={{ height: 300, minHeight: { xs: 250, md: 300 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PieChart
              series={[
                {
                  data: donutData,
                  innerRadius: 60,
                  outerRadius: 120,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  cx: 150,
                  cy: 150,
                },
              ]}
              colors={['#818CF8', '#FFB74D']}
              width={300}
              height={300}
              margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
            />
          </Box>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, gap: 2, justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#818CF8',
                  flexShrink: 0,
                }}
              />
              <Typography variant="body2">
                Incomes
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#FFB74D',
                  flexShrink: 0,
                }}
              />
              <Typography variant="body2">
                Expenses
              </Typography>
            </Box>
          </Box>
        </Box>

        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid size={{ lg: 12, xs: 12, md: 4,  sm: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box>
                <Typography variant="body1" fontWeight="bold" mb={1}>
                  Total
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  ${(totalIncomes + totalExpenses).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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
                  backgroundColor: '#818CF8',
                }}
              />
              <Typography variant="body2">
                Total Incomes
              </Typography>
            </Box>
            <Typography variant="h5" fontWeight="bold">
              ${totalIncomes.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Typography>
          </Grid>

          <Grid size={{ lg: 12, xs: 12, md: 4,  sm: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#FFB74D',
                }}
              />
              <Typography variant="body2">
                Total Expenses
              </Typography>
            </Box>
            <Typography variant="h5" fontWeight="bold">
              ${totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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
    </StyledPaper>
  );
};

export default RevenueChart;
