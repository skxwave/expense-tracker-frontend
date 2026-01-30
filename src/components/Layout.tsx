import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Footer from './Footer';
import Navbar from './Navbar';
import { useState } from 'react';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { xs: 0, md: '260px' },
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100%', md: 'auto' },
        }}
      >
        {/* Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Main content */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
