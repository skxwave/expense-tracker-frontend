import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

interface TransactionListItemProps {
  icon: React.ReactNode,
  category: string,
  amount: number | string,
}

const TransactionListItem = ({
  icon, category, amount,
}: TransactionListItemProps) => {
  const theme = useTheme();

  return(
    <Box
      sx={{
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
          cursor: 'pointer',
        },
      }}
    >
      <Box display='flex'>
        {icon}
        <Typography variant='body1' ml={1}>
          {category}
        </Typography>
      </Box>

      <Typography fontWeight='bold' color=''>
        ${amount}
      </Typography>
    </Box>
  );
}

export default TransactionListItem;
