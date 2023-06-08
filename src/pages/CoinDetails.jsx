import React from 'react'
import { FaCaretDown, FaChevronDown, FaCopy,FaGreaterThan,FaBell, FaRegQuestionCircle, FaSearch, FaShare, FaStar, FaTelegram, FaTwitter, FaChartLine, FaBars } from 'react-icons/fa'
import { useParams,Link } from 'react-router-dom'
import {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getChartData,getGlobalData} from '../utils/api'
import { toggleCurrency } from '../utils/CurrencySlice'
import {SCROLL_TO_TOP} from '../utils/scrollTop'
import Plot from 'react-plotly.js';
import UpDowntrend from '../utils/UpDowntrend'
import Tooltip from '../utils/Tooltip'


export const CoinDetails = ({theme}) => {
   
    const isSidebarActive = useSelector(state=>state.sideBarActive.value)


    const currency = useSelector(state=>state.currency.currency)
    const dispatch =useDispatch()
    const [chartData,setChartData] = useState([])
    const [allCoins,setAllCoins] = useState(null)
  

    const {id} =  useParams()
    useEffect(()=>{
        getChartData('bitcoin',setChartData)
        getGlobalData(setAllCoins)
    },[])
    const xPrice= chartData.prices?.map(price=>price)
    const test=xPrice?.map(test=>test[0])
   
    const pricePoints1 =xPrice?.map(test=>test[0])
    const pricePoints2 =xPrice?.map(test=>test[1])
    
    const config =[
        {
        x: pricePoints1,
        y:pricePoints2,
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: 'green'},
        },

    ]
    const layout ={width: 800, 
        height: 720,
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        xaxis: { showgrid: false }, 

        }

    const storedState = localStorage.getItem('coinsData')
    const data= storedState ? JSON.parse(storedState ) : useSelector(state=>state.data.market)
