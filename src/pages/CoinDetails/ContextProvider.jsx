import React from 'react'
import { createContext } from 'react'
export const  ComponentContext = createContext()
const ContextProvider = ({children,state}) => {
    
  return (
    <ComponentContext.Provider value={state}>
    {children}
    </ComponentContext.Provider>
  )
}

export default ContextProvider