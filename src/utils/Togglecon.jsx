import { useState,useEffect } from "react"

export default function ToggleIcon({setStats}) {
const storedState =Boolean(localStorage.getItem('jfnjsjn'))
    const [isActive,setIsActive]=useState (storedState ? storedState : false)
  
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
    useEffect(()=>{
        localStorage.setItem('jfnjsjn',String(isActive))
    },[isActive])
 
    return<>
        <div onClick={()=>{
            handleToggle()
            handleStats()
        }}
         className={` ${!isActive ? "bg-indigo-900" :'bg-indigo-400'} cursor-pointer  w-8 inline-block rounded-full pl-1 h-4 md:scale-1 scale-125  relative`}>
         <div  className={` ${!isActive ? 'translate-x-3 ' :''} w-3 absolute top-[2px]  ease-linear duration-200  cursor-pointer h-3 rounded-full bg-cyan-50`}>
            </div>
    </div>
    </>
}