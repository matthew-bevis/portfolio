'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/themeContext';
import { Box, Grid, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const PortfolioPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Grid container sx={{ position: 'relative', flexGrow: 1, justifyContent: 'center', alignItems:'start', display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden' }}>
      <AnimatePresence>
        <motion.div
          key={theme}
          className={`portfolio-banner-image ${theme}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        />
      </AnimatePresence>
      <Grid item xs={12} sm={10} md={8} lg={6} xl={4}
        sx={{
          backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          border: `2px solid ${theme === 'dark' ? '#000000' : '#ffffff'}`,
          borderRadius: '8px',
          p: 2,
          m: 'auto',
          flexDirection: 'column',
          textAlign: 'center',
          boxSizing: 'border-box',
          zIndex: 1,
        }}>
        <Typography variant='h3' component='h1' gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
          Portfolio Highlights
        </Typography>
        <Typography variant='subtitle1' sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }} gutterBottom>
            As a driven and innovative software developer, I am constantly engaged 
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
            connectivity and functionality for users worldwide.
        </Typography>
        <Typography variant='h5' sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>For a better look at what I can do check out my GitHub</Typography>
        <Link href="https://github.com/Matthew-Bevis" className="github-link" sx={{
          backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.75)': 'rgba(255, 255, 255, 0.75)',
          borderRadius: '8px',
          padding: '7px',
          margin: '2px',
          display: 'inline-flex',
          alignItems: 'center',
          '&:hover': {
            opacity: 0.7,
          },
        }}>
          <GitHubIcon sx={{ mr: 1 }} />
          GitHub
        </Link>
      </Grid>
    </Grid>
  );
}

export default PortfolioPage;