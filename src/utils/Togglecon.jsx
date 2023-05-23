<<<<<<< HEAD
import { useState } from "react"

export default function ToggleIcon({setStats}) {

    const [isActive,setIsActive]=useState(false)
   const handleToggle=()=>{
        setIsActive((prev =>!prev))
    }
    const handleStats =()=>{
        setStats(stats=>{
            return {
                ...stats,
                statsActive: !stats.statsActive
            }
        })
    }
    return<>
        <div onClick={()=>{
            handleToggle()
            handleStats()
        }}
         className={` ${isActive ? "bg-indigo-900" :'bg-indigo-400'} cursor-pointer  w-8 inline-block rounded-full pl-1 h-4 md:scale-1 scale-125  relative`}>
         <div  className={` ${isActive ? 'translate-x-3 ' :''} w-3 absolute top-[2px]  ease-linear duration-200  cursor-pointer h-3 rounded-full bg-cyan-50`}>
            </div>
    </div>
    </>
=======
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
>>>>>>> ae80c4554c9a6c9eb80c7f5e02dfd1623d5a376f
}