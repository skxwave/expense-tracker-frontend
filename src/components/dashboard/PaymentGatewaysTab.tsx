import {
  Box,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { ImPaypal } from "react-icons/im";
import { TbBrandStripeFilled } from "react-icons/tb";
import CustomButton from '../base/Button';

const PaymentGateways = () => {
  const theme = useTheme();
  const accountsData = [
    { title: 'PayPal', icon: <ImPaypal size={24} />, description: 'Online payments', value: '+$5,200',},
    { title: 'Stripe', icon: <TbBrandStripeFilled size={24} />, description: 'Credit card processing', value: '+$3,450',},
    { title: 'Square', icon: <ImPaypal size={24} />, description: 'Point of sale', value: '+$1,800',},
    { title: 'Monobank', icon: <ImPaypal size={24} />, description: 'Payment gateway', value: '+$2,300',},
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
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Payment Gateways
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Incomes and expenses on accounts
          </Typography>

          {accountsData.map((stat) => (
            <Box key={stat.title} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box sx={{
                mr: 2,
                color: theme.palette.text.secondary,
                backgroundColor: theme.palette.primary.light,
                p: 1,
                borderRadius: 2,
                '& svg': { display: 'block' }
              }}>
                {stat.icon}
              </Box>

              <Box sx={{ mb: 1 }}>
                <Typography variant="body2" gutterBottom>
                  {stat.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  fontWeight="bold"
                >
                  {stat.description}
                </Typography>
              </Box>

              <Box justifyContent='flex-end' sx={{ flexGrow: 1, textAlign: 'right' }}>
                <Typography 
                  variant="body2" 
                  fontWeight="bold"
                >
                  {stat.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <CustomButton isCentral isActive sx={{ mt: 1, p: 1, alignSelf: 'stretch' }}>
          View All
        </CustomButton>
      </Paper>
    );
};

export default PaymentGateways;
