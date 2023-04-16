import { useSelector,useDispatch } from "react-redux"
import {FaCaretDown,FaStar,FaSun,FaMoon,FaUser,FaUserCircle, FaCaretUp} from 'react-icons/fa'
import React, { useEffect } from 'react'
import { useState} from 'react'
import { closeSidebar,openSignup,   } from "./Sidebarslice"
import {toggleSidebarLanguages} from './LangSlice'
import Signup from '../components/Signup'
import LanguagesDropDown from "../components/LanguagesDropDown"
import CurrencyDropDown from "../components/CurrencyDropDown"
import { handleTheme } from './themeSlice'
import {toggleCurrency} from './CurrencySlice'
 function SideNavbar({theme}) {

    const isSidebarActive = useSelector(state=>state.sideBarActive.value)
    const isCurrencyActive = useSelector(state=>state.currency.value)
    const isLangActive = useSelector(state=>state.language.value)
    const isSignupOpen = useSelector(state=>state.sideBarActive.signUp)
    const dispatch =useDispatch()
const [showDropdown,setShowDropdown] = useState({
    cryptocurrencies:false,
    exchanges:false,
    nft:false,
    products:false,
    learn:false,
    account:false
})
const showCryptocurrencies=()=>{
    setShowDropdown(prev=>
        {
        return {
            ...prev,
        cryptocurrencies: !showDropdown.cryptocurrencies
        }
    })
}
const showExchanges=()=>{
    setShowDropdown(prev=>
        {
        return {
            ...prev,
        exchanges: !showDropdown.exchanges
        }
    })
}
const showNft=()=>{
    setShowDropdown(prev=>
        {
        return {
            ...prev,
        nft: !showDropdown.nft
        }
    })
}
const showProducts=()=>{
    setShowDropdown(prev=>
        {
        return {
            ...prev,
        products: !showDropdown.products
        }
    })
}
const showLearn=()=>{
    setShowDropdown(prev=>
        {
        return {
            ...prev,
        learn: !showDropdown.learn
        }
    })
}
const showAccount=()=>{
    setShowDropdown(prev=>
        {
        return {
            ...prev,
        account: !showDropdown.account
        }
    })
}
const[component,setComponent] = useState({
    language:'',
    currencies:'',
    signup:''
})
useEffect(()=>{
    if (window.innerWidth <= 900) {
     setComponent((prev =>{
         return{
             ...prev,
             language:<LanguagesDropDown/>,
             currencies:<CurrencyDropDown/>,
             signup:<Signup theme={theme}/>
         }
     }))
    }
},[isLangActive,isCurrencyActive])


    return(<>
    <aside  className={` ${isSidebarActive ? '-translate-x-4' : '-translate-x-[130%]'} ${theme ? 'bg-black text-white' :'bg-sky-700'} ease-in duration-200  absolute -translate-y-32 z-10   w-full min-h-screen`}>
       
    <div onClick={()=>dispatch(closeSidebar()) } className="px-2  w-18 inline-block h-10">
    <div className={` ${!theme ? 'bg-slate-900 ' :'bg-neutral-700'}  w-6  mt-1 h-1 ml-2 translate-y-6 rotate-45`}></div>
   
   <div className={` ${!theme ? 'bg-slate-900 ' :'bg-neutral-700'}  w-6  mt-1 ml-2 h-1  translate-y-4 -rotate-45`}></div>
    
    </div>
        <div className="ml-8 inline-block">
    <div  className='mr-4 inline-block '>
    <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
      <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
      <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
    
    </div>
    <h4 className='inline text-xl '>CoinMamba</h4>
    <img className="w-4  inline-block absolute right-6" src='https://static.coingecko.com/s/candy_notification-62af2d17629b138154e3fac22a492b51d914d18461f9283ae4bd5ad5730d8763.svg'/>
</div>
       <div className="pl-3">
        <h4 className="border-b  border-neutral-400 py-4" onClick={showCryptocurrencies}>   Cryptocurrencies{!showDropdown.cryptocurrencies ? <FaCaretDown className="inline-block absolute right-8"/> :<FaCaretUp className="inline-block absolute right-8"/> }</h4> 
           <ul className={`${showDropdown.cryptocurrencies ? 'block' : 'hidden' } py-3 pl-5` }>
               <li>By Market Cap</li>
               <li> New Cryptocurrencies</li>
               <li className="text-neutral-400  text-sm font-normal mt-4 relative -ml-4 after:content-[''] after:h-[1px] after:w-[85%] after:absolute after:right-0 after:top-1/2 after:bg-neutral-400"> Popular</li>
               <li>Categories</li>
               <li>WatchLists</li>
               <li>Gainers &amp; Losers</li>
               <li>High Volume</li>
               <li  className="text-neutral-400 font-normal text-sm  mt-4 relative -ml-4 after:content-[''] after:h-[1px] after:w-[88%] after:absolute after:right-0 after:top-1/2 after:bg-neutral-400">Tools</li>
               <li>All Coins</li>
               <li>Compare Coins</li>
               <li>Converter</li>
               <li>Global Chart</li>
           </ul>
       </div>
       <div className="pl-3">
           <h4   className="border-y border-neutral-400 py-4" onClick={showExchanges} >Exchanges{!showDropdown.exchanges ? <FaCaretDown className="inline-block absolute right-8"/> :<FaCaretUp className="inline-block absolute right-8"/> }</h4>
           <ul className={`${showDropdown.exchanges ? 'block' : 'hidden' } py-3` }>
           <li>Crypto Exchanges</li>
           <li>Decentalized Exchanges</li>
           <li>Derivates</li>
           </ul>
           </div>
       <div className="pl-3">
           <h4   className="border-y border-neutral-400 py-4" onClick={showNft} >NFT{!showDropdown.nft ? <FaCaretDown className="inline-block absolute right-8"/> :<FaCaretUp className="inline-block absolute right-8"/> }</h4>
           <ul className={`${showDropdown.nft ? 'block' : 'hidden' } py-3` }>
           <li>NFT Floor Price</li>
           <li>NFT Related Coins</li>
           </ul>
           </div>
       <div className="pl-3">
             <h4 className="border-y border-neutral-400 py-4"  onClick={showLearn}>Learn Crypto{!showDropdown.learn ? <FaCaretDown className="inline-block absolute right-8"/> :<FaCaretUp className="inline-block absolute right-8"/> }</h4>
           <ul className={`${showDropdown.learn ? 'block' : 'hidden' } py-3 pl-5` }>
           <li>All Crypto Articles </li>
           <li>Analysis</li>
           <li>Guides</li>
           <li  className="text-neutral-400 text-sm  mt-4 relative -ml-4 after:content-[''] font-normal after:h-[1px] after:w-[75%] after:absolute after:right-0 after:top-1/2 after:bg-neutral-400">Crypto Terms</li>
           <li>Glossary</li>
           <li>Methodology</li>
           <li  className="text-neutral-400 text-sm  mt-4 relative -ml-4 after:content-['']  font- font-normal after:h-[1px] after:w-[60%] after:absolute after:right-0 after:top-1/2 after:bg-neutral-400">Learn Crypto Everyday</li>
           <li>Videos</li>
           <li>Podcast</li>
           <li>Newsletter</li>
           <li>Research Reports</li>
           </ul>
           </div>
       <div className="pl-3"> 
             <h4 className="border-y border-neutral-400 py-4"  onClick={showProducts}>Product{!showDropdown.products ? <FaCaretDown className="inline-block absolute right-8"/> :<FaCaretUp className="inline-block absolute right-8"/> }</h4>
           <ul className={`${showDropdown.products ? 'block' : 'hidden' } py-3 pl-4` }>
           <li>Nite Terminal <span className="text-teal-800 font-semibold bg-green-400 text-sm rounded px-2"> Real-time charts</span></li>
           <li>CoinMamba Research</li>
           <li>CoinMamba App</li>
           <li> Crypto Porttfolio</li>
           <li>Crypto API</li>
           <li>Crypto Widget</li>
           <li className="text-neutral-400 text-sm  mt-4 relative -ml-4 after:content-['']  font- font-normal after:h-[1px] after:w-[60%] after:absolute after:right-0 after:top-1/2 after:bg-neutral-400">Books &amp; Merchandise</li>
           <li >CoinMamba Store</li>
           </ul>
           </div>
      
           <h4 className="border-y ml-2 pl-3 py-3"><FaStar className="text-yellow-400 inline-block mr-1" />My Portfolio</h4>
           <h4 className="border-y   ml-2 pl-3 py-3"><img className="w-4 inline-block" src='https://static.coingecko.com/s/candy_notification-62af2d17629b138154e3fac22a492b51d914d18461f9283ae4bd5ad5730d8763.svg'/> My Rewards</h4>
           <div className="pl-3"> 
             <h4 className="border-y border-neutral-400  py-4"  onClick={showAccount}><FaUserCircle className='inline-block ml-2 mr-2'/>My Account{!showDropdown.account ? <FaCaretDown className="inline-block absolute right-8"/> :<FaCaretUp className="inline-block absolute right-8"/> }</h4>
           <ul className={`${showDropdown.account ? 'block' : 'hidden' } py-3 pl-4` }>
          <li>Price Alert</li>
           <li>Login and Security</li>
           <li> Crypto Porttfolio</li>
           <li>Subscription</li>
           <li>Sign Out</li>
           
           </ul>
           </div>
   <ul className="grid-cols-3 grid gap-x-4  ml-3 w-[100% - 24px] text-center mt-8 mr-3 ">
       <li onClick={()=>dispatch(openSignup())} className="bg-green-600 col-span-3   mt-4 text-neutral-100 p-3  rounded">Sign Up</li>
       <li className="border-green-600  shadow-lg rounded border col-span-3 mt-4  p-3  text-green-600">Login</li>
       <li className='border-sky-800 rounded  mt-4  p-3 border' onClick={()=>dispatch(toggleSidebarLanguages())}> EN</li>
       <li className='border-sky-800  rounded mt-4  p-3 border' onClick={()=>dispatch( toggleCurrency ())}> EUR</li>
       <li 
       onClick={()=>dispatch(handleTheme())}
       className='border-sky-800 rounded mt-4  p-3 border'>  {!theme ?  <FaMoon  className='inline'/> : <FaSun className='inline text-white' />
    }</li>
   </ul>
   
 </aside>
    {isLangActive &&  component.language}
    {isCurrencyActive && component.currencies}
    {isSignupOpen && component.signup}

    </>)
}

export default SideNavbar;