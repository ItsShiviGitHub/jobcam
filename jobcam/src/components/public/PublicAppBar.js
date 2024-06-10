import React, { useState } from 'react';
import { Box, Toolbar, IconButton, AppBar, Drawer, Divider, Button, useTheme, Stack } from '@mui/material';
import { Link, useLocation, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import MyButton from '../../pages/MyButton';
import LoginIcon from '@mui/icons-material/Login';
import Spirale from '../../assets/images/spirale_logo.png';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


const PublicAppBar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation()
    const { palette, spacing, } = useTheme()
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    console.log('Loc', pathname)
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleClose = () => {
        setOpen(null);
    };

    // const [scrolling, setScrolling] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollTop = window.pageYOffset;
    //         if (scrollTop > 50) {
    //             setScrolling(true);
    //         } else {
    //             setScrolling(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    return (
        <AppBar elevation={1} position="fixed" sx={{ backgroundColor: '#fff', py: spacing(1), }}>
            <Toolbar open={open} >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerOpen}>
                    <MenuRoundedIcon sx={{ color: palette.primary.main, backgroundColor: '#FFF', fontSize: '40px', fontWeight: 'bold', display: { md: 'none' } }} />
                </IconButton>
                <Box open={Boolean(open)}
                    onClose={handleClose} sx={{ display: 'flex', width: { md: "100%", xs: '100%' }, justifyContent: 'space-between', alignItems: 'center', }}>
                    {/* <Typography variant={'h4'} sx={{ color: palette.primary.main }}>Logo</Typography> */}
                    <Box sx={{ width: '65px' }}><img src={Spirale} alt='spirale' style={{ height: '100%', width: '100%' }} /></Box>
                    <Stack display={{ xs: "none", lg: "flex" }} direction={'row'} gap={spacing(2)}>
                        <MyButton component={Link} to='/' backColor={pathname === '/' ? '#F4511E' : 'inherit'}>Home</MyButton>
                        <MyButton component={Link} to='/about' backColor={pathname === '/about' ? '#F4511E' : 'inherit'}>About</MyButton>
                        <MyButton component={Link} to='/jobs' backColor={pathname === '/jobs' ? '#F4511E' : 'inherit'}>Jobs</MyButton>
                        <MyButton component={Link} to='/contact' backColor={pathname === '/contact' ? '#F4511E' : 'inherit'}>Contact</MyButton>
                    </Stack>
                    <Stack direction={'row'} gap={spacing(3)}>
                        <Button variant={'contained'} onClick={() => navigate('signup')}>Register</Button>
                        <Button variant={'contained'} style={{ backgroundColor: palette.secondary.main }} onClick={() => navigate('/login')}>Login<LoginIcon sx={{ fontSize: '25px' }} /></Button>
                    </Stack>
                </Box>
                <Divider />
            </Toolbar>
            {/* small device */}
            <Drawer
                variant="paper"
                open={open}
            >
                <Stack sx={{ width: 340 }}>
                    <Box sx={{ backgroundColor: palette.primary.main, display: 'flex', color: '#FFF', alignItems: 'center', justifyContent: 'space-between', p: spacing(1) }}>
                        <Box sx={{ width: '70px' }}><img src={Spirale} alt='spirale' style={{ height: '100%', width: '100%' }} /></Box>
                        <CloseIcon SX={{ color: '#FFF' }} onClick={handleDrawerClose} />
                    </Box>
                    <Stack onClick={handleClose} direction={'column'} alignItems={'center'} gap={spacing(2)}>
                        <MyButton component={Link} to='/' backColor={pathname === '/' ? 'green' : 'inherit'}>Home</MyButton>
                        <MyButton component={Link} to='/about' backColor={pathname === '/about' ? 'green' : 'inherit'}>About</MyButton>
                        <MyButton component={Link} to='/services' backColor={pathname === '/services' ? 'green' : 'inherit'}>Services</MyButton>
                        <MyButton component={Link} to='/contact' backColor={pathname === '/contact' ? 'green' : 'inherit'}>Contact</MyButton>
                    </Stack>
                </Stack>
            </Drawer >
        </AppBar>
    );
};

export default PublicAppBar;
