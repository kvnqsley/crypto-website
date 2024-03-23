import React from 'react'
import {FaChevronDown, FaCopy,FaGreaterThan } from 'react-icons/fa'
import { useParams,Link } from 'react-router-dom'
import {useState,useEffect,createContext} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getChartData,getGlobalData} from '/src/utils/api'

import Section1 from './section1'
import Overview from './Overview'
import ContextProvider from './ContextProvider'

const Page = ({theme,data}) => {

    const isSidebarActive = useSelector(state=>state.sideBarActive.value)

    const currency = useSelector(state=>state.currency.currency)
   
    const [allCoins,setAllCoins] = useState(null)
    const [readMore,setReadMore] = useState(false)
    const [component,setComponent] = useState(<Overview/>)    

    const handleClick=()=>{
        setReadMore(prev=>!prev)
     
    }

    const {id} =  useParams()
    let isBitcoin;
    (id == 'bitcoin' ? isBitcoin = true : null);

    useEffect(()=>{
        getGlobalData(setAllCoins)
        
    },[])
   

    const storedState = localStorage.getItem('coinsData')
    const [info,setInfo]= useState(false)

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

    const searchedCoin= data.market?.find(coin=>coin.id == id)
    const otherCoins = allCoins?.find(coin=> coin.id == id)
   

 
  return (
  <>
  {searchedCoin && 
    <main  className={` ${isSidebarActive ? 'hidden' : 'block'} ${theme ? 'bg-black text-white':'bg-sky-700' } sm:w-[calc(100% - 32rem)]    w-[calc(100% - 16rem)]  sm:ml-16 ml-4 mr-4  sm:mr-16 min-h-screen`}>
    <Link to={'/'} className="mt-24 inline-block text-green-400 cursor-pointer hover:text-green-900 font-semibold">Cryptocurrencies</Link >
     <span className="text-neutral-400 font-semibold ">
         <FaGreaterThan className="inline-block"/> {searchedCoin.name} Price</span>



        <Section1 searchedCoin={searchedCoin}
        info={info}
       isBitcoin={isBitcoin}
        otherCoins={otherCoins}
        setInfo={setInfo}
        theme={theme}
        />
        

{/*         
        <Section2 
         />


        <Section3}/> */}

        <ContextProvider state={{toggleGeneral,
        toggleSocial,
       toggleDeveloper,
       toggleWidgets,
       tab,
       searchedCoin,
       id,
       theme,
       currency,
       readMore,
       handleClick,
       setComponent,
       isBitcoin,
       data}}>

          {component}
   

        </ContextProvider>

        


</main>
   }</>
  )
}

export default Page