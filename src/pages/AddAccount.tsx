import { Box, Paper, Typography, MenuItem, useTheme } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '@/components/base/Button';
import InputField from '@/components/base/InputField';
import SelectInput from '@/components/base/SelectInput';

const AddAccount = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    initialBalance: '',
    description: '',
  });

  const accountTypes = [
    { value: 'savings', label: 'Savings Account' },
    { value: 'checking', label: 'Checking Account' },
    { value: 'credit', label: 'Credit Card' },
    { value: 'investment', label: 'Investment' },
    { value: 'cash', label: 'Cash' },
    { value: 'digital', label: 'Digital Wallet' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Account created:', formData);
    navigate('/accounts');
  };

  const handleCancel = () => {
    navigate('/accounts');
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
      <Paper
        elevation={0}
        sx={{
          p: 4,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Create New Account
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <InputField
            label="Account Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., My Savings"
            required
          />

          <SelectInput defaultValue="Select" >
            {accountTypes.map((type) => (
              <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
            ))}
          </SelectInput>

          <InputField
            label="Initial Balance"
            name="initialBalance"
            type="number"
            value={formData.initialBalance}
            onChange={handleChange}
            placeholder="e.g., 1000.00"
            required
          />

          <InputField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Optional description for this account"
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
              <Typography>Create Account</Typography>
            </CustomButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddAccount;
