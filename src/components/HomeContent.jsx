import {FaFire,FaStar,FaArrowUp} from 'react-icons/fa'
import NewCoins from './NewCoins'
import { NavLink,createBrowserRouter,RouterProvider } from 'react-router-dom'
import CoinNavbar from './CoinNavbar'
import Coins from './Coins'
import Portfolio from './Portfolio'
import { useState,useContext,createContext,useReducer } from 'react'
import Gainers from './Gainers'
import SideNavbar from '../utils/SideNavbar.jsx'
import {useDispatch,useSelector} from 'react-redux'
import { showPortfolio,hidePortfolio } from '../utils/subNavSlice'
import {useEffect} from 'react'
import Auth from './Auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../utils/firebase.config"














const HomeContent =({theme})=>{
 

const authState= useAuthState(auth)

  const [component,setComponent] = useState(<Coins/>)
  // const [pfolio,setPfolio]=useState(false)
  const [coins,setCoins]=useState(true)
  const [newcoins,setNewcoins]=useState(false)
  const [gainers,setGainers]=useState(false)
  const [scrollValue, setScrollValue]= useState(null)
 
  useEffect(()=>{

    const root = document.getElementById('root')

    const setLight=()=>{
    root.classList.remove('bg-black')
    root.classList.add('bg-sky-700')
  }
    const setDark=()=>{
    root.classList.add('bg-black')
    root.classList.remove('bg-sky-700')
  }
    {theme ? setDark() : setLight()}
  

    window.addEventListener('scroll',()=>{
      (window.scrollY >= 450) ? setScrollValue(true) : setScrollValue(false)
        
      }
     )
  },[theme,scrollValue])
  const dispatch=useDispatch()

  const themeLight =useSelector(state=>state.theme.mytheme)

  const handlePortfolio = (e)=>{
      
  

  switch (e.target.textContent) {
    case 'Portfolio':
     setComponent(<Portfolio/>) 
      // setPfolio(true)
      dispatch(showPortfolio())
      setCoins(false)
      setNewcoins(false)
      break;


    case 'New Coins':

     setComponent(<NewCoins/>) 
     dispatch(hidePortfolio())
     setCoins(false)
     setNewcoins(true)
      break;

    case 'Gainer & Losers':

   setComponent(<Gainers/>) 
     setPfolio(false);
     dispatch(hidePortfolio())
     setCoins(false)
     setNewcoins(false)
      break;

    case 'Coins':

    setComponent(<Coins/>)
    setCoins(true)
    dispatch(hidePortfolio())
    setNewcoins(false)
     setPfolio(false) ;
     break;
   
   
  
    default:
     return setComponent(<Coins/>);
     
  }
}




const  SCROLL_TO_TOP=()=>{
  window.scrollTo({
     top:0,
     behavior:'smooth'
  })
  
 }
 const isSignupOpen = useSelector(state=>state.sideBarActive.signUp)
return <>
  <main  className={` ${theme ? 'bg-black text-white':'bg-sky-700' } sm:w-[calc(100% - 32rem)]    w-[calc(100% - 16rem)] ${isSignupOpen  ? 'z-10 ' : '-z-10'} sm:ml-16 ml-4 mr-4  sm:mr-16 min-h-screen`}>
{/* <CoinRoot/> */}
<SideNavbar theme={theme}/>
<CoinNavbar

coins={coins}
theme={theme}
newcoins={newcoins}
handlePortfolio={handlePortfolio}/>
<Auth/>
{component}
<div onClick={SCROLL_TO_TOP} className={`${scrollValue ? 'block' : 'hidden'} fixed bottom-16 cursor-pointer right-12 rounded-full  z-50 bg-neutral-400 h-12 w-12`}>
   <FaArrowUp className={`text-center animate-bounce absolute left-1/4 top-3 text-2xl translate-y-1/2`}/>
   </div>
</main>
</>
}
export default HomeContent
