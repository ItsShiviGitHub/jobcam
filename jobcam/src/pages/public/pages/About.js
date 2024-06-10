import React from 'react';
import { Box, Button, Grid, Stack, Typography, useTheme } from '@mui/material';
import Img1 from '../../../assets/images/about-01.jpg';
import Img2 from '../../../assets/images/about02.jpg';
// import Img3 from '../../../assets/images/about03.jpg';
import Img4 from '../../../assets/images/recruiter1.jpg';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const { spacing, palette } = useTheme();
    const navigate = useNavigate();


    const handleClick = (event) => {
        event.preventDefault();
        navigate('/')
    }
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${Img2})`,
                height: { md: '50vh', xs: '100%' }, width: '100%',
                outfit: 'cover',
                position: 'relative',
            }}>
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
                    <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: '22px', color: '#FFF', }}>
                        <Button variant='text' sx={{ '&:hover': { background: 'none' }, color: '#FFF', fontWeight: 'normal', fontSize: '22px' }} onClick={handleClick}>
                            Home
                        </Button>
                        <Typography variant='h4' aria-current="page" sx={{ color: '#FFF' }}>
                            About
                        </Typography>
                    </Breadcrumbs>
                </Box>
            </Box>
            <Box sx={{ mx: { md: spacing(20), xs: 0 }, mt: spacing(3) }}>
                <Stack sx={{ my: spacing(3) }}>
                    <Typography variant='h3' style={{ color: palette.primary.main }} sx={{ fontWeight: 'semi-bold', textAlign: 'left', }}>Welcome to our site!</Typography>
                </Stack>
                <Grid xs={12} direction='row' sx={{ display: { lg: 'flex', md: 'flex' }, justifyContent: 'space-between' }}>
                    <Grid item xs={12} md={6}>
                        <Stack sx={{ pr: { md: spacing(10), xs: 0 } }}>
                            <Typography variant='h4' fontWeight={'semi-bold'}>Professional, compliant, knowledgeable and attentive - all words synonymous with us.</Typography>
                            <Box sx={{ pr: spacing(5) }}>
                                <Typography variant='body2' py={spacing(3)}>People come to us because they want, need and expect something that they just won't get from other companies. We haven't earned our reputation of leading company overnight. It has taken years of listening to what contractors and freelancers hunger for - and we deliver it in abundance!</Typography>
                                <Typography variant='body2'>Our service is different to other companies because of our unrivalled expertise, attention to detail and outstanding customer service. Companies come and go but RAD has stood the test of time because we understand our industry and more importantly your needs.</Typography>
                            </Box>
                            <Box sx={{ width: '200px', py: spacing(2) }}> <Button variant={'contained'} onClick={() => navigate('/about')}>Know More</Button></Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack>
                            <Box sx={{ width: { md: '400px', xs: '100%' }, height: '350px', boxShadow: '10px  10px 1px #d50 ' }}><img src={Img1} alt='img1' style={{ height: '100%', width: '100%' }} /></Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{ background: palette.primary.main }} sx={{ mx: { md: spacing(20), xs: 0 }, mt: spacing(3) }}>
                <Grid xs={12} direction='row' sx={{ display: { lg: 'flex', md: 'flex' }, justifyContent: 'space-between' }}>
                    <Grid item xs={12} md={6}>
                        <Stack>
                            <Box sx={{ width: { md: '430px', lg: '430px', xs: '100%', sm: '100%', boxShadow: '-10px  -10px 1px #d50 ' }, height: { md: '75vh', xs: '60vh' } }}><img src={Img4} alt='img1' style={{ height: '100%', width: '100%' }} /></Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ backgroundColor: palette.primary.main }}>
                        <Stack sx={{ py: spacing(3), px: { md: spacing(10), xs: 1 } }}>
                            <Typography variant='h3' style={{ color: palette.secondary.main }} fontWeight={'bold'}>Registering with recruitment agencies directory</Typography>
                            <Box sx={{ color: '#fff', mt: spacing(3), }}>
                                <Box sx={{ pr: { md: spacing(15), xs: 1 } }}>
                                    <Typography variant='h5' py={spacing(2)}>Online Employment File Set-up</Typography>
                                    <Typography variant='body2' >If registering before 16.30 Monday to Friday, your online employment file will be activated the same day. After business hours Monday to Thursday, your online employment file will be activated first thing the following morning.</Typography>
                                </Box>
                                <Box sx={{ pr: { md: spacing(15), xs: 1 } }}>
                                    <Typography variant='h5' py={spacing(2)}>Online Employment File Set-up</Typography>
                                    <Typography variant='body2'>We send you a Starter Pack email shortly after your online employment file has been activated to confirm the processes and what happens next.</Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box >
            <Box style={{ background: palette.primary.deem }} sx={{ mx: { md: spacing(20), xs: 0 } }}>
                <Grid xs={12} direction='row' sx={{ display: { lg: 'flex', md: 'flex' }, justifyContent: 'space-between' }}>
                    <Grid item xs={12} md={6}>
                        <Stack sx={{ p: spacing(3), color: '#fff' }}>
                            <Typography variant='h3' style={{ color: palette.secondary.main }} sx={{ fontWeight: 'bold', textAlign: 'left', }}>Day to day service</Typography>
                            <Box sx={{ pr: { md: spacing(15), xs: 0 }, }}>
                                <Typography variant='h5' py={spacing(2)}>Phone calls</Typography>
                                <Typography variant='body2' >We realise how frustrating platform-based call centres are so a 'real' person always answers the phone within 4 rings.</Typography>
                            </Box>
                            <Box sx={{ pr: { md: spacing(15), xs: 0 } }}>
                                <Typography variant='h5' py={spacing(2)}>Invoices sent same day</Typography>
                                <Typography variant='body2' >Invoices will be sent to the agency (or end client) the same day if your online timesheet is submitted to us before 16.30, Monday to Friday.</Typography>
                            </Box>
                            <Box sx={{ pr: { md: spacing(15), xs: 0 } }}>
                                <Typography variant='h5' py={spacing(2)}>Expense checking</Typography>
                                <Typography variant='body2' >We will monitor your expense claims and provide advice where required.</Typography>
                            </Box>
                            <Box sx={{ pr: { md: spacing(15), xs: 0 } }}>
                                <Typography variant='h5' py={spacing(2)}>Secure Employee area</Typography>
                                <Typography variant='body2' >The employee's area is secured sockets layer so your privacy is guaranteed.</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack>
                            <Box sx={{ width: { md: '430px', lg: '430px', xs: '100%', sm: '100%', boxShadow: '10px  10px 1px #d50 ' }, height: { md: '75vh', xs: '60vh' } }}><img src={Img4} alt='img1' style={{ height: '100%', width: '100%' }} /></Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default About