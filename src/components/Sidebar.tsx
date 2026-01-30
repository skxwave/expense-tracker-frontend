import {
  Paper,
  Typography,
  Box,
  useTheme,
  Drawer,
} from "@mui/material";
import CustomButton from '@/components/base/Button';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useNavigate, useLocation } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const homeItems = [
    { label: "Dashboard", link: "/", icon: <SpaceDashboardOutlinedIcon /> },
    { label: "Accounts", link: "/accounts", icon: <AccountBalanceWalletOutlinedIcon /> },
    { label: "Goals", link: "/goals", icon: <TrackChangesIcon /> },
    { label: "Transactions", link: "/transactions", icon: <PaidOutlinedIcon /> },
  ];
  const accountItems = [
    { label: "Profile", link: "/profile", icon: <PersonOutlinedIcon /> },
    { label: "Settings", link: "/settings", icon: <SettingsOutlinedIcon /> },
    { label: "Logout", link: "/login", icon: <LogoutOutlinedIcon /> },
  ];

  // Derive active item from current URL path
  const getActiveItem = () => {
    const path = location.pathname.slice(1); // Remove leading slash
    if (!path || path === '' || path === '/') return 'Dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  const onItemClick = (link: string) => {
    navigate(link);
    onClose(); // close sidebar on mobile after navigation
  };

  const activeItem = getActiveItem();

  // Sidebar content
  const sidebarContent = (
    <Box
      sx={{
        px: 3,
        pt: 4,
        width: 260,
        height: '100vh',
        borderRadius: 0,
        borderRight: `1px solid ${theme.palette.divider}`,
        bgcolor: 'background.paper',
        display: { md: 'block' },
        position: 'fixed',
        left: 0,
        top: 0,
      }}
    >
      <Box pb={4}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            background: 'linear-gradient(120deg, #6a82a5 0%, #8ab5f1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
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
            onClick={() => onItemClick(item.link)}
          >
            {item.icon}
            <Typography pl={1}>{item.label}</Typography>
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
            onClick={() => onItemClick(item.link)}
          >
            {item.icon}
            <Typography pl={1}>{item.label}</Typography>
          </CustomButton>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
        }}
      >
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
          {sidebarContent}
        </Paper>
      </Box>
      {/* Mobile sidebar as Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 260,
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
