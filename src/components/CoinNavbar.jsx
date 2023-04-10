import { NavLink,
    Outlet } from "react-router-dom"
import { FaStar,FaFire } from "react-icons/fa"
import { useState } from "react"
import Coins from "./Coins"
import Portfolio from "./Portfolio"
import { useSelector } from "react-redux"
export default function CoinNavbar({handlePortfolio,pfolio,newcoins, coins}){
    const [isActive,setIsActive] = useState(false)
   
 const NAV_TO_PORTFOLIO = useSelector(state=>state.subnavigation.value)
    return<>

<ul className='relative pb-5 h-10 border-b-[1px] w-full overflow-y-hidden border-neutral-400
 gap-5 top-24 flex' >
    <FaStar className="text-yellow-400"/>
     <li onClick={handlePortfolio}  className={`${NAV_TO_PORTFOLIO ? 'border-b-2 -mb-5 ' :'hover:border-b-2  cursor-pointer -mb-5 border-cyan-100'} cursor-pointer` }>Portfolio</li>
   <li   onClick={handlePortfolio}  className={`${coins ?'border-b-2 -mb-5 ' :"hover:border-b-2  cursor-pointer -mb-5 border-cyan-100"} cursor-pointer`}>Coins</li>
    <li onClick={handlePortfolio}className={`${newcoins ?'border-b-2 -mb-5 ' :"hover:border-b-2  cursor-pointer -mb-5 border-cyan-100"} cursor-pointer`}>New Coins</li>
   <li onClick={handlePortfolio}  className={`${isActive ? 'border-b-2 -mb-5 ' :"hover:border-b-2  cursor-pointer -mb-5 border-cyan-100"} cursor-pointer` }>Gainer &amp; Losers</li>
  <li  onClick={handlePortfolio} className={`${isActive ? 'border-b-2 -mb-5 ' :'"hover:border-b-2  cursor-pointer -mb-5 border-cyan-100'} cursor-pointer` }>Avalanche Ecosystem</li>
  <p className="cursor-pointer  relative group">🔥<span className="bg-black top-7 min-w-max rounded group-hover:block   -left-36 absolute before:content-between before:w-2 before:border-black  before:border-8  before:border-r-transparent before:border-l-transparent before:border-t-transparent hidden before:absolute before:left-[48%] before:-top-4 text-lime-50 hover:visible px-4">Trending Category-See more in search</span></p>
   <li onClick={handlePortfolio}  className={`${isActive ? 'border-b-2 -mb-5 ' :'"hover:border-b-2  cursor-pointer -mb-5 border-cyan-100'} cursor-pointer` }>Polygon Ecosystem</li><p  className="cursor-pointer  relative group">🔥<span className="bg-black top-7 min-w-max rounded group-hover:block   before:content-between before:w-2 before:border-black  before:border-8  before:border-r-transparent before:border-l-transparent before:border-t-transparent before:absolute before:left-[48%] before:-top-4 hidden px-4 -left-36 absolute text-lime-50 hover:visible">Trending Category-See more in search</span></p>
   <li  onClick={handlePortfolio} className={`${isActive ? 'border-b-2 -mb-5 ' :'"hover:border-b-2  cursor-pointer -mb-5 border-cyan-100'} cursor-pointer` }>Ethereum Ecosystem</li><p  className="cursor-pointer  relative group">🔥<span className="bg-black top-7 min-w-max rounded group-hover:block before:content-between before:w-2 before:border-black  before:border-8  before:border-r-transparent before:border-l-transparent before:border-t-transparent before:absolute before:left-[48%] before:-top-4  hidden px-4 -left-36 absolute text-lime-50 hover:visible">Trending Category-See more in search</span></p>

</ul> 



    </>
}