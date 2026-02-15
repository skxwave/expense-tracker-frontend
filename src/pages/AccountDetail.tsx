import { Box, Paper, Typography, useTheme } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import CustomButton from '@/components/base/Button';

const AccountDetail = () => {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        pt: 3,
        width: '100%',
        maxWidth: '600px',
        mx: 'auto',
        pb: 4,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Account Details
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Account ID: {id}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'flex-end',
            mt: 3,
          }}
        >
          <CustomButton onClick={() => navigate('/accounts')} isCentral>
            <Typography>Back</Typography>
          </CustomButton>
          <CustomButton isActive isCentral onClick={() => navigate(`/accounts/${id}/edit`)}>
            <Typography>Edit</Typography>
          </CustomButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default AccountDetail;
