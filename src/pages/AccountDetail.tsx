import { Box, Typography, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import CardUI from '@/components/account/CardUI';
import { type AccountData } from '@/types/account';
import StyledPaper from '@/components/base/StyledPaper';
// import CustomButton from '@/components/base/Button';
import RecentTransactions from '@/components/dashboard/RecentTransactionsTab';

const AccountDetail = () => {
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
          <Grid>
            <CardUI accountData={accountData} />
          </Grid>
          <Grid>
            <RecentTransactions />

            {/* <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >

              <Box display='flex' gap={2}>
                <CustomButton isActive isCentral sx={{ p: 1 }}>
                  <Typography>Edit</Typography>
                </CustomButton>
                <CustomButton
                  isActive
                  isCentral
                  sx={{
                    p: 1,
                    backgroundColor: theme.palette.error.main,
                    '&:hover': {
                      backgroundColor: theme.palette.error.light,
                    }
                  }}>
                  <Typography>Delete</Typography>
                </CustomButton>
              </Box>
            </Paper> */}
          </Grid>
        </Grid>

        {/* Account Information */}
        <Grid size={{ xs: 12, sm: 12, md: 8 }}>
          <StyledPaper
            padding={3}
            marginBottom={2}
            fullHeight
            withOverflow
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Account Type
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {accountData.accountType}
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Description
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              {accountData.description}
            </Typography>

            <Typography>Here will be transactions and other data</Typography>
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountDetail;
