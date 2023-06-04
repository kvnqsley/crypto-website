import { Link, useLoaderData } from "react-router-dom"
 import { FaChevronDown,FaSpinner,FaMoneyBillWaveAlt,FaMoneyBill } from "react-icons/fa"
 import { useSelector } from "react-redux"
 import { useEffect,useState } from "react"
 import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import {Shufflebtn} from '../components/Buttons'

const Derivatives=({theme})=>{

    const isSidebarActive = useSelector(state=>state.sideBarActive.value)
   //  const derivatives =  useLoaderData() 
    const shuffleData =false
    const trending =null
    const{data} =useQuery(['derivatives'],()=>axios.get(api).then(res=> res.data))
  
    const api ='https://api.coingecko.com/api/v3/derivatives/exchanges'
    const [derivatives,setDerivatives] = useState()
    useEffect(()=>{
       setDerivatives(data)
    },[data])

    
return <>
<main className={` ${isSidebarActive ? 'hidden' : 'block'
      } ${theme ? 'bg-black text-white':'bg-sky-700' } sm:w-[calc(100% - 32rem)]    w-[calc(100% - 16rem)] ${isSidebarActive ? 'z-10 ' : '-z-10'} sm:ml-16 ml-4 mr-4  sm:mr-16 min-h-screen`}>
<ul className={`relative md:pb-7 pb-2 h-min border-b-[1px] w-full overflow-y-hidden border-neutral-400
 gap-5 top-24 flex`} >
  
     <li   className={`  hover:border-b-2  cursor-pointer  -mb-2 md:-mb-7 border-cyan-100  min-w-max ` }><Link to={'/exchanges'}>Crypto Exchanges</Link></li>
    <li className={`cursor-pointer border-b-2 -mb-2 md:-mb-7`}>Derivatives</li>
  
</ul> 
<div className="className={`  relative top-32 w-full`}">
<h3 className="font-semibold text-xl  mt-2">
Top Derivative Exchanges Ranked by Open Interest &amp; Trade Volume
    </h3>

    {derivatives && <p className='text-sm mt-4'>
   The total derivatives volume is $135 Billion, a -13.06% change in the last 24 hours. We track 72 crypto derivatives with {derivatives[0]?.name}, {derivatives[2]?.name}, and {derivatives[3]?.name} in the top 3 rankings.  </p>}
   
   
   
    <div className='overflow-x-scroll no-scrollbar w-full'>
   <table  className=" table-fixed    mt-10">
       <thead className='w-full  '>
          <tr >
             <th className=' p-3 '><h3 className="w-max text-rightx">#</h3></th>
             <th className='p-3 group '><h3 className="w-max inline-block text-right">Exchange  </h3> <Shufflebtn shuffleData={shuffleData} /> </th>
             <th className='  '><h3 className="w-max text-right">Settlement </h3></th>
             <th className='p-3 '><h3 className="w-max text-right">24h Open Interest </h3></th>
             <th className='p-3 '><h3 className="w-max m-auto   text-right"> Perpetuals</h3></th>
             <th className='p-3 '><h3 className="w-max text-right"> Futures</h3></th>
             <th className='p-3 '><h3 className="w-max text-right">Open Interest (7 Days)</h3></th>
             <th className='p-3 '><h3 className="w-max text-right"> Volume 7 Days</h3></th>
          </tr>
       </thead>
       <tbody >
      {derivatives ? derivatives.map(derivative=><tr key={derivative.id} className={`h-16 border-neutral-700 border-y  overflow-x-scroll w-full  `}>
 
 
 <td className='  md:w-32 w-32 h-8    ' >
 <h3 className=" w-full   ">{derivatives.indexOf(derivative) + 1}</h3>
 </td>
         <td>
            <div className='font-semibold w-max'>
            <img src={derivative.image} className="w-6 float-left mr-4 h-6 inline-block "  alt="" /> 
               {derivative.name}
               <p className="ml-10 text-xs font-light">Centralized</p>
            </div>
           

         </td>
            
          
          
            <td className=' px-2   '>
                
        
           
              <div className="relative w-max">
              <FaMoneyBill className="inline-block text-green-400  text-5xl"/> <p className="inline-block text-xs  font-semibold  absolute top-6 right-3">
                 cash
              </p>
              </div>
          
            </td>
 
            <td className=' px-2    '>
             <h3 className="w-max">${Number(derivative.trade_volume_24h_btc).toLocaleString()}
 
                </h3>
 
            </td>
            <td className='md:px-9 px-2    '>
             <h3 className="w-max">{derivative.number_of_perpetual_pairs
}</h3>
 
            </td>
            <td className='md:px-9 px-2    '>
             <h3 className="w-max">${derivative.number_of_futures_pairs

}</h3>
 
            </td>
            <td className='md:px-9 px-2    '>
             <h3 className="w-max">${derivative.open_interest_btc


}</h3>
 
            </td>
            <td className='md:px-9 px-2    '>
             <h3 className="">-</h3>
 
            </td>

           
             
 
 </tr>) :  
 <tr className=' w-full md:text-center'>
 <td className='w-full  ' colSpan={5}>Loading <FaSpinner className="inline-block  animate-spin"/></td>

     </tr> 
 }
       </tbody>
    </table>
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

export default Derivatives

 