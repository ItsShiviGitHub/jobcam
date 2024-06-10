import React from 'react';
import Img1 from '../../../assets/images/contact5.png';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MapIcon from '@mui/icons-material/Map';
import HeadsetIcon from '@mui/icons-material/Headset';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Box, Button, Card, CardContent, Divider, Grid, Paper, Stack, TextField, Typography, useTheme } from '@mui/material';

const Contact = () => {
    const { spacing, palette } = useTheme();
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        navigate('/');
    };

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${Img1})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '50vh',
                    position: 'relative',
                    mt: spacing(1),
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        width: { md: '100%', xs: '100%' },
                        height: { md: '100%', xs: '100%' },
                        background: 'rgba(0,0,0,0.4)', display: 'flex',

                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Breadcrumbs
                        aria-label="breadcrumb"
                        sx={{ fontSize: '22px', color: '#FFF' }}
                    >
                        <Button
                            variant="text"
                            sx={{
                                '&:hover': { background: 'none' },
                                color: '#FFF',
                                fontWeight: 'normal',
                                fontSize: '22px',
                            }}
                            onClick={handleClick}
                        >
                            Home
                        </Button>
                        <Typography
                            variant="h4"
                            aria-current="page"
                            sx={{ color: '#FFF' }}
                        >
                            Contact
                        </Typography>
                    </Breadcrumbs>
                </Box>
            </Box>
            <Box sx={{ px: { md: spacing(20), lg: spacing(20), sm: 0, xs: 0 }, py: spacing(5), backgroundColor: '#fff' }}>
                <Paper elevation={2} p={spacing(3)}>
                    <Grid container spacing={2} justifyContent={'space-between'} display={'flex'}>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Card elevation={0} sx={{ px: 5, borderRight: '2px solid #f5f5f5', mb: 2 }}>
                                <CardContent>
                                    <Stack display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                        <Box sx={{
                                            backgroundColor: '#ffcdd2', opacity: 50, position: 'relative', height: '80px', width: '80px', borderRadius: '50%'
                                        }}>
                                            <MapIcon sx={{ color: '#fff', backgroundColor: '#d50', position: 'absolute', top: 8, left: 10, p: 2, borderRadius: '50%', height: '45px', width: '45px', }} />
                                        </Box>
                                    </Stack>
                                    <Box fontStyle={{ color: palette.primary.main }} sx={{ p: spacing(3), textAlign: 'center' }}>
                                        <Typography variant='h5' fontWeight={'bold'}>Visit Us Anytime</Typography>
                                        <Typography>Bhavani Market ,Third Flour</Typography>
                                        <Typography>Noida Sector 18</Typography>
                                    </Box>
                                </CardContent>
                                <Divider orientation="vertical" variant="middle" flexItem />
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Card elevation={0} sx={{ px: 5, borderRight: '2px solid #f5f5f5', mb: 2 }}>
                                <CardContent>
                                    <Stack display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                        <Box sx={{
                                            backgroundColor: '#ffcdd2', opacity: 50, position: 'relative', height: '80px', width: '80px', borderRadius: '50%'
                                        }}>
                                            <DraftsIcon sx={{ color: '#fff', backgroundColor: '#d50', position: 'absolute', top: 8, left: 10, p: 2, borderRadius: '50%', height: '45px', width: '45px', }} />
                                        </Box>
                                    </Stack>
                                    <Box fontStyle={{ color: palette.primary.main }} sx={{ p: spacing(3), textAlign: 'center' }}>
                                        <Typography variant='h5' fontWeight={'bold'}>Send a Email</Typography>
                                        <Typography>support@example.com</Typography>
                                        <Typography>example.com</Typography>
                                    </Box>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Card elevation={0} sx={{ px: 5 }}>
                                <CardContent>
                                    <Stack display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                        <Box sx={{
                                            backgroundColor: '#ffcdd2', opacity: 50, position: 'relative', height: '80px', width: '80px', borderRadius: '50%'
                                        }}>
                                            <HeadsetIcon sx={{ color: '#fff', backgroundColor: '#d50', position: 'absolute', top: 8, left: 10, p: 2, borderRadius: '50%', height: '45px', width: '45px', }} />
                                        </Box>
                                    </Stack>
                                    <Box fontStyle={{ color: palette.primary.main }} sx={{ p: spacing(3), textAlign: 'center' }}>
                                        <Typography variant='h5' fontWeight={'bold'}>Phone Us</Typography>
                                        <Typography>+012 (345) 78967</Typography>
                                        <Typography>+98653222</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </Box >
            <Box sx={{ px: { md: spacing(20), xs: 0 }, py: spacing(5), backgroundColor: '#fff' }}>
                <Grid xs={12} direction='row' sx={{ display: { lg: 'flex', md: 'flex' }, justifyContent: 'space-between' }}>
                    <Grid item xs={2} md={2}>
                        <Stack sx={{ width: { md: '50%', sm: '100%', xs: '100' } }}>
                            <Typography variant='h4' fontWeight={'bold'} style={{ color: palette.secondary.main }}>CONTACT US</Typography>
                            <Box sx={{ mt: spacing(3) }} >
                                <Typography variant='h3' fontWeight={'bold'}>How Can We Help You?</Typography>
                                <Typography sx={{ my: spacing(3) }} variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporeum dicant partem scripserit, doctus appetere interpretaris.</Typography>
                            </Box>
                            <Stack direction="row" sx={{ display: 'flex', alignItems: 'center' }}>
                                <FacebookIcon to="https://www.facebook.com/profile.php?id=100017834436266" sx={{ '&:hover': { color: '#D84315', transform: 'scale(1.1)' }, tranaition: 'all linear 0.5s ease', cursor: 'pointer', fontSize: '30px', color: '#1A237E', my: 2, mx: 1 }} />
                                <YouTubeIcon to="https://www.youtube.com/@amit_web_dev" sx={{ '&:hover': { color: '#D84315', transform: 'scale(1.1)' }, tranaition: 'all linear 0.5s ease', cursor: 'pointer', fontSize: '35px', color: '#1A237E', my: 2, mx: 1 }} />
                                <TwitterIcon sx={{ '&:hover': { color: '#D84315', transform: 'scale(1.1)' }, tranaition: 'all linear 0.5s ease', cursor: 'pointer', fontSize: '30px', color: '#1A237E', my: 2, mx: 1 }} />
                                <InstagramIcon to="https://www.linkedin.com/in/amit-kumar-492795290" sx={{ '&:hover': { color: '#D84315', transform: 'scale(1.1)' }, tranaition: 'all linear 0.5s ease', cursor: 'pointer', fontSize: '30px', color: '#1A237E', my: 2, mx: 1 }} />
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <Box sx={{ width: '100%', pr: spacing(20) }}>
                            <Stack direction={'row'} gap={spacing(3)}>
                                <TextField
                                    margin="normal"
                                    required
                                    type='text'
                                    fullWidth
                                    id="text"
                                    label="name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    sx={{ backgroundColor: '#e8eaf6' }}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    sx={{ backgroundColor: '#e8eaf6' }}
                                />
                            </Stack>
                            <Stack direction={'row'} gap={spacing(3)}>
                                <TextField
                                    margin="normal"
                                    required
                                    type='number'
                                    fullWidth
                                    id="phone"
                                    label="Phone Number"
                                    name="phone"
                                    autoComplete="phone"
                                    autoFocus
                                    sx={{ backgroundColor: '#e8eaf6' }}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    type='text'
                                    fullWidth
                                    id="subject"
                                    label="subject"
                                    name="subject"
                                    autoComplete="subject"
                                    autoFocus
                                    sx={{ backgroundColor: '#e8eaf6' }}
                                />
                            </Stack>
                            <Stack direction={'row'} gap={spacing(3)}>
                                <TextField
                                    margin="normal"
                                    required
                                    rows={10}
                                    aria-colcount={10}
                                    fullWidth
                                    multiline  // Set multiline prop to true
                                    id="message"
                                    label="Message here..."
                                    name="message"
                                    autoComplete="message"
                                    autoFocus
                                    sx={{ backgroundColor: '#e8eaf6' }}
                                />
                            </Stack>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Send Your Message
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box >
        </>
    );
};

export default Contact;
