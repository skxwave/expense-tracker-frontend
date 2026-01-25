import { Box, Paper, Typography, MenuItem, Select, useTheme } from '@mui/material';
import Chart from 'react-apexcharts';
import { type ApexOptions } from 'apexcharts';

const RevenueChart = () => {
  const theme = useTheme();
  
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 300,
      toolbar: {
        show: false,
      },
      background: 'transparent',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    xaxis: {
      categories: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08', '22/08'],
      labels: {
        style: {
          colors: '#8B98B0',
          fontSize: '12px',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#8B98B0',
          fontSize: '12px',
        },
      },
      tickAmount: 4,
    },
    grid: {
      borderColor: '#3A4557',
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    legend: {
      show: false,
    },
    colors: ['#6C8EF2', '#4A5F7F'],
    tooltip: {
      theme: 'dark',
    },
  };

  const chartSeries = [
    {
      name: 'Profit',
      data: [2.0, 3.0, 2.5, 4.2, 2.8, 3.2, 0],
    },
    {
      name: 'Loss',
      data: [-1.5, -1.8, -2.5, -1.2, -1.8, -1.5, 0],
    },
  ];

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
            Revenue Updates
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Overview of Profit
          </Typography>
        </Box>
        <Select
          defaultValue="March 2025"
          size="small"
          sx={{
            minWidth: 150,
            backgroundColor: '#2C3E50',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#4A5F7F',
            },
          }}
        >
          <MenuItem value="March 2025">March 2025</MenuItem>
          <MenuItem value="February 2025">February 2025</MenuItem>
          <MenuItem value="January 2025">January 2025</MenuItem>
        </Select>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4 }}>
        <Box sx={{ flex: 1, height: 300, minHeight: { xs: 250, md: 300 } }}>
          <Chart options={chartOptions} series={chartSeries} type="bar" height="100%" />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: { xs: 'auto', lg: 200 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 1,
                backgroundColor: '#6C8EF2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                }}
              />
            </Box>
            <Box>
              <Typography variant="h4" fontWeight="bold">
                $63,489.50
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Earnings
              </Typography>
            </Box>
          </Box>

          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#6C8EF2',
                }}
              />
              <Typography variant="body2" color="text.secondary">
                Earnings this month
              </Typography>
            </Box>
            <Typography variant="h5" fontWeight="bold">
              $48,820
            </Typography>
          </Box>

          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#4A5F7F',
                }}
              />
              <Typography variant="body2" color="text.secondary">
                Expense this month
              </Typography>
            </Box>
            <Typography variant="h5" fontWeight="bold">
              $26,498
            </Typography>
          </Box>

          <Box
            component="button"
            sx={{
              mt: 2,
              py: 1.5,
              px: 3,
              backgroundColor: '#6C8EF2',
              color: '#fff',
              border: 'none',
              borderRadius: 2,
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              '&:hover': {
                backgroundColor: '#5A7DE0',
              },
            }}
          >
            View Full Report
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default RevenueChart;
