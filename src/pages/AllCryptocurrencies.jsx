import { FaGreaterThan, FaChevronDown, FaSpinner, FaInfinity } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { toggleCurrency } from "../utils/CurrencySlice"
import formatNumber from "../utils/formatNumber"
const AllCrypto = ({ theme, shuffleData }) => {

    const dispatch = useDispatch()
    const currency = useSelector(state => state.currency.currency)
    const storedState = localStorage.getItem('coinsData')
    const data = storedState ? JSON.parse(storedState) : useSelector(state => state.data.market)














    return <>
        <main className={` ${theme ? 'bg-black text-white' : 'bg-sky-700'} sm:w-[calc(100% - 32rem)]    w-[calc(100% - 16rem)]  sm:ml-16 ml-4 mr-4  sm:mr-16 min-h-screen`}>
            <Link to={'/'} className="mt-24 inline-block text-green-400 cursor-pointer hover:text-green-900 font-semibold">Cryptocurrencies <span className="text-neutral-400 hover:text-inherit"><FaGreaterThan className="inline-block" /> All Cryptocurrencies</span></Link >
            <div className="text-center w-full mt-2">
                <p className="font-semibold h-16 text-3xl">
                    All Cryptocurrencies
                </p>
                <p className="text-xl mt-2 font-light">
                    View a full list of active cryptocurrencies
                </p>

            </div>
            <button onClick={() => dispatch(toggleCurrency())} className="rounded-full w-[5vw] md:button-3 text-center mt-2 hover:bg-zinc-500  ">
                {currency}
            </button>

            <div className="grid gap-x-4 mt-6 md:grid-cols-4 gap-y-6 md:grid-rows-2 grid-cols-2 ">
                <label className='font-semibold' htmlFor="mkt-cap">Market Cap
                    <select className={`${theme ? 'bg-zinc-400' : 'bg-white'} block w-full h-10 sm:rounded rounded-full font-light`} name="" id="mkt-cap">
                        <option className="" value="">All</option>
                        <option value="">&gt; $10 Billion</option>
                        <option value="">$1 Billion - $10 Billion</option>
                        <option value="">$100 Million - $1 Billion</option>
                        <option value="">$10 Million - $100 Million</option>
                        <option value="">$1 Million - $10 Million</option>
                        <option value="">$100,0000 - $1 Million</option>
                        <option value="">&lt; $100,000</option>
                    </select>
                </label>
                <label className='font-semibold' htmlFor="24hvolume">24h Volume
                    <select className={`${theme ? 'bg-zinc-400' : 'bg-white'} block w-full h-10 sm:rounded rounded-full font-light`} name="" id="24hvolume">
                        <option value="">All</option>
                        <option value="">&gt; $10 Billion</option>
                        <option value="">$1 Billion - $10 Billion</option>
                        <option value="">$100 Million - $1 Billion</option>
                        <option value="">$10 Million - $100 Million</option>
                        <option value="">$1 Million - $10 Million</option>
                        <option value="">$100,0000 - $1 Million</option>
                        <option value="">&lt; $100,000</option>
                    </select>
                </label>
                <label className='font-semibold' htmlFor="price">Price
                    <select className={`${theme ? 'bg-zinc-400' : 'bg-white'} block w-full h-10 sm:rounded rounded-full font-light`} name="" id="price">
                        <option value="">All</option>
                        <option value="">&gt; $1000</option>
                        <option value="">$100 - $1000</option>
                        <option value="">$10 - $100</option>
                        <option value="">$1 - $10</option>
                        <option value="">$0.01 - $1</option>
                        <option value="">$0.0001 - $0.01</option>
                        <option value="">&lt; $0.0001</option>
                    </select>
                </label>
                <label className='font-semibold' htmlFor="24h-change">24h Change
                    <select className={`${theme ? 'bg-zinc-400' : 'bg-white'} block w-full h-10 sm:rounded rounded-full font-light`} name="" id="24h-change">
                        <option value="">All</option>
                        <option value="">+50%</option>
                        <option value="">+10% to +50%</option>
                        <option value="">0 to +10%</option>
                        <option value="">-10% to 0</option>
                        <option value="">-50% to -10%</option>
                        <option value="">&lt; -50%</option>
                    </select>
                </label>
                <label className='font-semibold' htmlFor="category">Category
                    <select className={`${theme ? 'bg-zinc-400' : 'bg-white'} block w-full h-10 sm:rounded rounded-full font-light`} name="" id="category">
                        <option value="">All</option>
                    </select>
                </label>
                <label className='font-semibold' htmlFor="exchange">Exchange
                    <select className={`${theme ? 'bg-zinc-400' : 'bg-white'} block w-full h-10 sm:rounded rounded-full font-light`} name="" id="exchange">
                        <option value="">All</option>
                    </select>
                </label>
                <label className='font-semibold' htmlFor="platform">Platform
                    <select className={`${theme ? 'bg-zinc-400' : 'bg-white'} block w-full h-10 sm:rounded rounded-full font-light`} name="" id="platform">
                        <option value="">All</option>
                    </select>
                </label>
                <label className='font-semibold' htmlFor="hashing-algo">Hashing Algorithm
                    <select className={`${theme ? 'bg-zinc-400' : 'bg-white'} block w-full h-10 sm:rounded rounded-full font-light`} name="" id="hashing-algo">
                        <option value="">All</option>
                    </select>
                </label>


            </div>
            <button className="md:w-[20vw] rounded p-3 mt-4 w-full bg-green-600 hover:bg-green-300">
                Search
            </button>



            <div className="overflow-x-auto sm:overflow-hidden w-full ">
                <table className=" table-fixed   mt-10">


                    <thead className="">
                        <tr className=" ">

                            <th className='font-semibold  md:w-3 z-20 sm:w-10 p-6 '>
                                <h3 className=" md:w-3 sm:w-4  ">
                                    #
                                </h3>
                            </th>

                            <th className='font-semibold px-6'>
                                <h3 className=" md:w-16 sm:w-24 group  ">
                                    Coin <FaChevronDown onClick={shuffleData} className='sm:inline-block font-extralight opacity-20 group-hover:opacity-100 ease-in-out text-xs group-hover:text-black text-neutral-800 hidden cursor-pointer' />
                                </h3>
                            </th>
                            <th className='font-semibold px-2'>
                                <h3 className=" md:w-16 sm:w-4  ">
                                    Symbol
                                </h3>
                            </th>

                            <th className='font-semibold p-6 '>
                                <h3 className=" md:w-16 sm:w-4  ">
                                    Price
                                </h3>
                            </th>

                            <th className='font-semibold p-6 '>
                                <h3 className=" w-4  ">
                                    1h
                                </h3>
                            </th>

                            <th className='font-semibold p-6'>
                                24h
                            </th>
                            <th className='font-semibold p-6 '>
                                7d
                            </th>
                            <th className='font-semibold p-6 '>
                                24h Volume
                            </th>
                            <th className='font-semibold p-6 '>
                                Criculating Supply
                            </th>
                            <th className='font-semibold p-6 '>
                                Total Supply
                            </th>
                            <th className='font-semibold  p-6'>
                                MKT Cap
                            </th>


                        </tr>
                    </thead>
                    {!data?.market.length ?
                        <tbody className="text-center h-screen col-">
                            <tr className='text-left md:text-center'>
                                <td colSpan={9}>Loading <FaSpinner className="inline-block animate-spin" /></td>

                            </tr>
                        </tbody>

                        : <tbody className="h-screen w-full overflow-hidden ">


                            {data?.market.map(coin => <tr key={coin.market_cap_rank} className={`border-y mb-4 -t w-full h-8 closestEl  gap-x-8`}>


                                <td className='md:w-2 w-32 h-14   text-left  ' >
                                    <h3 className=" w-full   ">{coin.market_cap_rank}</h3>
                                </td>

                                <td className=' px-2 md:pl-4 ml-8  text-left  '      >

                                    <h3 className="  md:block inline-block w-24 ">  <img src={coin.image} className="w-4 h-4 inline-block " alt="" /> {coin.name}

                                    </h3>
                                </td>
                                <td>

                                    <p className="uppercase  md:inline-block  ml-5   text-md font-thin m ">{coin.symbol}</p>
                                </td>
                                <td className='md:px-2 px-2  text-left  '>

                                    <h3 className="w-16">${coin.current_price.toLocaleString()}</h3>
                                </td>

                                <td className='md:px-2 px-2  text-left  '>
                                    <h3 className="">-</h3>

                                </td>
                                <td className='md:px-2 px-2  text-left  '>
                                    <h3 className={` ${coin.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'} w-16 `}>{coin.price_change_percentage_24h?.toFixed(1)}%</h3>
                                </td>
                                <td className='md:px-2 px-2  text-left  '>
                                    <h3 className="">-</h3>
                                </td>
                                <td className='md:px-2 px-2  text-right  '>
                                    <h3 className="">${coin.market_cap_change_24h?.toLocaleString(undefined, { maximumFractionDigits: 0 })}</h3>
                                </td>


                                <td className='md:px-4 px-2  text-right '>
                                    <h3 className="w-24   k">${coin.circulating_supply.toLocaleString(undefined, { maximumFractionDigits: 0 })}</h3>
                                </td>
                                <td className='md:px-9 px-2  text-right  '>
                                    <h3 className="w-24   k">{formatNumber(coin.total_supply)}</h3>
                                </td>


                                <td className='md:px-9 px-2  text-right  '>
                                    <h3 className="">${coin.market_cap.toLocaleString()}</h3>
                                </td>


                            </tr>)}
                        </tbody>}
                </table>
            </div>

        </main>

    </>
}

export default AllCrypto