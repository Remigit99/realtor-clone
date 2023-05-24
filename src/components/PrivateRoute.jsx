
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';

const PrivateRoute = () => {

    const { isLoggedIn, checkingStatus } = useAuthStatus()

    if (checkingStatus) {
        return <h1> Checking Authentication Status</h1>
    }

    return (

        !isLoggedIn ? <Outlet /> : <Navigate to='/sign-in' />
    )
}

export default PrivateRoute