import { Box, Grid } from '@mui/material';
import AccountBox from '@/components/account/AccountBox';

const Accounts = () => {
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
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <AccountBox />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <AccountBox />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <AccountBox />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Accounts;
