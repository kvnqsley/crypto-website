import { useState,useReducer } from "react"
import { FaApple, FaAppStore, FaAppStoreIos, FaCaretDown, FaGooglePay, FaGooglePlay } from "react-icons/fa"



const Footer =()=>{
    const [isResources, setIsResources]= useState(false)
    const [isSupport, setIsSupport]= useState(false)
    const [isDonations, setIsDonations]= useState(false)
    const [isAbout, setIsAbout]= useState(false)
    const [isCommunity, setIsCommunity]= useState(false)


    const handleResources =()=>{
        setIsResources(prev=>!prev)
    }
    const handleDonations =()=>{
        setIsDonations(prev=>!prev)
    }
    const handleCommunity =()=>{
        setIsCommunity(prev=>!prev)
    }
    const handleAbout =()=>{
        setIsAbout(prev=>!prev)
    }
    const handleSupport =()=>{
        setIsSupport(prev=>!prev)
    }
    return<>
    <footer className="h-screen relative font-light mt-40">

    <div className="flex flex-col md:flex-row justify-between ">
        <div className="w-1/2" >
        <div className='mr-4 inline-block '>
    <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
      <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
      <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
    
    </div>
    <h4 className=' inline font-semibold '>CRYPTONITE</h4>
      <p className="min-w-[375px]  md:w-full mt-4">
      CoinGecko provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, CoinGecko tracks community growth, open-source code development, major events and on-chain metrics.
      </p>
       
        </div>
        <div className=" md:grid md:gap-8 grid-cols-4">
        <ul>
            <li className="font-semibold relative  cursor-pointer border-neutral-400 border-t md:border-0 md:p-0 py-3 " onClick={handleResources}>Resources <FaCaretDown className="cursor-pointer md:hidden absolute right-0 inline-block" onClick={handleResources}/> </li>
            <li className={`${isResources ? `block` : 'hidden'} md:block`}>Perpetuals</li>
            <li className={`${isResources ? `block` : 'hidden'} md:block`}>Crypto News</li>
            <li className={`${isResources ? `block` : 'hidden'} md:block`}>Bitcoin Treasury</li>
            <li className={`${isResources ? `block` : 'hidden'} md:block`}>Crypto Heatmap</li>
            <li className={`${isResources ? `block` : 'hidden'} md:block`}>Crypto Api</li>

            <ul>
            <li className="font-semibold relative  cursor-pointerborder-neutral-400 md:mt-8 border-t md:border-0 md:p-0 py-3" onClick={handleDonations}>Donations<FaCaretDown className="cursor-pointer  md:hidden absolute right-0 inline-block" onClick={handleDonations}/></li>
            <li className={`${isDonations ? `block` : 'hidden'} md:block`}>Bitcoin </li>
            <li className={`${isDonations ? `block` : 'hidden'} md:block`}>Ethereum</li>
           
        </ul>
        </ul>
        
        <ul>
            
        <li className="font-semibold relative border-t  cursor-pointer border-neutral-400 md:border-0 md:p-0 py-3"onClick={handleSupport}>Support<FaCaretDown className="cursor-pointer absolute md:hidden  right-0 inline-block" onClick={handleSupport}/> </li>
        <li className={`${isSupport ? `block` : 'hidden'} md:block`} >Request Form</li>
        <li className={`${isSupport ? `block` : 'hidden'} md:block`} >Adveritising</li>
        <li className={`${isSupport ? `block` : 'hidden'} md:block`}>Help Center</li>
        <li className={`${isSupport ? `block` : 'hidden'} md:block`} > Bug Bounty</li>
        <li className={`${isSupport ? `block` : 'hidden'} md:block`} >FAQ</li>
    </ul>
        <ul>
            <li className="font-semibold relative cursor-pointer border-neutral-400 border-t md:border-0 md:p-0 py-3" onClick={handleAbout}>About CRYPTONNITE<FaCaretDown className="cursor-pointer md:hidden absolute right-0 inline-block" onClick={handleAbout}/></li>
            <li className={`${isAbout ? `block` : 'hidden'} md:block`}>About Us</li>
            <li className={`${isAbout ? `block` : 'hidden'} md:block`}>Careers <span className="text-teal-900 bg-green-600 rounded-md text-xs pl-2 pr-1"><a href="">Join Us</a></span></li>
            <li className={`${isAbout ? `block` : 'hidden'} md:block`}>Company Blog</li>
            <li className={`${isAbout ? `block` : 'hidden'} md:block`}>Branding Guide</li>
            <li className={`${isAbout ? `block` : 'hidden'} md:block`}>Disclaimer</li>
            <li className={`${isAbout ? `block` : 'hidden'} md:block`}>Terms of Service</li>
            <li className={`${isAbout ? `block` : 'hidden'} md:block`}>Privacy Policy</li>
            <li className={`${isAbout ? `block` : 'hidden'} md:block`}>Ad Policy</li>
        </ul>
        <ul>
            <li className="font-semibold relative cursor-pointer border-y border-neutral-400 md:border-0 md:p-0 py-3"  onClick={handleCommunity}>Community<FaCaretDown className="cursor-pointer absolute md:hidden  right-0 inline-block"/> </li>
            <li className={`${isCommunity ? `block` : 'hidden'} md:block`}>Twitter</li>
            <li className={`${isCommunity ? `block` : 'hidden'} md:block`}>Telegram Chat</li>
            <li className={`${isCommunity ? `block` : 'hidden'} md:block`}>Telegram News</li>
            <li className={`${isCommunity ? `block` : 'hidden'} md:block`}>Instagram</li>
            <li className={`${isCommunity ? `block` : 'hidden'} md:block`}>Reddit</li>
            <li className={`${isCommunity ? `block` : 'hidden'} md:block`}>Discord</li>
            <li className={`${isCommunity ? `block` : 'hidden'} md:block`}>Facebook</li>
            <li className={`${isCommunity ? `block` : 'hidden'} md:block`}>Youtube</li>
            <li className={`${isCommunity ? `block` : 'hidden'} md:block`}>Tiktok</li>
        </ul>
        </div>
    </div>
    <div className="flex border-t-[1px] md:flex-row flex-col ml-4 md:m-0 w-[calc(100% -2rem)]   py-6 items-center md:min-w-max border-neutral-400 justify-between mt-10">
       <div>
       <h4 className="font-semibold">
       Interested to stay up-to-date with cryptocurrencies?
       </h4>
       <p className="text-sm">
       Get the latest crypto news, updates, and reports by subscribing to our free newsletter.
       </p>
       </div>
       <div className="w-full md:w-fit">
           <input type="text" placeholder="Enter Your Email" className="w-full md:w-[200px] px-3 border-[1px] h-10 focus:outline-emerald-400 focus:border-none rounded" />
         <button className="md:ml-6 px-4 mt-2 md:mt-0 md:w-[96px] md:inline-block block  w-full cursor-pointer hover:bg-emerald-500 rounded bg-green-600">
             Subscribe
         </button>
       </div>

       </div>
<div className="flex  flex-col md:flex-row mt-4 items-center justify-between">
<h6 className="flex-grow">
       © 2023 CRYPTONITE. All Rights Reserved.
       </h6>

       <div className="bg-stone-900 md:translate-x-0 -translate-x-24 rounded h-12 pl-4 w-40 mr-4 text-neutral-100">
      <a  className="-mt-1 block" href="http://Googleplay.com" target="_blank" rel="noopener noreferrer">

      <FaGooglePlay className="inline mt-3 text-2xl" />
            <p className="inline text-xs text-neutral-400 ">GET IT ON </p>
      
       <h3 className="ml-6 -mt-4 text-xl">
          
           Google Play
       </h3>
      </a>
       </div>
       <div className="bg-stone-900 md:translate-x-0 md:translate-y-0 -translate-y-12 translate-x-24  md:relative h-12 pl-4 rounded w-40 text-neutral-100">
         
             <a className="-mt-1 block" href="http://apple.com" target="_blank" rel="noopener noreferrer">
             <FaApple className="inline left-0 top-2 absolute text-3xl"
                />     
                      <p className="inline ml-4 text-neutral-400 text-xs  ">
               Download on the
           </p>
           <h3 className="ml-6 -mt-2 text-xl">App Store</h3>
             </a>
       </div>
</div>
    <h5 className="mt-4">
   <span className="font-semibold text-neutral-400"> IMPORTANT DISCLAIMER:</span> All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, social media accounts and other platforms (“Site”) is for your general information only, procured from third party sources. We make no warranties of any kind in relation to our content, including but not limited to accuracy and updatedness. No part of the content that we provide constitutes financial advice, legal advice or any other form of advice meant for your specific reliance for any purpose. Any use or reliance on our content is solely at your own risk and discretion. You should conduct your own research, review, analyse and verify our content before relying on them. Trading is a highly risky activity that can lead to major losses, please therefore consult your financial advisor before making any decision. No content on our Site is meant to be a solicitation or offer.
    </h5>
    </footer>
    </>
}
export default Footer