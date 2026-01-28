import React, { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material';
import { lightTheme, theme } from '@/theme';

interface ThemeContextType {
  toggleTheme: () => void;
  mode: string;
}

const ColorModeContext = createContext<ThemeContextType | undefined>(undefined);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [useLight, setUseLight] = useState(false);

  const colorMode = useMemo(() => ({
    toggleTheme: () => {
      setUseLight((prev) => !prev);
    },
    mode: useLight ? 'light' : 'dark',
  }), [useLight]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={ useLight ? lightTheme : theme }>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (!context) throw new Error("useColorMode must be used within CustomThemeProvider");
  return context;
};
