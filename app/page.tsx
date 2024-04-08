'use client'

import React from 'react';
import { ThemeProvider} from './context/themeContext';
import HomePage from './home/page';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';

function Page() {
    return (
        <ThemeProvider>
            <HomePage/>
        </ThemeProvider>
    );
}

export default Page;