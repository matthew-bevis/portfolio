'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from '../_components/typewriter';
import { useTheme } from '../context/themeContext';
import AboutContent from '../about/aboutContent';
import { Grid } from '@mui/material';
import PortfolioContent from '../portfolio/portfolioContent';
import ContactContent from '../contact/contactContent';

function HomePage() {
    const { theme } = useTheme();
    const [isHeaderTypingDone, setIsHeaderTypingDone] = useState(false);
    const [isBodyTypingDone, setIsBodyTypingDone] = useState(false);
    const [animateText, setAnimateText] = useState(false);

  // Start the animation after the body typing is done and a pause
    useEffect(() => {
    if (isBodyTypingDone) {
        const timer = setTimeout(() => {
        setAnimateText(true);
      }, 1000); // Adjust pause duration on scale and slide animation
        return () => clearTimeout(timer);
    }
    148
    }, [isBodyTypingDone]);

    const bgColor1 = (theme === 'light') ? '#FFFFFF' : '#A0A0A0';
    const bgColor2 = (theme === 'light') ? '#E5E5E5' : '#6F6F6F';

    return (
    <Grid container direction="column" alignItems="center" justifyContent="center" maxWidth= '100%' width= '100%'>
        <Grid item className="banner" sx={{width: '100%', maxWidth: '100%'}}>
            <AnimatePresence>
            <motion.div
                key={theme}
                className={`banner-image ${theme}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            />
            </AnimatePresence>
            <AnimatePresence>
            {animateText ? (
                <motion.div
                    className="banner-text"
                    initial={{ y: 0, scale: 1 }}
                    animate={{ y: -100, scale: 1.2, transition: { duration: 0.9 } }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                >
                <h1>Welcome to My Portfolio</h1>
                <p>Discover my projects, skills, and journey in the world of software development.</p>
                </motion.div>
            ) : (
            <Grid item className="banner-text">
                <h1>
                    <Typewriter
                        text="Welcome to My Portfolio"
                        speed={100}
                        onTypingDone={() => setIsHeaderTypingDone(true)}
                    />
                </h1>
                {isHeaderTypingDone && (
                    <p>
                        <Typewriter
                            text="Discover my projects, skills, and journey in the world of software development."
                            speed={50}
                            onTypingDone={() => setIsBodyTypingDone(true)}
                        />
                    </p>
                )}
            </Grid>
            )}
            </AnimatePresence>
        </Grid>
        <Grid item sx={{pt:'50px', pb: '50px' , bgcolor: bgColor2}}>
            <AboutContent/>
        </Grid>
        <Grid item sx={{pt:'50px', pb: '50px', bgcolor: bgColor1}}>
            <PortfolioContent/>
        </Grid>
        <Grid item sx={{pt:'50px', pb: '50px' , bgcolor: bgColor2, maxWidth: '100%', width: '100%'}}>
            <ContactContent/>
        </Grid>
    </Grid>
    
    );
}

export default HomePage;