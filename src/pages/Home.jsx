import { createContext, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect } from "react"
import{FaArrowUp} from 'react-icons/fa'
import SideNavbar from '../utils/SideNavbar.jsx'
import { SCROLL_TO_TOP } from "../utils/scrollTop"
import Auth from "../components/Auth"
import Login from "../components/Login"

const Home =({theme,
    pages
    ,setPages,
    isActive,
    handleToggle,})=>{

        const [scrollValue, setScrollValue]= useState(null)
       
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
             <Auth/>
            <Login/>
       <SideNavbar
        setPages={setPages}
        theme={theme}/>
       <div onClick={SCROLL_TO_TOP} className={`${scrollValue ? 'block' : 'hidden'} fixed bottom-16 cursor-pointer right-12 rounded-full  z-50 bg-neutral-400 h-12 w-12`}>
   <FaArrowUp className={`text-center animate-bounce absolute left-1/4 top-3 text-2xl translate-y-1/2`}/>
   </div>
       <Footer/>
          
    
    </> 
    
  
}

export default Home