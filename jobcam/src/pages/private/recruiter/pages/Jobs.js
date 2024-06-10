import { Box, Grid } from '@mui/material';
import React from 'react';
import JobsSearch from './JobsSearch';
import JobDescribe from './JobDescribe';

const Jobs = () => {


	return (
		<Box>
			<Grid container spacing={1}>
				<Grid items xs={12} md={3}><JobsSearch /></Grid>
				<Grid items xs={12} md={9}><JobDescribe /></Grid>
			</Grid>
		</Box>
	)
};

export default Jobs;
