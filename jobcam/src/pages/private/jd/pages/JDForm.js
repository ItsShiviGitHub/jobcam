import React from 'react';
import { Box, Button, Card, CardContent, Grid, Stack, Typography, TextField, Divider } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../../reduxSlice/jdSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useTheme } from '@emotion/react';

const JDForm = () => {
    const { spacing } = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validationSchema = yup.object({
        jobTitle: yup.string().required('Title is required'),
        jobId: yup.string().required('Job ID is required'),
        startDate: yup.string().required('Start date is required'),
        closeDate: yup.string().required('Closing date is required'),
        location: yup.string().required('Location is required'),
        department: yup.string().required('Department is required'),
        qualification: yup.string().required('Qualifications are required'),
        salary: yup.string().required('Salary range is required'),
        jobDescription: yup.string().required('Job description is required'),
        reviewerFName: yup.string().min(3, 'First name should be at least 3 characters').required('First name is required'),
        reviewerLName: yup.string().min(3, 'Last name should be at least 3 characters').required('Last name is required'),
        reviewDate: yup.string().required('Review date is required'),
        approveFName: yup.string().min(3, 'First name should be at least 3 characters').required('First name is required'),
        approveLName: yup.string().min(3, 'Last name should be at least 3 characters').required('Last name is required'),
        approvalDate: yup.string().required('Approval date is required'),
    });

    const formik = useFormik({
        initialValues: {
            jobTitle: '',
            jobId: '',
            startDate: '',
            closeDate: '',
            location: '',
            department: '',
            qualification: '',
            salary: '',
            jobDescription: '',
            reviewerFName: '',
            reviewerLName: '',
            reviewDate: '',
            approveFName: '',
            approveLName: '',
            approvalDate: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            dispatch(addUser(values))
                .then(unwrapResult)
                .then(res => {
                    console.log('res', res)
                    navigate('/jdlist');
                    resetForm();
                    alert(res?.message);
                })
                .catch(error => {
                    console.log('error', error);
                    // alert(r?.message)
                });
        },
    });
    return (

        <Box >
            <Grid container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: spacing(1)
            }}>
                <Grid item md={6}>
                    <Card sx={{
                        background: 'rgba(255, 255, 255, 0.4)', backdropFilter: `blur(10px)`,
                        boxShadow: '0px 0px 30px -5px', borderRadius: '7px',
                    }}>
                        <CardContent>
                            <Stack direction="column" spacing={1} >
                                <Stack alignItems="center" spacing={1} sx={{ backgroundColor: 'orange' }}>
                                    <Typography component="h1" variant="h5" sx={{ color: 'white', p: 1 }}>
                                        Job Description Form
                                    </Typography>
                                </Stack>
                                <Divider />
                                <Stack direction="row" spacing={2}>

                                    <TextField
                                        {...formik.getFieldProps('jobTitle')}
                                        value={formik.values.jobTitle}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
                                        helperText={formik.touched.jobTitle && formik.errors.jobTitle}
                                        margin="normal"
                                        size='small'

                                        fullWidth
                                        label="Title of the Job"

                                    />
                                    <TextField
                                        {...formik.getFieldProps('jobId')}
                                        value={formik.values.jobId}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.jobId && Boolean(formik.errors.jobId)}
                                        helperText={formik.touched.jobId && formik.errors.jobId}
                                        margin="normal"
                                        size='small'

                                        fullWidth
                                        label="Job ID#"

                                    />
                                </Stack>
                                <Stack direction="row" spacing={2}>

                                    <TextField
                                        {...formik.getFieldProps('startDate')}
                                        value={formik.values.startDate}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.startDate && Boolean(formik.errors.startDate)}
                                        helperText={formik.touched.startDate && formik.errors.startDate}
                                        margin="normal"
                                        size='small'

                                        fullWidth
                                        type='date'
                                        // label="Start Date Posted"
                                        autoFocus
                                    />
                                    <TextField
                                        {...formik.getFieldProps('closeDate')}
                                        value={formik.values.closeDate}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.closeDate && Boolean(formik.errors.closeDate)}
                                        helperText={formik.touched.closeDate && formik.errors.closeDate}
                                        margin="normal"
                                        size='small'

                                        fullWidth
                                        type='date'
                                    // label="Closing Date"

                                    />
                                </Stack>
                                <Stack direction="row" spacing={2}>

                                    <TextField
                                        {...formik.getFieldProps('location')}
                                        value={formik.values.location}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.location && Boolean(formik.errors.location)}
                                        helperText={formik.touched.location && formik.errors.location}
                                        margin="normal"
                                        size='small'

                                        fullWidth
                                        label="Location "
                                        autoFocus
                                    />
                                    <TextField
                                        {...formik.getFieldProps('department')}
                                        value={formik.values.department}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.department && Boolean(formik.errors.department)}
                                        helperText={formik.touched.department && formik.errors.department}
                                        margin="normal"
                                        size='small'

                                        fullWidth
                                        label="Department"

                                    />
                                </Stack>
                                <TextField
                                    {...formik.getFieldProps('qualification')}
                                    value={formik.values.qualification}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.qualification && Boolean(formik.errors.qualification)}
                                    helperText={formik.touched.qualification && formik.errors.qualification}
                                    margin="normal"
                                    size='small'
                                    fullWidth
                                    label="Qualifications"
                                />
                                <TextField
                                    {...formik.getFieldProps('salary')}
                                    value={formik.values.salary}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.salary && Boolean(formik.errors.salary)}
                                    helperText={formik.touched.salary && formik.errors.salary}
                                    margin="normal"
                                    size='small'
                                    fullWidth
                                    label="Salary Range"
                                />
                                <TextField
                                    {...formik.getFieldProps('jobDescription')}
                                    value={formik.values.jobDescription}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.jobDescription && Boolean(formik.errors.jobDescription)}
                                    helperText={formik.touched.jobDescription && formik.errors.jobDescription}
                                    margin="normal"
                                    size='small'
                                    rows={4}

                                    fullWidth
                                    label="Job Description/Overview"
                                />
                                <Typography>Reviewer Name</Typography>
                                <Stack direction="row" spacing={2}>

                                    <TextField
                                        {...formik.getFieldProps('reviewerFName')}
                                        value={formik.values.reviewerFName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.reviewerFName && Boolean(formik.errors.reviewerFName)}
                                        helperText={formik.touched.reviewerFName && formik.errors.reviewerFName}
                                        margin="normal"
                                        size='small'

                                        fullWidth
                                        label="First Name "
                                        autoFocus
                                    />
                                    <TextField
                                        {...formik.getFieldProps('reviewerLName')}
                                        value={formik.values.reviewerLName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.reviewerLName && Boolean(formik.errors.reviewerLName)}
                                        helperText={formik.touched.reviewerLName && formik.errors.reviewerLName}
                                        margin="normal"
                                        size='small'

                                        fullWidth
                                        label="Last Name"

                                    />
                                </Stack>
                                <Typography>Review Date</Typography>
                                <TextField
                                    {...formik.getFieldProps('reviewDate')}
                                    value={formik.values.reviewDate}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.reviewDate && Boolean(formik.errors.reviewDate)}
                                    helperText={formik.touched.reviewDate && formik.errors.reviewDate}
                                    margin="normal"
                                    size='small'
                                    rows={4}
                                    type='date'
                                    fullWidth
                                // label="Date"
                                />

                                <Typography>Approved By</Typography>
                                <Stack direction="row" spacing={2}>
                                    <TextField
                                        {...formik.getFieldProps('approveFName')}
                                        value={formik.values.approveFName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.approveFName && Boolean(formik.errors.approveFName)}
                                        helperText={formik.touched.approveFName && formik.errors.approveFName}
                                        margin="normal"
                                        size='small'

                                        fullWidth
                                        label="First Name "
                                        autoFocus
                                    />
                                    <TextField
                                        {...formik.getFieldProps('approveLName')}
                                        value={formik.values.approveLName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.approveLName && Boolean(formik.errors.approveLName)}
                                        helperText={formik.touched.approveLName && formik.errors.approveLName}
                                        margin="normal"
                                        size='small'

                                        fullWidth
                                        label="Last Name"

                                    />
                                </Stack>
                                <Typography>Approval Date</Typography>
                                <TextField
                                    {...formik.getFieldProps('approvalDate')}
                                    value={formik.values.approvalDate}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.approvalDate && Boolean(formik.errors.approvalDate)}
                                    helperText={formik.touched.approvalDate && formik.errors.approvalDate}
                                    margin="normal"
                                    size='small'
                                    rows={4}
                                    type='date'
                                    fullWidth
                                // label="Date"
                                />
                                <Divider />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    onClick={formik.handleSubmit}
                                >
                                    Submit
                                </Button>

                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>

    )
}

export default JDForm
