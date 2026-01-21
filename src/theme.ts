import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 200,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C8FAC',
    },
    secondary: {
      main: '#EEEEEE',
    },
    background: {
      default: '#2A3447',
      paper: '#2A3447',
    },
    text: {
      primary: '#7C8FAC',
    },
    divider: '#6a768634',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#7C8FAC',
          fontWeight: 400,
        },
      },
    },
  },
})
