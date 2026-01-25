import {
  Paper,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import CustomButton from '@/components/Button';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const theme = useTheme()
  const navigate = useNavigate();
  const location = useLocation();
  const homeItems = [
    { label: "Dashboard", icon: <SpaceDashboardOutlinedIcon /> },
    { label: "Accounts", icon: <AccountBalanceWalletOutlinedIcon /> },
    { label: "Goals", icon: <TrackChangesIcon /> },
    { label: "Transactions", icon: <PaidOutlinedIcon /> },
  ]
  const accountItems = [
    { label: "Profile", icon: <PersonOutlinedIcon /> },
    { label: "Settings", icon: <SettingsOutlinedIcon /> },
    { label: "Logout", icon: <LogoutOutlinedIcon /> },
  ]

  // Derive active item from current URL path
  const getActiveItem = () => {
    const path = location.pathname.slice(1); // Remove leading slash
    if (!path || path === '' || path === '/') return 'Dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  const onItemClick = (label: string) => {
    navigate(`/${label.toLowerCase()}`);
  }

  const activeItem = getActiveItem();

  return (
    <Paper
      elevation={0}
      sx={{
        px: 3,
        pt: 4,
        width: 260,
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        borderRadius: 0,
        borderRight: `1px solid ${theme.palette.divider}`,
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Box pb={4}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            background: 'linear-gradient(120deg, #6a82a5 0%, #8ab5f1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Expense Tracker
        </Typography>
      </Box>

      <Box pb={2}>
        <Typography pb={1} sx={{ fontWeight: 600 }}>
          Home
        </Typography>

        {homeItems.map((item) => (
          <CustomButton
            key={item.label}
            isActive={activeItem === item.label}
            onClick={() => onItemClick(item.label)}
          >
            {item.icon}
            <Typography pl={1}>
              {item.label}
            </Typography>
          </CustomButton>
        ))}
      </Box>

      <Box>
        <Typography pb={1} sx={{ fontWeight: 600 }}>
          Account
        </Typography>

        {accountItems.map((item) => (
          <CustomButton
            key={item.label}
            isActive={activeItem === item.label}
            onClick={() => onItemClick(item.label)}
          >
            {item.icon}
            <Typography pl={1}>
              {item.label}
            </Typography>
          </CustomButton>
        ))}
      </Box>
    </Paper>
  )
}

export default Sidebar
