'use client'

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ThemeToggler from './themeToggler';
import Link from 'next/link';

interface MenuItemType {
    name: string;
    link: string;
    icon: React.ReactElement;
}

const menuItems: MenuItemType[] = [
    { name: 'Home', link: '/', icon: <HomeIcon /> },
    { name: 'About', link: '/about', icon: <InfoIcon /> },
    { name: 'Portfolio', link: '/portfolio', icon: <WorkIcon /> },
    { name: 'Contact', link: '/contact', icon: <ContactMailIcon /> },
];

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky" sx={{
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
            backdropFilter: "blur(10px)",
            color: theme.palette.mode === 'dark' ? 'white' : 'black',
        }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {'>'}Matthew_Bevis
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            {menuItems.map((item) => (
                                <MenuItem key={item.name} onClick={handleClose}>
                                    <Link href={item.link} passHref>
                                        <a style={{ display: 'flex', alignItems: 'center' }}>
                                            {item.icon}{item.name}
                                        </a>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    <div>
                        {menuItems.map((item) => (
                            <Link key={item.name} href={item.link} passHref>
                                <Button
                                    startIcon={item.icon}
                                    color="inherit"
                                    sx={{ margin: '0 10px' }}
                                >
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                )}
                <ThemeToggler />
            </Toolbar>
        </AppBar>
    );
}

export default Header;