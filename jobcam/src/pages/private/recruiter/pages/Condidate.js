import SearchIcon from '@mui/icons-material/Search';
import LockIcon from '@mui/icons-material/Lock';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { Avatar, Box, Button, Grid, IconButton, OutlinedInput, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

const Condidate = () => {
    const { spacing } = useTheme();
    return (
        <>
            <Box>
                <Grid container >
                    <Grid item md={4} direction={'row'} sx={{ borderRadius: '2px', border: '1px solid #9e9e9e', display: 'flex', alignItems: 'center' }} >
                        <Button>
                            <SearchIcon variant='none' sx={{ background: 'none', color: '#9e9e9e', fontSize: '25px' }} />
                        </Button>
                        <OutlinedInput
                            placeholder="Search by condidate name"
                            size="small"
                            variant="none"
                            fullWidth
                            sx={{ pl: 1 }}
                        />

                    </Grid>
                </Grid>
                <Stack sx={{ py: spacing(2) }}>
                    <Typography>Showing 3 Candidates below</Typography>
                </Stack>
                <Paper elevation={1} sx={{ p: spacing(2) }}>
                    <Stack>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{ pt: spacing(2) }}>
                            <Stack gap={spacing(2)} direction={'row'}>
                                <Avatar sx={{ backgroundColor: 'red' }} >
                                    S
                                </Avatar>
                                <Stack>
                                    <Typography variant='h5'>Suraj Kumar Pandit</Typography>
                                    <Typography>Bhartiaxa Life Insurance</Typography>
                                </Stack>
                            </Stack>
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        </Box>
                        <Stack direction={'row'} alignItems={'center'} gap={spacing(1)} sx={{ py: spacing(2) }}>
                            <Typography sx={{ pl: spacing(7), }}>Current Stage:</Typography>
                            <LockIcon />
                        </Stack>
                    </Stack>

                    <Grid container spacing={2} md={8}>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ pl: spacing(1) }}>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant='h6'>Education</Typography>
                                    <IconButton sx={{ alignSelf: 'baseline' }}>
                                        <SchoolIcon sx={{ color: 'blue', fontSize: 40 }} />
                                    </IconButton>
                                </Stack>
                                <Typography>result Not Found</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ pl: spacing(1) }}>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant='h6'>Experience</Typography>
                                    <IconButton sx={{ alignSelf: 'baseline' }}>
                                        <WorkIcon sx={{ color: 'blue', fontSize: 40 }} />
                                    </IconButton>
                                </Stack>
                                <Typography>4 years</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Typography sx={{ py: spacing(2) }}>Upload: 6 month ago</Typography>
                </Paper>
            </Box>
        </>
    )
}

export default Condidate