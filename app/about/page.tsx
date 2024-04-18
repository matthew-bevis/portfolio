'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/themeContext';
import { Grid } from '@mui/material';
import AboutContent from './aboutContent';

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
          <AboutContent />
        </Grid>
        
  );
}

export default AboutPage;



