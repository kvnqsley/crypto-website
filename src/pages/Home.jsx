import { createContext, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect } from "react"
import{FaArrowUp} from 'react-icons/fa'

const Home =({theme,
    pages
    ,setPages,
    isActive,
    handleToggle,})=>{

        const [scrollValue, setScrollValue]= useState(null)
        const  SCROLL_TO_TOP=()=>{
            window.scrollTo({
               top:0,
               behavior:'smooth'
            })
            
           }
        useEffect(()=>{
            window.addEventListener('scroll',()=>{
                (window.scrollY >= 450) ? setScrollValue(true) : setScrollValue(false)
                  
                }
               )
        },[scrollValue])


    return<>
 
        <Header  isActive={isActive}
             theme={theme}
             handleToggle={handleToggle}
             pages={pages}
             setPages={setPages}
             />
       
       <div onClick={SCROLL_TO_TOP} className={`${scrollValue ? 'block' : 'hidden'} fixed bottom-16 cursor-pointer right-12 rounded-full  z-50 bg-neutral-400 h-12 w-12`}>
   <FaArrowUp className={`text-center animate-bounce absolute left-1/4 top-3 text-2xl translate-y-1/2`}/>
   </div>
       <Footer/>
          
    
    </> 
    
  
}

export default Home