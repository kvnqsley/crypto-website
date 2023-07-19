import axios from "axios"
import { useEffect, useState, useRef,useContext, useReducer } from "react"
import { FaLevelUpAlt, FaLevelDownAlt, FaQuestionCircle, } from "react-icons/fa"
import ToggleIcon from "../utils/Togglecon"
import Categories from "./Categories";
import useShowData from "../utils/useShowModal";
import PortfolioPopup from "../utils/PortfolioPopup";
import { useSelector, useDispatch } from "react-redux";
import { openLogin } from "../utils/AuthSlice";
import CoinTable from "../components/CoinTable";
import { useCallback } from "react";
import { getHeaderData } from "../utils/api";
import Cookies from 'js-cookie'
import { updateMarketData } from "../utils/DataSlice";
import { getMarketData } from "../utils/api";
import { SCROLL_TO_TOP } from "../utils/scrollTop";
import TrendingCoins from "../components/TrendingCoins";
import useAuthenticationStatus from '../utils/hooks/useAuthenticationStatus'













export default function Coins({ setData,data, setFavouriteCoin }) {

   const dispatcH = useDispatch()
   const authStatus =useAuthenticationStatus()
   const [isActive, setIsActive] = useState(true)
   const storedStats = JSON.parse(localStorage.getItem('stats'))

   const [showStats, setStats] = useState(storedStats ? storedStats : {
      statsActive: false,
      statsData: false
   }
   )

   const [isCoin, setIsCoin] = useState(false)
  

   

   


   const [addToPortfolio, setAddPortfolio] = useState({
      addPortfolio: false,
      translateTab: null,
      coinAdded: false,
      showpopup: false,
      removeCoin: null,
      coinName: '',
      coinImage: '',
      tradeBtn: null
   })
   const [favourite, setFavourite] = useState({
      selected: false,
      target: null,

   })



   const [convertedSVGToJSON, updateJSON] = useState('')
   function convertSVGPathElementToJson(svgPathElement) {
      const { d, id, classList } = svgPathElement;
      const extractedData = {
         d,
         id,
         classList: Array.from(classList),
      };

      return JSON.stringify(extractedData);
   }
   const shuffleData = () => {
      let sortedData;
      if (pageNumber.page1 == true) {
         sortedData = data.market.slice(0, 100).reverse()
      }
    

      setData(state => {
         return {
            ...state,
            market: sortedData
         }
      })

   }




   useEffect(() => {
    
      if (favourite.target) {
         const json = convertSVGPathElementToJson(favourite.target)
         updateJSON(json)

      }

      if (addToPortfolio.addPortfolio) {
         const tab = document.querySelector('.portfolio-tab')

         tab.style.top = addToPortfolio.translateTab + 50 + 'px'

      }


   }, [addToPortfolio.addPortfolio])



   const fetchData = useCallback(async () => {
      getMarketData(setData, updateMarketData);
      getHeaderData(setData, setStats)


   }, []);

   const SAVE_TO_STORAGE = useCallback(() => {
      localStorage.setItem('stats', JSON.stringify(showStats))

      localStorage.setItem("coinsData", JSON.stringify(data), {
         secure: true,

         path: '/'
      });

   }, [data.market, favourite, showStats])

   useEffect(() => {
      SAVE_TO_STORAGE();


   }, [SAVE_TO_STORAGE])

   useEffect(() => {
      if (!data.market.length) {
         fetchData()
      }
      if (!data.header.length) {
         fetchData()
      }

   }, [fetchData])






   const openFavourite = async (e) => {

      const coinText = e.target.closest('.closestEl').children[1].innerText.split('\n')
      const coinImage = e.target.closest('.closestEl').children[1].children[0].children[0].attributes[0].nodeValue

      const tradeBtn = e.target.closest('.closestEl').cells[2]?.firstChild
console.log(tradeBtn);

   
      // ============== CHECK IF USER IS SIGNED IN BEFORE GRANTING PERMISSION TO ACCESS THE PORTFOLIO ==========
      (!authStatus)  ? dispatcH(openLogin()) : setAddPortfolio(prev => {
            return {
               ...prev,
               addPortfolio: true,
               coinName: coinText[0],
               coinImage: coinImage,
               tradeBtn: tradeBtn,
               translateTab: path.top
            }
         });

      const path = e.target.getBoundingClientRect()

      setFavourite(state => {
         return {
            ...state,
            target: e.target
         }
      });


       (e.target.style.fill == 'yellow') ?
         setAddPortfolio(state => {
            return {
               ...state,
               coinAdded: true,
            }
         })
      : (
         setAddPortfolio(state => {
            return {
               ...state,
               coinAdded: false,
            }
         })
      );



   }

   const getFavouriteCoin = () => {
      //   check for selected coin
      const selectedCoin = data.market?.filter(el => el.market_cap_rank == favourite.target.closest('.closestEl').cells[0].innerText)
      // lifting the coin object out of the array
      const favouriteCoin = selectedCoin[0]

      return favouriteCoin
   }



   const handlePortfolio = () => {
      data.favourite.push(getFavouriteCoin())

      setFavourite(state => {
         return {
            ...state,
            selected: true,

         }
      })

      setAddPortfolio(state => {
         return {
            ...state,
            coinAdded: true,
            addPortfolio: false,
            showpopup: true
         }
      })
      favourite.target ? favourite.target.style.fill = ' yellow' : null




      setTimeout(() => {
         setAddPortfolio(state => {
            return {
               ...state,
               showpopup: false
            }
         })
      }, 5000);


      addToPortfolio.tradeBtn.classList.remove('opacity-0')

   }

   // useEffect(()=>{
   //    setData(state=>{
   //       return {
   //          ...state,
   //          favourite:favourite.list
   //       }
   //    })
   // },[favourite])

   const removeCoin = () => {
      setAddPortfolio(state => {
         return {
            ...state,
            removeCoin: true
         }


      })
   }
   const theme = useSelector(state => state.theme.mytheme)


   const allCategoriesRef = useRef()
   const coinRef = useRef()

   useShowData(setIsActive, allCategoriesRef) /* custom hook to hide the
    element when theres a click event outside that particular element */

   useShowData(setIsCoin, coinRef)


   const handleCallback = useCallback(() => {
      const dialog = document.querySelector('.portfolio-modal')
      if (addToPortfolio.removeCoin) {
         dialog.showModal()
      }
      else {
         dialog.close()
      }
   }, [addToPortfolio.removeCoin])




   useEffect(() => {



      handleCallback()
   }, [handleCallback])

   const handleCategoriesClick = () => {
      setIsActive(prev => !prev)


   }
  
   const pageReducer = (state, action) => {
      switch (action.type) {
         case 'GO_TO_PAGE_1':

            return {
               page1: true,
               page2: false,
               page3: false
            }


         case 'GO_TO_PAGE_2':
            return {
               page1: false,
               page2: true,
               page3: false
            }
         case 'GO_TO_PAGE_3':
            return {
               page1: false,
               page2: false,
               page3: true
            }

         case 'GO_TO_PREV':
            if (state.page1 === true) {
               return;
            }
            if (state.page2 === true) {
               return {
                  page1: true,
                  page2: false,
                  page3: false
               }

            }
            if (state.page3 == true) {
               return {
                  page1: false,
                  page2: true,
                  page3: false
               }
            }
            break;

         default:
            console.log('Pagination completed');
            break;
      }
   }
   const initialState = {
      page1: true,
      page2: false,
      page3: false
   }
   const [pageNumber, dispatch] = useReducer(pageReducer, initialState)


   const isSidebarActive = useSelector(state => state.sideBarActive.value)
   return <>
      <div className={`${isSidebarActive ? 'hidden' : 'block'} `}>
         <section ref={coinRef} className={`  relative top-32 w-full`}>
            <h3 className="  max-w-md m-0 inline text-3xl mr-4">Cryptocurrency Prices by Market Cap
            </h3>
            <div
               className={` ${showStats.statsData ? 'block' : 'hidden'} md:inline md:relative md:top-0 translate-y-24`}>
               <ToggleIcon setStats={setStats} />
               <h3 className=" inline ml-4" >Show Stats </h3>

            </div>

            {showStats.statsData && <div > <h3
               className="text-sm  max-w-4xl mt-4">The global cryptocurrency market cap today is $1.21 Trillion, a
               <span className={`${data.header.data.market_cap_change_percentage_24h_usd < 0 ? 'text-red-700' : 'text-green-400'} `}> {data.header.data.market_cap_change_percentage_24h_usd.toFixed(1)}%{data.header.data.market_cap_change_percentage_24h_usd < 0 ? <FaLevelDownAlt className='inline' /> : <FaLevelUpAlt className='inline' />}
               </span> change in the last 24 hours. <span className="underline text-xs md:text-sm cursor-pointer">Read More</span> </h3>


            </div>
            }


            {showStats.statsData && <div
               className={`   ${showStats.statsActive ? 'block' : 'hidden'}  grid min-h-max gap-x-2 gap-y-2 mt-10 md:mt-6  pb-2  w-full md:grid-cols-4 md:grid-rows-1 grid-rows-4`}>
               <div
                  className={` ${data.header.data.market_cap_change_percentage_24h_usd < 0 ? 'border-l-red-700' : 'border-l-green-400'} ${theme ? 'bg-neutral-900' : 'bg-sky-800'} border-l-[6px] shadow-lg border-t-0  border-b-0 border-b-transparent rounded-lg pl-8 border-t-transparent  min-h-max w-full`}>
                  <h3 className="mt-4 text-lg font-semibold"> &euro;{data.header.data.updated_at.toLocaleString()} <span
                     className={`${data.header.data.market_cap_change_percentage_24h_usd < 0 ? 'text-red-700' : 'text-green-400'} text-sm`}>{data.header.data.market_cap_change_percentage_24h_usd.toFixed(1)}%
                     {data.header.data.market_cap_change_percentage_24h_usd < 0 ? <FaLevelDownAlt className='inline' /> : <FaLevelUpAlt className='inline' />}
                  </span>
                  </h3>
                  <h3 className="font-sm mt-4  text-neutral-400">Market Capitalization</h3>

               </div>
               <div className={`${data.header.data.market_cap_change_percentage_24h_usd < 0 ? 'border-l-red-700' : 'border-l-green-400'}  ${theme ? 'bg-neutral-900' : 'bg-sky-800'} border-l-[6px] shadow-lg  border-t-0  border-b-0 border-b-transparent rounded-lg pl-8 border-t-transparent  h-24  w-full`}>
                  <h3 className="mt-4 text-lg font-semibold">- </h3>
                  <h3 className="font-sm mt-4  text-neutral-400">24H Trading Volume</h3>

               </div>
               <div className={` border-l-[6px] shadow-lg  border-t-0  border-b-0 border-b-transparent rounded-lg pl-8 ${theme ? 'bg-neutral-900' : 'bg-sky-800'} border-t-transparent border-l-neutral-400 h-24  w-full`}>
                  <h3 className="mt-4 text-lg font-semibold"> {data.header.data.market_cap_percentage.btc.toFixed(2)} % </h3>
                  <h3 className="font-sm mt-4  text-neutral-400">Bitcoin Market Cap Dominance</h3>

               </div>
               <div className={` border-l-[6px]  shadow-lg border-t-0  border-b-0 border-b-transparent rounded-lg pl-8 ${theme ? 'bg-neutral-900' : 'bg-sky-800'} border-t-transparent border-l-neutral-400 h-24  w-full`}>
                  <h3 className="mt-4 text-lg font-semibold"> {data.header.data.active_cryptocurrencies.toLocaleString()} </h3>
                  <h3 className="font-sm mt-4  text-neutral-400"># of Coins</h3>


               </div>

            </div>
            }
            <div className="flex justify-end  mt-4 ">

               <div className="min-w-[40rem] hidden  " ref={allCategoriesRef}>
                  {/* i am hiding this because
             it has been modified in the
              real website */}
                  <div onClick={handleCategoriesClick} className={` hidden md:block ${!isActive ? ' border-x-sky-50' : 'border-sky-900'} rounded-full   bg-transparent  w-32 pl-4 h-8  mt-4 cursor-pointer border-[1px]`} >All Categories

                  </div>

                  <Categories isActive={isActive}
                     setIsActive={setIsActive}
                  />
               </div>


               <div className="hidden justify-item-end   md:block"><ToggleIcon /><p className="ml-4 inline-block">Show Fully Diluted Valuation</p>   <FaQuestionCircle className="inline" /> </div>


            </div>

            {addToPortfolio.addPortfolio && <PortfolioPopup
               addToPortfolio={addToPortfolio}
               setAddPortfolio={setAddPortfolio}
               handlePortfolio={handlePortfolio}
               removeCoin={removeCoin}
               theme={theme}
            />}

            <dialog className={`portfolio-modal ease-in-out duration-100 delay-200 backdrop:opacity-20 top-0 backdrop:bg-sky-600 backdrop-blur-lg `} >
               <div onClick={() => setAddPortfolio(state => {
                  return {
                     ...state,
                     removeCoin: false
                  }
               })} className="px-2 cursor-pointer  w-18 inline-block h-10">
                  <div className={` ${!theme ? 'bg-slate-900 ' : 'bg-neutral-700'}  w-6  mt-1 h-1 ml-2 translate-y-6 rotate-45`}></div>

                  <div className={` ${!theme ? 'bg-slate-900 ' : 'bg-neutral-700'}  w-6  mt-1 ml-2 h-1  translate-y-4 -rotate-45`}></div>

               </div>
               <h3 className="font-semibold text-xl">
                  Remove Coin
               </h3>
               <p className="mt-8">

                  Are you sure want to remove this coin?</p>
               <p>

                  Any transactions associated with this coin will also be removed.
                  <button className="border-cyan-50 rounded border-[1px] ml-8 py-2 max-w-[40%] px-6 hover:border-green-600">
                     No</button>
                  <button className="bg-green-600 rounded px-6 py-2 mt-10 max-w-[40%] ml-6 hover:bg-green-900 text-cyan-50">
                     Yes
                  </button>
               </p>
            </dialog>


            <CoinTable
               shuffleData={shuffleData}
               data={data}
               theme={theme}
               favourite={favourite.selected}
               openFavourite={openFavourite}
               pageNumber={pageNumber}
            />

            <div className={`${addToPortfolio.showpopup ? 'block' : 'hidden '} fixed bottom-10 z-50 ${theme ? 'bg-neutral-900' : 'bg-sky-800'} shadow-lg rounded py-4 px-2 min-h-max w-[93vw] md:w-[40vw] `}>
               <img src={addToPortfolio.coinImage} alt="coin-logo" className="h-8 w-8 mt-2 mr-2 float-left" />
               <p className="text-neutral-400">
                  {addToPortfolio.coinName} added to Portfolio - <span className='font-semibold text-sm'> My Portfolio </span>
               </p>
               <p className="text-green-500">Start your portfolio - Add a transaction!</p>
            </div>

            <span className="inline-block w-full">
               <div className="w-[53%] md:w-1/4 md:mx-auto md:my-0 place-items-center grid grid-cols-5 mt-8 border h-8">
                  <span className=" w-full pl-2 h-full hover:bg-green-700 cursor-pointer">
                     &lt;
                  </span>
                  <span onClick={() => {
                     dispatch({ type: 'GO_TO_PAGE_1' })
                     SCROLL_TO_TOP()
                  }} className={`${pageNumber.page1 ? 'bg-neutral-400' : ''} border-l w-full pl-2 h-full hover:bg-green-700 cursor-pointer`}>
                     1
                  </span>
                  <span onClick={() => {
                     dispatch({ type: 'GO_TO_PAGE_2' })
                     SCROLL_TO_TOP()
                  }} className={`${pageNumber.page2 ? 'bg-neutral-400' : ''} border-l w-full pl-2 h-full hover:bg-green-700 cursor-pointer`}>
                     2
                  </span>
                  <span onClick={() => {
                     dispatch({ type: 'GO_TO_PAGE_3' })
                     SCROLL_TO_TOP()
                  }} className={`${pageNumber.page3 ? 'bg-neutral-400' : ''} border-l w-full pl-2 h-full hover:bg-green-700 cursor-pointer`}>
                     3
                  </span>

                  <span className="border-l w-full pl-2 h-full hover:bg-green-700 cursor-pointer">&gt;</span>
               </div>
            </span>
         </section>

         <TrendingCoins data={data} />

         <section className="mt-28 w-full">
            <h4 className="text-lg font-semibold">
               What is Crypto Market Cap?

            </h4>
            <p className="font-light">

               Crypto market cap is the total value of all the coins of a particular cryptocurrency that have been mined or are in circulation. Market capitalization is used to determine the ranking of cryptocurrencies. The higher the market cap of a particular crypto coin, the higher its ranking and share of the market. Crypto market cap is calculated by multiplying the total number of coins in circulation by its current price. For instance, to calculate the market cap of Ethereum, all you need to do is multiply the total number of Ethereum in circulation by the current price of one Ethereum and you will get its market cap.
            </p>

            <h4 className="text-lg font-semibold mt-8">
               How to compare Cryptocurrencies Market Cap?
            </h4>
            <p className="font-light">
               Crypto market cap can be divided into three categories:
            </p>
            <ul className="list-disc ml-8 font-light ">
               <li className="marker:text-neutral-400" >Large-cap cryptocurrencies (&gt;$10 billion)</li>
               <li className="marker:text-neutral-400">Mid-cap Cryptocurrencies ($1 billion - $10 billion)</li>
               <li className="marker:text-neutral-400">Small-cap cryptocurrencies (&lt; $1 billion). </li>
            </ul>
            <p className="mt-8 font-light">
               As a financial metric, market cap allows you to compare the total
               circulating value of one cryptocurrency with another.
               Large cap cryptocurrencies such as Bitcoin and Ethereum
               have a market cap of over $10 billion.
               They typically consist of protocols that have demonstrated track records, and have a vibrant ecosystem of developers maintaining and enhancing the protocol, as well as building new projects on top of them. While market cap is a simple and intuitive comparison metric, it is not a perfect point of comparison. Some cryptocurrency projects may appear to have inflated market cap through price swings and the tokenomics of their supply. As such, it is best to use this metric as a reference alongside other metrics such as trading volume, liquidity, fully diluted valuation, and fundamentals during your research process.
            </p>
            <h4 className="text-lg font-semibold mt-8">
               How does CoinMamba Calculate Cryptocurrency Prices?
            </h4>
            <p className="font-light">
               The price is calculated using a global volume-weighted average price formula which is based on the pairings available on different exchanges of a particular crypto asset. For examples and more detailed information on how we track cryptocurrency prices and other metrics, <a href="#">see our methodology page here</a>.
            </p>
            <h4 className="text-lg font-semibold mt-8">
               Why are Cryptocurrency Prices Different on Exchanges?
            </h4>
            <p className="font-light">
               You may notice that cryptocurrencies listed on different exchanges have different prices. The reasons for this are complex, but simply put cryptocurrencies are traded on different exchanges and across different markets with varying economic conditions, liquidity, trading pairs, and offerings (e.g. derivatives / leverage) which all influence price in their own way.
            </p>

            <h4 className="text-lg font-semibold mt-8">
               Where to Check Cryptocurrency Prices?
            </h4>
            {/* Modification required
 to set neccesary links active */}

            <p className="font-light">
               You can track over 10,000 crypto prices on CoinGecko across more than 50 currencies. Popular cryptocurrency pairs include <span className="text-green-600 cursor-pointer">BTC-USD</span>,<span className="text-green-600 cursor-pointer"> ETH-USD</span>, and <span className="cursor-pointer text-green-600">SLP-PHP</span>. You can also track metrics such as 24 hour trading volume, market capitalization, price chart, historical performance chart, the circulating supply, and more. Sign up to use CoinGecko’s crypto portfolio to track the performance of your portfolio. You may also check out GeckoTerminal (currently in beta), our comprehensive multichain on-chain charting tool featuring live charts, current trades, market sentiment and more as it happens in real time! CoinGecko also has a mobile app that enables you to track cryptocurrencies on <span className="cursor-pointer text-green-600">Android</span> and <span className="cursor-pointer text-green-600">IOS</span>.
            </p>
            <h4 className="text-lg font-semibold mt-8">
               What is 24h Volume in the Table Above?
            </h4>
            <p className="font-light">
               The 24h trading volume refers to the amount a cryptocurrency has been bought and sold on all exchanges within the last 24 hours on the spot market. For instance, if the 24h volume for Ethereum is $15 billion, it means that $15 billion worth of Ether had changed hands across all exchanges in the last 24 hours.
            </p>

         </section>

      </div>

   </>

}