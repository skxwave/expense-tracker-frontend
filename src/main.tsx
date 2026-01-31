import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux';
import { store, useAppSelector } from '@/redux/store.ts'
import { lightTheme, theme } from '@/theme.ts'
import App from './App.tsx'

// eslint-disable-next-line react-refresh/only-export-components
const Main = () => {
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <StrictMode>
      <ThemeProvider theme={mode === 'light' ? lightTheme : theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Main />
  </Provider>
)
