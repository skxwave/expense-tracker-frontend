import { Box, Grid, Paper, Typography, useTheme } from '@mui/material';
import { ImPaypal, ImCoinDollar, ImCreditCard } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import AccountBox from '@/components/account/AccountBox';
import CustomButton from '@/components/base/Button';

const Accounts = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const accountsData = [
    {
      accountId: 1,
      name: 'PayPal',
      value: '$2,450.50',
      icon: <ImPaypal size={24} />,
    },
    {
      accountId: 2,
      name: 'Savings Account',
      value: '$5,890.00',
      icon: <ImCoinDollar size={24} />,
    },
    {
      accountId: 3,
      name: 'Credit Card',
      value: '$1,200.75',
      icon: <ImCreditCard size={24} />,
    },
    {
      accountId: 4,
      name: 'Checking Account',
      value: '$3,650.25',
      icon: <ImCoinDollar size={24} />,
    },
    {
      accountId: 5,
      name: 'Investment',
      value: '$8,920.00',
      icon: <ImPaypal size={24} />,
    },
    {
      accountId: 6,
      name: 'Cash',
      value: '$500.00',
      icon: <ImCreditCard size={24} />,
    },
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
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 2,
          height: '100%',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Typography variant='h6' ml={1}>
            Your Accounts
          </Typography>
          <CustomButton
            isActive
            onClick={() => navigate('add-account')}
            sx={{
              width: { sm: 'auto' },
              mr: 1, 
            }}
          >
            <Typography>
              Add Account
            </Typography>
          </CustomButton>
        </Box>
      </Paper>
      <Grid 
        container
        spacing={2}
      >
        {accountsData.map((account) => (
          <Grid key={account.accountId} size={{ xs: 12, sm: 6, md: 4 }}>
            <AccountBox
              accountId={account.accountId}
              name={account.name}
              value={account.value}
              icon={account.icon}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Accounts;
