import React from 'react'
import { FaCaretDown, FaChevronDown, FaCopy,FaGreaterThan,FaBell, FaRegQuestionCircle, FaSearch, FaShare, FaStar, FaTelegram, FaTwitter } from 'react-icons/fa'
import { useParams,Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

export const CoinDetails = ({theme}) => {
    const currency = useSelector(state=>state.currency.currency)

  const {id} =  useParams()
  const storedState = localStorage.getItem('coinsData')
  const data= storedState ? JSON.parse(storedState ) : useSelector(state=>state.data.market)
console.log(data)

 const searchedCoin= data.market.find(coin=>coin.id == id)
 
  return (
    <main  className={` ${theme ? 'bg-black text-white':'bg-sky-700' } sm:w-[calc(100% - 32rem)]    w-[calc(100% - 16rem)]  sm:ml-16 ml-4 mr-4  sm:mr-16 min-h-screen`}>
                <Link to={'/'} className="mt-24 inline-block text-green-400 cursor-pointer hover:text-green-900 font-semibold">Cryptocurrencies <span className="text-neutral-400 hover:text-inherit"><FaGreaterThan className="inline-block"/> {id} Price</span></Link >
   
   <div className='flex justify-between gap-x-6 w-full  mt-8 '>
       <div className='w-[70%]'>
           <span>
               <p className='bg-slate-700 mb-4 text-white rounded-full w-max px-2'>
                  Rank #{searchedCoin.market_cap_rank
}
               </p>
           </span>
           <img src={searchedCoin.image} alt="coin-image" className='w-10 inline-block  rounded-full h-10' /> <h4 className='inline-block'>
               {searchedCoin.name}
           </h4>
           <p className='inline-block ml-3'>
               {searchedCoin.symbol.toUpperCase()}
           </p>
       <p className='text-3xl w-max font-semibold '>
      ${searchedCoin.current_price}
       </p>
       <h3 className='text-red-800 inline-block  text-2xl '>
       <FaCaretDown className='inline-block' /> 1.8%
           </h3> 
           <p>
               0.00000000 BTC
                <span className='text-red-800'>
                   {searchedCoin.market_cap_change_percentage_24h.toFixed(1)}
               </span>
           </p>
           <p>
               0.00000000 ETH
                <span className='text-red-800'>
                    -1.4%
               </span>
           </p>
           <button className='border w-10 rounded h-7 mt-4 mr-5 border-neutral-500'>
               <FaShare className='inline-block' />
               </button>
               <button className='border w-10 rounded h-7 mr-5 border-neutral-500'>
               <FaBell
                className='inline-block' />
                   </button>
                   <button className='border w-10 rounded h-7 mr-5 border-neutral-500'>
                   <FaStar className='inline-block' />
                   </button>
                   <p className='inline-block bg-blue-100 text-xs font-semibold rounded px-4'>
                   <FaStar className='text-yellow-400 inline ' /> On 59548 watchlists
                   </p>
                   <span className='w-1/2 mt-6 h-2 from-yellow-300 from-0% via-30% to-40% bg-gradient-to-r via-green-400 to-blue-100  block rounded-full'>

                   </span>
                   <div className='flex md:w-[30vw]  font-semibold justify-between '>
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
           <h3 className='font-semibold text-xl'>
               Info
           </h3>
           <div className='grid grid-cols-2  gap-y-4 grid-rows-[7]'>
               <div className='flex flex-col gap-y-1'>
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
               <div className='flex flex-col gap-y-2'>
                   <p className='font-semibold relative  bg-blue-100 rounded-lg hover:text-green-600'>
                    - <button className=' bg-blue-200 w-10 absolute rounded-r-lg ml-4 right-0'>...</button>
                   </p>
                   <a href='#' className='font-semibold text-left bg-blue-100 rounded-lg px-2 w-max hover:text-green-600 text-sm'>
                    pepe.vip 
                   </a>
                   <a className='font-semibold text-left   bg-blue-100 relative rounded-lg buttonx-2 text-sm  hover:text-green-600'>
                    Etherscan
                     <button className='inline-block text-sm rounded-r-lg ml-4 w-8 bg-blue-200 absolute right-0'>...</button>
                   </a>
                   <p className='font-semibold  text-sm w-max '>
                    <a href="" className=' bg-blue-100 rounded-lg px-2 hover:text-green-600'> 
                    <FaTwitter className='inline-block' /> Twitter
                    </a>
                    <a href="" className='ml-3 bg-blue-100 rounded-lg px-2  hover:text-green-600 inline-block'> 
                    <FaTelegram className='inline-block' /> Telegram
                    </a>
                   </p>
                   <p className='font-semibold text-sm bg-blue-100 rounded-lg px-2 w-max '>
                   <a href="" className='hover:text-green-600'> 
                    <FaSearch className='inline-block' /> Twitter
                    </a>
                   </p>
                   <p className='font-semibold text-sm bg-blue-100 rounded-lg px-2 w-max'>
                    {searchedCoin.id} <FaCopy className='inline-block'/>
                   </p>
                   <button className='font-semibold text-sm text-left  hover:text-green-600 relative bg-blue-100 rounded-lg px-2 '>
                    Ethereum Ecosystem 
                     <span className=' bg-blue-200 inline-block w-10 absolute rounded-r-lg ml-4 right-0'>...</span>
                   </button>
               </div>
           </div>

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
    <li > <button className='rounded-full  p-2 bg-green-500'>
    General
    </button>
       
    </li>
    <li > <button className='rounded-full p-2  bg-blue-100'>
    Social
    </button>
    
    </li>
    <li> <button className='rounded-full p-2  bg-blue-100'>
    Developer
    </button>
      
    </li>
    <li > <button className='rounded-full p-2  bg-blue-100'>
    Widgets
    </button>
      
    </li>
</ul>
   </div>

<h3 className='font-semibold mt-4'>
{id.Capitalize} Price Chart {searchedCoin.symbol.toUpperCase()}
</h3>
   <div className='grid grid-cols-2 w-full  grid-rows-2'>
       <div className=' row-span-2'>
           <h3>
               Last updated 01:53PPM UTC, Currency in USD
           </h3>
           <button className='underline float-right'>
               <FaStar className='inline-block'/> Add to Watchlist
           </button>

       </div>
       <div className='rounded-xl p-4   bg-blue-100'>
        <h3 className='font-semibold'>
            {id.toUpperCase()} Converter
            </h3>
            <div className='rounded-lg h-8 w-full bg-white '>
               <p className='inline-block px-2 border-r'>
                   {searchedCoin.symbol.toUpperCase()}
               </p>
           <input type="text" className='h- inline-block  w-3/4 outline-none'/>
           </div>
           <div className='rounded-lg mt-8 h-8 w-full bg-white px-2'>
               <span className='inline-block px-2 border-r'>
                  {currency}  <FaCaretDown className='inline-block' />
               </span>
           <input type="text" className=' inline-block  w-3/4 outline-none' />
           </div>
          
            <p>
                1 {searchedCoin.symbol.toUpperCase()} = ${searchedCoin.current_price}
            </p>
     
       </div>

       <div className='rounded-xl p-4 mt-6   bg-blue-100'>
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
                Maarket Cap
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
  )
}
