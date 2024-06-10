import React, { useEffect, useState } from 'react';
import { Box, Tabs, Stack, Tab, Typography, useTheme } from '@mui/material';
import Description from './Description';
import Condidate from './Condidate';
import { useParams } from 'react-router-dom';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const JobDescribe = () => {
    const { spacing } = useTheme();
    const { _id } = useParams();
    const [value, setValue] = React.useState(0);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (_id) {
            setData(data)
        }
    }, [_id])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ pl: spacing(3) }}>
                <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                    <Box>
                        <Typography variant='h5' fontWeight={'bold'}>Agency Manager</Typography>
                        <Typography>TM Inputs & Services Pvt. Ltd.</Typography>
                    </Box>
                    <Typography color={"error"}>Expired</Typography>
                </Stack>
                <Stack>
                    <Typography>FullTime</Typography>
                </Stack>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Description" {...a11yProps(0)} />
                        <Tab label="Condidates" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Description sx={{ backgroundColor: '#d55' }} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Condidate />
                </CustomTabPanel>
            </Box>
        </>
    )
}

export default JobDescribe