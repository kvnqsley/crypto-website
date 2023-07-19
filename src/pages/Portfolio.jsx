import { FaStar, FaSpinner, FaChevronRight, FaChartPie, FaPlus, FaEllipsisV, FaChevronDown, FaEyeSlash, FaEye, FaCookieBite, FaHome, FaCheck, FaPencilAlt, FaUsers, FaUndo, FaTable,  FaTimes, } from "react-icons/fa"
import DownloadStore from "../utils/DownloadStores"
import currencySymbol from '../utils/currencySymbol'
import { useSelector, useDispatch } from "react-redux"
import { handleSignup, openLogin } from '../utils/AuthSlice'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../utils/firebase.config"
import ToggleIcon from "../utils/Togglecon"
import { useState, useEffect, useRef, useContext } from "react"
import Cookies from "universal-cookie"
import PortfolioPopup from "../utils/PortfolioPopup"
import { AuthContext } from "../utils/AuthenticationProvider"
import useAuthenticationStatus from '../utils/hooks/useAuthenticationStatus'















const Portfolio = ({ data,
}) => {
    const theme = useSelector(state => state.theme.mytheme)
    const dispatch = useDispatch()

    const isSidebarActive = useSelector(state => state.sideBarActive.value)

    const authState = useAuthState(auth)

    const authStatus = useAuthenticationStatus()

    const [portfolioTab, setPortfolioTab] = useState()

    const [icons, setIcons] = useState({
        plus: false,
        next: null,
        showBalance: true,
        showChart: false,
        showTab: true,
        addCoin: false
    })

    const handleMouseIn = (e) => {
        if (e.target.localName === 'svg') {
            setIcons(state => {
                return {
                    ...state,

                    plus: e.target
                }
            })


            icons.plus ? icons.plus?.previousSibling.classList.toggle('hidden') : null
        }

    }

    const showBalance = () => {
        setIcons(state => {
            return {
                ...state,
                showBalance: !icons.showBalance
            }
        })
    }
    const currency = currencySymbol()

    const showChart = () => {
        setIcons(state => {
            return {
                ...state,
                showChart: !icons.showChart
            }
        })
    }
    const showTab = () => {
        setIcons(state => {
            return {
                ...state,
                showTab: false
            }
        })
    }
    const addCoin = () => {
        setIcons(state => {
            return {
                ...state,
                addCoin: !icons.addCoin
            }
        })
    }
    const tabRef = useRef()
    const iconRef = useRef()

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
        list: []
    })


    const openFavourite = async (e) => {

        const coinText = e.target.closest('.closestEl').children[1].innerText.split('\n')
        const coinImage = e.target.closest('.closestEl').children[1].children[0].children[0].attributes[0].nodeValue
        const tradeBtn = e.target.closest('.closestEl').cells[2].firstChild

        setAddPortfolio(prev => {
            return {
                ...prev,
                addPortfolio: true,
                coinName: coinText[0],
                coinImage: coinImage,
                tradeBtn: tradeBtn,
                translateTab: path.top
            }
        })


        const path = e.target.getBoundingClientRect()

        setFavourite(state => {
            return {
                ...state,
                target: e.target
            }
        })


        if (e.target.style.fill == 'yellow') {
            setAddPortfolio(state => {
                return {
                    ...state,
                    coinAdded: true,
                }
            })
        }
        else {
            setAddPortfolio(state => {
                return {
                    ...state,
                    coinAdded: false,
                }
            })
        }



    }

    const removeCoin = () => {
        setAddPortfolio(state => {
            return {
                ...state,
                removeCoin: true
            }
        })
    }

    const handlePortfolio = () => {

        setFavourite(state => {
            return {
                ...state,
                selected: true,
                list: data.market?.filter(el => el.market_cap_rank == favourite.target.closest('.closestEl').cells[0].innerText)
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



    useEffect(() => {
        const root = document.querySelector('#root')
        const tab = document.querySelector('.portfolio-tab')
        const menu = document.querySelector('.dropdown')
        const dimensions = tab?.getBoundingClientRect()
        const left = dimensions?.left
        const right = dimensions?.right
        const top = menu?.getBoundingClientRect()?.top
        const bottom = dimensions?.bottom


        root.addEventListener('click', (e) => {

            if (portfolioTab) {
                if (e.clientX < left || e.clientY < top || e.clientY > bottom || e.clientX > right) {
                    setPortfolioTab(false)
                }

            }

        })
        return () => {
            root.removeEventListener('click', (e) => {

                if (portfolioTab) {
                    if (e.clientX < left || e.clientY < top || e.clientY > bottom || e.clientX > right) {
                        setPortfolioTab(false)
                    }

                }
            })
        }
    }, [authState])

    useEffect(() => {
        localStorage.setItem('favourite', JSON.stringify(data.favourite))

    }, [data])

    useEffect(() => {
        const dimensions = !icons.showTab ? tabRef.current.getBoundingClientRect() : null

        const left = dimensions?.left
        const right = dimensions?.right
        const top = iconRef.current?.getBoundingClientRect().top
        const bottom = dimensions?.bottom

        root.addEventListener('click', (e) => {
            if (!icons.showTab) {
                if (e.clientX < left || e.clientY < top || e.clientY > bottom || e.clientX > right) {
                    setIcons(state => {
                        return {
                            ...state,
                            showTab: true
                        }
                    })
                }

            }
        })

        return () => {
            root.addEventListener('click', (e) => {
                if (!icons.showTab) {
                    if (e.clientX < left || e.clientY < top || e.clientY > bottom || e.clientX > right) {
                        setIcons(state => {
                            return {
                                ...state,
                                showTab: true
                            }
                        })
                    }

                }
            })
        }
    }, [icons.showTab])

    const shuffleData = () => {
        const sortedData = data.favourite.sort(() => Math.random() - 0.5)
        setData(state => {
            return {
                ...state,
                favourite: sortedData
            }
        })

    }


    return <>
        {authStatus ? <main className={`min-h-screen mt-24  w-full ${isSidebarActive ? 'hidden' : 'block'}`}>
            <div className={`absolute  ${icons.addCoin ? 'top-0 h-screen ease-in duration-200 delay-200 ' : '-top-[400px] ease-in duration-200 delay-200 '} bg-opacity-50 bg-sky-700  w-full`}>
                <div className={`${theme ? 'bg-black shadow-neutral-900' : 'bg-sky-900'} rounded-xl mx-auto mt-16 md:mt-32 sm:w-[60%] w-[80%] md:w-1/3 md:h-[30vh]   p-6 `} >
                    <button ><FaTimes onClick={addCoin} className="text-left text-xl inline-block" /></button>
                    <p className="w-full text-2xl font-semibold">
                        Search your favorite coin
                    </p>
                    <input className="w-full md:mt-4 mt-2 rounded h-8" type="text" placeholder="Enter Coin Name" />
                </div>
            </div>

            <div className={`flex md:justify-between gap-y-5  md:items-center h-16 mt-8 md:flex-row flex-col`}>
                <div className="flex-grow">
                    <h3 onClick={() => { setPortfolioTab(true) }} className={`dropdown cursor-pointer ${theme ? 'text-neutral-500 ' : ''} font-semibold inline text-2xl`}>
                        My Portfolio <FaChevronDown className='inline-block' />
                    </h3>

                    <span className="bg-red-400 px-2 ml-2 rounded inline-block cursor-pointer text-white  ">
                        New</span>
                    <span className="bg-opacity-70 bg-green-500 inline-block cursor-pointer ml-5 px-2 rounded text-teal-900">
                        Main
                    </span>
                </div>
                <div className="min-w-1/4 md:relative">
                    {icons.showBalance ? <button className="hover:bg-sky-800 w-12 h-12 rounded-full"><FaEye onClick={showBalance} className="inline-block  text-3xl cursor-pointer " /> </button> : <button> <FaEyeSlash onClick={showBalance} className="inline-block  text-3xl cursor-pointer " /></button>}
                    {!icons.showChart ? <button className="hover:bg-sky-800 w-12 h-12 rounded-full"><FaChartPie onClick={showChart} className="  inline-block  text-3xl cursor-pointer " /> </button> : <button className="hover:bg-sky-800 w-12 h-12 rounded-full"><FaCookieBite onClick={showChart} className="inline-block  text-3xl cursor-pointer " /></button>}
                    <button className="hover:bg-sky-800 w-12 h-12 rounded-full">
                        <FaTable className="inline-block  text-3xl   " />
                    </button>
                    <button className="hover:bg-sky-800 w-12 h-12 rounded-full" ref={iconRef}>
                        <FaEllipsisV onClick={showTab} className={`${!icons.showTab ? 'text-green-400' : null} hover:text-green-400 inline-block  text-2xl cursor-pointer`}
                        />
                    </button>
                    {!icons.showTab ? <ul ref={tabRef} className={` ${theme ? 'bg-black shadow-neutral-900' : 'bg-sky-700'} md:w-[90%] w-full h-screen md:right-[40%]  top-0 md:top-auto left-0 md:left-auto  md:h-max rounded shadow-lg shadow-black absolute p-4`}>


                        <li className="md:py-4 p-4 ">
                            <button onClick={() => {
                                setIcons(state => {
                                    return {
                                        ...state,
                                        showTab: true
                                    }
                                })
                            }}>
                                <FaTimes />
                            </button>
                        </li>
                        <li className="md:py-4 p-4 cursor-pointer hover:bg-sky-800 "> <h3>
                            <FaHome className='inline-block' />   Set as main portfolio
                        </h3>
                            <FaCheck className="inline-block float-right text-green-600" />
                            <p className="text-sm">
                                You will see this portfolio first when  you open your portfolio
                            </p></li>
                        <li className="md:py-4 p-6 cursor-pointer hover:bg-sky-800 "> <FaPencilAlt className="inline-block" /> Rename Portfolio
                        </li>
                        <li className="md:py-4 p-6  cursor-pointer  border-y border-neut:al-800 800 "><FaUsers className="inline-block" /> <p className="mr-24 inline-block">Share Portfolio </p><ToggleIcon />
                        </li>
                        <li className="md:py-4 p-6 cursor-pointer hover:bg-sky-800 ">
                            <FaUndo className="inline-block" /> Reset Portfolio
                            <p>Remove all transactions in portfolio</p>
                        </li>
                    </ul>
                        : null}
                    <button onClick={addCoin} className="bg-green-400 mt-4 md:ml-5 md:mt-auto text-white rounded hover:bg-green-600 cursor-pointer px-2 h-10 inline"><FaPlus className="inline-block mr-3" /> Add New Coin</button>
                </div>

            </div>
            <div className={`${theme ? 'bg-black shadow-neutral-900' : 'bg-sky-700'}  absolute h-screen  z-40 sm:h-[50vh]  top-[0] md:top-auto md:h-max w-full md:w-[40%] portfolio-tab ${portfolioTab ? 'block' : 'hidden'} shadow-lg  pl-3 pb-6`}>

                <div onClick={() => setPortfolioTab(false)} className={`cursor-pointer  w-18 inline-block h-10 `}>
                    <div className={` ${theme && 'bg-white'} w-6 bg-slate-900 mt-1 h-1 ml-2 translate-y-6 rotate-45`}></div>

                    <div className={` ${theme && 'bg-white'} w-6 bg-slate-900 mt-1 ml-2 h-1  translate-y-4 -rotate-45`}></div>

                </div>

                <button className='border-b  border-neutral-400 font-semibold  py-2'>
                    <h2>All Portfolios  <span className="inline-block  mr-4 rounded-lg p-1 bg-green-700  text-teal-900 ">New</span></h2>
                    <p className="font-normal">See All Portfolios At Once</p>
                </button>
                <button className='border-b border-neutral-400  font-semibold  py-2 '>
                    <h2>
                        My Portfolio  <span className="inline-block  mr-4 p-1 rounded-lg bg-green-700  text-teal-900">Main</span>
                    </h2>
                </button>
                <div className="py-2">
                    <FaPlus className='inline-block' /> <p className="inline-block">Create Portfolio</p>
                </div>
            </div>
            <div className="grid md:grid-rows-1 sm:w-[60%] text-center sm:text-left md:mt-6  mt-8 sm:grid-rows-2 gap-4 md:grid-cols-3 sm:grid-cols-2">
                <div className=" shadow-lg p-5">
                    {icons.showBalance ? currency + ' 0.00' : ' ...'}
                    <p>Total Balance</p>
                </div>
                <div className=" shadow-lg p-5">
                    {icons.showBalance ? currency + ' 0.00' : ' ...'}
                    <p>
                        24h Portfolio Change <span className="text-green-600"> (+0%)</span>
                    </p>
                </div>
                <div className=" shadow-lg p-5"  >
                    {icons.showBalance ? currency + '0.00' : ' ...'}
                    <p>
                        Total Profit Loss (-)
                    </p>
                </div>
            </div>
            {/* <div className=" justify-item-end hidden  absolute right-1   md:block"><ToggleIcon/>
        <p className="ml-4 inline-block">Show Fully Diluted Valuation</p> 
        </div> */}
            {icons.showChart ? <div className='mt-6'>
                <img className="w-40 h-40  mx-auto " src="/gecko_no_holdings-2d949be3ef272ac44c037f8a6b9b8749acf0f0dffa5e2ae8565f0419f7c619eb.svg" alt="chart" />
                <p className="text-center  ">
                    We'll draw a chart here for you once you add your transaction and holdings. Try it out!
                </p>

            </div> : null}
            <div className="overflow-x-auto sm:overflow-hidden w-full ">
                {addToPortfolio.addPortfolio && <PortfolioPopup

                    addToPortfolio={addToPortfolio}
                    setAddPortfolio={setAddPortfolio}
                    handlePortfolio={handlePortfolio}
                    removeCoin={removeCoin}
                    theme={theme} />
                }
                <table className=" table-fixed   mt-10">


                    <thead className="">
                        <tr className=" ">

                            <th className='font-semibold  md:w-3 z-20 sm:w-10 p-6 '>
                                <h3 className=" md:w-3 sm:w-4  ">
                                    #
                                </h3>
                            </th>

                            <th colSpan={2} className='font-semibold p-6'>
                                <h3 className=" md:w-16 sm:w-24 group  ">
                                    Coin <FaChevronDown onClick={shuffleData} className='sm:inline-block font-extralight opacity-20 group-hover:opacity-100 ease-in-out text-xs group-hover:text-black text-neutral-800 hidden cursor-pointer' />
                                </h3>
                            </th>

                            <th className='font-semibold p-6 '>
                                <h3 className=" md:w-16 sm:w-4  ">
                                    Price
                                </h3>
                            </th>

                            <th className='font-semibold p-6 '>
                                <h3 className=" md:w-16 sm:w-4  ">
                                    1h
                                </h3>
                            </th>

                            <th className='font-semibold p-4'>
                                24h
                            </th>
                            <th className='font-semibold p-4 '>
                                7d
                            </th>

                            <th className='font-semibold  p-4'>
                                MKT Cap
                            </th>
                            <th className='font-semibold  p-6'>
                                Last 7 days
                            </th>
                            <th className='font-semibold text-center  p-6'>
                                Holdings
                            </th>
                            <th className='font-semibold  p-6'>
                                PnL
                            </th>

                        </tr>
                    </thead>
                    {!data?.favourite?.length ?
                        <tbody className="text-center h-screen ">
                            <tr className='text-left md:text-center'>
                                <td colSpan={9}>Loading <FaSpinner className="inline-block animate-spin" /></td>

                            </tr>
                        </tbody>

                        : <tbody className="w-full overflow-hidden ">


                            {data?.favourite.map(coin => <tr key={coin.market_cap_rank} className={`relative mb-4 -t w-full closestEl  gap-x-8`}>


                                <td className='  md:w-32 w-32 h-14   text-left  ' >
                                    <h3 className=" w-full   ">
                                        <FaStar onClick={(e) => openFavourite(e)} className={`inline-block favourite mr-2 text-yellow-300   cursor-pointer   outline-green-100`} />{coin.market_cap_rank}</h3>
                                </td>

                                <td className=' px-2 md:pl-4 ml-8  text-left  '      >

                                    <h3 className=" md:w-36 md:block inline-block w-24 ">  <img src={coin.image} className="w-4 h-4 inline-block " alt="" /> {coin.name}

                                        <p className="uppercase  md:inline-block md:ml-2 ml-5   text-md font-thin m ">{coin.symbol}</p>

                                    </h3>
                                </td>
                                <td>
                                    <p className=" mr-4 px-2 py-1 rounded-lg bg-green-700 cursor-pointer opacity-0 ease-in delay-300  duration-300 text-sm  text-teal-100">Buy</p>
                                </td>
                                <td className='md:px-4 px-2  text-left  '>

                                    <h3 className="w-16">${coin.current_price.toLocaleString()}</h3>
                                </td>

                                <td className='md:px-4 px-2  text-left  '>
                                    <h3 className="">-</h3>

                                </td>
                                <td className='md:px-4 px-2  text-left  '>
                                    <h3 className={` ${coin.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'} w-16 `}>{coin.price_change_percentage_24h?.toFixed(1)}%</h3>
                                </td>
                                <td className='md:px-4 px-2  text-left  '>
                                    <h3 className="">-</h3>
                                </td>


                                <td className='md:px-4 px-2  text-left  '>
                                    <h3 className="">${coin.market_cap.toLocaleString()}</h3>
                                </td>
                                <td className='md:px-4 px-2  text-left  '>
                                    <div className=""><img className="w-16 h-16" src={`https://www.coingecko.com/coins/${coin.market_cap_rank}}/sparkline.svg`} alt="photo" /></div>

                                </td>
                                <td className='md:px-6 px-2  text-left  '>
                                    <h3 className="w-32 text-right">
                                        {icons.showBalance ? '   $0.00 (0%)' : ' ...'}

                                        <span className=" block">   {icons.showBalance ? `0.0 ${coin.symbol.toUpperCase()}` : ' ...'}   </span>
                                    </h3>
                                </td>

                                <td className='md:px-4 px-2  text-left  '>
                                    <p>
                                        {icons.showBalance ? '  $0.00' : ' ...'}


                                    </p>
                                    <p className="text-red-700">
                                        0%
                                    </p>
                                </td>
                                <td className='md:px-4 px-2 relative text-left  '>
                                    <button className={` bg-black hidden after:content-[""] closestEl  after:h-2 after:w-2 after:border-t-4 after:border-r-4 after:top-2 after:border-b-4  after:border-t-transparent after:border-r-transparent  after:border-b-transparent after:border-l-[15px] after:border-black  after:absolute after:-right-4 text-white absolute text-sm p-2 rounded font-light -left-28 h-8 w-max `}>Add a Transaction</button>
                                    <FaPlus onClick={handleMouseIn} className="inline-block before:content-[] before:w-4 before-h-6 before:bg-black before:absolute relative text-green-600 w-16 cursor-pointer" />
                                    <FaChevronRight className='inline-block mt-4 w-16 text-green-600 cursor-pointer' />
                                </td>



                            </tr>)}

                        </tbody>
                    }
                </table>
            </div>
        </main> : <main className={`min-h-screen mt-32 relative  w-full ${isSidebarActive ? 'hidden' : 'block'}`} >
            <section className=" relative place-items-center w-full flex flex-col-reverse md:flex-row justify-between md:static">
                <div className="  md:top-0 w-full relative">
                    <h1 className="font-bold w-11/12 mt-10  text-4xl xl:w-2/3">
                        Free &amp; Powerful Crypto Portfolio Tracker
                    </h1>
                    <h3 className="text-neutral-400 w-full xl:w-3/4 mt-6">Track your crypto earnings like a pro, with a user-friendly and reliable portfolio tracker that you can rely on

                    </h3>
                    <button
                        onClick={() => dispatch(handleSignup())}
                        className="bg-green-600 rounded px-6 py-2 mt-10 hover:bg-green-900 text-cyan-50">
                        SIGN UP
                    </button>
                    <button onClick={() => dispatch(openLogin())}
                        className="border-cyan-50 rounded border-[1px] ml-8 py-2 px-6 hover:border-green-600 ">
                        LOGIN
                    </button>
                    <h3 className="text-neutral-400 md:mt-8">
                        Start your portfolio now!
                    </h3>
                </div>
                <div className=" md:static sm:-top-4  -top-2">
                    <img src="/simage.webp" className="sm:w-[80%] w-auto md:auto" alt="phone-img" />
                </div>
            </section>
            <section className="grid md:mt-20 mt-24  gap-y-8 md:gap-y-0 md:grid-cols-3">
                <div>
                    <h1 className="font-semibold text-xl">📈Real-time Price Data (11,000+ coins)</h1>
                    <p className="font-light text-xl">From the world's largest independent cryptocurrency data agreegator</p>
                </div>
                <div>
                    <h1 className="font-semibold text-xl">📲Synced across Web &amp; Mobile App</h1>
                    <p className="font-light text-xl">Porfolio tracking at your fingertips -anytime,anywhere</p>
                </div>
                <div>
                    <h1 className="font-semibold text-xl">
                        📊 Create multiple Portfolios
                    </h1>
                    <p className="font-light text-xl">
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
                    <DownloadStore />
                </div>

            </section>

        </main>}


    </>
}
export default Portfolio