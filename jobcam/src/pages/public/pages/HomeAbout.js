import React from 'react';
import { Box, Button, Card, CardContent, Grid, Stack, Divider, Typography, useTheme, Paper } from '@mui/material';
import Img1 from '../../../assets/images/recruiter3.png';
import Img2 from '../../../assets/images/slider5.jpg';
import { useNavigate } from 'react-router-dom';
import NewButton from '../../NewButton';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CountUp from 'react-countup';

const HomeAbout = () => {
    const { spacing, palette } = useTheme();
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ mx: { md: spacing(20), xs: 0 }, py: spacing(4) }}>
                <Grid xs={12} direction='row' sx={{ display: { lg: 'flex', md: 'flex' }, justifyContent: 'space-between' }}>
                    <Grid item xs={12} md={6}>
                        <Stack sx={{ pr: { md: spacing(15), xs: 0 } }}>
                            <Typography variant='h4' fontWeight={'bold'}>Employment opportunities for Professionals</Typography>
                            <Box sx={{ pr: { md: spacing(20), xs: 0 } }}>
                                <Typography variant='body2' py={spacing(3)}>Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac.</Typography>
                                <Typography variant='body2'>Lorem Ipsum convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac.</Typography>
                            </Box>
                            <Box sx={{ width: '200px', py: spacing(2) }}> <Button variant={'contained'} onClick={() => navigate('/about')}>Know More</Button></Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack>
                            <Box sx={{ width: { md: '400px', xs: '100%' }, height: '350px', boxShadow: '10px  10px 1px #d50 ' }}><img src={Img1} alt='img1' style={{ height: '100%', width: '100%' }} /></Box>
                        </Stack>
                    </Grid>
                </Grid>
                <Box sx={{
                    backgroundImage: `url(${Img2})`,
                    height: { md: '60vh', xs: '50vh' }, width: '100%',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    position: 'relative',
                    mt: { md: spacing(15), xs: spacing(5) }
                }}>
                    <Box sx={{
                        position: 'absolute', width: '100%', height: '100%', background: ' rgba(0,0,0,0.5)'
                    }}>
                        <Typography variant='h4' style={{ color: palette.secondary.main }} sx={{ color: '#FFF', fontWeight: 'bold', textAlign: 'center', px: { md: spacing(25), xs: 0 }, pt: { md: spacing(10), xs: spacing(3) }, }}>Whether we play a large or small role, by working together we achieve our objectives.</Typography>
                        <Typography variant='body1' textAlign='center' sx={{ color: '#FFF', py: spacing(3) }}>We Offer Free Job Postings for Employers</Typography>
                        <Box display={'flex'} justifyContent={'center'} py={spacing(3)}>
                            <NewButton variant={'contained'} style={{ background: palette.primary.main }}>Find Out More</NewButton>
                        </Box>
                    </Box>
                </Box>
                <Paper elevation={2} sx={{ mt: { md: '-100px', xs: 0 }, mx: { md: 4, xs: 0 }, overflow: 'hidden', position: 'relative', borderTop: '10px solid #d50' }}>
                    <Grid container justifyContent={'space-between'} display={'flex'}>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Card elevation={0} sx={{ borderRight: '2px solid #f5f5f5', my: 3 }}>
                                <CardContent>
                                    <Stack display={'flex'} alignItems={'center'} gap={spacing(3)} direction={'row'} justifyContent={'center'}>
                                        <Box sx={{
                                            backgroundColor: '#ffcdd2', opacity: 50, position: 'relative', height: '60px', width: '60px', borderRadius: '10%'
                                        }}>
                                            <PublicRoundedIcon sx={{ color: '#fff', backgroundColor: '#d50', position: 'absolute', top: 8, left: 10, p: 2, borderRadius: '10%', height: '30px', width: '30px', }} />
                                        </Box>
                                        <Box fontStyle={{ color: palette.primary.main }} sx={{ p: spacing(1), textAlign: 'center' }}>
                                            <Typography variant='h6' fontWeight={'bold'}>Countries</Typography>
                                            <Typography variant='h4' fontWeight={'bold'}><CountUp start={0} end={78} />+</Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>
                                <Divider orientation="vertical" variant="middle" flexItem />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Card elevation={0} sx={{ borderRight: '2px solid #f5f5f5', my: 3 }}>
                                <CardContent>
                                    <Stack display={'flex'} alignItems={'center'} gap={spacing(3)} direction={'row'} justifyContent={'center'}>
                                        <Box sx={{
                                            backgroundColor: '#ffcdd2', opacity: 50, position: 'relative', height: '60px', width: '60px', borderRadius: '10%'
                                        }}>
                                            <BusinessCenterRoundedIcon sx={{ color: '#fff', backgroundColor: '#d50', position: 'absolute', top: 8, left: 10, p: 2, borderRadius: '10%', height: '30px', width: '30px', }} />
                                        </Box>
                                        <Box fontStyle={{ color: palette.primary.main }} sx={{ p: spacing(1), textAlign: 'center' }}>
                                            <Typography variant='h6' fontWeight={'bold'}>Total Jobs</Typography>
                                            <Typography variant='h4' fontWeight={'bold'}><CountUp start={0} end={101} />+</Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>
                                <Divider orientation="vertical" variant="middle" flexItem />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Card elevation={0} sx={{ borderRight: '2px solid #f5f5f5', my: 3 }}>
                                <CardContent>
                                    <Stack display={'flex'} alignItems={'center'} gap={spacing(3)} direction={'row'} justifyContent={'center'}>
                                        <Box sx={{
                                            backgroundColor: '#ffcdd2', opacity: 50, position: 'relative', height: '60px', width: '60px', borderRadius: '10%'
                                        }}>
                                            <LocationCityRoundedIcon sx={{ color: '#fff', backgroundColor: '#d50', position: 'absolute', top: 8, left: 10, p: 2, borderRadius: '10%', height: '30px', width: '30px', }} />
                                        </Box>
                                        <Box fontStyle={{ color: palette.primary.main }} sx={{ p: spacing(1), textAlign: 'center' }}>
                                            <Typography variant='h6' fontWeight={'bold'}>Employers</Typography>
                                            <Typography variant='h4' fontWeight={'bold'}><CountUp start={0} end={146} />+</Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>
                                <Divider orientation="vertical" variant="middle" flexItem />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Card elevation={0} sx={{ borderRight: '2px solid #f5f5f5', my: 3 }}>
                                <CardContent>
                                    <Stack display={'flex'} alignItems={'center'} gap={spacing(3)} direction={'row'} justifyContent={'center'}>
                                        <Box sx={{
                                            backgroundColor: '#ffcdd2', opacity: 50, position: 'relative', height: '60px', width: '60px', borderRadius: '10%'
                                        }}>
                                            <AccountCircleRoundedIcon sx={{ color: '#fff', backgroundColor: '#d50', position: 'absolute', top: 8, left: 10, p: 2, borderRadius: '10%', height: '30px', width: '30px', }} />
                                        </Box>
                                        <Box fontStyle={{ color: palette.primary.main }} sx={{ p: spacing(1), textAlign: 'center' }}>
                                            <Typography variant='h6' fontWeight={'bold'}>Condidates</Typography>
                                            <Typography variant='h4' fontWeight={'bold'}><CountUp start={0} end={1230} />+</Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>

            </Box >
        </>
    )
}

export default HomeAbout