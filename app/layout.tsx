'use client'

import React, { useEffect, useState } from 'react';
import Header from './_components/header';
import Footer from './_components/footer';
import { ThemeProvider } from './context/themeContext';
import Head from 'next/head';
import './global.css';

interface LayoutProps {
  children: React.ReactNode; // use React.ReactNode for children
}
// Define your favicons and their paths
const favicons = [
  '/favicon1.ico',
  '/favicon2.ico',
  '/favicon3.ico',
  '/favicon4.ico',
  '/favicon5.ico',
  '/favicon6.ico',
  '/favicon7.ico',
  '/favicon8.ico',
  '/favicon9.ico',
  '/favicon10.ico',
];

const useDynamicFavicon = (intervalDuration: number = 300) => {
  const [currentFavicon, setCurrentFavicon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFavicon((prevIndex) => (prevIndex + 1) % favicons.length);
    }, intervalDuration);

    return () => {
      clearInterval(interval);
    };
  }, [intervalDuration]);

  return favicons[currentFavicon];
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dynamicFavicon = useDynamicFavicon();
  return (
    <ThemeProvider>
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Web site created using create-next-app" />
          <link rel="icon" href="/favicon1.ico" />
          <link rel="manifest" href="/manifest.json" />
          <title>Matthew Bevis • Software Dev</title>
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Layout;

