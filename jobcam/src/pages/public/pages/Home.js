import React from 'react';
import { Box } from '@mui/material'
import Hero from './Hero.js';
import Faqs from './Faqs.js';
import Newletter from './Newletter.js';
import Testimonial from './Testimonial.js'
import HomeAbout from './HomeAbout.js';
const Home = () => {
	return (
		<>

			<Box mt={2} >
				<Hero />
			</Box>
			<Box mt={2} >
				<HomeAbout />
			</Box>
			<Box mt={2}>
				<Faqs />
			</Box>
			<Box mt={2}>
				<Newletter />
			</Box>
			<Box mt={2}>
				<Testimonial />
			</Box>

		</>
	)
}

export default Home;

