import { Box, Stack, useTheme, Typography, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import Img2 from '../../../assets/images/newsletter3.jpg';
import NewButton from '../../NewButton';

const Newletter = () => {
    const { spacing, palette } = useTheme();
    const [newLetter, setNewsLetter] = useState("");

    const handleChange = (e) => {
        e.preventDefault()
        setNewsLetter();
    }
    return (
        <Box sx={{ mx: { md: spacing(20), xs: 0 } }}>
            <Box sx={{
                backgroundImage: `url(${Img2})`,
                height: { md: '60vh', xs: '60vh' }, width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',

            }}>
                <Box sx={{
                    position: 'absolute', width: '100%', height: '100%', background: ' rgba(0,0,0,0.3)'
                }}>
                    <Stack>
                        <Typography variant='h3' style={{ color: palette.secondary.main }} sx={{ fontWeight: 'bold', textAlign: 'center', p: spacing(5) }}>NewsLetter</Typography>
                        <Typography variant='h6' sx={{ color: '#FFF', textAlign: 'center', fontWeight: 'normal', px: { md: spacing(20), xs: 0 }, py: { md: spacing(3), xs: 0 }, letterSpacing: 2 }}>Keep up with our always upcoming news and updates. Enter your e-mail and subscribe to our newsletter</Typography>
                        <Stack direction={'row'} sx={{ px: { md: spacing(30), xs: spacing(2) }, justifyContent: 'center', py: spacing(2) }}>
                            <OutlinedInput style={{ color: palette.primary.main }} sx={{ background: ' rgba(250,250,250,0.9)', fontSize: 20, fontWeight: 'normal' }}
                                size='small'
                                type='search'
                                value={newLetter}
                                onChange={handleChange}
                                aria-placeholder='Your email'
                                fullWidth
                            />
                            <NewButton variant={'contained'} style={{ background: palette.primary.main }}>subscribe</NewButton>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default Newletter