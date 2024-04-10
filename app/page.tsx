'use client'

import React from 'react';
import { ThemeProvider} from './context/themeContext';
import HomePage from './home/page';
import './global.css';

function Page() {
    return (
        <ThemeProvider>
            <HomePage/>
        </ThemeProvider>
    );
}

export default Page;