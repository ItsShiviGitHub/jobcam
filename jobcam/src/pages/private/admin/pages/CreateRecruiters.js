import React from 'react';
import { Box, Button, Container, CssBaseline, FormControlLabel, Stack, TextField, Grid, Typography, Radio, FormControl, RadioGroup, useTheme, Paper } from '@mui/material';
import { useFormik } from 'formik';

const CreateRecruiters = () => {
    const { spacing } = useTheme();

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            gender: '',
            contact: '',
            state: '',
            district: '',
            pincode: '',
            local: '',
            password: '',
            confirmpassword: '',
            image: null,
        },
        validate: (values) => {
            const errors = {};
            if (values.password !== values.confirmpassword) {
                errors.confirmpassword = 'Passwords do not match';
            }
            return errors;
        },
        onSubmit: (values, { resetForm }) => {
            storeData(values);
            resetForm();
        },
    });

    const storeData = (data) => {
        const key = `recruiterData_${Date.now()}`;
        localStorage.setItem(key, JSON.stringify(data));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                formik.setFieldValue('image', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Box mt={2}>
            <CssBaseline />
            <Container maxWidth="md">
                <Paper elevation={1} sx={{ p: spacing(2) }}>
                    <Box component={'form'} onSubmit={formik.handleSubmit}>
                        <Stack spacing={1} mb={spacing(3)} alignItems="center">
                            <Typography variant="h4" fontWeight={'bold'} align="center">
                                Create Recruiters
                            </Typography>
                        </Stack>
                        <Typography htmlFor="name" variant="h5">Name:</Typography>
                        <Grid container spacing={1} mt={spacing(1)}>
                            <Grid item xs={12} sm={6} >
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    name="firstname"
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    name="lastname"
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange}
                                    required
                                />
                            </Grid>
                        </Grid>

                        <Stack mt={spacing(1)}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                required
                            />
                        </Stack>

                        <FormControl component="fieldset">
                            <Typography htmlFor="Gender" variant="h5" py={spacing(1)}>Gender:</Typography>
                            <RadioGroup row value={formik.values.gender} onChange={formik.handleChange} name="gender">
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl>

                        <Stack mt={spacing(1)}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="contact"
                                value={formik.values.contact}
                                onChange={formik.handleChange}
                                type="number"
                                required
                            />
                        </Stack>
                        <Typography htmlFor="address" variant="h5" py={spacing(1)}>Address:</Typography>
                        <Grid container spacing={1} sx={{ mt: spacing(1) }}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="State"
                                    name="state"
                                    value={formik.values.state}
                                    onChange={formik.handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="District"
                                    name="district"
                                    value={formik.values.district}
                                    onChange={formik.handleChange}
                                    required
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} sx={{ mt: spacing(1) }}>
                            <Grid item xs={12} sm={6} >
                                <TextField
                                    fullWidth
                                    label="Pincode"
                                    name="pincode"
                                    value={formik.values.pincode}
                                    onChange={formik.handleChange}
                                    type="number"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <TextField
                                    fullWidth
                                    label="Local"
                                    name="local"
                                    value={formik.values.local}
                                    onChange={formik.handleChange}
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Stack sx={{ mt: spacing(1) }}>
                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                type="password"
                                required
                            />
                        </Stack>
                        <Stack mt={spacing(1)}>
                            <TextField
                                fullWidth
                                label="Confirm Password"
                                name="confirmpassword"
                                value={formik.values.confirmpassword}
                                onChange={formik.handleChange}
                                type="password"
                                required
                                error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
                                helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
                            />
                        </Stack>
                        <Grid item xs={12} sx={{ mt: spacing(1) }}>
                            <input
                                accept="image/*"
                                id="image"
                                name="image"
                                type="file"
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                            <label htmlFor="image">
                                <Button variant="contained" component="span">
                                    Upload Image
                                </Button>
                            </label>
                            {formik.values.image && (
                                <img
                                    src={formik.values.image}
                                    alt="Uploaded Image"
                                    style={{ maxWidth: '20%' }}
                                />
                            )}
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default CreateRecruiters;
