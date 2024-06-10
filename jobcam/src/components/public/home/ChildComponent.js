import { Container, Paper, Typography } from '@mui/material'
import React, { memo } from 'react'

function ChildComponent({ finalAddition, Count }) {
    console.log('ChildComponent is running')
    return (
        <Container maxWidth='sm' component={Paper} sx={{ bgcolor: "secondary.light", justifyContent: 'center' }}>
            <Typography variant='h6' color={'background.default'}>This is child component {Count},{finalAddition()} </Typography>
            {/* <Typography variant='body1' color={'background.default'}>{Count} * 10 = {plusCount()}</Typography> */}
        </Container>
    )
}

export default memo(ChildComponent) 
