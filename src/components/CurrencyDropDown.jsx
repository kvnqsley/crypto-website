
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../utils/SearchBar";
import { FaArrowLeft } from "react-icons/fa";
import { toggleCurrency,setCurrency } from "../utils/CurrencySlice";

const CurrencyDropDown=()=>{
    const theme = useSelector(state=>state.theme.mytheme)
 const isCurrencyActive = useSelector(state=>state.currency.value)
   const dispatch = useDispatch()
 
const handleCurrencyClick =(e)=>{
    const value =e.target.textContent.trim()
const filtered =value.slice(0,3)

dispatch(setCurrency(filtered))


}

    return<>
  
  <div  className={`${ isCurrencyActive  ? 'block' : 'hidden' } z-20 ${ theme ? 'bg-black text-white' :'bg-sky-700'} xl:z-50 w-[100%] xl:w-[60%] absolute xl:left-[35%] min-h-screen top-0 left-0  xl:top-10 border   border-sky-900`} >
  <h3 className='mt-4 ml-2 xl:hidden  text-lg font-semibold'><FaArrowLeft onClick={()=>dispatch(toggleCurrency())} className='inline-block text-[1.3rem]  text-slate-50 mr-32'/>Currrencies</h3>
  <SearchBar theme={theme}/>
        <div className=" mr-8 ml-2 xl:ml-8 w-[calc(100% - 4rem)] ">
            <h3 className="text-xl mt-4 text-neutral-600">
                Cryptocurrencies
            </h3>
         <div className="xl:flex  grid grid-cols-2  xl:justify-start xl:items-center  xl:gap-x-16">
         <ul className="mt-4 w-40">
                <li className=" mb-5 hover:bg-orange-100 xl:px-4 w-52 rounded hover:text-green-400 cursor-pointer" ><span className="inline-block  mr-4 text-neutral-400">BTC</span>Bitcoin</li>
                <li className=" mb-5 hover:bg-orange-100 xl:px-4 w-52 rounded hover:text-green-400 cursor-pointer" ><span className=" inline-block  mr-4  text-neutral-400">BCH</span>Bitcoin Cash</li>
                <li className=" mb-5 hover:bg-orange-100 xl:px-4 w-52 rounded hover:text-green-400 cursor-pointer" ><span className=" inline-block  mr-4  text-neutral-400">XRP</span>XRP</li>
                <li className=" mb-5 hover:bg-orange-100 xl:px-4 w-52 rounded hover:text-green-400 cursor-pointer" ><span className=" inline-block  mr-4  text-neutral-400">DOT</span>Polkadot</li>
            </ul>

            <ul className="w-40">
                <li className=" mb-5 hover:bg-orange-100 xl:px-4 w-52 rounded  hover:text-green-400 cursor-pointer" ><span className="inline-block  mr-4 text-neutral-400">ETH</span>Ether</li>
            <li className=" mb-5 hover:bg-orange-100 xl:px-4 rounded  w-52 hover:text-green-400 cursor-pointer" ><span className="inline-block  mr-4 text-neutral-400">BNB</span>Binance Coin</li>
            <li className=" mb-5 hover:bg-orange-100 xl:px-4  rounded w-52  hover:text-green-400 cursor-pointer" ><span className="inline-block  mr-4 text-neutral-400">XLM</span>Lumens</li>
            <li  className=" mb-5 hover:bg-orange-100 xl:px-4 rounded  w-52 hover:text-green-400 cursor-pointer"><span className="inline-block  mr-4 text-neutral-400">YFI</span>Yearn.finance</li>
            </ul>

            
            <ul className="w-40 xl:-mt-14">
                <li className=" mb-5 hover:bg-orange-100 xl:px-4 w-52 rounded hover:text-green-400 cursor-pointer"><span className="inline-block  mr-4 text-neutral-400">LTC</span>Litecoin</li>
                <li className=" mb-5 hover:bg-orange-100 xl:px-4 w-52 rounded hover:text-green-400 cursor-pointer"><span className="inline-block  mr-4 text-neutral-400">EOS</span>EOS</li>
                <li className=" mb-5 hover:bg-orange-100 xl:px-4 w-52 rounded hover:text-green-400 cursor-pointer"><span className="inline-block  mr-4 text-neutral-400">LINK</span>Chainlink</li>
            </ul>

         </div>
            <h3 className="mt-16 text-xl text-neutral-600">
Bitcoin Units <span className="bg-yellow-400 rounded-xl text-xs pl-2 pr-2">New</span>
            </h3>
           <div className="mt-4 grid grid-cols-2 xl:w-[30rem]   ">
           <h3 className="w-28 xl:justify-self-start  hover:bg-orange-100 xl:px-4 rounded hover:text-green-400 cursor-pointer xl:xl:ml-6"><span className="inline-block  mr-4 text-neutral-400">BITS</span>Bits</h3>
            <h3 className="w-30 ml-6  hover:bg-orange-100 xl:px-4  rounded hover:text-green-400 cursor-pointer"><span className="inline-block  mr-4 text-neutral-400">SATS</span>Satoshi</h3>

           </div>
            <h3 className="mt-8 text-xl text-neutral-600">
            Suggested Currencies
            </h3>


            <div className="xl:flex grid grid-cols-2  mt-4 xl:mt-0 xl:justify-start  xl:items-center xl:gap-x-16">
               
            <ul className="w-40">
                <li  onClick={handleCurrencyClick}  className=" mb-5 hover:bg-orange-100 xl:px-4 w-52 rounded  hover:text-green-400 cursor-pointer" > <span className="inline-block  mr-4 text-neutral-400">USD</span>US Dollar</li>
                <li onClick={handleCurrencyClick}   className=" mb-5 hover:bg-orange-100 xl:px-4 w-52 rounded  hover:text-green-400 cursor-pointer" > <span className="inline-block  mr-4 text-neutral-400">EURO</span>Euro</li>
                <li onClick={handleCurrencyClick}   className=" mb-5 hover:bg-orange-100 xl:px-4 w-52 rounded  hover:text-green-400 cursor-pointer" > <span className="inline-block  mr-4 text-neutral-400">RUB</span>Russian Ruble</li>
                
            </ul>


            <ul className="min-w-[10rem]">
                <li onClick={handleCurrencyClick}  className=" mb-5 hover:bg-orange-100 px-2 w-48 rounded  hover:text-green-400 cursor-pointer"><span className="inline-block  mr-4 text-neutral-400">IDR</span>Indonesian Rupiah</li>
            <li   onClick={handleCurrencyClick} className=" mb-5 hover:bg-orange-100 xl:px-4 w-52 rounded  hover:text-green-400 cursor-pointer"> <span className="inline-block  mr-4 text-neutral-400">KRW</span>South Korea Won</li>
            <li  onClick={handleCurrencyClick}  className=" mb-5 hover:bg-orange-100 xl:px-4 w-52 rounded  hover:text-green-400 cursor-pointer"> <span className="inline-block  mr-4 text-neutral-400">CNY</span>Chinese Yuan</li>
            
            </ul>

            
            <ul className="min-w-[16rem] -mt-6">
                <li onClick={handleCurrencyClick}  className=" mb-5 min-w-[16rem] hover:bg-orange-100 xl:px-4 w-52 rounded  hover:text-green-400 cursor-pointer"> <span className="inline-block  mr-4 text-neutral-400">TWD</span>New Taiwan Dollar</li>
                <li onClick={handleCurrencyClick}  className=" mb-5 hover:bg-orange-100 xl:px-4 w-52 rounded  hover:text-green-400 cursor-pointer"> <span className="inline-block  mr-4 text-neutral-400">JPY</span>Japanese Yen</li>
              
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