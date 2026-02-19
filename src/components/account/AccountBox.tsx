import { Box, Typography, useTheme } from '@mui/material';
import { type ReactNode } from 'react';
import CustomButton from '../base/Button';
import StyledPaper from '../base/StyledPaper';
import { useNavigate } from 'react-router-dom';

interface AccountBoxProps {
  accountId: number;
  name: string;
  value: string | number;
  icon: ReactNode;
  transactions?: string[];
}

const AccountBox = ({ accountId, name, value, icon }: AccountBoxProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <StyledPaper
      padding={3}
      fullHeight
      withOverflow
    >
      <Box
        display="flex"
        alignItems="center"
        mb={2}
      >
        <Box sx={{
          mr: 2,
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.primary.light,
          p: 1,
          borderRadius: 2,
          '& svg': { display: 'block' }
        }}>
          {icon}
        </Box>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
      </Box>

      <Box
        display="flex"
        gap={2}
        justifyContent="space-between"
        mt={2}
      >
        <Typography 
          variant="h5"
          fontWeight="bold"
          sx={{
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {value}
        </Typography>
        <CustomButton
          isActive
          isCentral
          onClick={() => {navigate(`${accountId}`)}}
          sx={{
            py: 1,
            width: 'auto',
          }}>
          <Typography>
            View
          </Typography>
        </CustomButton>
      </Box>
    </StyledPaper>
  );
};

export default AccountBox;
