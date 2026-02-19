import { useState } from 'react';
import { Box, Divider, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import CustomButton from '@/components/base/Button';
import StyledPaper from '@/components/base/StyledPaper';
import TransactionListItem from '@/components/transactions/TransactionListItem';
import TransactionDetails from '@/components/transactions/TransactionDetails';

const Transactions = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All Transactions');
  const [selectedTransaction, setSelectedTransaction] = useState<number | null>(null);

  const transactionTypes = ['All Transactions', 'Expenses', 'Incomes', 'Transfers'];

  const transactions = [
    { id: 1, icon: <LocalGroceryStoreOutlinedIcon />, category: 'Grocery', amount: 20 },
    { id: 2, icon: <LocalGroceryStoreOutlinedIcon />, category: 'Grocery', amount: 20 },
    { id: 3, icon: <LocalGroceryStoreOutlinedIcon />, category: 'Grocery', amount: 20 },
    { id: 4, icon: <LocalGroceryStoreOutlinedIcon />, category: 'Grocery', amount: 20 },
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
      <StyledPaper
        padding={2}
        marginBottom={2}
        fullHeight
        withOverflow
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
          <Typography ml={1}>
            Your Transactions
          </Typography>
          <CustomButton
            isActive
            onClick={() => navigate('add-goal')}
            sx={{
              width: { sm: 'auto' },
              py: 1,
            }}
          >
            <Typography>
              Add Transaction
            </Typography>
          </CustomButton>
        </Box>
      </StyledPaper>

      <Box
        sx={{
          display: 'flex',
          gap: 1,
          mb: 2,
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

      <Grid container spacing={2}>
        <Grid 
          size={{ xs: 12, sm: 12, md: 12, lg: selectedTransaction ? 8 : 12 }}
          order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
        >
          <StyledPaper
            padding={0}
            withOverflow
          >
            {transactions.map((transaction, index) => (
              <Box 
                key={transaction.id}
                onClick={() => setSelectedTransaction(transaction.id)}
                sx={{ 
                  cursor: 'pointer',
                  backgroundColor: selectedTransaction === transaction.id ? 'action.selected' : 'transparent',
                }}
              >
                <TransactionListItem
                  icon={transaction.icon}
                  category={transaction.category}
                  amount={transaction.amount}
                />
                {index !== transactions.length - 1 && <Divider variant='middle' />}
              </Box>
            ))}
          </StyledPaper>
        </Grid>

        {selectedTransaction && (
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 4 }}
            order={{ xs: 1, sm: 1, md: 1, lg: 2 }}
          >
            <TransactionDetails onClose={() => setSelectedTransaction(null)} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default Transactions;
