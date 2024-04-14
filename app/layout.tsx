'use client'

import React, { useEffect, useState } from 'react';
import Header from './_components/header';
import Footer from './_components/footer';
import { ThemeProvider } from './context/themeContext';
import Head from 'next/head'
import './global.css';
import Script from 'next/script';

interface LayoutProps {
  children: React.ReactNode; // use React.ReactNode for children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dynamicFavicon = useDynamicFavicon();
  return (
    <ThemeProvider>
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Web site created using create-next-app" />
          <link rel="icon" href={dynamicFavicon} type="image/x-icon" />
          <link rel="manifest" href="/manifest.json" />
          <title>Matthew Bevis • Software Developer</title>
        </head>
          <body><Header/>{children}<Footer/></body>
      </html>
    </ThemeProvider>
  );
};

export default Layout;

export const useDynamicFavicon = (intervalDuration: number = 300): string => {
  const [currentFavicon, setCurrentFavicon] = useState(0);
  const favicons = [
    './icons/favicon1.ico',
    './icons/favicon2.ico',
    './icons/favicon3.ico',
    './icons/favicon4.ico',
    './icons/favicon5.ico',
    './icons/favicon6.ico',
    './icons/favicon7.ico',
    './icons/favicon8.ico',
    './icons/favicon9.ico',
    './icons/favicon10.ico',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFavicon((current) => (current + 1) % favicons.length);
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [intervalDuration, favicons.length]);

  return favicons[currentFavicon];
};

