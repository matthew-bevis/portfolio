'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/themeContext';
import ContactForm from '../_components/contactForm';

const ContactPage: React.FC = () => {
    const { theme } = useTheme();
  
    return (
      <div className="banner">
        <AnimatePresence>
          <motion.div
            key={theme}
            className={`contact-banner-image ${theme}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          />
        </AnimatePresence>
        <div className="contact-banner-text">
          <h1>Feel free to reach out!</h1>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
export default ContactPage;