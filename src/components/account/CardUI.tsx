import { Paper, Box, Typography } from '@mui/material';
import { ImPaypal } from 'react-icons/im';
import { type AccountData } from '@/types/account';

const CardUI: React.FC<{ accountData: AccountData }> = ({ accountData }) => {
  return (
    // Account Card
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 2,
        height: '280px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: 'white',
        boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
      }}
    >
      {/* Header with Logo */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {/* Card Brand Logo */}
        <Box sx={{ textAlign: 'right' }}>
          <ImPaypal size={40} />
        </Box>
      </Box>

      {/* Current Balance Section */}
      <Box>
        <Typography
          variant="caption"
          color='text.secondary'
          sx={{
            opacity: 0.8,
            fontSize: '0.85rem',
            letterSpacing: '0.05em',
          }}
        >
          Current Balance
        </Typography>
        <Typography
          color='text.secondary'
          sx={{
            fontSize: '2.2rem',
            fontWeight: '700',
            letterSpacing: '-0.02em',
            marginTop: 0.5,
          }}
        >
          {accountData.value}
        </Typography>
      </Box>

      {/* Card Number and Dates */}
      <Box>
        {/* Card Number */}
        <Typography
          color='text.secondary'
          sx={{
            letterSpacing: '0.1em',
            fontWeight: '500',
            marginBottom: 2,
          }}
        >
          {accountData.accountNumber}
        </Typography>

        {/* Card Holder Name and Expiration */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <Box>
            <Typography variant="caption" color='text.secondary' sx={{ opacity: 0.7, fontSize: '0.7rem' }}>
              {accountData.accountHolderName}
            </Typography>
            <Typography variant="subtitle2" color='text.secondary' sx={{ fontWeight: '600' }}>
              {accountData.name}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="caption" color='text.secondary' sx={{ opacity: 0.7, fontSize: '0.7rem', display: 'block' }}>
              EXP. DATE
            </Typography>
            <Typography
              variant="subtitle2"
              color='text.secondary'
              sx={{ letterSpacing: '0.05em', fontWeight: '600', fontSize: '1rem' }}
            >
              12/26
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default CardUI;
