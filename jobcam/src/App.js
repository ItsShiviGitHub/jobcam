import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import AdminRouter from './router/AdminRouter'
import PublicRouter from './router/PublicRouter'
import RecruiterRouter from './router/RecruiterRouter'
import JDRouter from './router/JDRouter'

function App() {
    const { IsLogged, UserInfo } = useContext(AuthContext)
    return (
        <>
            {
                IsLogged && UserInfo?.Role === 'Admin' ?
                    <AdminRouter /> :
                    IsLogged && UserInfo?.Role === 'Recruiter' ?
                        <RecruiterRouter /> :
                        IsLogged && UserInfo?.Role === 'JD' ?
                            <JDRouter /> :
                            <PublicRouter />
            }
        </>

    )

}

export default App
