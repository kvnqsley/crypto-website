import { FaApple, FaAppStore, FaAppStoreIos, FaGooglePay, FaGooglePlay } from "react-icons/fa"



const Footer =()=>{
    return<>
    <footer className="h-screen relative font-light mt-40">

    <div className="flex justify-between ">
        <div className="w-1/2" >
        <div className='mr-4 inline-block '>
    <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
      <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
      <div className='w-6 bg-slate-900 mt-1 h-1 rotate-45'></div>
    
    </div>
    <h4 className='flex-grow inline font-semibold '>CRYPTONITE</h4>
      <p className="w-full mt-4">
      CoinGecko provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, CoinGecko tracks community growth, open-source code development, major events and on-chain metrics.
      </p>
       
        </div>
        <div className=" grid gap-8 grid-cols-4">
        <ul>
            <li className="font-semibold">Resources</li>
            <li>Perpetuals</li>
            <li>Crypto News</li>
            <li>Bitcoin Treasury</li>
            <li>Crypto Heatmap</li>
            <li>Crypto Api</li>

            <ul>
            <li className="font-semibold mt-8">Donations</li>
            <li>Bitcoin </li>
            <li>Etheerum</li>
           
        </ul>
        </ul>
        
        <ul>
            
        <li className="font-semibold">Support</li>
        <li>Request Form</li>
        <li>Adveritising</li>
        <li>Help Center</li>
        <li> Bug Bounty</li>
        <li>FAQ</li>
    </ul>
        <ul>
            <li className="font-semibold">About CRYPTONNITE</li>
            <li>About Us</li>
            <li>Careers <span className="text-teal-900 bg-green-600 rounded-md text-xs pl-2 pr-1"><a href="">Join Us</a></span></li>
            <li>Company Blog</li>
            <li>Branding Guide</li>
            <li>Disclaimer</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Ad Policy</li>
        </ul>
        <ul>
            <li className="font-semibold">Community</li>
            <li>Twitter</li>
            <li>Telegram Chat</li>
            <li>Telegram News</li>
            <li>Instagram</li>
            <li>Reddit</li>
            <li>Discord</li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Tiktok</li>
        </ul>
        </div>
    </div>
    <div className="flex border-y-[1px]   py-6 items-center min-w-max border-neutral-400 justify-between mt-10">
       <div>
       <h4 className="font-semibold">
       Interested to stay up-to-date with cryptocurrencies?
       </h4>
       <p>
       Get the latest crypto news, updates, and reports by subscribing to our free newsletter.
       </p>
       </div>
       <div>
           <input type="text" placeholder="Enter Your Email" className=" px-3 border-[1px] h-10 focus:outline-emerald-400 focus:border-none rounded" />
         <button className="ml-6 px-4 inline cursor-pointer hover:bg-emerald-500 rounded bg-green-600">
             Subscribe
         </button>
       </div>

       </div>
<div className="flex mt-4 justify-between">
<h6 className="flex-grow">
       © 2023 CRYPTONITE. All Rights Reserved.
       </h6>

       <div className="bg-stone-900 rounded h-12 pl-4 w-40 mr-4 text-neutral-100">
      <a  className="-mt-1 block" href="http://Googleplay.com" target="_blank" rel="noopener noreferrer">

      <FaGooglePlay className="inline mt-3 text-2xl" />
            <p className="inline text-xs text-neutral-400 ">GET IT ON </p>
      
       <h3 className="ml-6 -mt-4 text-xl">
          
           Google Play
       </h3>
      </a>
       </div>
       <div className="bg-stone-900 relative h-12 pl-4 rounded w-40 text-neutral-100">
         
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