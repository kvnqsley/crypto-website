import {useState,useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { hideLanguages,hideCurrency } from './LangSlice'

const useShowData =(elementRef) =>{
   const dispatch = useDispatch()
const hide=()=>{
  
}

   useEffect(()=>{
      const root = document.getElementById('root')
      if (window.screen.width >= 900) {
         root.addEventListener('click',(e)=>{
            try {
               if (!elementRef.current.contains(e.target)) {
      
                  if (elementRef.current.id === ':r3:') {
                     dispatch(hideLanguages())
                  }
                  if (elementRef.current.id === ':r2:') {
                     dispatch(hideCurrency())
                  }
               
                       /* 
                       I'll confirm if this is good practice
                       */
                    
                         }
                
            } catch (error) {
                console.log(error);;
            }
           
         })
      }
   },[])
  

    return[elementRef]
}
export default useShowData