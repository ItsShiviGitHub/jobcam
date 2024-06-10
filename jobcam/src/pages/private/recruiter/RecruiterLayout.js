import React from 'react'
import { Outlet } from 'react-router-dom'
import RecruiterAppDrawer from '../../../components/private/recruiter/RecruiterAppDrawer'

function RecruiterLayout() {
    return (
        <RecruiterAppDrawer>
            <Outlet />
        </RecruiterAppDrawer>
    )
}

export default RecruiterLayout
