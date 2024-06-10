import React from 'react';
import { Box, Card, CardContent, Stack, Typography, useTheme } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { testim } from '../../../apiData/data';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

const Testimonial = () => {
    const { spacing, palette } = useTheme();


    return (
        <Box sx={{ my: spacing(5), mx: { md: spacing(20), xs: 0 } }}>
            <Stack>
                <Typography variant='h5' style={{ color: palette.secondary.main }} sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    OUR TESTIMONIAL
                </Typography>
                <Typography variant='h3' sx={{ fontWeight: 'bold', textAlign: 'center', pt: spacing(2) }} style={{ color: palette.primary.main }}>What They Say</Typography>
                <Typography variant='body2' sx={{ textAlign: 'center', py: spacing(2) }}>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum</Typography>
            </Stack>
            <Splide

                options={{
                    arrows: false,
                    dots: false,
                    type: 'loop',
                    snap: true,
                    cover: true,
                    drag: 'free',
                    perPage: {
                        600: 1,
                        768: 2,
                        900: 3,
                        1480: 3,
                    },
                    autoplay: true,
                }}
            >
                {testim.map((testm, index) => (
                    <SplideSlide key={index} >
                        <Stack direction={'row'} alignItems={'center'} sx={{ m: 1 }}>
                            <Box sx={{ height: { xs: '80px', md: '80px' }, width: { xs: '80px', md: '80px' } }}>
                                <img
                                    src={testm.image}
                                    alt={testm.alt}
                                    style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                                />
                            </Box>
                            <Box px={spacing(2)}>
                                <Typography variant='h5' fontWeight={'bold'} style={{ color: palette.primary.main }}>{testm.name}</Typography>
                                <Typography variant='h6' style={{ color: palette.primary.main }}>{testm.role}</Typography>
                            </Box>
                        </Stack>
                        <Card sx={{ height: { md: '170px' }, width: { xs: '350px' }, m: 1, borderBottom: '3px solid #d55' }}>
                            <CardContent >
                                <Box px={spacing(1)}>
                                    <FormatQuoteRoundedIcon style={{ color: palette.secondary.main }} sx={{ fontSize: '50px' }} />
                                    <Typography px={spacing(2)} style={{ color: palette.primary.main }}>{testm.text}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </SplideSlide>
                ))
                }
            </Splide >
        </Box >
    );
};

export default Testimonial;
