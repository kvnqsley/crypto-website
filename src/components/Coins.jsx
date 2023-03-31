import axios from "axios"
import { useEffect,useState,useRef } from "react"
import { FaLevelDownAlt,FaQuestionCircle, FaStar } from "react-icons/fa"
import ToggleIcon from "../utils/Togglecon"
import Categories from "./Categories";
import useShowData from "../utils/useShowData";
import Footer from "./Footer";

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


   
   return<>
   <section ref={coinRef} className={` relative top-32 w-full`}>
<h3 className="  max-w-md m-0 inline text-3xl mr-4">Cryptocurrency Prices by Market Cap
</h3>
 <ToggleIcon/>
       <h3 className=" inline ml-4">Show Stats</h3>
<h3 className="  max-w-4xl mt-4">The global cryptocurrency market cap today is $1.21 Trillion, a <span className="text-red-600">-1.7%<FaLevelDownAlt className='inline'/></span> change in the last 24 hours. <span className="underline cursor-pointer">Read More</span> </h3>
   <div className="flex relative justify-between  mt-4 ">
  <div className="min-w-[40rem]  " ref={allCategoriesRef}>
   <div onClick={handleCategoriesClick} className={`${!isActive ? ' border-x-sky-50' : 'border-sky-900'} rounded-full   bg-transparent  w-32 pl-4 h-8  mt-4 cursor-pointer border-[1px]`} >All Categories
 
   </div>
  
   <Categories  isActive={isActive}
  setIsActive={setIsActive}
  />
</div>
 
   
   <div><ToggleIcon/>Show Fully Diluted Valuation   <FaQuestionCircle className="inline"/> </div>
         
           
           
           
           
            </div>
            
        <div className="sticky mt-4  bg-sky-700   top-0 grid mb-4 place-items-center h-16 grid-cols-10 ">
           <h3>#</h3>
           <h3 className="-ml-16 ">Coin</h3>
           <h3  className="ml-52">Price</h3>
           <h3 className="ml-56">1h</h3>
           <h3 className="ml-[15rem]">24h</h3>
           <h3 className="ml-[16rem]">7d</h3>
           <h3 className="ml-[17rem] w-32">24h volume</h3>
           <h3 className="ml-[18rem] w-32">Mkt Cap</h3>
           <h3 className="ml-[20rem] w-32">Last 7 days</h3>
          
           
           </div>
           {data.map(coin=><div key={coin.market_cap_rank} className=" grid mb-4 border-t place-items-center border-neutral-400 gap-x-8 h-16 grid-cols-10 items-center">
            <h3 className="-ml-10 border-spacing-x-96"><FaStar className="inline text-sky-800 outline-green-100"/>{coin.market_cap_rank}</h3>
            <img src={coin.image} className="w-4 h-4  -ml-16 "  alt="" /><h3 className="-ml-32 "> {coin.name}
            <p className="uppercase inline text-sm font-thin ml-4">{coin.symbol}</p>
            </h3>
            <h3 className="">${coin.current_price.toLocaleString()}</h3>
            <h3>-</h3>
            <h3 className={`w-3 ${coin.price_change_percentage_24h<0 ? 'text-red-600':'text-green-600'}`}>{coin.price_change_percentage_24h.toFixed(1)
}%</h3>
            <h3>-</h3>
            <h3>${coin.total_volume.toLocaleString()}</h3>
            <h3>${coin.market_cap.toLocaleString()}</h3>
            <div><img className="w-10" src="https://www.coingecko.com/coins/7598/sparkline.svg" alt="photo" /></div>
            
         </div>)}    
   
 
   </section>
   <Footer/>
   
   </> 

}