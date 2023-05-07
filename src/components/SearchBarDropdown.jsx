import SearchBar from "../utils/SearchBar"
import {FaSearch,FaListAlt} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from "react"
import { useState,useRef } from "react"
import axios from "axios"
import {showSearchDD, hideSearchDD } from "../utils/Searchslice"
const SearchboxDropdown =()=>{
    const dispatch = useDispatch()
    const theme = useSelector(state=>state.theme.mytheme)
   const isSearchboxOpen = useSelector(state=>state.searchbox.value)
  
    const [trending,setTrending] = useState({
        coins: [],
        exchanges:[],
        nft:[],
    categories:[]
     })
  
    const api = 'https://api.coingecko.com/api/v3/search/trending'
    const getTrendingCoins =()=>{
        axios.get(api).then(res=> setTrending(prev=>{
           return {
              coins:res.data.coins,
            exchanges:res.data.exchanges
           }
        })
           ).catch(err=>console.log(err))
     }
     const getTrendingCategories=()=>{
         axios.get('https://api.coingecko.com/api/v3/coins/categories/list').then(res=>setTrending(prev=>{
            return{
                ...prev,
             categories:res.data
            }
         })).catch(err=>console.log(err))
     }

     const categoryArray= trending.categories?.map(category=>category.name)
const shuffled = categoryArray?.sort(()=>Math.random() -0.5)
const sorted = shuffled?.slice(0,6)
     useEffect(()=>{
         getTrendingCoins()
         getTrendingCategories();

         const closeSearchDD =()=>{
             dispatch(hideSearchDD())
         }
         const root =document.querySelector('#root')
         const searchbox= document.querySelector('.search-dropdown')
        const dimensions= searchbox.getBoundingClientRect()
         const left =dimensions.left
         const right =dimensions.right
         const top =dimensions.top
         const bottom =dimensions.bottom
         const height =dimensions.height
        //  console.log(bottom,height);
        root.addEventListener('click',(e)=>{
            
        if (isSearchboxOpen) {
            if (e.clientX < left || e.clientY < top || e.clientY > height || e.clientX > right ) {
                 closeSearchDD()
            }
            
        }
       
         })
        
         


        //  return ()=> root.removeEventListener('click',closeSearchDD)
     },[isSearchboxOpen])




     
    return <>
    <div className={` ${!isSearchboxOpen ? 'h-20' : 'h-screen'} md:-mt-2 md:w-[19vw] `}>
    <div className={`  ${isSearchboxOpen ? 'hidden' : ' md:block'} relative w-full md:-top-8 h-max   md:right-8`}>
<FaSearch className='inline-block translate-y-5  md:translate-y-12  left-12 text-neutral-400 absolute'/> 
<input  onFocus={()=>dispatch(showSearchDD())} className={` ${theme ? 'bg-neutral-900 text-white' :'bg-sky-600'} ml-8 text-center block sm:inline-block mt-8 h-12 rounded-lg w-[90%] sm:w-56 pl-10 sm:pl-4 border   z-50 border-sky-900`} type="search" placeholder="Search..." name="" id="" />
     
</div>
    <div className={`h-screen  pb-4  search-dropdown ${isSearchboxOpen ? 'block' : ' hidden'} absolute   overflow-y-scroll  md:-top-2 md:-right-10 md:-translate-x-12 scroll z-50 w-full ${theme ? 'bg-neutral-900 text-white' :'bg-sky-700'}  border   z-50 border-sky-900`}>
    <FaSearch className='inline-block absolute translate-y-6 ml-1 text-neutral-400  '/><span className="inline-block md:hidden absolute right-5 bg-slate-400 rounded p-1 translate-y-3 ml-1">Clear</span>
<input  type="search" name="" className={`w-full h-16 pl-6  ${theme ? 'bg-neutral-900 text-white' :'bg-sky-700'} top-0 left-0 `} placeholder="Search token name or exchange" id="" />
   <p className="border-b border-neutral-400 mt-16 text-sm text-neutral-400 pl-4">
       Trending Search 🔥
   </p>
   <ul>
       {trending.coins?.map(element=><li key={element.index} className="mt-4  pl-2 text-neutral-400"> <img src={element.item.small} alt="coin-icon" className="inline-block h-4 mr-4" /> {element.item.name}
       <p className="float-right text-neutral-300 font-light text-xs mr-4">#{element.item.market_cap_rank}</p>
       </li>
       )}
   </ul>

   
   <p className="border-b border-neutral-400 mt-4 text-sm text-neutral-400 pl-4">
    
   Trending Categories✨
   </p>
   <ul>
       {sorted?.map(el=><li key={el.index} className="mt-4 pl-2 text-neutral-400"><FaListAlt className="inline-block mr-3"/> {el}</li>)}
   </ul>
    </div>
    </div>
    
    </>
}
export default SearchboxDropdown