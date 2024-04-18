'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/themeContext';
import ContactForm from '../_components/contactForm';
import { Box, Grid, Typography } from '@mui/material';
import ContactContent from './contactContent';

const ContactPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Grid container sx={{ position: 'relative', flexGrow: 1, justifyContent: 'center', alignItems: 'start', display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden' }}>
      <AnimatePresence>
        <motion.div
          key={theme}
          className={`contact-banner-image ${theme}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        />
      </AnimatePresence>
      <ContactContent/>
    </Grid>
  );
}

export default ContactPage;
