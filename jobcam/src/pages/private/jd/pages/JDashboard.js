import React from 'react';

import { Card, CardContent, Typography, Grid, Divider, IconButton, Stack } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ReplyIcon from '@mui/icons-material/Reply';
import Groups3Icon from '@mui/icons-material/Groups3';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useTheme } from '@emotion/react';
import { BarChart } from './BarChart';
import { PieChart } from './PieChart';



const JDashboard = () => {
    const { spacing } = useTheme();

    return (
        <>

            <Grid container spacing={2}>
                <Grid md={6} xs={12} display={'flex'} direction={'column'} marginTop={1} >
                    <Grid item md={3} xs={12} marginLeft={1} sx={{ display: { md: 'flex', xs: 'flex' }, direction: { md: 'row', xs: 'columns' } }}>
                        <Card sx={{ minWidth: 49 + '%', height: 120, m: 1 }} >
                            <CardContent>
                                <Stack direction={'row'} justifyContent={'space-between'}>
                                    <IconButton sx={{ alignSelf: 'baseline' }}>
                                        < BusinessCenterIcon sx={{
                                            color: 'blue', fontSize: 40,
                                            transition: 'all 0.3s',
                                            "&:hover": {
                                                transform: 'scale(1.1)'
                                            }
                                        }} />
                                    </IconButton>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <Stack>
                                        <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>10</Typography>
                                        <Typography sx={{ fontSize: 10, fontWeight: 'bold' }}>Total Applied cJob</Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 49 + '%', height: 120, m: 1 }}>
                            <CardContent>
                                <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                                    <IconButton sx={{ alignSelf: 'baseline' }}>
                                        <ReplyIcon sx={{
                                            color: 'blue', fontSize: 40,
                                            transition: 'all 0.3s',
                                            "&:hover": {
                                                transform: 'scale(1.1)'
                                            }
                                        }} />
                                    </IconButton>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <Stack>
                                        <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>25</Typography>
                                        <Typography sx={{ fontSize: 10, fontWeight: 'bold' }}>Application Answeblue</Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} marginLeft={1} xs={12} sx={{ display: { md: 'flex', xs: 'flex' }, direction: { md: 'row', xs: 'columns' } }}>
                        <Card sx={{ minWidth: 49 + '%', height: 120, m: 1 }}>
                            <CardContent>
                                <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                                    <IconButton sx={{ alignSelf: 'baseline' }}>
                                        < Groups3Icon sx={{
                                            color: 'blue', fontSize: 40,
                                            transition: 'all 0.3s',
                                            "&:hover": {
                                                transform: 'scale(1.1)'
                                            }
                                        }} />
                                    </IconButton>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <Stack>
                                        <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>225</Typography>
                                        <Typography sx={{ fontSize: 10, fontWeight: 'bold' }}>Interviewed Job</Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 49 + '%', height: 120, m: 1 }}>
                            <CardContent>
                                <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                                    <IconButton sx={{ alignSelf: 'baseline' }}>
                                        < PersonAddIcon sx={{
                                            color: 'blue', fontSize: 40,
                                            transition: 'all 0.3s',
                                            "&:hover": {
                                                transform: 'scale(1.1)'
                                            }
                                        }} />
                                    </IconButton>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <Stack>
                                        <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>8</Typography>
                                        <Typography sx={{ fontSize: 10, fontWeight: 'bold' }}>Hired Job</Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Card sx={{ minWidth: 49 + '%', height: 256, ml: { md: 1, xs: 0 } }} >
                        <CardContent>

                            <PieChart />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={2} marginTop={1}>
                <Grid item md={7} xs={12}>
                    <Card sx={{ minWidth: 49 + '%', height: 55 + 'vh', }}>
                        <CardContent>
                            <BarChart />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={5} xs={12}>
                    <Card sx={{ minWidth: 49 + '%', height: 55 + 'vh', }}>
                        <CardContent>
                            {/* <PieChart /> */}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </ >

    )
}

export default JDashboard