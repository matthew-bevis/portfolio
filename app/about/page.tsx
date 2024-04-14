'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/themeContext';
import Toolbox from '../_components/toolbox';

const AboutPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="banner">
      <AnimatePresence>
        <motion.div
          key={theme}
          className={`about-banner-image ${theme}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        />
      </AnimatePresence>
      <div className="banner-text" 
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
        border: `2px solid ${theme === 'dark' ? '#000000' : '#ffffff'}`,
        borderRadius: '8px'
        }}>
        <h1>My name is Matthew</h1>
        <h3>Here are some of the tools I work with</h3>
        <Toolbox/>
      </div>
    </div>
  );
}

export default AboutPage;