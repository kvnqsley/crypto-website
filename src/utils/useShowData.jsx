import {useState,useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { hideLanguages,hideCurrency } from './LangSlice'

    const useShowData =(elementRef,langRef) =>{
        const dispatch = useDispatch()
        // const [ rootClicked,setRootClicked] = useState(false)
        // useEffect(()=>{
        
     
    
        //    const root = document.getElementById('root')
        //    if (window.screen.width >= 900) {
        //        root.addEventListener('click',(e)=>{
        //          try {
        //            if (elementRef.contains(e.target)) {
        //             setRootClicked(true)
        //             rootClicked ? dispatch(hideLanguages()) : null
        //             console.log(rootClicked);
        //            }
               
               
        //       //               /* 
        //       //               I'll confirm if this is good practice
        //       //               */
                         
                            
             
                     
        //         } catch (error) {
        //              console.warn(error);
        //          }
                 
               
        //        })
        //    }
      
       
     
        // },[rootClicked]) 
     }


export default useShowData