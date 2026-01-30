import {
  Box,
  Paper,
  Typography,
  useTheme,
  LinearProgress,
} from '@mui/material';
import { GoGoal } from "react-icons/go";
import CustomButton from './Button';

const GoalsTab = () => {
  const theme = useTheme();
  const accountsData = [
    { title: 'Emergency', icon: <GoGoal size={24} />, value: '50%',},
    { title: 'Family', icon: <GoGoal size={24} />, value: '75%',},
    { title: 'New Car', icon: <GoGoal size={24} />, value: '30%',},
    { title: 'Vacation', icon: <GoGoal size={24} />, value: '90%',},
  ];

    return (
      <Paper
        elevation={0}
        sx={{
          p: 3,
          height: '100%',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Goals
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Progress towards your goals
          </Typography>

          {accountsData.map((stat) => (
            <Box key={stat.title} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box sx={{
                mr: 2,
                color: theme.palette.text.secondary,
                backgroundColor: theme.palette.primary.light,
                p: 1,
                borderRadius: 2,
                '& svg': { display: 'block' }
              }}>
                {stat.icon}
              </Box>

              <Box sx={{ mb: 1, minWidth: 120, width: '100%', pr: 2 }}>
                <Typography variant="body2" mb={1}>
                  {stat.title}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={parseInt(stat.value)}
                  sx={{
                    height: 10,
                    borderRadius: 4,
                    backgroundColor: theme.palette.grey[200],
                    mb: 0.5,
                  }}
                />
              </Box>

              <Box justifyContent='flex-end' sx={{ flexGrow: 1, textAlign: 'right' }}>
                <Typography 
                  variant="body2" 
                  fontWeight="bold"
                >
                  {stat.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <CustomButton isCentral isActive sx={{ mt: 1, p: 1, alignSelf: 'stretch' }}>
          View All
        </CustomButton>
      </Paper>
    );
};

export default GoalsTab;
