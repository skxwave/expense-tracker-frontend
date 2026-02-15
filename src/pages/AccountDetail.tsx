import { Box, Paper, Typography, Grid, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import CardUI from '@/components/account/CardUI';
import { type AccountData } from '@/types/account';

const AccountDetail = () => {
  const theme = useTheme();
  const { id } = useParams();

  const accountData: AccountData = {
    accountId: Number(id),
    name: 'PayPal',
    value: '$2,450.50',
    accountNumber: '**** **** **** 1234',
    accountType: 'Digital Wallet',
    accountHolderName: 'John Doe',
    description: 'This is your PayPal account used for online transactions.',
  };

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
        <Grid size={{ xs: 12, sm: 12, md: 4 }}>
          <CardUI accountData={accountData} />
        </Grid>

        {/* Account Information */}
        <Grid size={{ xs: 12, sm: 12, md: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 2,
              height: '100%',
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}>
              Account Type
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {accountData.accountType}
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}>
              Description
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              {accountData.description}
            </Typography>

            <Typography>Here will be transactions and other data</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountDetail;
