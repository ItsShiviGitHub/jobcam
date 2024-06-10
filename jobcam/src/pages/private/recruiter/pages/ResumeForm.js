import React from 'react';
import { Box, Button, Card, CardContent, Grid, Stack, Typography, TextField, Divider } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTheme } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const ResumeForm = () => {
    const { spacing } = useTheme();

    const validationSchema = yup.object({
        File_Upload: yup.string().required('Upload file is required'),
        First_Name: yup.string().min(3, 'First name should be at least 3 characters').required('First name is required'),
        Last_Name: yup.string().min(3, 'Last name should be at least 3 characters').required('Last name is required'),
        Email: yup.string().email('Enter a valid email').required('Email is required'),
        Phone_Number: yup.string().required('Phone number is required'),
        Zip_Code: yup.string().required('Zip code is required'),
        Address: yup.string().required('Address is required'),
    });

    const formik = useFormik({
        initialValues: {
            File_Upload: '',
            First_Name: '',
            Last_Name: '',
            Email: '',
            Phone_Number: '',
            Zip_Code: '',
            Address: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const existingData = JSON.parse(localStorage.getItem('resumeForm')) || [];
            localStorage.setItem('resumeForm', JSON.stringify([...existingData, values]));
            alert("Attach CV is successfully in Form!");
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Box component="form" onSubmit={formik.handleSubmit}>
            <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: spacing(1) }}>
                <Grid item md={6}>
                    <Card sx={{ background: 'rgba(255, 255, 255, 0.9)', boxShadow: '0px 0px 30px -5px' }}>
                        <CardContent>
                            <Stack direction="column" spacing={2}>
                                <Stack alignItems="center" spacing={2}>
                                    <Typography component="h1" variant="h5" sx={{ color: 'blue' }}>
                                        Resume: (Attach the CV to the Form)
                                    </Typography>
                                    <Button
                                        component="label"
                                        variant="contained"
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        Upload file
                                        <VisuallyHiddenInput type="file" />
                                    </Button>
                                </Stack>
                                <Divider />
                                <Typography variant='h4' sx={{ textTransform: 'uppercase', color: "blue", fontWeight: 'bold' }}>
                                    Candidate's Personal Details
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                    <TextField
                                        {...formik.getFieldProps('First_Name')}
                                        error={formik.touched.First_Name && Boolean(formik.errors.First_Name)}
                                        helperText={formik.touched.First_Name && formik.errors.First_Name}
                                        margin="normal"
                                        size='small'
                                        fullWidth
                                        label="First Name"
                                    />
                                    <TextField
                                        {...formik.getFieldProps('Last_Name')}
                                        error={formik.touched.Last_Name && Boolean(formik.errors.Last_Name)}
                                        helperText={formik.touched.Last_Name && formik.errors.Last_Name}
                                        margin="normal"
                                        size='small'
                                        fullWidth
                                        label="Last Name"
                                    />
                                </Stack>
                                <Stack direction="row" spacing={2}>
                                    <TextField
                                        {...formik.getFieldProps('Email')}
                                        error={formik.touched.Email && Boolean(formik.errors.Email)}
                                        helperText={formik.touched.Email && formik.errors.Email}
                                        margin="normal"
                                        size='small'
                                        fullWidth
                                        label="Email"
                                        type="email"
                                    />
                                    <TextField
                                        {...formik.getFieldProps('Phone_Number')}
                                        error={formik.touched.Phone_Number && Boolean(formik.errors.Phone_Number)}
                                        helperText={formik.touched.Phone_Number && formik.errors.Phone_Number}
                                        margin="normal"
                                        size='small'
                                        fullWidth
                                        label="Phone Number"
                                    />
                                </Stack>
                                <Stack direction="row" spacing={2}>
                                    <TextField
                                        {...formik.getFieldProps('Zip_Code')}
                                        error={formik.touched.Zip_Code && Boolean(formik.errors.Zip_Code)}
                                        helperText={formik.touched.Zip_Code && formik.errors.Zip_Code}
                                        margin="normal"
                                        size='small'
                                        fullWidth
                                        label="Zip Code"
                                    />
                                    <TextField
                                        {...formik.getFieldProps('Address')}
                                        error={formik.touched.Address && Boolean(formik.errors.Address)}
                                        helperText={formik.touched.Address && formik.errors.Address}
                                        margin="normal"
                                        size='small'
                                        fullWidth
                                        label="Address"
                                    />
                                </Stack>
                                <Divider />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                >
                                    Submit
                                </Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ResumeForm;
