import {
  IconButton,
  useTheme,
} from "@mui/material";
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useColorMode } from '@/context/themeContext';

const ThemeSwitcher = ({ sx }: { sx?: object }) => {
  const theme = useTheme();
  const { mode, toggleTheme } = useColorMode();

  return (
    <IconButton onClick={toggleTheme} color="inherit" sx={{ ...sx }}>
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 sx={{ color: theme.palette.text.primary }} />}
    </IconButton>
  )
}

export default ThemeSwitcher;
