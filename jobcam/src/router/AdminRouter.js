import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../pages/private/admin/AdminLayout'
import Dashboard from '../pages/private/admin/pages/Dashboard'
import ErrorPage from '../pages/ErrorPage'
import Jobs from '../pages/private/admin/pages/Jobs'
import CreateRecruiters from '../pages/private/admin/pages/CreateRecruiters'

function AdminRouter() {
    return (
        <Routes>
            <Route path="/" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="jobs" element={<Jobs />} />
                <Route path="createrecruiters" element={<CreateRecruiters />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    )
}

export default AdminRouter
