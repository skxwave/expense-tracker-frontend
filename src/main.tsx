import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { CustomThemeProvider } from './context/ThemeContext'
import App from './App.tsx'

const Main = () => {
  return (
    <StrictMode>
      <CustomThemeProvider>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CustomThemeProvider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Main />)
