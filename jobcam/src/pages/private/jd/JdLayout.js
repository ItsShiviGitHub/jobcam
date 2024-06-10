import React from 'react'
import JDAppDrawer from '../../../components/private/jd/JDAppDrawer'
import { Outlet } from 'react-router-dom'

const JdLayout = () => {
    return (
        <JDAppDrawer>
            <Outlet />
        </JDAppDrawer>
    )
}

export default JdLayout