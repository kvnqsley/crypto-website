
import {FaMoon,FaCaretDown,FaSearch, FaLevelDownAlt} from 'react-icons/fa'
import axios from 'axios'
import SearchBar from '../utils/SearchBar'
import {useEffect,useReducer,useState,useRef} from 'react'
import Loading from '../utils/Loading'
import CurrencyDropDown from './CurrencyDropDown'
import useShowData from '../utils/useShowData'
import LanguagesDropDown from './LanguagesDropDown'
import { NavLink, Outlet } from 'react-router-dom'
import {useQuery,useQueryClient} from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { openSidebar } from '../utils/Sidebarslice'
import { togggleLanguages } from '../utils/LangSlice'

export default function Header({isActive,handleToggle}) {
const dispatch = useDispatch()
    
const [currency, setCurrency] = useState('USD')
   
   const[currencyDDActive, setCurrencyDDActive ] =useState(true)
   const[languageDDActive, setLanguagesDDActive ] =useState(true)
 const [isSmallScreen,setIsSmallScreen] = useState(false)
   const currencyRef = useRef('')
   const languageRef = useRef('')

const [] = useShowData(setCurrencyDDActive,currencyRef)
// useShowData(setLanguagesDDActive,languageRef)

const showCurrencies=()=>{
setCurrencyDDActive(value=>!value);

}
const showLanguages=()=>{
setLanguagesDDActive(value=>!value);
console.log(languageDDActive);
}

const handleCurrencyClick =(e)=>{
    const value =e.target.textContent.trim()
const currency =value.slice(0,3)
setCurrency(currency)

}
const {isError,data,error,isLoading }=useQuery(['market value'],()=> axios.get(api).then(res=>{
    return res.data
     
     }) )

    const api = 'https://api.coingecko.com/api/v3/global'
// const getGlobalMarketData=()=>{


  
// }

useEffect(()=>{
setIsSmallScreen(window.innerWidth < 641)
window.addEventListener('resize',()=>{
    setIsSmallScreen(window.innerWidth < 641)
   
})
 

},[])


   return<>
   <header  className="">
       {isError && <marquee behavior="" className='text-red-800' direction="">Real time data not availabile.
           <h1 className='text-red-800'>Please Check your Newtwork</h1></marquee>}
{isLoading ?  <Loading/> : <ul className=' hidden  md:flex mb-6 justify-around'>
 <li>Exchanges: <span className='text-amber-50'>{data.data.markets}</span></li>
     <li>Coins: <span className='text-amber-50'>{data.data.active_cryptocurrencies
}</span></li>
     <li className='w-96'>Market Cap: <span className=' text-amber-50'>${data.data.updated_at.toLocaleString()}<span className='text-red-700'>-0.9%<FaLevelDownAlt className='inline'/></span></span><div></div></li>
     <li></li>
     <li></li>
 </ul>}
 <div onClick={()=>dispatch(openSidebar())} className='inline-block cursor-pointer px-2  w-18 sm:hidden mt-4 ml-2' >
 <div className='w-6 bg-slate-900 mt-1 h-1 '></div>
      <div className='w-6 bg-slate-900 mt-1 h-1 '></div>
      <div className='w-6 bg-slate-900 mt-1 h-1 '></div>
 </div>

<div className=' inline sm:hidden'>
<div className='mr-4 inline-block ml-4'>
    <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
      <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
      <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
    
    </div>
    <h4 className='inline text-xl '>CRYPTONITE</h4>
</div>
{ isSmallScreen &&<>
<div className='relative'>
<FaSearch className='inline-block top-[1rem] left-12 text-gray-50 absolute'/>
     <SearchBar />
</div>
    </>
}
   <nav className={`sticky z-50 hidden  sm:flex min-w-max h-16 top-0 pt-3 border-t-2 border-b-2 border-t-slate-100` } >
     
    
      
{/* <div className="mr-6 h-4 w-4">
      <div className={`w-6 bg-slate-900 mt-1 h-1 ${isActive===false ? '-translate-x-96' : ''}`}></div>
       <div className={`w-6 bg-slate-900 mt-1 h-1 ${isActive===false ? '-rotate-45   ' : ''}`}></div>
       <div className={`w-6 bg-slate-900 mt-1 h-1 ${isActive===false ? ' rotate-45 -translate-y-2' : ''}`}></div>
       
      </div> */}
    <div className='mr-4 pl-11'>
    <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
      <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
      <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
    
    </div>
    <h4 className='flex-grow min-w-[15rem]'>CRYPTONITE</h4>
<ul className='flex min-w-{10rem} gap-12  flex-grow'>
    <li className='cursor-pointer'><NavLink to={'nft'}>NFT</NavLink></li>
    <li className='cursor-pointer'>EXCHANGE</li>
    <li className='cursor-pointer group'>CRYPTOCURRENCY
    <ul className='min-w-max border absolute hidden ease-linear duration-100 group-hover:block  border-neutral-400 min-h-max bg-sky-700 '>
        <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '>By Market Cap</li>
        <li className='mt-4  px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" border-neutral-400 border-b pb-4 '>New Cryptocurrencies</li>
        <li className='mt-4  px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '>Categories<span className='text-teal-900 ml-4 bg-green-600 rounded-md text-xs pl-2 pr-1'>New </span></li>
        <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer"'>Watchlists</li>
        <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '>Gainers &amp; Losers</li> 
        <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" border-neutral-400 pb-4 border-b'>High Volume</li>
        <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '>All coins</li>
        <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer"'>Compare Coins <span className='text-teal-900 ml-4 bg-green-600 rounded-md text-xs pl-2 pr-1'>New </span></li>
        <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer"'>Converter <span className='text-teal-900 ml-4 bg-green-600 rounded-md text-xs pl-2 pr-1'>New </span></li>
        <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" pb-4'>Global Chart</li>
    </ul>
    </li>
    <li className='cursor-pointer'>PRICES</li>
    <li> LEARN</li>
</ul>
<ul className='flex gap-4 flex-grow'>
    <li className='cursor-pointer'>LOGIN</li>
    <li className='cursor-pointer h-8 bg-blue-600 rounded px-2'>SIGN UP</li>
    <li className='cursor-pointer'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" fontSize="2rem" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path></svg></li>
</ul>
<ul className='flex min-w-[10rem] gap-4 '>
    <li className='cursor-pointer' ref={languageRef}>
    <div className='cursor-pointer'>EN<FaCaretDown onClick={()=>dispatch(togggleLanguages())} className='inline'/>
        <LanguagesDropDown
        languageDDActive={languageDDActive}
        /></div>
    </li>
    <li ref={currencyRef} className='cursor-pointer'>
    <div className='cursor-pointer'>{currency} <FaCaretDown onClick={showCurrencies} className='inline'/></div>
    <CurrencyDropDown 
   currencyDDActive={currencyDDActive}
   setCurrencyDDActive={setCurrencyDDActive}
   handleCurrencyClick={handleCurrencyClick} />
    </li>
    <li className='cursor-pointer'><FaMoon  className='inline'/>

    </li>
</ul>

   </nav>
 
   </header>
   <Outlet/>
   </> 
}
