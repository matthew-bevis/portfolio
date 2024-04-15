'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/themeContext';
import Toolbox from '../_components/toolbox';
import { Box, Grid, Typography } from '@mui/material';

const AboutPage: React.FC = () => {
  const { theme } = useTheme();

  return (
        <Grid container sx={{ position: 'relative', flexGrow: 1, justifyContent: 'center', alignItems:'start', display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden' }}>
          <AnimatePresence>
            <motion.div
              key={theme}
              className={`about-banner-image ${theme}`}
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
              My name is Matthew Bevis
            </Typography>
            <Typography variant='subtitle1' sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }} gutterBottom>
              I am a software developer with a degree in Computer Programming and 
              Applications from Florida State University. I have an acute passion for 
              software development—combined with my extensive customer service experience,
              I am a desirable employee within any context. My professional journey has 
              equipped me with a versatile skill set in full-stack development across multiple 
              languages, frameworks, and platforms. I am proficient in version control using 
              Git and GitHub, ensuring efficient management and collaboration in development 
              projects.
            </Typography>
            <Typography variant='h5' sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, mb: 2 }}>
              Here are some of the tools I work with:
            </Typography>
            <Toolbox/>
          </Grid>
        </Grid>
  );
}

export default AboutPage;



