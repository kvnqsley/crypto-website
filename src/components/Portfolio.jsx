import { FaBell, FaChartBar, FaChartLine } from "react-icons/fa"
import DownloadStore from "../utils/DownloadStores"
import Footer from "./Footer"
import { useSelector,useDispatch } from "react-redux"
import { openSignup } from '../utils/Sidebarslice'
const Portfolio =()=>{
    const dispatch = useDispatch()
    
const isSidebarActive = useSelector(state=>state.sideBarActive.value)
return<>

<main className={`min-h-screen relative top-32 w-full ${isSidebarActive ? 'hidden' : 'block'}` } >
<section className="md:grid relative place-items-center md:static  md:grid-cols-2">
    <div className="top-52 md:top-0 relative">
        <h1 className="font-bold w-11/12 mt-10 text-4xl md:w-2/3">
        Free &amp; Powerful Crypto Portfolio Tracker
        </h1>
        <h3 className="text-neutral-400 w-full md:w-3/4 mt-6">Track your crypto earnings like a pro, with a user-friendly and reliable portfolio tracker that you can rely on

        </h3>
        <button 
           onClick={()=>dispatch(openSignup())} 
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
</main>

</>
}
export default Portfolio