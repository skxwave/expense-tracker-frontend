import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        textAlign: 'center',
        color: 'text.primary',
        borderTop: '1px solid rgba(124, 143, 172, 0.2)',
      }}
    >
      Footer placeholder
    </Box>
  );
};

export default Footer;