import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '@/components/base/Button';
import StyledPaper from '@/components/base/StyledPaper';
import InputField from '@/components/base/InputField';

const AddGoal = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    goalTarget: '',
    currentValue: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Goal created:', formData);
    navigate('/goals');
  };

  const handleCancel = () => {
    navigate('/goals');
  };

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
      <StyledPaper padding={4} withBorder>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Create New Goal
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <InputField
            label="Goal Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Vacation Fund"
            required
          />

          <InputField
            label="Goal Target Amount"
            name="goalTarget"
            type="number"
            value={formData.goalTarget}
            onChange={handleChange}
            placeholder="e.g., 5000.00"
            inputProps={{ step: '0.01' }}
            required
          />

          <InputField
            label="Current Amount"
            name="currentValue"
            type="number"
            value={formData.currentValue}
            onChange={handleChange}
            placeholder="e.g., 500.00"
            inputProps={{ step: '0.01' }}
          />

          <InputField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Optional description for this goal"
            multiline
            rows={3}
          />

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'flex-end',
            }}
          >
            <CustomButton onClick={handleCancel} isCentral>
              <Typography>Cancel</Typography>
            </CustomButton>
            <CustomButton type="submit" isActive isCentral>
              <Typography>Create Goal</Typography>
            </CustomButton>
          </Box>
        </Box>
      </StyledPaper>
    </Box>
  );
};

export default AddGoal;
