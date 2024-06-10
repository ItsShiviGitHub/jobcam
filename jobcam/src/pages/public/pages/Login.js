import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Avatar, Box, Button, Card, CardContent, Checkbox, Container, InputAdornment, IconButton, FormControl, FormControlLabel, Grid, Link, Radio, RadioGroup, Stack, TextField, Typography, useTheme } from '@mui/material';
import { LockOpenOutlined } from '@mui/icons-material';
import Wave from 'react-wavify';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
	const { spacing } = useTheme()
	const { userLogin } = useContext(AuthContext)
	const [Email, setEmail] = useState('')
	const [Password, setPassword] = useState('')
	const [Role, setRole] = useState('Admin');

	const handleChangeRole = (event) => {
		setRole(event.target.value);
	};

	function handleSubmit() {
		if (Email.length > 0 && Password.length > 0) {
			userLogin(Email, Password, Role)
		} else {
			alert('Fill all field')
		}
	}

	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<Box sx={{ position: 'absolute', left: '33%', top: '13%', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
				<Container maxWidth="sm" sx={{ zIndex: 9999, }}>
					<Card elevation={2} sx={{ background: 'rgba(255,255,255,0.1)', }}>
						<CardContent>
							<Stack gap={spacing(1)} justifyContent={'center'} alignItems={'center'}>
								<Stack alignItems={'center'}>
									<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
										<LockOpenOutlined />
									</Avatar>
									<Typography component="h1" variant="h4" color='inherit'>
										Login to your Account
									</Typography>
								</Stack>
								{/* Role Type Selectiom */}
								<FormControl>
									<Typography>What's your role ?</Typography>
									<RadioGroup
										row
										value={Role}
										onChange={handleChangeRole}
									>
										<FormControlLabel value="Admin" control={<Radio />} label="Admin" />
										<FormControlLabel value="Recruiter" control={<Radio />} label="Recruiter" />
										<FormControlLabel value="JD" control={<Radio />} label="jd" />


									</RadioGroup>
								</FormControl>

								{/* Role Type Selectiom End */}
							</Stack>

							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
								value={Email}
								onChange={(val) => setEmail(val.target.value)}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type={showPassword ? 'text' : 'password'}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{showPassword ? <VisibilityOff sx={{ fontSize: '30px' }} /> : <Visibility sx={{ fontSize: '30px' }} />}
											</IconButton>
										</InputAdornment>
									),
								}}
								id="password"
								autoComplete="current-password"
								value={Password}
								onChange={(val) => setPassword(val.target.value)}
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								type="submit"
								onClick={handleSubmit}
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								Sign In
							</Button>
							<Grid container>
								<Grid item xs>
									<Link href="#" variant="body2">
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link href="signup" variant="body2">
										{"Don't have an account? "}Sign Up
									</Link>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Container>
			</Box>
			<Wave fill='#f79902'
				paused={false}
				style={{ display: 'flex', height: '550px' }}
				options={{
					height: 150,
					amplitude: 80,
					speed: 0.15,
					points: 3
				}}
			/>

		</>
	)
};

export default Login;
