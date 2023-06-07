import { Link, useLoaderData } from "react-router-dom"
 import { FaChevronDown,FaSpinner, FaCheck,FaListAlt,FaRegQuestionCircle } from "react-icons/fa"
 import { useSelector } from "react-redux"
import { useState,useEffect } from "react"
import gradient from "../utils/gradient"
import {getCryptoExchanges} from '../utils/api'
import { useQuery } from "@tanstack/react-query"
 
 
 
 
 const CryptoEx=({theme})=>{
    const isSidebarActive = useSelector(state=>state.sideBarActive.value)
    
    const [data,setData] =useState()
   //  const exchanges =  useLoaderData() 
   useEffect(()=>{
      getCryptoExchanges(setData)
   },[])
 
 const [exchanges,setExchanges] = useState()
 useEffect(()=>{
    setExchanges(data)
 },[data])
    const shuffleData =false
    const trending =null
 
    const [tab,setTab]= useState({
      overview:true,
      security:false,
      social:false
   })


   const openOverview=()=>{
      setTab(state=>{
         return {
            ...state,
            security:false,
            social:false,
            overview:true
         }
      })
   }
   const openSecurity=()=>{
      setTab(state=>{
         return {
            ...state,
            security:true,
            social:false,
            overview:false
         }
      })
   }
   const openSocial=()=>{
      setTab(state=>{
         return {
            ...state,
            overview:false,
            security:false,
            social:true
         }
      })
   }

    
return <>
<main className={`${isSidebarActive ? 'hidden' : 'block'
      } ${theme ? 'bg-black text-white':'bg-sky-700' } sm:w-[calc(100% - 32rem)]    w-[calc(100% - 16rem)] ${isSidebarActive  ? 'z-10 ' : '-z-10'} sm:ml-16 ml-4 mr-4  sm:mr-16 min-h-screen`}>
<ul className={`relative md:pb-7 pb-2 h-min border-b-[1px] w-full overflow-y-hidden border-neutral-400
 gap-5 top-24 flex`} >
  
     <li   className={` cursor-pointer border-b-2 -mb-2 md:-mb-7 ` }>Crypto Exchanges</li>
   <li className={`hover:border-b-2  cursor-pointer  -mb-2 md:-mb-7 border-cyan-100  min-w-max`}><Link to={'/exchanges/derivatives'}>Derivatives</Link></li>
  
</ul> 
<div className="className={`  relative top-32 w-full`}">
<h3 className="font-semibold text-xl  mt-2">
    Top Crypto Exchanges Ranked by Trust Score
    </h3>

    {exchanges && <p className='text-sm mt-4'>
    As of today, we track 669 crypto exchanges with a total 24h trading volume of $43.3 Billion, a 16.06% change in the last 24 hours.
     Currently, the 3 largest cryptocurrency exchanges are {exchanges[0].name}, {exchanges[1].name}, and {exchanges[2].name}.
      Total tracked crypto exchange reserves currently stands at $107 Billion </p>}
   
   <div className='flex flex-col md:flex-row gap-y-3 items-center justify-between mt-8 md:mt-4 md:gap-x-3 w-full'>
    <button className=' md:p-3 p-1 border border-neutral-400 rounded-full '>All Countries</button>
    <div>
    <button onClick={openOverview} className={`${tab.overview ? 'bg-slate-600 border-none' : ''} rounded border border-r-0 border-neutral-400   p-1  md:p-3`}>Overview</button>
    <button onClick={openSecurity} className={`${tab.security ? 'bg-slate-600 border-none' : ''} rounded border border-x-0 border-neutral-400 p-1 md:p-3`}>Cybersecurity</button>
    <button  onClick={openSocial}className={`${tab.social ? 'bg-slate-600 border-none' : ''} rounded   border border-l-0 border-neutral-400  p-1 md:p-3`}>Social</button>
    </div>
    </div>
   
    <div className='overflow-x-scroll no-scrollbar w-full'>
  {
     tab.overview &&  <table  className=" table-fixed    mt-10">
     <thead className='w-full  '>
        <tr >
           <th className=' p-3 '><h3 className="w-max text-rightx">#</h3></th>
           <th className='p-3 group '><h3 className="w-max mt-6 text-right">Exchange  </h3> <FaChevronDown  className='sm:inline-block w-max opacity-20 group-hover:opacity-100 ease-in-out font-extralight text-xs group-hover:text-black text-neutral-800 hidden cursor-pointer'/></th>
           <th className='  '><h3 className="w-max text-right">Trust Score </h3></th>
           <th className='p-3 '><h3 className="w-max text-right">Reserves Data </h3></th>
           <th className='p-3 '><h3 className="w-max text-right"> 24h Volume (Normalized)
           <FaRegQuestionCircle className="inline-block ml-2" />
           </h3></th>
           <th className='p-3 '><h3 className="w-max m-auto text-right">24h Volume </h3> </th>
           <th className='p-3 '><h3 className="w-max m-auto   text-right"> Monthly Visits
           <FaRegQuestionCircle className="inline-block ml-2" />
           </h3>
   
           </th>
           <th className='p-3 '><h3 className="w-max text-right"> Last 7 Days</h3></th>
        </tr>
     </thead>
     <tbody >
    {exchanges ? exchanges.map(exchange=><tr key={exchange.id} className={`h-16 border-neutral-700 border-y  overflow-x-scroll w-full  `}>


<td className='  md:w-32 w-32 h-8    ' >
<h3 className=" w-full   ">{exchanges.indexOf(exchange) + 1}</h3>
</td>
       <td>
          <div className='font-semibold w-max'>
          <img src={exchange.image} className="w-6 float-left mr-4 h-6 inline-block "  alt="" /> 
             {exchange.name}
             <p className="ml-10 text-xs font-light">Centralized</p>
          </div>
         

       </td>
          
        
        
          <td className=' px-2   '>
              
         <div className="w-max">
         <div className= {`${gradient(exchange.trust_score)} w-24  to-100% from-green-500  bg-gradient-to-r h-3 rounded-full inline-block `}></div> 
          <h3 className="inline ">  {exchange.trust_score}</h3>
         </div>
          </td>

          <td className=' px-2    '>
            <h3 className="bg-yellow-200 rounded p-1 h-6 text-yellow-800 text-xs inline-block w-max ">Available
            </h3> 
            <button className="ml-3">
            <FaListAlt className=" inline-block"/>
            </button>
              

          </td>
          <td className='md:px-9 px-2    '>
           <h3 className="w-max">${exchange.trade_volume_24h_btc.toLocaleString(undefined,{maximumFractionDigits:2})
}</h3>

          </td>
          <td className='md:px-9 px-2    '>
           <h3 className="w-max">${exchange.trade_volume_24h_btc_normalized.toLocaleString(undefined,{maximumFractionDigits:2})

}</h3>

          </td>
          <td className='md:px-9 px-2    '>
           <h3 className="w-max">${exchange.trade_volume_24h_btc_normalized.toLocaleString(undefined,{maximumFractionDigits:2})

}</h3>

          </td>
          <td className='md:px-9 px-2    '>
           <h3 className="">${exchange.trade_volume_24h_btc_normalized.toLocaleString(undefined,{maximumFractionDigits:2})

}</h3>

          </td>

         
           

</tr>) :  
<tr className=' w-full md:text-center'>
<td className='w-full  ' colSpan={5}>Loading <FaSpinner className="inline-block  animate-spin"/></td>

   </tr> 
}
     </tbody>
  </table>

 
  }
  {tab.security &&  <table  className=" table-fixed    mt-10">
       <thead className='w-full  '>
          <tr >
             <th className=' p-3 '><h3 className="w-max text-rightx">#</h3></th>
             <th className='p-3 group '><h3 className="w-max mt-6 text-right">Exchange  </h3> <FaChevronDown  className='sm:inline-block w-max opacity-20 group-hover:opacity-100 ease-in-out font-extralight text-xs group-hover:text-black text-neutral-800 hidden cursor-pointer'/></th>
             <th className='px-24  '><h3 className="w-max text-right">Cybersecurity Score </h3></th>
             <th className='p-10 '><h3 className="w-max text-right">Penetration Test </h3></th>
             <th className='p-10 '><h3 className="w-max text-right"> Proof of Funds)</h3></th>
             <th className='p-10 '><h3 className="w-max m-auto text-right">Bug Bounty </h3> </th>
    
          </tr>
       </thead>
       <tbody >
      {exchanges ? exchanges.map(exchange=><tr key={exchange.id} className={`h-16 border-neutral-700 border-y  overflow-x-scroll w-full  `}>
 
 
 <td className='  md:w-32 w-32 h-8    ' >
 <h3 className=" w-full   ">{exchanges.indexOf(exchange) + 1}</h3>
 </td>
         <td>
            <div className='font-semibold w-max'>
            <img src={exchange.image} className="w-6 float-left mr-4 h-6 inline-block "  alt="" /> 
               {exchange.name}
               <p className="ml-10 text-xs font-light">Centralized</p>
            </div>
           

         </td>
            
          
          
            <td className=' px-24   '>
                
           <div className="w-max">
           <h3 className="inline tracking-[3px] ">  AAA</h3>
           <img className="w-10 inline-block ml-6 h-10" src="https://static.coingecko.com/s/cer_mini_3stars-2f43f8870da3d19b538305c4a4d7586bd3ee51c5fe0f848a26176241d8c965bd.svg" alt="" />
            
           </div>
            </td>
 
            <td className=' px-16   '>
            -
 
            </td>
            <td className='md:px-9 px-16   '>
            {!exchange.has_trading_incentive ?  <FaCheck className='inline-block text-xs text-green-400'/>  : <h3>Unavailable</h3>}
               
            </td>
           
            <td className='md:px-9 px-16   '>
            {!exchange.has_trading_incentive ?  <FaCheck className='inline-block text-xs text-green-400'/>  : <h3>Unavailable</h3>}
               
            </td>
           
           
             
 
 </tr>) :  
 <tr className=' w-full md:text-center'>
 <td className='w-full  ' colSpan={5}>Loading <FaSpinner className="inline-block  animate-spin"/></td>

     </tr> 
 }
       </tbody>
    </table>}

    {tab.social &&  <table  className=" table-fixed    mt-10">
       <thead className='w-full  '>
          <tr >
             <th className=' px-3 '><h3 className="w-max text-rightx">#</h3></th>
             <th className='px-3 py-3 group '><h3 className="w-max  text-right inline-block">Exchange  </h3> <FaChevronDown  className='sm:inline-block w-max opacity-20 group-hover:opacity-100 ease-in-out font-extralight text-xs group-hover:text-black text-neutral-800 hidden cursor-pointer'/></th>
             <th className='px-24  '><h3 className="w-max text-right">Country </h3></th>
             <th className='px-10 '><h3 className="w-max text-right">Twitter Followers </h3></th>
             <th className='px-10 '><h3 className="w-max text-right"> Alexa Rank</h3></th>
           
          </tr>
       </thead>
       <tbody >
      {exchanges ? exchanges.map(exchange=><tr key={exchange.id} className={`h-16 border-neutral-700 border-y  overflow-x-scroll w-full  `}>
 
 
 <td className='  md:w-32 w-32 h-8    ' >
 <h3 className=" w-full   ">{exchanges.indexOf(exchange) + 1}</h3>
 </td>
         <td>
            <div className='font-semibold w-max'>
            <img src={exchange.image} className="w-6 float-left mr-4 h-6 inline-block "  alt="" /> 
               {exchange.name}
               <p className="ml-10 text-xs font-light">Centralized</p>
            </div>
           

         </td>
            
          
          
            <td className=' px-24   '>
                
         
           <h3 className="inline ">  {exchange.country}</h3>
        
            </td>
 
            <td className=' px-16   '>
            <h3>{exchange.year_established
 }</h3>
 
            </td>
            <td className='md:px-9 px-16   '>
           -
            </td>
           
           
           
           
             
 
 </tr>) :  
 <tr className=' w-full md:text-center'>
 <td className='w-full  ' colSpan={5}>Loading <FaSpinner className="inline-block  animate-spin"/></td>

     </tr> 
 }
       </tbody>
    </table>}
    </div>
    <section className="mt-40">
 
  <h2 className="font-semibold flex-grow  text-2xl">
  Top Centralized Exchange (CEX) Coins
      </h2>
     
  

