import {createContext} from 'react'
export const AuthContext = createContext()
const AuthenticationProvider = ({children,state}) => {
  return (
    <AuthContext.Provider value={state} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthenticationProvider