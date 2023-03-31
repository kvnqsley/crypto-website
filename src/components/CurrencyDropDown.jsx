import { useRef } from "react";
import SearchBar from "../utils/SearchBar";


const CurrencyDropDown=({currencyDDActive,handleCurrencyClick})=>{

 
   

    return<>
    <div className={`${currencyDDActive ? 'hidden' : 'block' } w-[60%] absolute left-[35%] min-h-screen  top-14 border bg-sky-700  border-sky-900`} >
  <SearchBar/>
        <div className=" mr-8 ml-8 w-[calc(100% - 4rem)] ">
            <h3 className="text-xl mt-4 text-gray-800">
                Cryptocurrencies
            </h3>
         <div className="flex  justify-start items-center gap-x-16">
         <ul className="mt-4 w-40">
                <li className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded hover:text-green-400 cursor-pointer" ><span className="inline-block  mr-4 text-gray-700">BTC</span>Bitcoin</li>
                <li className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded hover:text-green-400 cursor-pointer" ><span className=" inline-block  mr-4  text-gray-700">BCH</span>Bitcoin Cash</li>
                <li className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded hover:text-green-400 cursor-pointer" ><span className=" inline-block  mr-4  text-gray-700">XRP</span>XRP</li>
                <li className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded hover:text-green-400 cursor-pointer" ><span className=" inline-block  mr-4  text-gray-700">DOT</span>Polkadot</li>
            </ul>

            <ul className="w-40">
                <li className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded  hover:text-green-400 cursor-pointer" ><span className="inline-block  mr-4 text-gray-700">ETH</span>Ether</li>
            <li className=" mb-5 hover:bg-orange-100 px-4 rounded  w-52 hover:text-green-400 cursor-pointer" ><span className="inline-block  mr-4 text-gray-700">BNB</span>Binance Coin</li>
            <li className=" mb-5 hover:bg-orange-100 px-4  rounded w-52  hover:text-green-400 cursor-pointer" ><span className="inline-block  mr-4 text-gray-700">XLM</span>Lumens</li>
            <li  className=" mb-5 hover:bg-orange-100 px-4 rounded  w-52 hover:text-green-400 cursor-pointer"><span className="inline-block  mr-4 text-gray-700">YFI</span>Yearn.finance</li>
            </ul>

            
            <ul className="w-40 -mt-14">
                <li className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded hover:text-green-400 cursor-pointer"><span className="inline-block  mr-4 text-gray-700">LTC</span>Litecoin</li>
                <li className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded hover:text-green-400 cursor-pointer"><span className="inline-block  mr-4 text-gray-700">EOS</span>EOS</li>
                <li className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded hover:text-green-400 cursor-pointer"><span className="inline-block  mr-4 text-gray-700">LINK</span>Chainlink</li>
            </ul>

         </div>
            <h3 className="mt-16 text-xl text-gray-800">
Bitcoin Units <span className="bg-yellow-400 rounded-md text-xs pl-2 pr-2">New</span>
            </h3>
           <div className="mt-4 grid grid-cols-2 w-[30rem]  place-items-start  ">
           <h3 className="w-28  ml-6"><span className="inline-block  mr-4 text-gray-700">BITS</span>Bits</h3>
            <h3 className="w-28 ml-6 "><span className="inline-block  mr-4 text-gray-700">SATS</span>Satoshi</h3>

           </div>
            <h3 className="mt-8 text-xl text-gray-800">
            Suggested Currencies
            </h3>


            <div className="flex   justify-start  items-center gap-x-16">
               
            <ul className="w-40">
                <li  onClick={handleCurrencyClick} className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded  hover:text-green-400 cursor-pointer" className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded  hover:text-green-400 cursor-pointer" > <span className="inline-block  mr-4 text-gray-700">USD</span>US Dollar</li>
                <li onClick={handleCurrencyClick}  className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded  hover:text-green-400 cursor-pointer" className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded  hover:text-green-400 cursor-pointer"  className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded  hover:text-green-400 cursor-pointer" className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded  hover:text-green-400 cursor-pointer"> <span className="inline-block  mr-4 text-gray-700">EURO</span>Euro</li>
                <li onClick={handleCurrencyClick}  className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded  hover:text-green-400 cursor-pointer" className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded  hover:text-green-400 cursor-pointer" > <span className="inline-block  mr-4 text-gray-700">RUB</span>Russian Ruble</li>
                
            </ul>


            <ul className="min-w-[10rem]">
                <li onClick={handleCurrencyClick}  className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded  hover:text-green-400 cursor-pointer"><span className="inline-block  mr-4 text-gray-700">IDR</span>Indonesian Rupiah</li>
            <li   onClick={handleCurrencyClick} className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded  hover:text-green-400 cursor-pointer"> <span className="inline-block  mr-4 text-gray-700">KRW</span>South Korea Won</li>
            <li  onClick={handleCurrencyClick}  className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded  hover:text-green-400 cursor-pointer"> <span className="inline-block  mr-4 text-gray-700">CNY</span>Chinese Yuan</li>
            
            </ul>

            
            <ul className="min-w-[16rem] -mt-6">
                <li onClick={handleCurrencyClick}  className=" mb-5 min-w-[16rem] hover:bg-orange-100 px-4 w-52 rounded  hover:text-green-400 cursor-pointer"> <span className="inline-block  mr-4 text-gray-700">TWD</span>New Taiwan Dollar</li>
                <li onClick={handleCurrencyClick}  className=" mb-5 hover:bg-orange-100 px-4 w-52 rounded  hover:text-green-400 cursor-pointer"> <span className="inline-block  mr-4 text-gray-700">JPY</span>Japanese Yen</li>
              
            </ul>
 
            </div>
            <h3>

            </h3>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul>
                 <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            
            <ul>
            <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
    
    </>
}


export default CurrencyDropDown;