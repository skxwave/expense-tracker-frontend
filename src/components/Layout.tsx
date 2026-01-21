import { Box } from '@mui/material'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex' }}>

      {/* Sidebar */}
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: '260px',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >

        {/* Main content */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>

        {/* Footer */}
        <Footer />

      </Box>
    </Box>
  )
}

export default Layout
