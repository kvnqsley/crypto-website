import { NavLink,
    Outlet } from "react-router-dom"
import { FaStar,FaFire } from "react-icons/fa"
import { useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import {useQuery} from '@tanstack/react-query'
import { useEffect } from "react"















export default function CoinNavbar({handlePortfolio,pfolio,newcoins, coins}){
    const [isActive,setIsActive] = useState(false)
   
 const NAV_TO_PORTFOLIO = useSelector(state=>state.subnavigation.value)
 const [categories,setCategories] =useState([])
 const [shuffled,setShuffled] = useState([])
 const {data,isLoading,isError} = useQuery(['getCategories'],()=>
     axios.get('https://api.coingecko.com/api/v3/coins/categories/list'
     ).then(res=>{
         return res.data
     }).catch(err=>console.log(err))
     )

     const handleData  = async()=>{
        setCategories( data.map(category=>category.name));
        const  filter  = categories.sort(()=>Math.random() - 0.5)
   setShuffled(filter.slice(0,3)) 
     }
   setTimeout(() => {
    handleData()
   }, 10000);












   
    

    return<>
{isLoading ? null : <ul className={`relative md:pb-7 pb-2 h-min border-b-[1px] w-full overflow-y-hidden border-neutral-400
 gap-5 top-24 flex`} >
    <FaStar className="text-yellow-400"/>
     <li onClick={handlePortfolio}  className={`${NAV_TO_PORTFOLIO ? 'border-b-2 -mb-2 md:-mb-7 ' :'hover:border-b-2  cursor-pointer min-w-max -mb-2 md:-mb-7 border-cyan-100'} cursor-pointer` }>Portfolio</li>
   <li   onClick={handlePortfolio}  className={`${coins ?'border-b-2 -mb-2 md:-mb-7 ' :"hover:border-b-2  cursor-pointer md:-mb-7 -mb-2  min-w-max border-cyan-100"} cursor-pointer`}>Coins</li>
    <li onClick={handlePortfolio}className={`${newcoins ?'border-b-2 -mb-2 md:-mb-7 ' :"hover:border-b-2  cursor-pointer  -mb-2 md:-mb-7 border-cyan-100"} cursor-pointer min-w-max`}>New Coins</li>
   <li onClick={handlePortfolio}  className={`${isActive ? 'border-b-2 -mb-2 md:-mb-7 ' :"hover:border-b-2  cursor-pointer -mb-2 md:-mb-7   border-cyan-100"} cursor-pointer min-w-max` }>Gainer &amp; Losers</li>
  <li  onClick={handlePortfolio} className={`${isActive ? 'border-b-2 -mb-2 md:-mb-7 ' :'hover:border-b-2  cursor-pointer -mb-2 md:-mb-7   border-cyan-100'} cursor-pointer min-w-max` }>{shuffled[0]}</li>
  <p className="cursor-pointer  relative group">🔥<span className="bg-black top-7 min-w-max rounded group-hover:block   -left-36 absolute before:content-between before:w-2 before:border-black  before:border-8  before:border-r-transparent before:border-l-transparent before:border-t-transparent hidden before:absolute before:left-[48%] before:-top-4 text-lime-50 hover:visible px-4">Trending Category-See more in search</span></p>
   <li onClick={handlePortfolio}  className={`${isActive ? 'border-b-2 -mb-2 md:-mb-7 ' :'hover:border-b-2  cursor-pointer -mb-2 md:-mb-7  border-cyan-100'} cursor-pointe min-w-maxr` }>{shuffled[1]}</li><p  className="cursor-pointer  relative group">🔥<span className="bg-black top-7 min-w-max rounded group-hover:block   before:content-between before:w-2 before:border-black  before:border-8  before:border-r-transparent before:border-l-transparent before:border-t-transparent before:absolute before:left-[48%] before:-top-4 hidden px-4 -left-36 absolute text-lime-50 hover:visible">Trending Category-See more in search</span></p>
   <li  onClick={handlePortfolio} className={`${isActive ? 'border-b-2 -mb-2 md:-mb-7 ' :'hover:border-b-2  cursor-pointer -mb-2 md:-mb-7  border-cyan-100'} cursor-pointe min-w-maxr` }>{shuffled[2]}</li><p  className="cursor-pointer  relative group">🔥<span className="bg-black top-7 min-w-max rounded group-hover:block before:content-between before:w-2 before:border-black  before:border-8  before:border-r-transparent before:border-l-transparent before:border-t-transparent before:absolute before:left-[48%] before:-top-4  hidden px-4 -left-36 absolute text-lime-50 hover:visible">Trending Category-See more in search</span></p>

</ul> 

}


    </>
}