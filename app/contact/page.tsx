'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/themeContext';
import ContactForm from '../_components/contactForm';
import { Box, Grid, Typography } from '@mui/material';

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
      <Grid item xs={12} sm={10} md={10} lg={8}
        sx={{
          backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          border: `2px solid ${theme === 'dark' ? '#000000' : '#ffffff'}`,
          borderRadius: '8px',
          p: 4, 
          m: 'auto',
          flexDirection: 'column',
          textAlign: 'center',
          zIndex: 1,
        }}>
        <Typography variant='h3' component='h1' gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
          Feel free to reach out!
        </Typography>
        <Box sx={{ width: '100%', bgcolor: 'background.paper', alignItems: 'center', borderRadius: '22px'}}>
          <ContactForm />
        </Box >
        <Box sx={{ width: '100%', alignItems: 'center'}}>
          <Typography sx={{color: 'red'}}>! The above form is still in development !</Typography>
          <Typography>Please use the following to contact me in the mean time:</Typography>
          <Grid container xs={12} sx={{justifyContent: 'center', alignContent: 'center', maxWidth: '100%'}}>
            <Grid item sx={{p:2}}><Typography>Email: matthew-bevis@comcast.net </Typography></Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ContactPage;
