import React from 'react'
import { FaChevronDown,FaTimes } from 'react-icons/fa'

export const Shufflebtn=({shuffleData,theme})=>{
return<>
 <button onClick={shuffleData}>
 <FaChevronDown   className={`sm:inline-block opacity-20 group-hover:opacity-100 ease-in-out font-extralight text-xs group-hover:text-black${!theme  ?'text-neutral-800' : 'text-slate-200'}   hidden cursor-pointer`}/>


 </button>
</>
}


export const CloseBtn = ({closeEvent, theme}) => {
  return <>
  <button onClick={()=>closeEvent()}>
  <FaTimes   className={`inline-block ${!theme ? 'text-slate-900' :'text-neutral-700'}`}/>
  </button>

  </>
}
export const pageBtn=()=>{

  return <>
  <button>
    
  </button>
  </>
}

