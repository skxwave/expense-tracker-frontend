import { Divider, Paper, Typography, useTheme, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface TransactionDetailsProps {
  onClose?: () => void;
}

const TransactionDetails = ({ onClose }: TransactionDetailsProps) => {
  const theme = useTheme();

  const details = [
    { label: 'Category', value: 'Grocery' },
    { label: 'Amount', value: '$20.00' },
    { label: 'Date', value: 'Feb 19, 2026' },
    { label: 'Account', value: 'Savings Account' },
    { label: 'Description', value: 'Weekly grocery shopping' },
    { label: 'Balance After', value: '$480.00' },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        height: '100%',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography justifySelf='center'>Transaction Details</Typography>
        {onClose && (
          <IconButton size='small' onClick={onClose}>
            <CloseIcon fontSize='small' sx={{ color: 'text.primary' }}/>
          </IconButton>
        )}
      </Box>
      <Divider variant='middle' sx={{ mb: 2 }} />

      <Box>
        {details.map((detail, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant='caption' fontWeight='bold'>
              {detail.label}
            </Typography>
            <Typography variant='body2' sx={{ mt: 0.5 }}>
              {detail.value}
            </Typography>
            {index !== details.length - 1 && <Divider sx={{ mt: 2 }} />}
          </Box>
        ))}
      </Box>
    </Paper>
  )
};

export default TransactionDetails;
