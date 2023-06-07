import SearchBar from "../utils/SearchBar"
import {FaSearch,FaListAlt} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from "react"
import { useState,useRef } from "react"
import axios from "axios"
import {showSearchDD, hideSearchDD } from "../utils/Searchslice"
import { nanoid } from 'nanoid'
import { getTrendingCoins } from "../utils/api"
import { useNavigate,Link} from "react-router-dom"
import { CloseBtn } from "./Buttons"
import {getGlobalData} from '../utils/api'



const SearchboxDropdown =()=>{

    const id = nanoid()
    const dispatch = useDispatch()
    const theme = useSelector(state=>state.theme.mytheme)
   const isSearchboxOpen = useSelector(state=>state.searchbox.value)
  const searchRef = useRef()
    const [trending,setTrending] = useState({
        coins: [],
        exchanges:[],
        nft:[],
    categories:[]
     })
     
     const[ newTrendingArray,setNewArray]=useState([...trending.coins])
    const [allCoins,setAllCoins] = useState([])
     const[searchValue,setSearchValue] = useState('')
   const[isSearching,setIsSearching] =useState({
       state:false,
       coin:[]
   })
    
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
// console.log(sorted);
// console.log(trending.coins)

const closeSearchDD =()=>{
    dispatch(hideSearchDD())
}
useEffect(()=>{
    setNewArray(trending.coins)
},[trending])
useEffect(()=>{
    getTrendingCoins(setTrending)
    getTrendingCategories();
    getGlobalData(setAllCoins)
},[])
     useEffect(()=>{
searchRef.current.focus()

     

        
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

        const handleSearch=(e)=>{
        setSearchValue(e.target.value)
        let checkedValue =[] 
        checkedValue.push(newTrendingArray.find(el=>el.item.id.startsWith(e.target.value.trim().toLowerCase())))
        const filtered= checkedValue.filter(value=>value!== undefined)
        const searchedCoin = allCoins.filter(coin=>coin.id.startsWith(e.target.value.trim().toLowerCase()))
    //   
      setNewArray(filtered)
 
     
        setIsSearching(state=>{
            return {
                ...state,
                coin:[searchedCoin],
                state:true
            }
        })
     
           
                if (!filtered.length) {
            
                    setNewArray(trending.coins)
                }
}
 const hideSearchedCoin=()=>{
    setIsSearching(state=>{
        return {
            ...state,
            state:false
        }
    })
 }










    return <>
    <div className={` ${!isSearchboxOpen ? 'h-20' : 'h-screen'} md:-mt-2 md:w-[19vw] `}>
    <div className={`  ${isSearchboxOpen ? 'hidden' : ' md:block'} relative w-full md:-top-8 h-max   md:right-8`}>
<FaSearch className='inline-block translate-y-5  md:translate-y-12  left-12 text-neutral-400 absolute'/> 
<input  onFocus={()=>dispatch(showSearchDD())} className={` ${theme ? 'bg-neutral-900 text-white' :'bg-sky-600'} ml-8 text-center block sm:inline-block mt-8 h-12 rounded-lg w-[90%] sm:w-56 pl-10 sm:pl-4 border   z-50 border-sky-900`} type="search" placeholder="Search..." name="" id="" />
     
</div>
    <div className={`overflow-y-scroll  pb-4  search-dropdown ${isSearchboxOpen ? 'block' : ' hidden'} absolute     md:-top-2 md:-right-10 md:-translate-x-12 scroll z-50 w-full ${theme ? 'bg-neutral-900 text-white' :'bg-sky-700'}  border  no-scrollbar   z-50 border-sky-900`}>
    <FaSearch className='inline-block absolute translate-y-6 ml-1 text-neutral-400  '/>
    <button onClick={hideSearchedCoin}  className="inline-block md:hidden absolute right-12 bg-slate-400 rounded p-1 translate-y-3 ml-1"> 
    Clear</button>
    <span onClick={hideSearchedCoin}  className="inline-block  absolute right-5 md:right-8  rounded p-1 translate-y-3 ml-1">
  <CloseBtn closeEvent={closeSearchDD} />
  </span>
<input ref={searchRef} onChange={(e)=>handleSearch(e)}  type="text" value={searchValue}  name="" className={`w-full h-16 pl-6 pr-16 md:pr-12  ${theme ? 'bg-neutral-900 text-white' :'bg-sky-700'} top-0 left-0 `} placeholder="Search token name or exchange" id="" />
  
  {
      isSearching.state ? <div className="w-full no-border h-full">
      <ul className="h-full w-full mt-8">
          <li className="text-neutral-400 pl-3 border-b py-2  text-sm font-normal mt-4 relative ">
              CryptoCurrencies
          </li>
          {isSearching.coin.map(coin=><li className="w-full" key={coin.id}> {coin.name} ({coin.symbol.toUpperCase()}) 
          </li>)}
      </ul>
      <ul>

      </ul>
      <ul>

      </ul>
  </div> :  <div className="  no-scrollbar">
  <p className="border-b border-neutral-400 mt-16 text-sm text-neutral-400 pl-4">
       Trending Search 🔥
   </p>
   <ul>

       {newTrendingArray?.map(element=><li key={newTrendingArray.indexOf(element)} className="mt-4  pl-2 text-neutral-400">
      <Link to={`/${element.item.id}`} >
      <img src={element.item.small} alt="coin-icon" className="inline-block h-4 mr-4" /> {element.item.name} ( {element.item.symbol})
       <p className="float-right text-neutral-300 font-light text-xs mr-4">#{element.item.market_cap_rank}</p>
      </Link>
       </li>
       )}
   </ul>

   
   <p className="border-b border-neutral-400 mt-4 text-sm text-neutral-400 pl-4">
    
   Trending Categories✨
   </p>
   <ul>
       {sorted?.map(el=><li key={sorted.indexOf(el)}  className="mt-4 pl-2 text-neutral-400"><FaListAlt className="inline-block mr-3"/> {el}</li>)}
   </ul>
  </div>
  }
 
  
    </div>
    </div>
    
    </>
}
export default SearchboxDropdown