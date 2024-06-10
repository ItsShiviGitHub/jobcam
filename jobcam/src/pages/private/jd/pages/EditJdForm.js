import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Grid, Stack, Typography, TextField, Divider } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../../reduxSlice/jdSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useTheme } from '@emotion/react';

const EditJdForm = () => {
    const { spacing } = useTheme();
    const { _id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [update, setUpdate] = useState(null);
    const { userData } = useSelector((state => state.JD));

    useEffect(() => {
        if (_id) {
            const singleUser = userData.find((ele) => ele._id === _id);
            setUpdate(singleUser);
        }
    }, [_id, userData]);

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
            dispatch(updateUser(values))
                .then(unwrapResult)
                .then(res => {
                    navigate('/jdlist');
                    resetForm();
                    alert(res?.message);
                })
                .catch(error => {
                    console.error('error', error);
                });
        },
    });

    useEffect(() => {
        if (update) {
            formik.setValues(update);
        }
    }, [update]);

    return (
        <Box>
            <Grid container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: spacing(1)
            }}>
                <Grid item md={6}>
                    <Card sx={{ background: 'rgba(255, 255, 255, 0.9)', boxShadow: '0px 0px 30px -20px' }}>
                        <CardContent>
                            <Box component={'form'} onSubmit={formik.handleSubmit}>
                                <Stack direction="column" spacing={2}>
                                    <Stack alignItems="center" spacing={1}>
                                        <Typography component="h1" variant="h5">
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
                                            required
                                            fullWidth
                                            label="Title of the Job"
                                            autoFocus
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
                                            required
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
                                            required
                                            fullWidth
                                            label="Start Date Posted"
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
                                            required
                                            fullWidth
                                            label="Closing Date"
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
                                            required
                                            fullWidth
                                            label="Location"
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
                                            required
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
                                        required
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
                                        required
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
                                        required
                                        rows={4}
                                        fullWidth
                                        label="Job Description/Overview"
                                    />
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
                                        required
                                        rows={4}

                                        fullWidth
                                        label="Date"
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
                                            required
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
                                            required
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
                                        required
                                        rows={4}

                                        fullWidth
                                        label="Date"
                                    />
                                    <Divider />

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                    >
                                        Submit
                                    </Button>

                                </Stack>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box >

    )
}

export default EditJdForm