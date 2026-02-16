import { Box, Paper, Typography, LinearProgress, useTheme } from '@mui/material';
import CustomButton from '../base/Button';
import { useNavigate } from 'react-router-dom';
import { GoGoal } from "react-icons/go";

interface GoalBoxProps {
  goalId: number;
  name: string;
  currentValue: number;
  goalTarget: number;
}

const GoalBox = ({ goalId, name, currentValue, goalTarget }: GoalBoxProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const goalProgress = currentValue * 100 / goalTarget;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '100%',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <Box
        display='flex'
        justifyContent='space-between'
      >
        <Box
          display="flex"
          alignItems="center"
          mb={2}
          minWidth={0}
        >
          <Box sx={{
            mr: 2,
            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.primary.light,
            p: 1,
            borderRadius: 2,
            '& svg': { display: 'block' },
            flexShrink: 0,
          }}>
            <GoGoal />
          </Box>
          <Typography
            variant="h6"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            gutterBottom
          >
            {name}
          </Typography>
        </Box>
        
        <Typography>
          {goalProgress.toFixed(1)}%
        </Typography>
      </Box>

      <Box>
        <LinearProgress
          variant="determinate"
          value={parseInt(String(goalProgress))}
          sx={{
            height: 10,
            borderRadius: 4,
            backgroundColor: theme.palette.grey[200],
            mb: 0.5,
          }}
        />
      </Box>

      <Box
        display="flex"
        gap={2}
        justifyContent="space-between"
        mt={2}
      >
        <Box display='flex' alignItems='center' gap={1} minWidth={0}>
          <Typography 
            variant="h6"
            fontWeight="bold"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            ${currentValue.toFixed(2)}
          </Typography>
          <Typography variant="subtitle1">
            /
          </Typography>
          <Typography variant='h6'
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            ${goalTarget.toFixed(2)}
          </Typography>
        </Box>
        <CustomButton
          isActive
          isCentral
          onClick={() => {navigate(`${goalId}`)}}
          sx={{
            py: 1,
            width: 'auto',
          }}>
          <Typography>
            View
          </Typography>
        </CustomButton>
      </Box>
    </Paper>
  );
};

export default GoalBox;
