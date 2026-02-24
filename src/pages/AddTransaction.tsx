import { Box, Typography, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '@/components/base/Button';
import StyledPaper from '@/components/base/StyledPaper';
import InputField from '@/components/base/InputField';
import SelectInput from '@/components/base/SelectInput';

const AddTransaction = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    date: '',
    account: '',
    description: '',
  });

  const categories = [
    { value: 'grocery', label: 'Grocery' },
    { value: 'food', label: 'Food & Dining' },
    { value: 'transport', label: 'Transport' },
    { value: 'utilities', label: 'Utilities' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'shopping', label: 'Shopping' },
    { value: 'health', label: 'Health & Medical' },
    { value: 'other', label: 'Other' },
  ];

  const accounts = [
    { value: 'savings', label: 'Savings Account' },
    { value: 'checking', label: 'Checking Account' },
    { value: 'credit', label: 'Credit Card' },
    { value: 'investment', label: 'Investment' },
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
    console.log('Transaction created:', formData);
    navigate('/transactions');
  };

  const handleCancel = () => {
    navigate('/transactions');
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
          Add New Transaction
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <SelectInput defaultValue="Select">
            {categories.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>{cat.label}</MenuItem>
            ))}
          </SelectInput>

          <InputField
            label="Amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            placeholder="e.g., 20.00"
            inputProps={{ step: '0.01' }}
            required
          />

          <InputField
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            InputLabelProps={{ shrink: true }}
          />

          <SelectInput defaultValue="Select">
            {accounts.map((acc) => (
              <MenuItem key={acc.value} value={acc.value}>{acc.label}</MenuItem>
            ))}
          </SelectInput>

          <InputField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Optional description for this transaction"
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
              <Typography>Add Transaction</Typography>
            </CustomButton>
          </Box>
        </Box>
      </StyledPaper>
    </Box>
  );
};

export default AddTransaction;
