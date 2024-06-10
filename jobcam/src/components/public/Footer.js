import React from 'react'
import { Grid, Stack, Box, Typography, OutlinedInput, Divider, Button, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOutlinedOnIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Spirale from '../../assets/images/spirale_logo.png';

const Footer = () => {
    const { spacing, palette } = useTheme();
    return (
        <>
            {/* footer */}
            <Box sx={{ px: { md: spacing(20), xs: 2 }, py: spacing(3), mt: spacing(1), backgroundColor: '#161C26', }}>
                <Grid container direction="row" sx={{ display: { xs: 'block', md: 'flex', sm: 'block', lg: 'flex' }, gap: 8, justifyContent: 'space-between', alignItems: "center" }}>
                    <Grid item xs={12} md={2}>
                        <Stack sx={{ my: 1, height: { md: '300px', lg: '300px', xs: '100%' }, width: '250px', }}>
                            <Box sx={{ width: '85px' }}><img src={Spirale} alt='spirale' style={{ height: '100%', width: '100%' }} /></Box>
                            <Divider sx={{ my: 1, }} />
                            <Typography variant={'p'} sx={{ textAlign: 'left', color: '#bdbdbd', my: 1, pr: 5 }} color="initial">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sit eaque maxime nesciunt quasi consectetur facere eveniet molestiae voluptatem ex.</Typography>
                            <Box sx={{ width: '180px', display: 'flex', alignItems: 'center', gap: 2, my: 1, backgroundColor: '#222C40' }}>
                                <Box sx={{ backgroundColor: '#fdfdfd', p: 1 }}> <CallOutlinedIcon style={{ color: palette.primary.main }} sx={{ fontSize: '40px' }} /></Box>
                                <Stack>
                                    <Typography variant='h4' style={{ color: palette.secondary.main }}>Phone</Typography>
                                    <Link style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }} to="tel:6393351817">6393351817</Link>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Stack sx={{ my: 1, height: { md: '300px', lg: '300px', xs: '100%' }, width: { md: '200px', xs: '100%' } }}>
                            <Typography sx={{ color: '#fdfdfd', fontWeight: 'bold', }} variant={'h6'}>Explore</Typography>
                            <Divider sx={{ my: 1, }} />
                            <Box sx={{ listStyle: 'none', gap: '10px', my: 1 }}>
                                <Link to={'/'} style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }}><ChevronRightIcon sx={{ pr: 1, }} />About  </Link>
                                <Link to={'/about'} style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }}><ChevronRightIcon sx={{ pr: 1, }} />My Account </Link>
                                <Link to={'services/'} style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }}><ChevronRightIcon sx={{ pr: 1, }} />Upload Resume </Link>
                                <Link to={'/contact'} style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }}><ChevronRightIcon sx={{ pr: 1, }} />Pricing Package</Link>
                                <Link to={'services/'} style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }}><ChevronRightIcon sx={{ pr: 1, }} />User Dashboard</Link>
                                <Link to={'/contact'} style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }}><ChevronRightIcon sx={{ pr: 1, }} />FAQs  </Link>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Stack sx={{ my: 1, height: { md: '300px', lg: '300px', xs: '100%' }, width: { md: '250px', xs: '100%' } }}>
                            <Typography sx={{ color: '#fdfdfd', fontWeight: 'bold', }} variant={'h6'}>Information</Typography>
                            <Divider sx={{ my: 1, }} />
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1, }}>
                                <Box sx={{ p: 1 }}> <CallOutlinedIcon style={{ color: '#222C40' }} sx={{ fontSize: '40px' }} /></Box>
                                <Stack>
                                    <Typography variant='h5' style={{ color: palette.secondary.main }}>Phone Number</Typography>
                                    <Link style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }} to="tel:6393351817">+91 (1234) 567890</Link>
                                </Stack>
                            </Box>
                            <Divider sx={{ backgroundColor: '#fff' }} />
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1, }}>
                                <Box sx={{ p: 1 }}> <EmailOutlinedIcon style={{ color: '#222C40' }} sx={{ fontSize: '40px' }} /></Box>
                                <Stack>
                                    <Typography variant='h5' style={{ color: palette.secondary.main }}>Email</Typography>
                                    <Link style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }} to="tel:6393351817">abcsd@gmail.com</Link>
                                </Stack>
                            </Box>
                            <Divider sx={{ backgroundColor: '#fff' }} />
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1, }}>
                                <Box sx={{ p: 1 }}> <LocationOutlinedOnIcon style={{ color: '#222C40' }} sx={{ fontSize: '40px' }} /></Box>
                                <Stack>
                                    <Typography variant='h5' style={{ color: palette.secondary.main }}>Office Address</Typography>
                                    <Link style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }} to="tel:6393351817">Bhavani Market Noida Sector 18</Link>
                                </Stack>
                            </Box>
                            <Divider sx={{ backgroundColor: '#fff' }} />
                        </Stack>
                    </Grid>
                    <Grid xs={12} md={3}>
                        <Box sx={{ my: 1, height: { md: '300px', lg: '300px', xs: '100%' }, }}>
                            <Typography sx={{ color: '#fdfdfd', fontWeight: 'bold', }} variant={'h6'}>NEWSLATTERS</Typography>
                            <Divider sx={{ my: 1, }} />
                            <Typography variant={'p'} sx={{ width: '310px', textAlign: 'left', color: '#bdbdbd', my: 1, py: 1 }}>Sign up for free weekly newsletter. Don't miss a thing.</Typography>
                            <Stack direction="column" sx={{ my: 2 }}>
                                <OutlinedInput sx={{ borderRadius: '1px 0 0 1px ', border: '1px solid #eee', color: '#fdfdfd', outLine: 'none' }}
                                    type="email"
                                    size="small"
                                    placeholder="Enter your email "
                                    fullWidth
                                />
                                <Button size="small" variant="contained" sx={{ my: 2, py: 1, borderRadius: '0 1px 1px 0', border: '1px solid #eee', color: '#ffffff', backgroundColor: '#222C40' }}>Subscribe</Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ backgroundColor: '#fff' }} />
                <Stack sx={{ justifyContent: 'space-between', display: 'flex', direction: { md: 'row', xs: 'column' }, my: spacing(2), alignItems: 'center' }} >
                    <Typography variant="p" textAlign='left' style={{ color: palette.secondary.main }}>© 2023 ShoppingHub. All rights reserved | Designed by amitkumar</Typography>
                    <Stack direction="row" sx={{ display: 'flex', alignItems: 'center' }}>
                        <FacebookIcon to="https://www.facebook.com/profile.php?id=100017834436266" sx={{ '&:hover': { transform: 'scale(1.1)' }, tranaition: 'all linear 0.5s ease', cursor: 'pointer', fontSize: '30px', color: '#fdfdfd', my: 2, mx: 1 }} />
                        <YouTubeIcon to="https://www.youtube.com/@amit_web_dev" sx={{ '&:hover': { transform: 'scale(1.1)' }, tranaition: 'all linear 0.5s ease', cursor: 'pointer', fontSize: '35px', color: '#fdfdfd', my: 2, mx: 1 }} />
                        <TwitterIcon sx={{ '&:hover': { transform: 'scale(1.1)' }, tranaition: 'all linear 0.5s ease', cursor: 'pointer', fontSize: '30px', color: '#fdfdfd', my: 2, mx: 1 }} />
                        <InstagramIcon to="https://www.linkedin.com/in/amit-kumar-492795290" sx={{ '&:hover': { transform: 'scale(1.1)' }, tranaition: 'all linear 0.5s ease', cursor: 'pointer', fontSize: '30px', color: '#fdfdfd', my: 2, mx: 1 }} />
                    </Stack>
                </Stack>
            </Box >
        </>
    )
}

export default Footer;