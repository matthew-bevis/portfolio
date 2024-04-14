'use client'

import React, { useEffect, useState } from 'react';
import Header from './_components/header';
import Footer from './_components/footer';
import { ThemeProvider } from './context/themeContext';
import DynamicFavicon from './_components/dynamicFavicon'
import './global.css';

interface LayoutProps {
  children: React.ReactNode; // use React.ReactNode for children
}

const TOTAL_FAVICONS = 10;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [currentFaviconIndex, setCurrentFaviconIndex] = useState(1);

  useEffect(() => {
    // Set an interval to change the favicon index
    const interval = setInterval(() => {
      setCurrentFaviconIndex((prevIndex) => {
        // When reaching the last favicon, start from the first one again
        return prevIndex >= TOTAL_FAVICONS ? 1 : prevIndex + 1;
      });
    }, 300); // Change favicon every 1000ms (1 second)

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider>
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Web site created using create-next-app" />
          <title>Matthew Bevis • Software Developer</title>
        </head>
        <DynamicFavicon iconIndex={currentFaviconIndex} />
          <body><Header/>{children}<Footer/></body>
      </html>
    </ThemeProvider>
  );
};

export default Layout;
