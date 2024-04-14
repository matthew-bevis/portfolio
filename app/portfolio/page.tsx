'use client'

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/themeContext';

function PortfolioPage() {
  const { theme } = useTheme();

  return (
    <div className="banner">
      <AnimatePresence>
        <motion.div
          key={theme}
          className={`portfolio-banner-image ${theme}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        />
      </AnimatePresence>
      <div className="portfolio-banner-text" 
        style={{
            backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
            border: `2px solid ${theme === 'dark' ? '#000000' : '#ffffff'}`,
            borderRadius: '8px',
            paddingBottom: '20px'
        }}>
        <h1>Here are some projects I&apos;ve worked on.</h1>
        <h3>For a better look at what I can do, check out my </h3>
        <a href="https://github.com/Matthew-Bevis" className="github-link" style={{backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.5)':  'rgba(255, 255, 255, 0.5)', borderRadius: '8px', paddingTop: '7px', paddingRight: '2px', paddingLeft: '2px' }}>
          <GitHubIcon/>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default PortfolioPage;