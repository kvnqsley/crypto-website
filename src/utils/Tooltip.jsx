import React from 'react'

const Tooltip = ({text,theme})=>{
   return (
    <>
    <span className={` top-7 min-w-max rounded group-hover:block   -left-36 absolute before:content-between before:w-2 before:border-black  before:border-8  before:border-r-transparent before:border-l-transparent before:border-t-transparent ${theme ? 'bg-black' : 'bg-gray-800'} hidden before:absolute before:left-[48%] before:-top-4 text-lime-50 hover:visible px-4`}>{text}</span>
   
    </>
  )
}

export default Tooltip