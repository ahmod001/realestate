"use client"
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';

const drawerWidth = 240;
const navItems = [
    { id: 0, name: 'Home', href: '/' },
    { id: 1, name: 'Properties', href: '/properties' },
    { id: 2, name: 'Services', href: '/services' },
    { id: 3, name: 'About Us', href: '/about-us' }
]

const Navbar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // Media Query
    const isXsScreen = useMediaQuery('(max-width:640px)');

    const { data: session } = useSession();
    const router = useRouter()
    // Drawer_Toggle Btn Handler
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            {/* Brand Icon */}
            <Box sx={{ my: 3 }}>
                <img className='max-h-7 mx-auto'
                    src="/logo.png"
                    alt="Realhome." />
            </Box>
            <Divider />

            {/* Links */}
            <List>
                {navItems.map(item => (
                    <ListItem
                        key={item.id}
                        disablePadding>
                        <Link className='block w-full' href={item.href}>
                            <ListItemButton
                                sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{ boxShadow: 'none', backdropFilter: 'blur(16px)', backgroundColor: 'transparent' }}
                component="nav">
                <Container disableGutters>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* Menu Btn */}
                        <IconButton
                            color="secondary"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Brand Icon */}
                        <Box sx={{ display: { md: 'block', xs: 'none' } }}>
                            <Link href={'/'}>
                                <img
                                    className='max-h-8'
                                    src="/logo.png"
                                    alt="Realhome." />
                            </Link>
                        </Box>

                        <div className='flex items-center md:space-x-4 space-x-3'>
                            {/* Nav-links */}
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                <div className='flex md:space-x-4 space-x-3'>
                                    {navItems.map(item => (
                                        <Link
                                            key={item.id}
                                            href={item.href}>
                                            <Button
                                                size={isXsScreen ? 'small' : 'medium'}
                                                color='secondary'
                                                sx={{ textTransform: 'capitalize' }}>
                                                {item.name}
                                            </Button>
                                        </Link>
                                    ))}
                                </div>
                            </Box>

                            {session ?
                                //  Log-out btn
                                <Button
                                onClick={() => signOut()}
                                    variant='outlined'
                                    color='secondary'
                                    size={isXsScreen ? 'small' : 'medium'}
                                    sx={{ textTransform: 'capitalize', borderRadius: 0, width: { md: '6.3rem', xs: '5rem' }, whiteSpace: 'nowrap' }}>
                                    Log Out
                                </Button>

                                //  Join-us btn 
                                : <Button
                                    onClick={() => router.push('/join-us')}
                                    variant='outlined'
                                    color='primary'
                                    size={isXsScreen ? 'small' : 'medium'}
                                    sx={{ textTransform: 'capitalize', borderRadius: 0, width: { md: '6.3rem', xs: '5rem' }, whiteSpace: 'nowrap' }}>
                                    Join us
                                </Button>}
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box >
    );
};

export default Navbar