

import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../firebase'

export const useAuthStatus = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [isCheckingStatus, setIsCheckingStatus] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)
            }
            setIsCheckingStatus(false)
        })
    }, []
    )

    return (
        { loggedIn, isCheckingStatus }
    )
}

