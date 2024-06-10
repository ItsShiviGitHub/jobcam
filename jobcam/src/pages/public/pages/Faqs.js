import { Box, Grid, Stack, useTheme } from '@mui/material'
import React from 'react';
import Img2 from '../../../assets/images/faqs1.jpg';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

const Faqs = () => {
    const { spacing, palette } = useTheme();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Box sx={{ mx: { md: spacing(20), xs: 0 } }}>
                <Stack>
                    <Typography variant='h3' style={{ color: palette.secondary.main }} sx={{ fontWeight: 'bold', textAlign: 'center', p: spacing(3) }}>FAQS</Typography>
                    <Typography variant='h4' sx={{ textAlign: 'left', py: spacing(2) }}>Frequently Asked Questions</Typography>
                </Stack>
                <Grid xs={12} direction='row' sx={{ display: { lg: 'flex', md: 'flex' }, justifyContent: 'space-between' }}>
                    <Grid item xs={6}>
                        <Stack sx={{ pr: spacing(1), mt: spacing(1) }}>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary style={{ backgroundColor: palette.secondary.main }}
                                    expandIcon={expanded === 'panel1' ? <RemoveRoundedIcon size="small" sx={{ color: '#fff' }} /> : <AddRoundedIcon size="small" sx={{ color: '#fff' }} />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography variant='h5' sx={{ color: '#fff' }}>
                                        General settings
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='p'>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* Add more Accordion items similarly */}
                        </Stack>
                        <Stack sx={{ pr: spacing(1), mt: spacing(1) }}>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary style={{ backgroundColor: palette.secondary.main }}
                                    expandIcon={expanded === 'panel2' ? <RemoveRoundedIcon size="small" sx={{ color: '#fff' }} /> : <AddRoundedIcon size="small" sx={{ color: '#fff' }} />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography variant='h5' sx={{ color: '#fff' }}>
                                        General settings
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='p'>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* Add more Accordion items similarly */}
                        </Stack>
                        <Stack sx={{ pr: spacing(1), mt: spacing(1) }}>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary style={{ backgroundColor: palette.secondary.main }}
                                    expandIcon={expanded === 'panel3' ? <RemoveRoundedIcon size="small" sx={{ color: '#fff' }} /> : <AddRoundedIcon size="small" sx={{ color: '#fff' }} />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography variant='h5' sx={{ color: '#fff' }}>
                                        General settings
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='p'>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Stack>
                        <Stack sx={{ pr: spacing(1), mt: spacing(1) }}>
                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary style={{ backgroundColor: palette.secondary.main }}
                                    expandIcon={expanded === 'panel4' ? <RemoveRoundedIcon size="small" sx={{ color: '#fff' }} /> : <AddRoundedIcon size="small" sx={{ color: '#fff' }} />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography variant='h5' sx={{ color: '#fff' }}>
                                        General settings
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='p'>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* Add more Accordion items similarly */}
                        </Stack>
                        <Stack sx={{ pr: spacing(1), mt: spacing(1) }}>
                            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary style={{ backgroundColor: palette.secondary.main }}
                                    expandIcon={expanded === 'panel5' ? <RemoveRoundedIcon size="small" sx={{ color: '#fff' }} /> : <AddRoundedIcon size="small" sx={{ color: '#fff' }} />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography variant='h5' sx={{ color: '#fff' }}>
                                        General settings
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='p'>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* Add more Accordion items similarly */}
                        </Stack>
                        <Stack sx={{ pr: spacing(1), mt: spacing(1) }}>
                            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary style={{ backgroundColor: palette.secondary.main }}
                                    expandIcon={expanded === 'panel6' ? <RemoveRoundedIcon size="small" sx={{ color: '#fff' }} /> : <AddRoundedIcon size="small" sx={{ color: '#fff' }} />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography variant='h5' sx={{ color: '#fff' }}>
                                        General settings
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='p'>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* Add more Accordion items similarly */}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack>
                            <Box sx={{ width: { md: '400px', xs: '100%' }, height: '350px', boxShadow: '10px 10px 1px #d50 ' }}><img src={Img2} alt='img1' style={{ height: '100%', width: '100%' }} /></Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Faqs
