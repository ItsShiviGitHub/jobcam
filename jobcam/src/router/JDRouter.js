import React from 'react'
import { Route, Routes } from 'react-router-dom'
import JdLayout from '../pages/private/jd/JdLayout'
import ErrorPage from '../pages/ErrorPage'
import JDashboard from '../pages/private/jd/pages/JDashboard'
import ListOfJD from '../pages/private/jd/pages/ListOfJD'
import JDForm from '../pages/private/jd/pages/JDForm'
import EditJdForm from '../pages/private/jd/pages/EditJdForm'
import Profile from '../pages/private/jd/pages/Profile'
import { BarChart } from '../pages/private/jd/pages/BarChart'
import { PieChart } from '../pages/private/jd/pages/PieChart'


const JDRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<JdLayout />} >
                <Route index element={<JDashboard />} />
                <Route path="jdlist" element={<ListOfJD />} />
                <Route path="jdform" element={<JDForm />} />
                <Route path="profile" element={<Profile />} />
                <Route path='barchart' element={<BarChart />} />
                <Route path='piechart' element={<PieChart />} />
                <Route path="/editjdform/:_id" element={<EditJdForm />} />

            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default JDRouter