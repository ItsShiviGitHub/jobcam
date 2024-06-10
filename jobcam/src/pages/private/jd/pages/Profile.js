import React from 'react';
import { Avatar, Box, Card, CardContent, Container, Divider, Paper, Stack, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Profile = () => {
    return (
        <Container maxWidth="xs">


            <Card sx={{
                m: 2,
                p: 2,
                // marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <CardContent sx={{ alignItems: 'center' }} >
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                    <Typography variant='h5'>Nikhil</Typography>
                    <Divider />
                    <Stack>
                        <Stack direction={'row'} sx={{ justifyContent: 'start' }}>
                            <EmailIcon /><Typography>nikhil123@gmail.com</Typography>
                        </Stack>
                        <Divider />
                        <Stack direction={'row'} sx={{ justifyContent: 'start' }}>
                            <PhoneIcon /><Typography>+91 8876246509</Typography>
                        </Stack>
                        <Divider />
                        <Stack direction={'row'} sx={{ justifyContent: 'start' }}>
                            <LocationOnIcon /><Typography>Noida sector-22,Uttar Pradesh</Typography>
                        </Stack>
                    </Stack>

                </CardContent>
            </Card>

        </Container>
    )
}

export default Profile