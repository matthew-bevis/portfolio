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
            backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            border: `2px solid ${theme === 'dark' ? '#000000' : '#ffffff'}`,
            borderRadius: '8px',
            paddingBottom: '20px'
        }}>
        <h3>As a driven and innovative software developer, I am constantly engaged 
            in developing and refining technology solutions. I&apos;m currently working 
            on an exciting project at Bulkitrade where I&apos;m building a new application 
            from scratch using React and MUI. This project is a cornerstone in my journey 
            to enhance enterprise-level solutions through clean, scalable code and 
            responsive design.

            In my personal projects, I am developing an Electron application aimed at 
            unifying hardware control interfaces. This project is especially thrilling 
            as it merges my skills in desktop application development with real-world hardware 
            interactions, offering a streamlined solution for managing diverse hardware components 
            seamlessly.

            Additionally, I&apos;m collaborating on a peer-to-peer video conferencing platform, which 
            is not only a testament to my ability to handle real-time data and complex UI/UX 
            challenges but also underscores my commitment to facilitating effective digital 
            communication in a post-pandemic era. Through these projects, I aim to push the 
            boundaries of what&apos;s possible in software development and create tools that enhance 
            connectivity and functionality for users worldwide.</h3>
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