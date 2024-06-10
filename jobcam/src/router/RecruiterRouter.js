import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import RDashboard from '../pages/private/recruiter/pages/RDashboard'
import Jobs from '../pages/private/recruiter/pages/Jobs'
import RecruiterLayout from '../pages/private/recruiter/RecruiterLayout'
import FileUploader from '../pages/private/recruiter/pages/FileUploader'
import ListOfResume from '../pages/private/recruiter/pages/ListOfResume'
import Profile from '../pages/private/recruiter/pages/Profile'
import ResumeForm from '../pages/private/recruiter/pages/ResumeForm'

function RecruiterRouter() {
    return (
        <Routes>
            <Route path="/" element={<RecruiterLayout />}>
                <Route index element={<RDashboard />} />
                <Route path="fileuploader" element={<FileUploader />} />
                <Route path="jobs" element={<Jobs />} />
                <Route path="list" element={<ListOfResume />} />
                <Route path="profile" element={<Profile />} />
                <Route path="resume" element={<ResumeForm />} />
                <Route path="*" element={<ErrorPage />} />

            </Route>
        </Routes>
    )
}

export default RecruiterRouter
