import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '../context/themeContext';

const Footer = () => {
    const { theme } = useTheme();

    return (
        <Box sx={{
            bgcolor: theme === 'dark' ? 'background.dark' : 'background.paper', 
            p: 6,
            color: theme === 'dark'  ? 'text.primary' : 'text.secondary', 
        }} component="footer">
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            Matthew Bevis
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Software Developer
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            Connect
                        </Typography>
                        <Box display="flex" justifyContent="flex-start" alignItems="center">
                            <Link href="https://www.linkedin.com/in/matthew-bevis-0ab2aa233/" target='_blank' color="inherit">
                                <LinkedInIcon sx={{ mr: 1 }} />
                                LinkedIn
                            </Link>
                            <Link href="https://github.com/matthew-bevis"  target='_blank' color="inherit" sx={{ ml: 2 }}>
                                <GitHubIcon sx={{ mr: 1 }} />
                                GitHub
                            </Link>
                            <Link href="mailto:Matthew-Bevis@comcast.net" color="inherit" sx={{ ml: 2 }}>
                                <EmailIcon sx={{ mr: 1 }} />
                                Email
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            Resources
                        </Typography>
                        <Link href="/portfolio" color="inherit" display="block">
                            Portfolio
                        </Link>
                        <Link href="/about" color="inherit" display="block">
                            About Me
                        </Link>
                        <Link href="/contact" color="inherit" display="block">
                            Contact
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        © {new Date().getFullYear()} Matthew Bevis. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;