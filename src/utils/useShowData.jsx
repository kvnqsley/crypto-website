import {useState,useEffect} from 'react'

const useShowData =(setActiveState,elementRef) =>{
   useEffect(()=>{
    document.body.addEventListener('click',(e)=>{
        if (!elementRef.current.contains(e.target)) {
           setActiveState(true)
        }
           /* 
           I'll confirm if this is good practice
           */
        
             })  
   },[])

    return[setActiveState,elementRef]
}
export default useShowData