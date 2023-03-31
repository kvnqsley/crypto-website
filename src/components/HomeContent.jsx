import {FaFire,FaStar} from 'react-icons/fa'
import NewCoins from './NewCoins'
import { NavLink,createBrowserRouter,RouterProvider } from 'react-router-dom'
import CoinNavbar from './CoinNavbar'
import Coins from './Coins'
import Portfolio from './Portfolio'
import { useState,useContext,createContext,useReducer } from 'react'

const HomeContent =()=>{
  // const PortfolioContext=createContext('')
  // console.log(PortfolioContext);
  const [component,setComponent] = useState(<Coins/>)
  const [pfolio,setPfolio]=useState(false)
  const [coins,setCoins]=useState(true)
  const [newcoins,setNewcoins]=useState(false)
  const [gainers,setGainers]=useState(false)
  

//   const reducer =(state,action)=>{


//     switch (action) {
//       case 'highlightPortfolio':
        
//         break;
    
//       default:
//         break;
//     }
//   }
// const [activeContent,dispatch] = useReducer(inital, reducer)


  const handlePortfolio = (e)=>{
      
  

  switch (e.target.textContent) {
    case 'Portfolio':
     setComponent(<Portfolio/>) 
      setPfolio(true)
      setCoins(false)
      setNewcoins(false)
      break;

      
    case 'New Coins':

     setComponent(<NewCoins/>) 
     setPfolio(false);
     setCoins(false)
     setNewcoins(true)
      break;

    case 'Gainer & Losers':

   setComponent(<Coins/>) 
     setPfolio(false);
     setCoins(false)
     setNewcoins(false)
      break;

    case 'Coins':

    setComponent(<Coins/>)
    setCoins(true)
    setNewcoins(false)
     setPfolio(false) ;
     break;
    // case 'New Coins':

    //  return setActivePortfolio(true)
    //   setPfolio(false) ;
   
  
    default:
     return setComponent(<Coins/>);
     
  }
}
return <>
  <main className='w-[calc(100% - 32rem)] -z-10 ml-16  mr-16 min-h-[100vh]'>
{/* <CoinRoot/> */}
<CoinNavbar
pfolio={pfolio}
coins={coins}
newcoins={newcoins}
handlePortfolio={handlePortfolio}/>
{component}

</main>
</>
}
export default HomeContent