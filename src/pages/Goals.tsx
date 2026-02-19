import { useNavigate } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import CustomButton from '@/components/base/Button';
import StyledPaper from '@/components/base/StyledPaper';
import GoalBox from '@/components/goals/GoalBox';

const Goals = () => {
  const navigate = useNavigate();
  const goalsData = [
    {
      goalId: 1,
      name: 'PayPal',
      currentValue: 2450.5052,
      goalTarget: 1000000000.00,
      progress: '30%',
    },
    {
      goalId: 2,
      name: 'Savings Account',
      currentValue: 5890.00,
      goalTarget: 10000.00,
      progress: '65%',
    },
    {
      goalId: 3,
      name: 'Credit Card',
      currentValue: 1200.75,
      goalTarget: 10000.00,
      progress: '12%',
    },
    {
      goalId: 4,
      name: 'Checking Account Test Test test',  // Longer name to test displaying
      currentValue: 3650.25,
      goalTarget: 10000.00,
      progress: '72%',
    },
    {
      goalId: 5,
      name: 'Investment',
      currentValue: 8920.00,
      goalTarget: 10000.00,
      progress: '52%',
    },
    {
      goalId: 6,
      name: 'Cash',
      currentValue: 500.00,
      goalTarget: 10000.00,
      progress: '89%',
    },
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
            Your Goals
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
              Add New Goal
            </Typography>
          </CustomButton>
        </Box>
      </StyledPaper>

      <Grid 
        container
        spacing={2}
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4 }}>
          <StyledPaper
            padding={2}
            fullHeight
            withOverflow
          >
            <Typography justifySelf='center'>Goal Data & charts</Typography>
          </StyledPaper>
        </Grid>

        <Grid container spacing={2} size={{ xs: 12, sm: 12, md: 12, lg: 8 }}>
          {goalsData.map((goal) => (
            <Grid key={goal.goalId} size={{ xs: 12, sm: 12, md: 12 }}>
              <GoalBox
                goalId={goal.goalId}
                name={goal.name}
                currentValue={goal.currentValue}
                goalTarget={goal.goalTarget}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Goals;
