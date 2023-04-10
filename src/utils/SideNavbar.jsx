import { useSelector,useDispatch } from "react-redux"
import {FaCaretDown,FaStar,FaGift,FaMoon} from 'react-icons/fa'
import React from 'react'
import { useState} from 'react'
import { closeSidebar } from "./Sidebarslice"
import {togggleLanguages} from './LangSlice'
import LanguagesDropDown from "../components/LanguagesDropDown"
 function SideNavbar() {

    const isSidebarActive = useSelector(state=>state.sideBarActive.value)
    const isLangActive = useSelector(state=>state.language.value)
    const dispatch =useDispatch()
const [showDropdown,setShowDropdown] = useState({
    cryptocurrencies:false,
    exchanges:false,
    nft:false,
    products:false,
    learn:false
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



    return(<>
    <aside  className={` ${isSidebarActive ? '-translate-x-4' : '-translate-x-[130%]'} ease-in duration-200 bg-sky-700 absolute -translate-y-32 z-10   w-full min-h-screen`}>
       
    <div onClick={()=>dispatch(closeSidebar()) } className="px-2 w-18 inline-block h-10">
    <div className='w-6 bg-slate-900 mt-1 h-1 ml-2 translate-y-6 rotate-45'></div>
   
   <div className='w-6 bg-slate-900 mt-1 ml-2 h-1  translate-y-4 -rotate-45'></div>
    
    </div>
        <div className="ml-8 inline-block">
    <div  className='mr-4 inline-block '>
    <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
      <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
      <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
    
    </div>
    <h4 className='inline text-xl '>CRYPTONITE</h4>
</div>
       <div className="pl-3">
        <h4 className="border-b  border-neutral-400 py-4" onClick={showCryptocurrencies}>   Cryptocurrencies<FaCaretDown className="inline absolute right-8"/></h4> 
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
           <h4   className="border-y border-neutral-400 py-4" onClick={showExchanges} >Exchanges<FaCaretDown className="inline-block absolute right-8"/></h4>
           <ul className={`${showDropdown.exchanges ? 'block' : 'hidden' } py-3` }>
           <li>Crypto Exchanges</li>
           <li>Decentalized Exchanges</li>
           <li>Derivates</li>
           </ul>
           </div>
       <div className="pl-3">
           <h4   className="border-y border-neutral-400 py-4" onClick={showNft} >NFT<FaCaretDown className="inline-block absolute right-8"/></h4>
           <ul className={`${showDropdown.nft ? 'block' : 'hidden' } py-3` }>
           <li>NFT Floor Price</li>
           <li>NFT Related Coins</li>
           </ul>
           </div>
       <div className="pl-3">
             <h4 className="border-y border-neutral-400 py-4"  onClick={showLearn}>Learn Crypto<FaCaretDown className="inline-block absolute right-8"/></h4>
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
             <h4 className="border-y border-neutral-400 py-4"  onClick={showProducts}>Products<FaCaretDown className="inline-block absolute right-8"/></h4>
           <ul className={`${showDropdown.products ? 'block' : 'hidden' } py-3 pl-4` }>
           <li>Nite Terminal <span className="text-teal-800 font-semibold bg-green-400 text-sm rounded px-2"> Real-time charts</span></li>
           <li>Cryptonnite Research</li>
           <li>Cryptonnite App</li>
           <li> Crypto Porttfolio</li>
           <li>Crypto API</li>
           <li>Crypto Widget</li>
           <li className="text-neutral-400 text-sm  mt-4 relative -ml-4 after:content-['']  font- font-normal after:h-[1px] after:w-[60%] after:absolute after:right-0 after:top-1/2 after:bg-neutral-400">Books &amp; Merchandise</li>
           <li >Cryptonnite Store</li>
           </ul>
           </div>
           <h4 className="border-y pl-3 py-3"><FaStar className="text-yellow-400 inline-block mr-1" />My Portfolio</h4>
           <h4 className="border-y pl-3 py-3"><FaGift className="inline-block  text-rose-500"/> My Rewards</h4>
   <ul className="grid-cols-3 grid gap-x-4  ml-3 w-[100% - 24px] text-center mt-8 mr-3 ">
       <li className="bg-green-600 col-span-3   mt-4 text-neutral-100 p-3  rounded">Sign Up</li>
       <li className="border-green-600 border col-span-3 mt-4  p-3  text-green-600">Login</li>
       <li className='border-sky-800   mt-4  p-3 border' onClick={()=>dispatch(togggleLanguages())}> EN</li>
       <li className='border-sky-800  mt-4  p-3 border'>EUR</li>
       <li className='border-sky-800  mt-4  p-3 border'><FaMoon className="inline-block"/></li>
   </ul>
   
    </aside>
    {isLangActive && <LanguagesDropDown/>}

    </>)
}

export default SideNavbar;