import {createElement, Suspense} from 'react'
import {FaArrowUp} from 'react-icons/fa'
import NewCoins from '../pages/NewCoins'
import CoinNavbar from './CoinNavbar'
import Coins from '../pages/Coins'
import Portfolio from '../pages/Portfolio'
import { useState} from 'react'
import Categories from '../pages/Categories'

import {useDispatch,useSelector} from 'react-redux'
import {useEffect,useCallback} from 'react'
import Auth from './Auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../utils/firebase.config"
import Loading from '../utils/Loading'
import Login from './Login'












const HomeContent =({theme,
  pages,
  data,
  setData,
  setPages})=>{
 

const authState= useAuthState(auth)


useEffect(()=>{

  localStorage.setItem('main-page',JSON.stringify(pages))

},[pages])




  const navigateMenu = (e)=>{
      
  

  switch (e.target.textContent) {
    case 'Portfolio':
    

      
      setPages(state=>{
        return {
          ...state,
          portfolio:true,
          coins:false,
         newcoins:false,
         category:false,
      
        }
      })
      break;


    case 'New Coins':

  
     setPages(state=>{
      return {
        ...state,
        coins:false,
        newcoins:true,
        category:false,
        portfolio:false,
     
      }
    })
      break;

    case 'Categories':

  
    
   
     setPages(state=>{
      return {
        ...state,
        coins:false,
        newcoins:false,
        category:true,
        portfolio:false,
     
      }
    })
      break;

    case 'Coins':

 
 
 

    setPages(state=>{
      return {
        ...state,
        coins:true,
        newcoins:false,
        category:false,
        portfolio:false,
     
      }
    })
     break;
   
   
  
    default:
     return ;
     
  }

}





 const isSidebarActive = useSelector(state=>state.sideBarActive.signUp)
return <>
  <main  className={` ${theme ? 'bg-black text-white':'bg-sky-700' } sm:w-[calc(100% - 32rem)]    w-[calc(100% - 16rem)] ${isSidebarActive  ? 'z-10 ' : '-z-10'} sm:ml-16 ml-4 mr-4  sm:mr-16 min-h-screen`}>
{/* <CoinRoot/> */}

<CoinNavbar

coins={pages.coins}
theme={theme}
newcoins={pages.newcoins}
portfolio={pages.portfolio}
category={pages.category}
navigateMenu={navigateMenu}/>


{pages.coins && <Suspense fallback={<Loading/>}>

 <Coins
data={data}
setData={setData} />

</Suspense>}
{pages.category && <Categories  />}
{pages.newcoins && <NewCoins />}
{pages.portfolio && <Portfolio 

data={data}
setData={setData} />}


</main>


</>
}
export default HomeContent
