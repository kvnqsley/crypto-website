import { FaBell, FaChartBar, FaChartLine } from "react-icons/fa"
import Footer from "./Footer"

const Portfolio =()=>{
return<>


<main className={` relative top-32 w-full`}>
<section className="grid grid-cols-2">
    <div>
        <h1 className="font-bold mt-10 text-4xl w-2/3">
        Free &amp; Powerful Crypto Portfolio Tracker
        </h1>
        <h3 className="text-neutral-400 w-3/4 mt-6">Track your crypto earnings like a pro, with a user-friendly and reliable portfolio tracker that you can rely on

        </h3>
        <button className="bg-green-600 rounded px-6 py-2 mt-10 hover:bg-green-900 text-cyan-50">
            SIGN UP
        </button>
        <button className="border-cyan-50 rounded border-[1px] ml-8 py-2 px-6 hover:border-green-600 ">
            LOG IN
        </button>
        <h3 className="text-neutral-400 mt-8">
        Start your portfolio now!
        </h3>
    </div>
    <div>
        <img src="/simage.webp" alt="phone-img" /><img src="" alt="" />
    </div>
</section>
<section className="grid mt-20 grid-cols-3">
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
<section className="grid gap-x-32 grid-cols-2">
    <img src="/pimage.webp" alt="" />
    <div className="relative top-1/4">
        <h1 className='text-3xl mt- place font-bold'>
        Bring it to the next level with mobile app
        </h1>
        <div className="mt-8 ml-8">
            <p className="inline">🔄Synced Portfolios</p>
            <p className="ml-10 inline">🔔Price Alerts</p>
            <p className="ml-10 inline">💰Price Widgets</p>
        </div>
    </div>
</section>
</main>
 <Footer/>
</>
}
export default Portfolio