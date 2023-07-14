import { signOut } from 'firebase/auth'
import { auth, Provider } from "../firebase.config"

import { AuthContext } from "../AuthenticationProvider"
import { useContext } from 'react'
const useSignOut = ({setBanner}) => {
  
    const [isAuthenticated, updateAuthenticationStatus] = useContext(AuthContext)

    const handleSignOut=()=>{
    
    signOut(auth);
    updateAuthenticationStatus(null)
    localStorage.removeItem('x-access')
    setBanner(state=> {
     return {
      ...state,
      active:true,
      message:'Signed Out Successfully'
     }
    })
   }
      return handleSignOut
}

export default useSignOut