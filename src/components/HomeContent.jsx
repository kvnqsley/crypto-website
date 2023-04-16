import {FaFire,FaStar} from 'react-icons/fa'
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
const HomeContent =({theme})=>{
  // const PortfolioContext=createContext('')
  // console.log(PortfolioContext);
  const [component,setComponent] = useState(<Coins/>)
  // const [pfolio,setPfolio]=useState(false)
  const [coins,setCoins]=useState(true)
  const [newcoins,setNewcoins]=useState(false)
  const [gainers,setGainers]=useState(false)
  
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
  
  },[theme])
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

return <>
  <main className={` ${theme ? 'bg-black text-white':'bg-sky-700' } sm:w-[calc(100% - 32rem)]    w-[calc(100% - 16rem)] -z-10 sm:ml-16 ml-4 mr-4  sm:mr-16 min-h-max`}>
{/* <CoinRoot/> */}
<SideNavbar theme={theme}/>
<CoinNavbar

coins={coins}
theme={theme}
newcoins={newcoins}
handlePortfolio={handlePortfolio}/>
{component}

</main>
</>
}
export default HomeContent
