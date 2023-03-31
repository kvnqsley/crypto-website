
import {FaMoon,FaCaretDown, FaLevelDownAlt} from 'react-icons/fa'
import axios from 'axios'
import {useEffect,useReducer,useState,useRef} from 'react'
import Loading from '../utils/Loading'
import CurrencyDropDown from './CurrencyDropDown'
import useShowData from '../utils/useShowData'
import LanguagesDropDown from './LanguagesDropDown'
import { NavLink, Outlet } from 'react-router-dom'
export default function Navbar({isActive,handleToggle}) {

    const [data,setData]=useState({
        mrkt:[],
        loading:false
    })
const [currency, setCurrency] = useState('USD')
   
   const[currencyDDActive, setCurrencyDDActive ] =useState(true)
   const[languageDDActive, setLanguagesDDActive ] =useState(true)

   const currencyRef = useRef('')
   const languageRef = useRef('')

const [] = useShowData(setCurrencyDDActive,currencyRef)
useShowData(setLanguagesDDActive,languageRef)

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

    const api = 'https://api.coingecko.com/api/v3/global'
const getGlobalMarketData=()=>{
console.log('i am being called');

   axios.get(api).then(res=>{
    console.log(res.data)
        setData({
    mrkt:res.data.data,
    loading:!data.loading
        })
    })
}
useEffect(()=>{

    getGlobalMarketData()

},[])


   return<>
   <header className="">
{data.loading==true ?  <ul className='flex mb-6 justify-around'>
 <li>Exchanges: <span className='text-amber-50'>{data.mrkt.markets}</span></li>
     <li>Coins: <span className='text-amber-50'>{data.mrkt.active_cryptocurrencies
}</span></li>
     <li className='w-96'>Market Cap: <span className=' text-amber-50'>${data.mrkt.updated_at.toLocaleString()}<span className='text-red-700'>-0.9%<FaLevelDownAlt className='inline'/></span></span><div></div></li>
     <li></li>
     <li></li>
 </ul> : <Loading/>}

   <nav className={`sticky z-50 flex min-w-max h-16 top-0 pt-3 border-t-2 border-b-2 border-t-slate-100` } >
     
    
      
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
    <li className='cursor-pointer'>CRYPTOCURRENCY</li>
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
    <div className='cursor-pointer'>EN<FaCaretDown onClick={showLanguages} className='inline'/>
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
