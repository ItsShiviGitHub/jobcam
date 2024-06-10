import React, { useState } from 'react';
import { Box, Button, Card, CardContent, InputAdornment, IconButton, Container, CssBaseline, FormControl, FormControlLabel, FormLabel, Grid, Link, Radio, RadioGroup, Stack, TextField, Typography, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import RG from '../../../assets/images/rg.png';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignUp = () => {
    const navigate = useNavigate();
    const { spacing } = useTheme();

    const validationSchema = yup.object({
        first_name: yup.string().min(3, 'First name should be at least 3 characters').required('First name is required'),
        last_name: yup.string().min(3, 'Last name should be at least 3 characters').required('Last name is required'),
        email: yup.string().email('Enter a valid email').required('Email is required'),
        password: yup.string().min(6, 'Password should be at least 6 characters').required('Password is required'),
        confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
        state: yup.string().required('State is required'),
        district: yup.string().required('District is required'),
        pin_code: yup.string().required('Pin code is required'),
        local: yup.string().required('Local is required'),
        gender: yup.string().required('Gender is required'),
    });
    const [userRegister, setUserRegister] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        state: '',
        district: '',
        pin_code: '',
        local: '',
        gender: '',
        image_file: '',
    })
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: '',
            state: '',
            district: '',
            pin_code: '',
            local: '',
            gender: '',
            image_file: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const exstingData = JSON.parse(localStorage.getItem('registrations')) || [];
            localStorage.setItem('registrations', JSON.stringify([...exstingData, userRegister]));
            setUserRegister({
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                confirm_password: '',
                state: '',
                district: '',
                pin_code: '',
                local: '',
                gender: '',
                image_file: '',
            });
            alert("User registered successfully!");
            navigate('/login');
            alert(JSON.stringify(values, null, 2));
        },
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box sx={{
            backgroundImage: `url(${RG})`,
            height: { md: '100vh', xs: '100%' }, width: '100%',
            backgroundSize: 'cover',
            mt: spacing(2),
        }}>
            <Box sx={{
                position: 'absolute', p: spacing(1), width: '100%', height: '100vh', background: 'rgba(0,0,0, 0.5)'
            }}>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Card elevation={3} sx={{ background: 'rgba(255, 255, 255, 0.9)' }}>
                        <CardContent>
                            <Stack direction="column" spacing={2}>
                                <Stack alignItems="center" spacing={1}>
                                    <Typography component="h1" variant="h5">
                                        Regiter Form
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>

                                    <TextField
                                        {...formik.getFieldProps('first_name')}
                                        value={formik.values.first_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                                        helperText={formik.touched.first_name && formik.errors.first_name}
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="First Name"
                                        autoFocus
                                    />
                                    <TextField
                                        {...formik.getFieldProps('last_name')}
                                        value={formik.values.last_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                                        helperText={formik.touched.last_name && formik.errors.last_name}
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Last Name"

                                    />
                                </Stack>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Gender*</FormLabel>
                                    <RadioGroup row {...formik.getFieldProps('gender')}
                                        value={formik.values.gender}
                                        onChange={formik.handleChange}
                                    >
                                        <FormControlLabel value="Male" control={<Radio size="small" />} label="Male" />
                                        <FormControlLabel value="Female" control={<Radio size="small" />} label="Female" />
                                    </RadioGroup>
                                    {formik.touched.gender && formik.errors.gender && (
                                        <Typography variant="body2" color="error">{formik.errors.gender}</Typography>
                                    )}
                                </FormControl>
                                <TextField
                                    {...formik.getFieldProps('email')}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Email"
                                />
                                <Stack direction="row" spacing={1}>
                                    <TextField
                                        {...formik.getFieldProps('state')}
                                        value={formik.values.state}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.state && Boolean(formik.errors.state)}
                                        helperText={formik.touched.state && formik.errors.state}
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="State"
                                    />
                                    <TextField
                                        {...formik.getFieldProps('district')}
                                        value={formik.values.district}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.district && Boolean(formik.errors.district)}
                                        helperText={formik.touched.district && formik.errors.district}
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="District"
                                    />
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <TextField
                                        {...formik.getFieldProps('pin_code')}
                                        value={formik.values.pin_code}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.pin_code && Boolean(formik.errors.pin_code)}
                                        helperText={formik.touched.pin_code && formik.errors.pin_code}
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Pin Code"
                                    />
                                    <TextField
                                        {...formik.getFieldProps('local')}
                                        value={formik.values.local}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.local && Boolean(formik.errors.local)}
                                        helperText={formik.touched.local && formik.errors.local}
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Local"
                                    />
                                </Stack>
                                <TextField
                                    {...formik.getFieldProps('password')}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    margin="normal"
                                    required
                                    fullWidth
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
                                />
                                <TextField
                                    {...formik.getFieldProps('confirm_password')}
                                    value={formik.values.confirm_password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                                    helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Confirm Password"
                                    type="password"
                                />
                                <TextField
                                    accept="image/*"
                                    id="image_file"
                                    name="image_file"
                                    type="file"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    onClick={formik.handleSubmit}
                                >
                                    Sign Up
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </Box>
    );
};

export default SignUp;
