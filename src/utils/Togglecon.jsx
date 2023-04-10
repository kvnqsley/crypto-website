import { useState } from "react"

export default function ToggleIcon(params) {

    const [isActive,setIsActive]=useState(false)
   const handleToggle=()=>{
        setIsActive((prev =>!prev))
    }
    return<>
        <div className="cursor-pointer w-8 inline-block rounded-full pl-1 h-4 bg-indigo-900 relative">
         <div onClick={handleToggle} className={` ${isActive ? 'translate-x-3 ' :''} w-3 absolute top-[2px]  ease-linear duration-200 cursor-pointer h-3 rounded-full bg-cyan-50`}>
            </div>
    </div>
    </>
}