// console.log(data)
    const [info,setInfo]= useState(true)

    const [tab,setTab]= useState({
        general:true,
        developer:false,
        social:false,
        widgets:false,
        
    })
    const toggleGeneral =()=>{
        setTab(state=>{
            return {
               ...state,
               general:true,
               social:false,
               overview:false,
               developer:false,
               widgets:false
            }
         })
    }
    const toggleWidgets =()=>{
        setTab(state=>{
            return {
               ...state,
               general:false,
               social:false,
               overview:false,
               developer:false,
               widgets:true
            }
         })
    }
    const toggleSocial =()=>{
        setTab(state=>{
            return {
               ...state,
               general:false,
               social:true,
               overview:false,
               developer:false,
               widgets:false
            }
         })
    }
    const toggleDeveloper =()=>{
        setTab(state=>{
            return {
               ...state,
               general:false,
               social:false,
               overview:false,
               developer:true,
               widgets:false,
            }
         })
    }

    const searchedCoin= data.market.find(coin=>coin.id == id)
    const otherCoins = allCoins?.find(coin=> coin.id == id)
  
  return (<>
  
  
  
   {searchedCoin && 
    <main  className={` ${isSidebarActive ? 'hidden' : 'block'} ${theme ? 'bg-black text-white':'bg-sky-700' } sm:w-[calc(100% - 32rem)]    w-[calc(100% - 16rem)]  sm:ml-16 ml-4 mr-4  sm:mr-16 min-h-screen`}>
    <Link to={'/'} className="mt-24 inline-block text-green-400 cursor-pointer hover:text-green-900 font-semibold">Cryptocurrencies</Link >
     <span className="text-neutral-400 font-semibold ">
         <FaGreaterThan className="inline-block"/> {searchedCoin.name} Price</span>

<div className='flex flex-col gap-y-4 md:flex-row justify-between gap-x-6 w-full  mt-8 '>
    
<div className='md:w-[70%] w-full'>
<span>
   <p className='bg-slate-700 mb-4 text-white rounded-full w-max px-2'>
      Rank #{searchedCoin.market_cap_rank
}
   </p>
</span>
<img src={searchedCoin.image} alt="coin-image" className='w-10 inline-block  rounded-full h-10' />
<h4 className='inline-block text-3xl ml-4 font-semibold'>
   {searchedCoin.name}
</h4>
<p className='inline-block text-xl ml-3'>
   {searchedCoin.symbol.toUpperCase()}
</p>
<p className='text-3xl w-max font-semibold '>
${searchedCoin.current_price.toLocaleString(undefined,{minimumFractionDigits:9})}
</p>
<h3 className='text-red-800 inline-block  text-2xl '>
<FaCaretDown className='inline-block' /> 1.8%
</h3> 
<UpDowntrend value={1.8} />
<p>
   0.00000000 BTC
    <span className='text-red-800'>
       {searchedCoin.market_cap_change_percentage_24h.toFixed(1)} %
   </span>
</p>
<p>
   0.00000000 ETH
    <span className='text-red-800'>
        -1.4%
   </span>
</p>
<button className='border w-10 rounded  group relative  h-7 mt-4 mr-5 border-neutral-500'>
   <FaShare className='inline-block ' />
   <Tooltip text={' Share '} />
   </button>
   <button className='border w-10 rounded h-7 mr-5 border-neutral-500'>
   <FaBell
    className='inline-block' />
       </button>
       <button className='border w-10 group relative rounded h-7 mr-5 border-neutral-500'>
       <FaStar className='inline-block ' />
       <Tooltip text={'Add to Portfolio and track coin price'} />
       </button>
       <p className={`inline-block ${theme ? 'bg-slate-700' : 'bg-blue-100'} text-xs font-semibold rounded px-4`}>
       <FaStar className='text-yellow-400 inline ' /> On 59548 watchlists
       </p>
       <span className='md:w-1/2 w-full mt-6 h-2 from-yellow-300 from-0% via-30% to-40% bg-gradient-to-r via-green-400 to-blue-100  block rounded-full'>

       </span>
       <div className='flex md:w-[30vw] mt-4  font-semibold justify-between '>
           <p>
             ${searchedCoin.low_24h}
           </p>
           <p>
            24H Range
           </p>
           <p>
               ${searchedCoin.high_24h}
           </p>
       </div>

       <div className='grid grid-rows-2 w-full grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-7'>
           
         <div>
         <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8' >
            <p className='flex-grow'>
                   Market Cap <FaRegQuestionCircle className='inline-block' />
               </p>
               <p className=' font-semibold'>
                   ${searchedCoin.market_cap.toLocaleString(undefined,{maximunFractionDigits:2})} <FaChevronDown className='inline-block' />
               </p>
            </div>
            <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8' >
            <p className='flex-grow'>
                   24H Volume <FaRegQuestionCircle className='inline-block' />
               </p>
               <p className=' font-semibold'>
                   $393939,3939 
               </p>
            </div>
            <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8' >
            <p className='flex-grow'>
                  Fully Diluted Valuation <FaRegQuestionCircle className='inline-block' />
               </p>
               <p className=' font-semibold'>
                   ${searchedCoin.fully_diluted_valuation.toLocaleString() }
               </p>
            </div>
         </div>

           
         <div>
         <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8'>
           <p>
                 Circulating Supply<FaRegQuestionCircle className='inline-block' />
               </p>
               <p className='font-semibold'>
                  {searchedCoin.circulating_supply.toLocaleString() }

               </p>
           </div>
         <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8'>
           <p >
        Total Supply <FaRegQuestionCircle className='inline-block' />
               </p>
               <p className='font-semibold'>
              {searchedCoin.total_supply.toLocaleString() }

               </p>
           </div>
         <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8'>
           <p>
                Max Supply <FaRegQuestionCircle className='inline-block' />
               </p>
               <p className='font-semibold'>
                  {searchedCoin.max_supply.toLocaleString() }

               </p>
           </div>
         </div>
          
       </div>
</div>

<div>
<div className='justify-between'>
   <button className='bg-green-500 rounded mr-4 p-1 hover:bg-green-600'>
       Buy/Sell <FaChevronDown className='inline-block' />
       </button>
   <button className='bg-green-500 rounded mr-4 p-1 hover:bg-green-600'>
      Tax  <FaChevronDown className='inline-block' />
       </button>
   <button className='bg-green-500 rounded mr-4 p-1 hover:bg-green-600'>
   Earn Crypto  <FaChevronDown className='inline-block' />
       </button>
</div>
<h3 className='font-semibold hidden md:block text-xl'>
   Info
</h3>
<button onClick={()=>setInfo(false)} className={`w-full ${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg my-4 md:hidden text-center font-semibold ${info ? 'block' : 'hidden'} py-2`}>
    Show More Info
</button>
<div className={`grid grid-cols-2 ${info ? 'block' : 'hidden'} mt-6 md:mt-auto  gap-y-4 grid-rows-[7]`}>
   <div className='flex flex-col  gap-y-1'>
       <p className='font-light text-neutral-300'>
           Contract
       </p>
       <p className='font-light text-neutral-300'>
          Website
       </p>
       <p className='font-light text-neutral-300'>
          Explorers
       </p>
       <p className='font-light text-neutral-300'>
           Community
       </p>
       <p className='font-light text-neutral-300'>
         Search on
       </p>
       <p className='font-light text-neutral-300'>
          API id
       </p>
       <p className='font-light text-neutral-300'>
           Tags
       </p>
       
   </div>
   
   <div className='flex flex-col w-full gap-y-2'>
       <div className={`font-semibold text-sm relative  rounded-lg    ${theme ? 'bg-slate-700' : 'bg-blue-100'} h-5  w-full rounded-r-lg  `}>

       <p className='w-full hover:text-green-600 px-2 inline-block'>
       {otherCoins?.platforms?.ethereum?.slice(0,5)}...{otherCoins?.platforms?.ethereum?.slice(-5)}
       </p>
       <FaCopy className='inline-block absolute top-0 right-16' />

           <button  className={`inline-block hover:text-green-600 text-sm rounded-r-lg  w-8 h-full ${theme ? 'bg-slate-800' : 'bg-blue-200'} absolute top-0 right-0`}>
               ...
              
               </button>
            <div>
                <p>
                {/* {otherCoins?.platforms?.arbitrum-one} */}
                </p>
                <p>
                {/* {otherCoins?.platforms?.binance-smart-chain} */}
                </p>
            </div>
       </div>
       
       <a href='#' className={`font-semibold text-left ${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg px-2 w-max hover:text-green-600 text-sm`}>
        pepe.vip
       </a>
       <a className={`font-semibold text-left   ${theme ? 'bg-slate-700' : 'bg-blue-100'} relative rounded-lg button px-2 text-sm  hover:text-green-600`}>
        Etherscan
         <button className={`inline-block text-sm rounded-r-lg ml-4 w-8  ${theme ? 'bg-slate-800' : 'bg-blue-200'} absolute right-0`}>...</button>
       </a>
       <p className='font-semibold  text-sm w-max '>
        <a href="" className={`${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg px-2 hover:text-green-600`}> 
        <FaTwitter className='inline-block' /> Twitter
        </a>
        <a href="" className={`ml-3 ${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg px-2  hover:text-green-600 inline-block`}> 
        <FaTelegram className='inline-block' /> Telegram
        </a>
       </p>
       <p className={`font-semibold text-sm ${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg px-2 w-max `}>
       <a href="" className='hover:text-green-600'> 
        <FaSearch className='inline-block' /> Twitter
        </a>
       </p>
       <p className={`font-semibold text-sm ${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg px-2 w-max`}>
        {searchedCoin.id} <FaCopy className='inline-block'/>
       </p>
       <button className={`font-semibold text-sm text-left  hover:text-green-600 relative ${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg pl-2`}>
        Ethereum Ecosystem 
         <span className={`inline-block hover:text-green-600 text-sm rounded-r-lg  w-8 h-full ${theme ? 'bg-slate-800' : 'bg-blue-200'} absolute top-0 right-0`}>...</span>
       </button>
   </div>
</div>
<button  onClick={()=>setInfo(true)} className={`w-full ${info ? 'hidden' : 'block'} ${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg my-4  md:hidden text-center font-semibold py-2`}>
    Hide Info
</button>
</div>
</div>



<div>
<ul className={`relative md:pb-7 pb-2  mt-8 h-min border-b-[1px] w-full overflow-y-hidden border-neutral-400
gap-5  flex`} >

<li   className={` cursor-pointer border-b-2 -mb-2 md:-mb-7 ` }>Overview</li>
<li className={`hover:border-b-2  cursor-pointer  -mb-2 md:-mb-7 border-cyan-100  min-w-max`}><Link to={'/exchanges/derivatives'}>Markets</Link></li>
<li className={`hover:border-b-2  cursor-pointer  -mb-2 md:-mb-7 border-cyan-100  min-w-max`}><Link to={'/exchanges/derivatives'}>Historical Data</Link></li>
<li className={`hover:border-b-2  cursor-pointer  -mb-2 md:-mb-7 border-cyan-100  min-w-max`}><Link to={'/exchanges/derivatives'}>Tokenomics</Link></li>
<li className='text-green-600 px-2 rounded bg-green-200 '>
New
</li>

</ul>
<ul className='flex justify-between mt-4 md:w-[25vw] sm:w-[50vw]'>
<li > <button  onClick={toggleGeneral} className={` rounded-full p-2  ${theme && tab.general ? 'bg-green-500'   : theme && !tab.general ? 'bg-slate-700' : tab.general && !theme  ? 'bg-green-500' : !tab.general && !theme ? 'bg-blue-100' :'' }`} >
General
</button>

</li>
<li > <button onClick={toggleSocial} className={` rounded-full p-2  ${theme && tab.social ? 'bg-green-500'   : theme && !tab.social ? 'bg-slate-700' : tab.social && !theme  ? 'bg-green-500' : !tab.social && !theme ? 'bg-blue-100' :'' }`}>
Social
</button>

</li>
<li> <button onClick={toggleDeveloper} className={` rounded-full p-2  ${theme && tab.developer ? 'bg-green-500'   : theme && !tab.developer ? 'bg-slate-700' : tab.developer && !theme  ? 'bg-green-500' : !tab.developer && !theme ? 'bg-blue-100' :'' }`}>
Developer
</button>

</li>
<li > <button onClick={toggleWidgets}  className={` rounded-full p-2  ${theme && tab.widgets ? 'bg-green-500'   : theme && !tab.widgets ? 'bg-slate-700' : tab.widgets && !theme  ? 'bg-green-500' : !tab.widgets && !theme ? 'bg-blue-100' :'' }`}>
Widgets
</button>

</li>
</ul>
</div>

<h3 className='font-semibold text-2xl mt-4'>
{id.Capitalize} Price Chart {searchedCoin.symbol.toUpperCase()}
</h3>
<div className='w-full chart-grid-xs md:chart-grid'>
<div className=' row-span-2  overflow-hidden w-full'>
<div className='flex justify-between w-full'>
<h3>
   Last updated 01:53PPM UTC, Currency in {currency}
</h3>
<button className='underline mr-16 float-right'>
   <FaStar className='inline-block'/> Add to Watchlist
</button>
</div>

<div className='md:grid md:grid-cols-2 flex flex-col gap-y-3 grid-rows-2 grid-cols-1 md:grid-rows-2'>
  <div className='flex  w-max rounded-lg'>
      <button className={`bg-blue-200 rounded-l-lg p-2`}>
          Price
      </button>
      <button className={`bg-blue-200 p-2`}>
          Market Cap
      </button>
      <button className={`bg-blue-200 rounded-r-lg p-2`}>
       TradingView
      </button>
  </div>
  
  <div  className='flex w-max rounded-lg'>
  <button className={`bg-blue-200 rounded-l-lg p-2`}>
         24h
      </button>
      <button className={`bg-blue-200 p-2`}>
          7d
      </button>
      <button className={`bg-blue-200 p-2`}>
       14d
      </button>
      <button className={`bg-blue-200 p-2`}>
       30d
      </button>
      <button className={`bg-blue-200 p-2`}>
      90d
      </button>
      <button className={`bg-blue-200 rounded-r-lg p-2`}>
      Max
      </button>
  </div>
  <div></div>
  <div className='flex w-full text-right h-full'>
      <button className={`bg-blue-200 rounded-l-lg p-2`}>
          <FaChartLine className='inline-block' />
      </button>
      <button className={`bg-blue-200 rounded-r-lg p-2`}>
         <FaBars className='inline-block'/>
      </button>
      </div>
</div>
<div className='w-full -translate-x-11 md:translate-x-0'>
<Plot
data={config}
layout={ layout }
/>
</div>

</div>






{/* 
===================== THE PRICE CONVERTER TAB GOES HERE======================  */}






<div className={`rounded-xl p-4   ${theme ? 'bg-slate-700' : 'bg-blue-100'}`}>
<h3 className='font-semibold'>
{id.toUpperCase()} Converter
</h3>
<div className={`rounded-lg h-8 w-full ${theme ? 'bg-slate-800' : 'bg-white'} `}>
   <p className='inline-block px-2 border-r'>
       {searchedCoin.symbol.toUpperCase()}
   </p>
<input type="number" className='h-full pl-2 inline-block bg-inherit  w-3/4 outline-none'/>
</div>
<div className={`rounded-lg  mt-8 h-8 md:w-full ${theme ? 'bg-slate-800' : 'bg-white'} px-2`}>
   <button onClick={()=>{dispatch(toggleCurrency());SCROLL_TO_TOP() }} className='inline-block px-2 border-r'>
      {currency}  <FaCaretDown className='inline-block' />
   </button>
<input type="number" className={` bg-inherit pl-2 inline-block h-full  w-3/4 outline-none`} />
</div>

<p>
    1 {searchedCoin.symbol.toUpperCase()} = ${searchedCoin.current_price}
</p>

</div>

<div className={`rounded-xl p-4 mt-6   ${theme ? 'bg-slate-700' : 'bg-blue-100'}`}>
<h3 className='font-semibold'>
{searchedCoin.symbol.toUpperCase()} Price Statistics
</h3>

<div>
<div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
   <p>
       {id.toUpperCase()} Price
   </p>
   <p>${searchedCoin.current_price}</p>
</div>
<div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
   <p>
       24h Low / 24h High
   </p>
   <p>${searchedCoin.low_24h} / $ {searchedCoin.high_24h}</p>
</div>
<div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
   <p>
       7d Low / 7d High
   </p>
   <p>-</p>
</div>
<div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
   <p>
      Trading Volume
   </p>
   <p>${searchedCoin.total_volume.toLocaleString()}</p>
</div>
<div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
   <p>
      Market Cap Rank
   </p>
   <p>{searchedCoin.market_cap_rank}</p>
</div>
<div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
   <p>
    Market Cap
   </p>
   <p>${searchedCoin.market_cap.toLocaleString()}</p>
</div>
<div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
   <p>
       Market Cap Dominance
   </p>
   <p>-</p>
</div>
<div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
   <p>
       Volume / Market Cap
   </p>
   <p>-</p>
</div>
<div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
   <p>
     All-Time High
   </p>
   <div>
   <p>${searchedCoin.ath} <span className='text-red-600'>{searchedCoin.ath_change_percentage.toFixed(2)}%</span></p>
   <p>
       {searchedCoin.ath_date}
   </p>
   </div>
</div>
<div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
   <p>
     All-Time Low
   </p>
   <div>
   <p>${searchedCoin.atl} <span className='text-green-600'>{searchedCoin.atl_change_percentage.toFixed(2)}%</span></p>
   <p>
       {searchedCoin.atl_date}
   </p>
   </div>
</div>


</div>

</div>
</div>
<div>

</div>
</main>
   }
   </>
  )
}
