import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminAppDrawer from '../../../components/private/admin/AdminAppDrawer'

function AdminLayout() {
    return (
        <AdminAppDrawer>
            <Outlet />
        </AdminAppDrawer>
    )
}

export default AdminLayout
