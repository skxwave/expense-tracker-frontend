import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 200,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#6C8EF2',
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
      secondary: '#FFFFFF',
    },
    error: {
      main: '#f44336',
    },
    divider: '#6a768634',
    action: {
      hover: '#313e57',
      selected: '#313e57'
    }
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

export const lightTheme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 200,
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#6C8EF2'
    },
    secondary: {
      main: '#f50057', // pink
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#222222',
      secondary: '#FFFFFF',
    },
    divider: '#e0e0e0',
    action: {
      hover: '#e2e2e2',
      selected: '#e2e2e2'
    }
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
          color: '#222222',
          fontWeight: 400,
        },
      },
    },
  },
})
