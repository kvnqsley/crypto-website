import { NavLink,
    Outlet } from "react-router-dom"
import { FaStar,FaFire } from "react-icons/fa"
import { useState } from "react"
import Coins from "./Coins"
import Portfolio from "./Portfolio"

export default function CoinNavbar({handlePortfolio,pfolio,newcoins, coins}){
    const [isActive,setIsActive] = useState(false)
   
 
    return<>

<ul className='relative pb-5 h-10 border-b-[1px]  border-neutral-400
 gap-5 top-24 flex' >
    <FaStar className="text-yellow-400"/>
     <li onClick={handlePortfolio}  className={`${pfolio ? 'border-b-2 -mb-5 ' :'hover:border-b-2  cursor-pointer -mb-5 border-cyan-100'} cursor-pointer` }>Portfolio</li>
   <li   onClick={handlePortfolio}  className={`${coins ?'border-b-2 -mb-5 ' :"hover:border-b-2  cursor-pointer -mb-5 border-cyan-100"} cursor-pointer`}>Coins</li>
    <li onClick={handlePortfolio}className={`${newcoins ?'border-b-2 -mb-5 ' :"hover:border-b-2  cursor-pointer -mb-5 border-cyan-100"} cursor-pointer`}>New Coins</li>
   <li onClick={handlePortfolio}  className={`${isActive ? 'border-b-2 -mb-5 ' :"hover:border-b-2  cursor-pointer -mb-5 border-cyan-100"} cursor-pointer` }>Gainer &amp; Losers</li>
  <li  onClick={handlePortfolio} className={`${isActive ? 'border-b-2 -mb-5 ' :'"hover:border-b-2  cursor-pointer -mb-5 border-cyan-100'} cursor-pointer` }>Avalanche Ecosystem</li>
  <p className="cursor-pointer  relative group">🔥<span className="bg-black top-7 min-w-max rounded group-hover:block  hidden -left-36 absolute text-lime-50 hover:visible px-4">Trending Category-See more in search</span></p>
   <li onClick={handlePortfolio}  className={`${isActive ? 'border-b-2 -mb-5 ' :'"hover:border-b-2  cursor-pointer -mb-5 border-cyan-100'} cursor-pointer` }>Polygon Ecosystem</li><p  className="cursor-pointer  relative group">🔥<span className="bg-black top-7 min-w-max rounded group-hover:block  hidden px-4 -left-36 absolute text-lime-50 hover:visible">Trending Category-See more in search</span></p>
   <li  onClick={handlePortfolio} className={`${isActive ? 'border-b-2 -mb-5 ' :'"hover:border-b-2  cursor-pointer -mb-5 border-cyan-100'} cursor-pointer` }>Ethereum Ecosystem</li><p  className="cursor-pointer  relative group">🔥<span className="bg-black top-7 min-w-max rounded group-hover:block  hidden px-4 -left-36 absolute text-lime-50 hover:visible">Trending Category-See more in search</span></p>

</ul> 



    </>
}