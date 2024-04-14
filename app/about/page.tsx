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
        backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        border: `2px solid ${theme === 'dark' ? '#000000' : '#ffffff'}`,
        borderRadius: '8px'
        }}>
        <h1>My name is Matthew Bevis</h1>
        <h3>I am a software developer with a degree in Computer Programming and 
          Applications from Florida State University.  I have an acute passion for 
          software development-- that coupled with my extensive customer service experience
          make me a desirable employee within any context.  My professional journey has 
          equipped me with a versatile skill set in full-stack development across multiple 
          languages, frameworks, and platforms. I am proficient in version control using 
          Git and GitHub, ensuring efficient management and collaboration in development 
          projects. </h3>
        <h3>Here are some of the tools I work with:</h3>
        <Toolbox/>
      </div>
    </div>
  );
}

export default AboutPage;