import axios from "axios"
import { useEffect,useState,useRef } from "react"
import { FaLevelDownAlt,FaQuestionCircle, FaStar } from "react-icons/fa"
import ToggleIcon from "../utils/Togglecon"
import Categories from "./Categories";
import useShowData from "../utils/useShowData";
import Footer from "./Footer";
import { useSelector } from "react-redux";
export default function Coins() {
   const [data,setData] =useState([]);
   const [isActive,setIsActive] = useState(true)
   const [isCoin,setIsCoin] = useState(false)

   const api='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
   const getMarketData=()=>{
      axios.get(api).then(
         res=>{
       
            setData(res.data)
         }
      )
      
   }
   const allCategoriesRef = useRef() 
   const coinRef = useRef() 

    useShowData(setIsActive,allCategoriesRef) /* custom hook to hide the
    element when theres a click event outside that particular element */

    useShowData(setIsCoin,coinRef)
   useEffect(()=>{

   getMarketData();

  

   },[])

   const handleCategoriesClick =() =>{
      setIsActive(prev=>!prev)
      
   }

   const isSidebarActive = useSelector(state=>state.sideBarActive.value)
   
   return<>
   <div className={`${isSidebarActive ? 'hidden' : 'block'}`}>
   <section ref={coinRef} className={`  relative top-32 w-full`}>
<h3 className="  max-w-md m-0 inline text-3xl mr-4">Cryptocurrency Prices by Market Cap
</h3>
<div className=" md:inline md:relative md:top-0 translate-y-24">
<ToggleIcon/>
       <h3 className=" inline ml-4">Show Stats</h3>
</div>
<h3 className="text-sm  max-w-4xl mt-4">The global cryptocurrency market cap today is $1.21 Trillion, a <span className="text-red-600">-1.7%<FaLevelDownAlt className='inline'/></span> change in the last 24 hours. <span className="underline text-xs md:text-sm cursor-pointer">Read More</span> </h3>
   <div className="flex relative justify-between  mt-4 ">
  <div className="min-w-[40rem]  " ref={allCategoriesRef}>
   <div onClick={handleCategoriesClick} className={` hidden md:block ${!isActive ? ' border-x-sky-50' : 'border-sky-900'} rounded-full   bg-transparent  w-32 pl-4 h-8  mt-4 cursor-pointer border-[1px]`} >All Categories
 
   </div>
  
   <Categories  isActive={isActive}
  setIsActive={setIsActive}
  />
</div>
 
   
   <div className="hidden md:block"><ToggleIcon/>Show Fully Diluted Valuation   <FaQuestionCircle className="inline"/> </div>
         
           
           
           
           
            </div>
            
        <div className="sticky mt-6  bg-sky-700    top-0 grid mb-4 place-items-center h-16 grid-cols-3 md:grid-cols-10 ">
           <h3 className="justify-self-start">#</h3>
           <h3 className="md:-ml-16 md:justify-self-end justify-self-start ">Coin</h3>
           <h3  className="md:ml-52 md:justify-self-center justify-self-end col-span-1">Price</h3>
           <h3 className="ml-56 hidden md:block">1h</h3>
           <h3 className="ml-[15rem] hidden md:block">24h</h3>
           <h3 className="ml-[16rem] hidden md:block">7d</h3>
           <h3 className="ml-[17rem] hidden md:block w-32">24h volume</h3>
           <h3 className="ml-[18rem] hidden md:block w-32">Mkt Cap</h3>
           <h3 className="ml-[20rem] hidden md:block w-32">Last 7 days</h3>
          
           
           </div>
           {data.map(coin=><div key={coin.market_cap_rank} className=" grid mb-4 border-t place-items-center border-neutral-400 gap-x-8 h-16 grid-cols-4 md:grid-cols-10 items-center">
            <h3 className="-ml-10 border-spacing-x-96"><FaStar className="inline mr-4 md:mr-0 text-sky-800 outline-green-100"/>{coin.market_cap_rank}</h3>
            <img src={coin.image} className="w-4 h-4    -ml-16 "  alt="" /><h3 className="-ml-32 w-24 pl-0 "> {coin.name}
            <p className="uppercase md:inline  text-md font-thin ml-0 md:ml-4">{coin.symbol}</p>
            </h3>
            <h3 className="">${coin.current_price.toLocaleString()}</h3>
            <h3 className="hidden md:block">-</h3>
            <h3 className={`w-3 hidden md:block ${coin.price_change_percentage_24h<0 ? 'text-red-600':'text-green-600'}`}>{coin.price_change_percentage_24h.toFixed(1)
}%</h3>
            <h3  className="hidden md:block">-</h3>
            <h3 className="hidden md:block">${coin.total_volume.toLocaleString()}</h3>
            <h3 className="hidden md:block">${coin.market_cap.toLocaleString()}</h3>
            <div className="hidden md:block"><img className="w-10" src="https://www.coingecko.com/coins/7598/sparkline.svg" alt="photo" /></div>
            
         </div>)}    
   
 
   </section>
   <section className="mt-48 w-full">
<h4 className="text-lg font-semibold">
What is Crypto Market Cap?

</h4>
<p className="font-light">
   
Crypto market cap is the total value of all the coins of a particular cryptocurrency that have been mined or are in circulation. Market capitalization is used to determine the ranking of cryptocurrencies. The higher the market cap of a particular crypto coin, the higher its ranking and share of the market. Crypto market cap is calculated by multiplying the total number of coins in circulation by its current price. For instance, to calculate the market cap of Ethereum, all you need to do is multiply the total number of Ethereum in circulation by the current price of one Ethereum and you will get its market cap.
</p>

<h4 className="text-lg font-semibold mt-8">
How to compare Cryptocurrencies Market Cap?
</h4>
<p className="font-light">
Crypto market cap can be divided into three categories:
</p>
<ul className="list-disc ml-8 font-light ">
   <li className="marker:text-neutral-400" >Large-cap cryptocurrencies (&gt;$10 billion)</li>
   <li className="marker:text-neutral-400">Mid-cap Cryptocurrencies ($1 billion - $10 billion)</li>
   <li className="marker:text-neutral-400">Small-cap cryptocurrencies (&lt; $1 billion). </li>
</ul>
<p className="mt-8 font-light">
As a financial metric, market cap allows you to compare the total
 circulating value of one cryptocurrency with another.
  Large cap cryptocurrencies such as Bitcoin and Ethereum
   have a market cap of over $10 billion.
    They typically consist of protocols that have demonstrated track records, and have a vibrant ecosystem of developers maintaining and enhancing the protocol, as well as building new projects on top of them. While market cap is a simple and intuitive comparison metric, it is not a perfect point of comparison. Some cryptocurrency projects may appear to have inflated market cap through price swings and the tokenomics of their supply. As such, it is best to use this metric as a reference alongside other metrics such as trading volume, liquidity, fully diluted valuation, and fundamentals during your research process.
</p>
<h4 className="text-lg font-semibold mt-8">
How does Cryptonite Calculate Cryptocurrency Prices?
</h4>
<p className="font-light">
The price is calculated using a global volume-weighted average price formula which is based on the pairings available on different exchanges of a particular crypto asset. For examples and more detailed information on how we track cryptocurrency prices and other metrics, <a href="#">see our methodology page here</a>.
</p>
<h4 className="text-lg font-semibold mt-8">
Why are Cryptocurrency Prices Different on Exchanges?
</h4>
<p className="font-light">
You may notice that cryptocurrencies listed on different exchanges have different prices. The reasons for this are complex, but simply put cryptocurrencies are traded on different exchanges and across different markets with varying economic conditions, liquidity, trading pairs, and offerings (e.g. derivatives / leverage) which all influence price in their own way.
</p>

<h4 className="text-lg font-semibold mt-8">
Where to Check Cryptocurrency Prices?
</h4>
{/* Modification required
 to set neccesary links active */}

<p className="font-light">
You can track over 10,000 crypto prices on CoinGecko across more than 50 currencies. Popular cryptocurrency pairs include <span className="text-green-600 cursor-pointer">BTC-USD</span>,<span className="text-green-600 cursor-pointer"> ETH-USD</span>, and <span className="cursor-pointer text-green-600">SLP-PHP</span>. You can also track metrics such as 24 hour trading volume, market capitalization, price chart, historical performance chart, the circulating supply, and more. Sign up to use CoinGecko’s crypto portfolio to track the performance of your portfolio. You may also check out GeckoTerminal (currently in beta), our comprehensive multichain on-chain charting tool featuring live charts, current trades, market sentiment and more as it happens in real time! CoinGecko also has a mobile app that enables you to track cryptocurrencies on <span className="cursor-pointer text-green-600">Android</span> and <span className="cursor-pointer text-green-600">IOS</span>.
</p>
<h4 className="text-lg font-semibold mt-8">
What is 24h Volume in the Table Above?
</h4>
<p className="font-light">
The 24h trading volume refers to the amount a cryptocurrency has been bought and sold on all exchanges within the last 24 hours on the spot market. For instance, if the 24h volume for Ethereum is $15 billion, it means that $15 billion worth of Ether had changed hands across all exchanges in the last 24 hours.
</p>
   </section>
   <Footer/>
   </div>
   </> 

}