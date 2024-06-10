import { Box, Button, Card, CardActions, CardContent, Container, CssBaseline, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Jobs = () => {
	const navigate = useNavigate()
	function onGoBackHandler() {
		navigate(-1)
	}
	return (
		<Box>
			<CssBaseline />
			<Container maxWidth='md'>
				<Card>
					<CardContent>
						<Typography variant='h4' color={'success.main'}>My Jobs</Typography>
						<CardActions>
							<Button onClick={onGoBackHandler}>Go Back</Button>
						</CardActions>
					</CardContent>
				</Card>
			</Container>

		</Box>
	)
};

export default Jobs;
