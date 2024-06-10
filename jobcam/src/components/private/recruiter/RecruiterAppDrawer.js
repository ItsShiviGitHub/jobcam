import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Button, Card, CardContent, Menu, MenuItem, Stack, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { AccountCircle, Dashboard, Shop } from '@mui/icons-material';
import { AuthContext } from '../../../context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Profile from '../../../pages/private/recruiter/pages/Profile';

const drawerWidth = 240;
export default function RecruiterAppDrawer({ children }) {
    const { breakpoints, shape: { borderRadius } } = useTheme()
    const { userLogout, UserInfo } = React.useContext(AuthContext)
    const [open, setOpen] = useState(true);
    const location = useLocation()
    // const [isOpen, setIsOpen] = useState();
    const laptopSize = useMediaQuery(breakpoints.down('xl'))
    const isLarge = useMediaQuery(breakpoints.up('xl'))
    const matchUpMd = useMediaQuery(breakpoints.up('lg'))
    const navigate = useNavigate('');

    // Close the drawer when the screen size is tablet
    useEffect(() => {
        if (laptopSize) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [laptopSize])

    function onLogoutHander() {
        userLogout()
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', flexFlow: 1, flexShrink: 0 }}>
            <CssBaseline />
            <AppBar color='secondary' position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ columnGap: 2 }}>
                    <Stack direction={'row'} columnGap={1} flex={1} alignItems={'center'} justifyContent={'start'}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={open ? handleDrawerClose : handleDrawerOpen}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ textTransform: "uppercase" }} noWrap component="div">
                            Recruiter Panel
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'}>
                        <Button onClick={onLogoutHander} variant='contained' sx={{ bgcolor: 'error.main' }}>Logout</Button>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
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
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <Stack sx={{ width: 200, padding: 3, rowGap: 2 }}>
                                <Card sx={{ justifyContent: 'center', display: "flex" }}>
                                    <CardContent>
                                        <Stack rowGap={2} alignItems={'center'}>
                                            <Tooltip title={UserInfo?.Email}>
                                                <IconButton sx={{ p: 0 }}>
                                                    <Avatar variant='circular'
                                                        sx={{ width: 60, height: 60 }}
                                                        alt="Remy Sharp" src={require('../../../assets/images/recruiter1.jpg')}
                                                    />
                                                </IconButton>
                                            </Tooltip>
                                            <Typography variant='body2'>{UserInfo?.Email}</Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                                <Box sx={{}}>
                                    <MenuItem onClick={handleClose}><Profile /></MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Box>

                            </Stack>
                        </Menu>
                    </Stack>

                </Toolbar>
            </AppBar>

            <Drawer
                variant={matchUpMd ? 'persistent' : 'temporary'}
                open={open}
                onClose={handleDrawerClose}
                ModalProps={{ keepMounted: true }}
                sx={{
                    width: open ? drawerWidth : 0,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth },
                }}
            >
                <Toolbar />

                <Box sx={{ overflow: 'auto' }}>
                    <List
                        sx={{
                            // selected and (selected + hover) states
                            '&& .Mui-selected, && .Mui-selected:hover': {
                                bgcolor: 'secondary.main',
                                // color: 'black',
                                '&, & .MuiListItemIcon-root': {
                                    color: 'background.default',
                                },
                            },
                            // hover states 
                            '& .MuiListItemButton-root:hover': {
                                bgcolor: '',
                                '&, & .MuiListItemIcon-root': {
                                    color: 'secondary.main',
                                },
                                '&, & .ListItemText-root': {
                                    color: 'secondary.main',
                                },
                            },

                        }}
                    >
                        <ListItem>
                            <ListItemButton

                                sx={{ borderRadius: borderRadius }}
                                LinkComponent={Link}
                                to='.'
                                onClick={() => isLarge ? null : setOpen(false)}
                                selected={location.pathname === '/'}
                            >
                                <ListItemIcon>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary={'Dashboard'} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton
                                sx={{ borderRadius: borderRadius }}
                                LinkComponent={Link}
                                to='/jobs'
                                onClick={() => isLarge ? null : setOpen(false)}
                                selected={location.pathname === '/jobs'}
                            >
                                <ListItemIcon>
                                    <Shop />
                                </ListItemIcon>
                                <ListItemText primary={'Jobs Board'} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton
                                sx={{ borderRadius: borderRadius }}
                                LinkComponent={Link}
                                to='/fileuploader'
                                onClick={() => isLarge ? null : setOpen(false)}
                                selected={location.pathname === '/fileuploader'}
                            >
                                <ListItemIcon>
                                    <FileUploadIcon />
                                </ListItemIcon>
                                <ListItemText primary={'ResumeUploader'} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton
                                sx={{ borderRadius: borderRadius }}
                                LinkComponent={Link}
                                to='list'
                                onClick={() => isLarge ? null : setOpen(false)}
                                selected={location.pathname === 'list'}
                            >
                                <ListItemIcon>
                                    <FormatListBulletedIcon />
                                </ListItemIcon>
                                <ListItemText primary={'ListOfResume'} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton
                                sx={{ borderRadius: borderRadius }}
                                LinkComponent={Link}
                                to='resume'
                                onClick={() => isLarge ? null : setOpen(false)}
                                selected={location.pathname === 'resume'}
                            >
                                <ListItemIcon>
                                    <UploadFileIcon />
                                </ListItemIcon>
                                <ListItemText primary={'ResumeForm'} />
                            </ListItemButton>
                        </ListItem>
                    </List>

                </Box>

            </Drawer>

            <Box component="main"
                sx={{ flexGrow: 1, p: 3, transition: '300' }}
            >
                <Toolbar />

                {children}

            </Box>

        </Box>
    );
}
