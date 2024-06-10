import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Card, CardContent, CardActions, Button, Container, Typography, CssBaseline } from '@mui/material'
function Sup_Dashboard() {
    const navigate = useNavigate()
    function onGoPaymentHandler() {
        navigate('transaction')
    }
    return (
        <Box>
            <CssBaseline />
            <Container maxWidth='md'>
                <Card sx={{}}>
                    <CardContent>
                        <Typography variant='h4' color={'warning.main'}>Welcome To Dashboard</Typography>
                        <CardActions>
                            <Button onClick={onGoPaymentHandler} color='success'>Go To Transaction Page</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Container>

        </Box>
    )
}

export default Sup_Dashboard
