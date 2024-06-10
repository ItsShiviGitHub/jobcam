import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicAppBar from '../../components/public/PublicAppBar'
import { Toolbar } from '@mui/material'
import Footer from '../../components/public/Footer'

function PublicLayout() {
    return (
        <div>
            <PublicAppBar />
            <Toolbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default PublicLayout
