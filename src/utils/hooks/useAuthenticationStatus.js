import { useContext,useEffect } from 'react'
import { AuthContext } from "../AuthenticationProvider"
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../firebase.config"

const useAuthenticationStatus = () => {

    const authState = useAuthState(auth)
    const [isAuthenticated, updateAuthenticationStatus] = useContext(AuthContext)
    const activeSession = localStorage.getItem('x-access')
    const authorisationForms = [authState[0]?.emailVerified, isAuthenticated, activeSession]
    const authStatus = authorisationForms.some(el => el)


    useEffect(() => {
        isAuthenticated ? localStorage.setItem('x-access', isAuthenticated) : null

    }, [isAuthenticated])

    return authStatus
}

export default useAuthenticationStatus