import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
  Avatar,
  useTheme
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />

        {/* Right side elements */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton sx={{ color: theme.palette.text.primary }}>
            <SearchIcon />
          </IconButton>

          <IconButton sx={{ color: theme.palette.text.primary }}>
            <Badge badgeContent={3} color="error">
              <MailOutlineIcon />
            </Badge>
          </IconButton>

          <IconButton sx={{ color: theme.palette.text.primary }}>
            <Badge badgeContent={5} color="error">
              <NotificationsOutlinedIcon />
            </Badge>
          </IconButton>

          <IconButton sx={{ ml: 1 }}>
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: theme.palette.primary.main,
              }}
            >
              U
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;