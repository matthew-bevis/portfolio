'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const muiTheme = createTheme({
    typography: {
        fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif'
        ].join(','),
    },
  // Add other theme customizations here
});

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

  // You can customize the Material-UI theme further based on the theme state
    const themeConfig = createTheme({
        ...muiTheme,
        palette: {
        mode: theme, // Use the theme state here to toggle light/dark
        },
    });

    return (
        <MuiThemeProvider theme={themeConfig}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <CssBaseline/>
                {children}
            </ThemeContext.Provider>
        </MuiThemeProvider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
