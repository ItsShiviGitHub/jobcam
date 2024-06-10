import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box, Stack, CardContent, TextField, Paper } from '@mui/material';
import { deepOrange } from '@mui/material/colors';





const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    // const handleListItemClick = (value) => {
    //     onClose(value);
    // };

    return (
        <Dialog onClose={handleClose} open={open} sx={{ textAlign: 'center', }}>
            <Paper sx={{ backgroundColor: '#dfdfdf', p: 4, backdropFilter: "10px", }}>
                <DialogTitle >
                    <Typography variant='h4' fontWeight={'bold'}>Profile</Typography>
                    <Typography>You can update the details</Typography>
                </DialogTitle>

                <Box sx={{
                    // marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <CardContent sx={{ alignItems: 'center' }} >
                        <Stack rowGap={1}>
                            <Avatar spacing={1} sx={{ bgcolor: deepOrange[500], width: 70, height: 70, alignSelf: 'center', mb: 4 }} >N</Avatar>
                            <Stack direction={'row'} spacing={2} sx={{ justifyContent: 'space-between' }}>
                                <TextField sx={{ backgroundColor: '#fff' }} size='small' id="filled-basic" label="First Name" variant="filled" />
                                <TextField sx={{ backgroundColor: '#fff' }} size='small' id='filled-basic' label="Last Name" variant="filled" />
                            </Stack>


                            <Stack direction={'row'} spacing={2} sx={{ justifyContent: 'space-between' }}>
                                <TextField sx={{ backgroundColor: '#fff' }} size='small' id="filled-basic" label="Mobile No" variant='filled' />
                                <TextField sx={{ backgroundColor: '#fff' }} size='small' id='filled-basic' label="Email" variant='filled' />
                            </Stack>
                            <TextField sx={{ backgroundColor: '#fff' }} size='small' fullWidth id='filled-basic' label="Address" variant='filled' />
                            <Button variant='contained' sx={{ mb: 3 }}>Edit</Button>
                        </Stack>
                    </CardContent>
                </Box>
            </Paper>

        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};
const Profile = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };
    return (
        <div>
            <Box onClick={handleClickOpen}>
                <Typography>
                    Profile
                </Typography>
            </Box>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    )
}

export default Profile