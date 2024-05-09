import {Grid, Typography, Box} from '@mui/material'
import ContactForm from '../_components/contactForm';
import { useTheme } from '../context/themeContext';
    
const ContactContent: React.FC = () => {
    const {theme} = useTheme();
    return (
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
    </Grid>
    );
};

export default ContactContent;