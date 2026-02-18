import { useState } from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from '@/components/base/Button';

const Transactions = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All Transactions');

  const transactionTypes = ['All Transactions', 'Expenses', 'Incomes', 'Transfers'];

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
            Your Transactions
          </Typography>
          <CustomButton
            isActive
            onClick={() => navigate('add-goal')}
            sx={{
              width: { sm: 'auto' },
              mr: 1, 
            }}
          >
            <Typography>
              Add Transaction
            </Typography>
          </CustomButton>
        </Box>
      </Paper>

      <Box
        sx={{
          display: 'flex',
          gap: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {transactionTypes.map((type) => (
          <CustomButton
            key={type}
            isActive={activeTab === type}
            onClick={() => setActiveTab(type)}
            sx={{
              width: { sm: 'auto' },
              mr: 1, 
            }}
          >
            <Typography>
              {type}
            </Typography>
          </CustomButton>
        ))}
      </Box>
    </Box>
  );
}

export default Transactions;
