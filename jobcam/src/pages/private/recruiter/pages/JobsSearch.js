import React, { useEffect, useState } from 'react';
import { Box, Paper, Stack, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../../../reduxSlice/jdSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { getFilteredData } from './../../../../reduxSlice/jdSlice';


const JobsSearch = (deepdata) => {
    const navigate = useNavigate();
    const { _id } = useParams();
    const { spacing } = useTheme();
    const [id, setId] = useState(null);
    const dispatch = useDispatch();


    const { userData } = useSelector(
        (state) => state.JD
    );
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch])

    console.log(deepdata)

    function DeepHandle(data) {

        // getFilteredData(data)
    }

    return (
        <>
            <Box>
                <Stack>
                    <Typography variant='h6' fontWeight={'bold'}>Job Filter</Typography>
                </Stack>
                {userData.map((job, index) => (
                    <Paper key={index} elevation={1} sx={{ mt: spacing(2), overflowY: 'none' }} onClick={() => DeepHandle(job._id)}>
                        <Stack sx={{ pt: spacing(1), px: spacing(2), '&:hover': { backgroundColor: '#e8eaf6' } }}>
                            <Typography variant='h6' fontWeight={'semi-bold'}>{job.jobTitle}</Typography>
                            <Typography variant='body2'>{job.location}</Typography>
                            <Typography variant='body1'>{job.startDate}</Typography>
                            <Typography variant='body1'>{job._id}</Typography>
                        </Stack>


                    </Paper>
                ))}

            </Box >
        </>

    )
}

export default JobsSearch