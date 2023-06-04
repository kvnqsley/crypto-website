import { useEffect,useId,useRef } from "react"
import SearchBar from "../utils/SearchBar"


export default function Categories({isActive,setIsActive}) {
   const categories =useId();
   const categoriesRef1=useRef()
   const categoriesRef2=useRef()

 useEffect(()=>{
    const categoriesId = document.getElementById(categories)
  
   
 },[])

    
    return<>
     <div ref={categoriesRef1}
     id={categories}
       className={`${isActive ? 'hidden' :'block' } absolute  bg-sky-700 top-14 z-10 left-0 min-w-[40rem] border-sky-900 border-[1px] min-h-max  b`}>
      <SearchBar />
   <ul ref={categoriesRef2} className="grid z-[18] grid-cols-2 mt-6 ml-8">
      {/* This list is to be continued */}
      <li  className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">All</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Aave Tokens</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Algorand Ecosystem</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Analytics</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Aptos Ecosystem</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Arbitum Ecosystem</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Arbitrum Nova Ecosystem</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Artificial Intelligence</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Asset-backed Tokens</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Automated Market</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Avalanche Ecosystem</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">BNB Chain Ecosystem</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Canto Ecosystem</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Cardano Ecosystem</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Celo Ecosystem</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">centralized Exchange</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Cosmos Ecosystem</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Cronos Ecosystem</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">DaoMaker Ecosystem</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Decentralized Exchange</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Decentralized Finance (DeFi)</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3"> DeFi Index</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Derivatives</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Environment</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Eth 2.0 Staking</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Ethereum Ecosystem</li>
      <li className=" cursor-pointer hover:text-emerald-200 max-w-max hover:border-b-[1px] mb-3">Exchange-based Token</li>
   </ul>
   
   
   </div>
    </>
}