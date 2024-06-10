import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicLayout from '../pages/public/PublicLayout'
import About from '../pages/public/pages/About'
import Home from '../pages/public/pages/Home'
import Login from '../pages/public/pages/Login'
import ErrorPage from '../pages/ErrorPage'
import Jobs from '../pages/public/pages/Jobs'
import Contact from '../pages/public/pages/Contact'
import SignUp from '../pages/public/pages/SignUp'

function PublicRouter() {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="about" element={<About />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="jobs" element={<Jobs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    )
}

export default PublicRouter
