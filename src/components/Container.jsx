import React from 'react'

export const Container = ({children,theme,variant}) => {
 
  return (
    <div className={`rounded-xl p-4 mt-8 ${variant}   ${theme ? 'bg-slate-700' : 'bg-blue-100'}`}>

        {children}
    </div>
  )
}
