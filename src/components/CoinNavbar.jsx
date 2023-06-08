import { NavLink,
    Outlet } from "react-router-dom"
import { FaStar,FaArrowRight } from "react-icons/fa"
import { useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import {useQuery} from '@tanstack/react-query'
import Tooltip from "../utils/Tooltip"















export default function CoinNavbar({navigateMenu,
    portfolio,
    newcoins,
    category,
     coins,
    theme}){
    const [isActive,setIsActive] = useState(false)
   

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
  data ?   handleData() : null
   }, 10000);












   
    

    return<>
{isLoading ? null : <div className="relative w-full">
    <ul className={`relative md:pb-7 pb-2 h-min border-b-[1px] w-full overflow-y-hidden border-neutral-400
 gap-5 top-24 flex`} >
    <FaStar className="text-yellow-400"/>
     <li onClick={navigateMenu}  className={`${portfolio ? 'border-b-2 -mb-2 md:-mb-7 ' :'hover:border-b-2  cursor-pointer min-w-max -mb-2 md:-mb-7 border-cyan-100'} cursor-pointer` }>Portfolio</li>
   <li   onClick={navigateMenu}  className={`${coins ?'border-b-2 -mb-2 md:-mb-7 ' :"hover:border-b-2  cursor-pointer md:-mb-7 -mb-2  min-w-max border-cyan-100"} cursor-pointer`}>Coins</li>
    <li onClick={navigateMenu}className={`${newcoins ?'border-b-2 -mb-2 md:-mb-7 ' :"hover:border-b-2  cursor-pointer  -mb-2 md:-mb-7 border-cyan-100"} cursor-pointer min-w-max`}>New Coins</li>
   <li onClick={navigateMenu}  className={`${category ? 'border-b-2 -mb-2 md:-mb-7 ' :"hover:border-b-2  cursor-pointer -mb-2 md:-mb-7   border-cyan-100"} cursor-pointer min-w-max` }>Categories</li>
  <li  onClick={navigateMenu} className={`${isActive ? 'border-b-2 -mb-2 md:-mb-7 ' :'hover:border-b-2  cursor-pointer -mb-2 md:-mb-7   border-cyan-100'} cursor-pointer min-w-max` }>{shuffled[0]}</li>
  <p className="cursor-pointer -ml-5 relative group">🔥<Tooltip text={'Trending Category-See more in search'} theme={theme} /></p>
   <li onClick={navigateMenu}  className={`${isActive ? 'border-b-2 -mb-2 md:-mb-7 ' :'hover:border-b-2  cursor-pointer -mb-2 md:-mb-7  border-cyan-100'} cursor-pointer min-w-max` }>{shuffled[1]}</li>
   <p  className="cursor-pointer -ml-5 relative group">🔥<Tooltip theme={theme} text={'Trending Category-See more in search'} /></p>
   <li  onClick={navigateMenu} className={`${isActive ? 'border-b-2 -mb-2 md:-mb-7 ' :'hover:border-b-2  cursor-pointer -mb-2 md:-mb-7  border-cyan-100'} cursor-pointer min-w-max` }>{shuffled[2]}</li>
   <p  className="cursor-pointer -ml-5 relative group">🔥<Tooltip theme={theme} text={'Trending Category-See more in search'} /></p>
</ul> 
<span className={` text-white sm:hidden animate-pulse absolute right-2 top-32 inline-block text-xl `}> <FaArrowRight className="inline-block" /> </span>

</div>

}


    </>
}