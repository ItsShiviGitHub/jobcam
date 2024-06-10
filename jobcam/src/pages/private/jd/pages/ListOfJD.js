import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, removeUser } from '../../../../reduxSlice/jdSlice';
import { Box, Button, Divider, Grid, Stack } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Description from './../../recruiter/pages/Description';





const StyledTableCell = styled(TableCell)(({ theme }) => ({
    // [`&.${tableCellClasses.head}`]: {
    //     backgroundColor: theme.palette.common.black,
    //     color: theme.palette.common.white,
    // },
    // [`&.${tableCellClasses.body}`]: {
    //     fontSize: 12,

    // },
    height: 20,
    maxWidth: 20
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // '&:nth-of-type(odd)': {
    //     backgroundColor: theme.palette.action.hover,
    // },
    // hide last border
    // '&:last-child td, &:last-child th': {
    //     border: 0,
    // },


}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(3),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const ListOfJD = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState(null);
    const { userData } = useSelector((state) => state.JD);

    function dendId(data) {
        console.log("getId", data)
        setId(data)
    }
    useEffect(() => {
        dispatch(fetchUser())
        console.log("find data", fetchUser)
    }, [dispatch]);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box>
            <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto' }} >
                <Table size='small' aria-label="customized table">
                    <TableHead sx={{ fontSize: 'small', backgroundColor: 'lightgreen' }}>
                        <TableRow>
                            {/* <StyledTableCell>S.No.</StyledTableCell> */}
                            <StyledTableCell align='center' >JobTitle</StyledTableCell>
                            <StyledTableCell align="center">JobID</StyledTableCell>
                            <StyledTableCell align="center">StartDate</StyledTableCell>
                            <StyledTableCell align="center">CloseDate</StyledTableCell>
                            <StyledTableCell align="center">Location</StyledTableCell>
                            <StyledTableCell align="center">Depart.</StyledTableCell>
                            <StyledTableCell align="center">Quali.</StyledTableCell>
                            <StyledTableCell align="center">Salary</StyledTableCell>
                            <StyledTableCell align="center">JobDscrip.</StyledTableCell>
                            <StyledTableCell align="center">Rev. F_Name</StyledTableCell>
                            <StyledTableCell align="center">Rev. L_Name</StyledTableCell>
                            <StyledTableCell align="center">Review Date</StyledTableCell>
                            <StyledTableCell align="center">Appr. F_Name</StyledTableCell>
                            <StyledTableCell align="center">Appr. L_Name</StyledTableCell>
                            <StyledTableCell align="center">Approval Date</StyledTableCell>
                            <StyledTableCell align="center">View</StyledTableCell>
                            <StyledTableCell align="center">Edit</StyledTableCell>
                            <StyledTableCell align="center">Delete</StyledTableCell>



                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ alignItems: 'center' }}>
                        {userData.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row" >
                                    {row.jobTitle}
                                </StyledTableCell>
                                {/* <StyledTableCell align="right">{row.jobtitle}</StyledTableCell> */}
                                <StyledTableCell align="center">{row.jobId}</StyledTableCell>
                                <StyledTableCell align="center">{row.startDate}</StyledTableCell>
                                <StyledTableCell align="center">{row.closeDate}</StyledTableCell>
                                <StyledTableCell align="center">{row.location}</StyledTableCell>
                                <StyledTableCell align="center">{row.department}</StyledTableCell>
                                <StyledTableCell align="center">{row.qualification}</StyledTableCell>
                                <StyledTableCell align="center">{row.salary}</StyledTableCell>
                                <StyledTableCell align="center">{row.jobDescription}</StyledTableCell>

                                <StyledTableCell align="center">{row.reviewerFName}</StyledTableCell>
                                <StyledTableCell align="center">{row.reviewerLName}</StyledTableCell>
                                <StyledTableCell align="center">{row.reviewDate}</StyledTableCell>
                                <StyledTableCell align="center">{row.approveFName}</StyledTableCell>
                                <StyledTableCell align="center">{row.approveLName}</StyledTableCell>
                                <StyledTableCell align="center">{row.approvalDate}</StyledTableCell>
                                <StyledTableCell align="center"  >
                                    <Link>
                                        <VisibilityIcon onClick={() => {
                                            handleClickOpen();
                                            dendId(row._id);
                                        }} />
                                    </Link>
                                    <BootstrapDialog
                                        onClose={handleClose}
                                        aria-labelledby="customized-dialog-title"
                                        open={open}

                                    >
                                        <DialogTitle id="customized-dialog-title" sx={{ backgroundColor: '#869e92', fontSize: 15 }}>
                                            Job Description List
                                        </DialogTitle>
                                        <IconButton
                                            aria-label="close"
                                            onClick={handleClose}
                                            sx={{
                                                position: 'absolute',
                                                right: 6,
                                                top: 6,
                                                backgroundColor: 'orange',
                                                color: (theme) => theme.palette.error[500],
                                            }}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                        <DialogContent dividers>
                                            <Stack maxWidth={'fullscreen'} direction={'column'} sx={{
                                                justifyContent: 'space-around',
                                                p: 1, height: 500, width: 300, border: '2px solid black', overflowY: 'hidden'
                                            }}>
                                                <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography sx={{ fontWeight: 'bolder' }}>Job Title: </Typography>
                                                    <Typography>{row?.jobTitle}</Typography>
                                                </Stack>
                                                <Divider />
                                                <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }} >
                                                    <Typography sx={{ fontWeight: 'bolder' }}>Job ID: </Typography>
                                                    <Typography> {row?.jobId} </Typography>
                                                </Stack>
                                                <Divider />
                                                <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography sx={{ fontWeight: 'bolder' }}>  Start Date: </Typography>
                                                    <Typography> {row?.startDate}</Typography>
                                                </Stack>
                                                <Divider />
                                                <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography sx={{ fontWeight: 'bolder' }}>  Close Date:     </Typography>
                                                    <Typography>  {row?.closeDate}</Typography>

                                                </Stack>
                                                <Divider />
                                                <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography sx={{ fontWeight: 'bolder' }}>  Location:</Typography>
                                                    <Typography> {row?.location}</Typography>

                                                </Stack>
                                                <Divider />
                                                <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography sx={{ fontWeight: 'bolder' }}> Department:    </Typography>
                                                    <Typography> {row?.department}</Typography>

                                                </Stack>
                                                <Divider />
                                                <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography sx={{ fontWeight: 'bolder' }}> qualification:</Typography>
                                                    <Typography> {row?.qualification}</Typography>

                                                </Stack>
                                                <Divider />
                                                <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography sx={{ fontWeight: 'bolder' }}>   Salary:  </Typography>
                                                    <Typography> {row?.salary}</Typography>

                                                </Stack>
                                                <Divider />
                                                <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography sx={{ fontWeight: 'bolder' }}> Job Description:  </Typography>
                                                    <Typography>{row?.jobDescription}</Typography>

                                                </Stack>
                                                <Divider />
                                                <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography sx={{ fontWeight: 'bolder' }}> Reviewer: </Typography>
                                                    <Typography>{row?.reviewerFName} {row?.reviewerLName}</Typography>

                                                </Stack>
                                                <Divider />
                                                <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography sx={{ fontWeight: 'bolder' }}> Review Date: </Typography>
                                                    <Typography>  {row?.reviewDate}</Typography>

                                                </Stack>
                                                <Divider />
                                                <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography sx={{ fontWeight: 'bolder' }}>Approved By:  </Typography>
                                                    <Typography> {row?.approveFName} {row?.approveLName}</Typography>

                                                </Stack>
                                                <Divider />
                                                <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography sx={{ fontWeight: 'bolder' }}>   Approval Date: </Typography>
                                                    <Typography>   {row?.approvalDate}</Typography>

                                                </Stack>
                                            </Stack>
                                        </DialogContent>

                                    </BootstrapDialog>

                                </StyledTableCell>

                                <StyledTableCell><Link to={`/editjdform/${row._id}`}> <EditIcon sx={{ color: 'green' }} /></Link>
                                </StyledTableCell>

                                <StyledTableCell>
                                    <Link>< DeleteOutlineIcon sx={{ color: 'red' }}
                                        onClick={() => dispatch(removeUser(row._id))} /></Link></StyledTableCell>



                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    )
};

// const StyledTableCell = (props) => (
//     <Box component="td" {...props} sx={{
//         ...props.sx, padding: '8px', borderBottom: '1px solid rgba(224, 224, 224, 1)', height: 20,
//         maxWidth: 20, fontSize: 12
//     }} />
// );



export default ListOfJD