{/* 
      <div className="grid md:grid-rows-3 md:grid-cols-5 grid-cols-1 gap-4 grid-rows-5">
      {trending.coins.slice(0,5).map(coin=><div className={`${!trending.stat ? 'block' : 'hidden'} ease-in mt-8 cursor-pointer    md:min-h-24 pb-4 md:border-none shadow-lg  `} key={coin.item.id}>
         <img src={coin.item.small} alt="" className="h-12 mr-4 float-left" />
         <p className="text-neutral-400 text-sm font-bold">{coin.item.name}</p>
          <p>&euro; {(coin.item.price_btc * btcStandardPrice).toFixed(10)}</p>
          
          <img src={`https://www.coingecko.com/coins/${coin.item.coin_id}/sparkline.svg`} className="hidden md:block" alt="" />
   
    
      </div>)}
   
      {trending.coins.slice(5).map(coin=><div className={`${trending.stat ? 'block' : 'hidden'} md:block ease-in mt-8 cursor-pointer    md:min-h-24 pb-4 md:border-none shadow-lg  `} key={coin.item.id}>
         <img src={coin.item.small} alt="" className="h-12 mr-4 float-left" />
         <p className="text-neutral-400 text-sm font-bold">{coin.item.name}</p>
          <p>&euro; {(coin.item.price_btc * btcStandardPrice).toFixed(10)}</p>
          
          <img src={`https://www.coingecko.com/coins/${coin.item.coin_id}/sparkline.svg`} className="hidden md:block" alt="" />
   
         
      </div>)}
      <div  className={`${trending.stat ? 'block' : 'hidden'} ease-in mt-8 cursor-pointer md:hidden p-3 text-neutral-400    md:min-h-24 pb-4 md:border-none shadow-lg  `}>
<FaSearch className='inline-block mr-4'/>
         More Coins
       
      </div>
     
      <div className={`${trending.stat ? 'block' : 'hidden'} ease-in mt-8 cursor-pointer  md:hidden p-3 text-neutral-400   md:min-h-24 pb-4 md:border-none shadow-lg  `}><FaListAlt className="inline-block mr-4"/> Categories
      </div>
     
      <div  className={`${trending.stat ? 'block' : 'hidden'} ease-in mt-8 cursor-pointer md:hidden p-3 text-neutral-400    md:min-h-24 pb-4 md:border-none shadow-lg  `}>
         <FaCalendarPlus className='inline-block mr-4'/>Recently Added</div>
     



      <a className=" hidden md:inline-block p-3 cursor-pointer text-neutral-100 bg-contain bg-left-top bg-origin-border bg-no-repeat h-full w-full bg-[url('https://static.coingecko.com/s/more_coins_bg_image-0a368fca5478fcab5133f19ab08675800bf7b916db394f865b590a82e649a0a4.png')]">
      <div className="md:h-24">
<FaSearch className='inline-block mr-4'/>
         More Coins
       
      </div>
      </a>
      <a className=" hidden md:inline-block p-3 cursor-pointer text-neutral-100 bg-contain bg-left-top bg-origin-border bg-no-repeat h-full w-full bg-[url('https://static.coingecko.com/s/top_categories_bg-6972db9c971f4682ce537a14f6b27eee5bcd43e64da9b7d039d539a3936c0075.png')]">
      <div className=""><FaListAlt className="inline-block mr-4"/> Categories
      </div>
      </a>

      <a className=" hidden md:inline-block p-3 cursor-pointer text-neutral-100 bg-contain bg-left-top bg-origin-border bg-no-repeat h-full w-full bg-[url('https://static.coingecko.com/s/recently_added_bg-5d0819d31cca2c427e7633bb5ef933896813d8d65f78e7d0fc9fc0b5d77fa045.png')]">
      <div><FaCalendarPlus className='inline-block mr-4'/>Recently Added</div>
      </a>
         </div> */}
      
   </section>
</div>

</main>


</>
 }





export default CryptoEx;