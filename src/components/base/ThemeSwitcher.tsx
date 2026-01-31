import {
  IconButton,
  useTheme,
} from "@mui/material";
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { toggleTheme } from '@/redux/slices/themeSlice';

const ThemeSwitcher = ({ sx }: { sx?: object }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <IconButton onClick={() => dispatch(toggleTheme())} color="inherit" sx={{ ...sx }}>
      {mode === 'dark' ? (
        <Brightness7 />
      ) : (
        <Brightness4 sx={{ color: theme.palette.text.primary }} />
      )}
    </IconButton>
  )
}

export default ThemeSwitcher;
