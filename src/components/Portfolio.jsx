import { FaCaretDown, FaChartPie,FaPlus, FaEllipsisV, FaEye, FaTasks,FaChevronDown } from "react-icons/fa"
import DownloadStore from "../utils/DownloadStores"
import Footer from "./Footer"
import { useSelector,useDispatch } from "react-redux"
import { handleSignup } from '../utils/SignUpslice'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../utils/firebase.config"
import ToggleIcon from "../utils/Togglecon"
import { useState,useEffect } from "react"















const Portfolio =()=>{
    const dispatch = useDispatch()
  
const isSidebarActive = useSelector(state=>state.sideBarActive.value)

const issignUpActive = useSelector(state=>state.sideBarActive.signUp)
const authState = useAuthState (auth)
const [portfolioTab,setPortfolioTab] = useState()


useEffect(()=>{
    const root =document.querySelector('#root')
    const tab= document.querySelector('.portfolio-tab')
    const menu= document.querySelector('.dropdown')
    const dimensions= tab?.getBoundingClientRect()
    const left =dimensions?.left
    const right =dimensions?.right
    const top =menu?.getBoundingClientRect()?.top
    const bottom =dimensions?.bottom
    const height =dimensions?.height
  
    root.addEventListener('click',(e)=>{
       
    if (portfolioTab) {
       if (e.clientX < left || e.clientY < top || e.clientY > bottom || e.clientX > right ) {
       setPortfolioTab(false)
       }
       
    }
    
    })
},[authState])




return<>
{authState[0]?.emailVerified ? <main className={`min-h-screen mt-32  w-full ${isSidebarActive ? 'hidden' : 'block'}`}>
    <div className={`flex md:justify-between gap-y-5  md:items-center md:flex-row flex-col`}>
        <div className="flex-grow">
            <h3 onClick={()=>{setPortfolioTab(true)}} className="dropdown cursor-pointer text-neutral-400 font-semibold inline text-xl">
                My Portfolio <FaChevronDown  className='inline-block'/>
            </h3>
           
            <span className="bg-red-400 px-2 ml-2 rounded inline-block cursor-pointer text-white  ">
                New</span>
                <span className="bg-opacity-70 bg-green-500 inline-block cursor-pointer ml-5 px-2 rounded text-teal-900">
                    Main
                </span>
             </div>
        <div className="min-w-1/4">
<FaEye className="inline-block  text-3xl cursor-pointer "/>
<FaChartPie className="inline-block ml-8 text-3xl cursor-pointer " />
<FaTasks className="inline-block ml-8 text-3xl cursor-pointer " />
<FaEllipsisV  className="inline-block ml-8 text-3xl cursor-pointer "/>
<button className="bg-green-400 mt-4 md:mt-auto text-white rounded cursor-pointer p-3 inline"> Add New Coin</button>
        </div>
       
        </div> 
        <div className={`  absolute h-screen  z-40 sm:h-[50vh]  top-[0] md:top-auto md:h-max w-full md:w-[40%] portfolio-tab ${portfolioTab ? 'block' : 'hidden'} shadow-lg  bg-sky-700 pl-3 pb-6`}>
                <div className='border-b  border-neutral-400 font-semibold  py-2'>
                    <h2>All Portfolios  <span className="inline-block  mr-4 rounded-lg p-1 bg-green-700  text-teal-900 ">New</span></h2>
                    <p className="font-normal">See All Portfolios At Once</p>
                </div>
                <div className='border-b border-neutral-400  font-semibold  py-2 '>
                    <h2>
                        My Portfolio  <span className="inline-block  mr-4 p-1 rounded-lg bg-green-700  text-teal-900">Main</span>
                    </h2>
                </div>
                <div className="py-2">
                    <FaPlus className='inline-block'/> <p className="inline-block">Create Portfolio</p>
                </div>
            </div>
        <div className="grid md:grid-rows-1 sm:w-[60%] text-center sm:text-left mt-6 sm:grid-rows-2 gap-4 md:grid-cols-3 sm:grid-cols-2">
            <div className=" shadow-lg p-5">
            &euro;0.00
            <p>Total Balance</p>
            </div>
            <div className=" shadow-lg p-5">
            &euro;0.00
           <p>
           24h Portfolio Change <span className="text-green-600"> (+0%)</span>
           </p>
            </div>
            <div className=" shadow-lg p-5"  >
            &euro;0.00
            <p>
            Total Profit Loss (-)
            </p>
            </div>
        </div>
        <div className=" justify-item-end hidden  absolute right-1   md:block"><ToggleIcon/>
        <p className="ml-4 inline-block">Show Fully Diluted Valuation</p> 
        </div>
        <table className="w-full mt-10">
            
            <td>
                 <thead className='font-semibold'>
                    #
                </thead>
            </td>
            <td>
                 <thead className='font-semibold'>
                   Coin
                </thead>
            </td>
            <td>
                 <thead className='font-semibold'>
                    Price
                </thead>
            </td>
            <td>
                 <thead className='font-semibold'>
                   1h
                </thead>
            </td>
            <td>
                 <thead className='font-semibold'>
                   24h
                </thead>
            </td>
            <td>
                 <thead className='font-semibold'>
                   7d
                </thead>
            </td>
            <td>
                 <thead className='font-semibold'>
                 Mkt Cap
                </thead>
            </td>
            <td>
                 <thead className='font-semibold'>
                Last 7 Days
                </thead>
            </td>
            <td>
                 <thead className='font-semibold'>
                Holdings
                </thead>
            </td>
            <td>
                 <thead className='font-semibold'>
            PNL
                </thead>
            </td>
        </table>
</main> : <main className={`min-h-screen mt-32 relative  w-full ${isSidebarActive ? 'hidden' : 'block'}` } >
<section className="md:grid relative place-items-center md:static  md:grid-cols-2">
    <div className="top-52 md:top-0 relative">
        <h1 className="font-bold w-11/12 mt-10 text-4xl md:w-2/3">
        Free &amp; Powerful Crypto Portfolio Tracker
        </h1>
        <h3 className="text-neutral-400 w-full md:w-3/4 mt-6">Track your crypto earnings like a pro, with a user-friendly and reliable portfolio tracker that you can rely on

        </h3>
        <button 
           onClick={()=>dispatch(handleSignup())} 
        className="bg-green-600 rounded px-6 py-2 mt-10 hover:bg-green-900 text-cyan-50">
            SIGN UP
        </button>
        <button
      className="border-cyan-50 rounded border-[1px] ml-8 py-2 px-6 hover:border-green-600 ">
            LOG IN
        </button>
        <h3 className="text-neutral-400 md:mt-8">
        Start your portfolio now!
        </h3>
    </div>
    <div className="absolute md:static -top-2">
        <img src="/simage.webp" className="" alt="phone-img" />
    </div>
</section>
<section className="grid md:mt-20 mt-56 gap-y-8 md:gap-y-0 md:grid-cols-3">
    <div>
        <h1 className="font-semibold text-xl">📈Real-time Price Data (11,000+ coins)</h1>
        <p className="font-light text-xl">From the world's largest independent cryptocurrency data agreegator</p>
    </div>
    <div>
<h1 className="font-semibold text-xl">📲Synced across Web &amp; Mobile App</h1>
<p   className="font-light text-xl">Porfolio tracking at your fingertips -anytime,anywhere</p>
    </div>
    <div>
        <h1 className="font-semibold text-xl">
        📊 Create multiple Portfolios
        </h1>
        <p  className="font-light text-xl">
            Cover all strategies - conservative,risky,long term HODL,DeFi,low-cap gems, high risk positions and more!
        </p>
    </div>
</section>
<section className="grid gap-x-32 mt-10 md:mt-0 md:grid-cols-2">
    <img src="/pimage.webp" alt="" className="" />
    <div className="relative top-1/4">
        <h1 className='text-4xl mt- place font-bold'>
        Bring it to the next level with mobile app
        </h1>
        <div className="md:mt-8  md:ml-4">
            <p className="md:inline text-xl mt-4 md:mt-0 ">🔄Synced Portfolios</p>
            <p className="md:ml-10 text-xl md:inline md:mt-0 mt-4">🔔Price Alerts</p>
            <p className="md:ml-10 text-xl md:inline md:mt-0 mt-4 pb-8">💰Price Widgets</p>
        </div>
        <h4 className="mt-16 text-center">⭐️⭐️⭐️⭐️✨ 4.8 app rating</h4>
        <DownloadStore/>
    </div>
  
</section>
<Footer/>
</main>}


</>
}
export default Portfolio