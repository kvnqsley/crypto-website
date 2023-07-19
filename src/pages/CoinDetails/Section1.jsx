import React from 'react'
import Tooltip from '/src/utils/Tooltip'


import {
    FaCaretDown,
    FaShare,
    FaBell,
    FaStar,
    FaRegQuestionCircle,
    FaTelegram,
    FaTwitter,
    FaChevronDown,
    FaSearch,
    FaCopy
} from 'react-icons/fa'

import UpDowntrend from '/src/utils/UpDowntrend'



const Section1 = ({ theme,
    setInfo,
    searchedCoin,
    info,
    otherCoins }) => {
    return (
        <div className='flex flex-col gap-y-4 xl:flex-row justify-between gap-x-6 w-full  mt-8 '>

            <div className='xl:w-[70%] w-full'>
                <span>
                    <p className='bg-slate-700 mb-4 text-white rounded-full w-max px-2'>
                        Rank #{searchedCoin.market_cap_rank
                        }
                    </p>
                </span>
                <img src={searchedCoin.image} alt="coin-image" className='w-10 inline-block  rounded-full h-10' />
                <h4 className='inline-block text-3xl ml-4 font-semibold'>
                    {searchedCoin.name}
                </h4>
                <p className='inline-block text-xl ml-3'>
                    {searchedCoin.symbol.toUpperCase()}
                </p>
                <p className='text-3xl w-max font-semibold '>
                    ${searchedCoin.current_price.toLocaleString(undefined, { minimumFractionDigits: 9 })}
                </p>
                <h3 className='text-red-800 inline-block  text-2xl '>
                    <FaCaretDown className='inline-block' /> 1.8%
                </h3>
                <UpDowntrend value={1.8} />
                <p>
                    0.00000000 BTC
                    <span className='text-red-800'>
                        {searchedCoin.market_cap_change_percentage_24h.toFixed(1)} %
                    </span>
                </p>
                <p>
                    0.00000000 ETH
                    <span className='text-red-800'>
                        -1.4%
                    </span>
                </p>
                <button className='border w-10 rounded  group relative  h-7 mt-4 mr-5 border-neutral-500'>
                    <FaShare className='inline-block ' />
                    <Tooltip text={' Share '} />
                </button>
                <button className='border w-10 rounded h-7 mr-5 border-neutral-500'>
                    <FaBell
                        className='inline-block' />
                </button>
                <button className='border w-10 group relative rounded h-7 mr-5 border-neutral-500'>
                    <FaStar className='inline-block ' />
                    <Tooltip text={'Add to Portfolio and track coin price'} />
                </button>
                <p className={`inline-block ${theme ? 'bg-slate-700' : 'bg-blue-100'} text-xs font-semibold rounded px-4`}>
                    <FaStar className='text-yellow-400 inline ' /> On 59548 watchlists
                </p>
                <meter min={searchedCoin.low_24h} max={searchedCoin.high_24h} value={searchedCoin.current_price}  className='md:w-1/2 w-full mt-6 h-2 from-yellow-300 from-0% via-30% to-40% bg-gradient-to-r via-green-400 to-blue-100  block rounded-full'>

                </meter>
                <div className='flex md:w-[30vw] mt-4  font-semibold justify-between '>
                    <p>
                        ${searchedCoin.low_24h}
                    </p>
                    <p>
                        24H Range
                    </p>
                    <p>
                        ${searchedCoin.high_24h}
                    </p>
                </div>

                <div className='grid grid-rows-2 w-full grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-7'>

                    <div>
                        <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8' >
                            <p className='flex-grow'>
                                Market Cap <FaRegQuestionCircle className='inline-block' />
                            </p>
                            <p className=' font-semibold'>
                                ${searchedCoin.market_cap.toLocaleString(undefined, { maximunFractionDigits: 2 })} <FaChevronDown className='inline-block' />
                            </p>
                        </div>
                        <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8' >
                            <p className='flex-grow'>
                                24H Volume <FaRegQuestionCircle className='inline-block' />
                            </p>
                            <p className=' font-semibold'>
                                $393,939,3939
                            </p>
                        </div>
                        <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8' >
                            <p className='flex-grow'>
                                Fully Diluted Valuation <FaRegQuestionCircle className='inline-block' />
                            </p>
                            <p className=' font-semibold'>
                                ${searchedCoin.fully_diluted_valuation.toLocaleString()}
                            </p>
                        </div>
                    </div>


                    <div>
                        <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8'>
                            <p>
                                Circulating Supply<FaRegQuestionCircle className='inline-block' />
                            </p>
                            <p className='font-semibold'>
                                {searchedCoin.circulating_supply.toLocaleString()}

                            </p>
                        </div>
                        <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8'>
                            <p >
                                Total Supply <FaRegQuestionCircle className='inline-block' />
                            </p>
                            <p className='font-semibold'>
                                {searchedCoin.total_supply.toLocaleString()}

                            </p>
                        </div>
                        <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8'>
                            <p>
                                Max Supply <FaRegQuestionCircle className='inline-block' />
                            </p>
                            <p className='font-semibold'>
                                {searchedCoin.max_supply?.toLocaleString()}

                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className='justify-between'>
                    <button className='bg-green-500 rounded mr-4 p-1 hover:bg-green-600'>
                        Buy/Sell <FaChevronDown className='inline-block' />
                    </button>
                    <button className='bg-green-500 rounded mr-4 p-1 hover:bg-green-600'>
                        Tax  <FaChevronDown className='inline-block' />
                    </button>
                    <button className='bg-green-500 rounded mr-4 p-1 hover:bg-green-600'>
                        Earn Crypto  <FaChevronDown className='inline-block' />
                    </button>
                </div>
                <h3 className='font-semibold hidden md:block text-xl'>
                    Info
                </h3>
                <button onClick={() => setInfo(true)} className={`w-full ${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg my-4 md:hidden text-center font-semibold ${info ? 'hidden' : 'block'} py-2`}>
                    Show More Info
                </button>
                <div className={`grid grid-cols-2  md:grid ${info ? 'grid' : 'hidden'} mt-6 md:mt-auto  gap-y-4 grid-rows-[7]`}>
                    <div className='flex flex-col  gap-y-1'>
                        <p className='font-light text-neutral-300'>
                            Contract
                        </p>
                        <p className='font-light text-neutral-300'>
                            Website
                        </p>
                        <p className='font-light text-neutral-300'>
                            Explorers
                        </p>
                        <p className='font-light text-neutral-300'>
                            Community
                        </p>
                        <p className='font-light text-neutral-300'>
                            Search on
                        </p>
                        <p className='font-light text-neutral-300'>
                            API id
                        </p>
                        <p className='font-light text-neutral-300'>
                            Tags
                        </p>

                    </div>

                    <div className='flex flex-col w-full gap-y-2'>
                        <div className={`font-semibold text-sm relative  rounded-lg    ${theme ? 'bg-slate-700' : 'bg-blue-100'} h-5  w-full rounded-r-lg  `}>

                            <p className='w-full hover:text-green-600 px-2 inline-block'>
                                {otherCoins?.platforms?.ethereum?.slice(0, 5)}...{otherCoins?.platforms?.ethereum?.slice(-5)}
                            </p>
                            <FaCopy className='inline-block absolute top-0 right-16' />

                            <button className={`inline-block hover:text-green-600 text-sm rounded-r-lg  w-8 h-full ${theme ? 'bg-slate-800' : 'bg-blue-200'} absolute top-0 right-0`}>
                                ...

                            </button>
                            <div>
                                <p>
                                    {/* {otherCoins?.platforms?.arbitrum-one} */}
                                </p>
                                <p>
                                    {/* {otherCoins?.platforms?.binance-smart-chain} */}
                                </p>
                            </div>
                        </div>

                        <a href='#' className={`font-semibold text-left ${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg px-2 w-max hover:text-green-600 text-sm`}>
                            pepe.vip
                        </a>
                        <a className={`font-semibold text-left   ${theme ? 'bg-slate-700' : 'bg-blue-100'} relative rounded-lg button px-2 text-sm  hover:text-green-600`}>
                            Etherscan
                            <button className={`inline-block text-sm rounded-r-lg ml-4 w-8  ${theme ? 'bg-slate-800' : 'bg-blue-200'} absolute right-0`}>...</button>
                        </a>
                        <p className='font-semibold  text-sm w-max '>
                            <a href="" className={`${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg px-2 hover:text-green-600`}>
                                <FaTwitter className='inline-block' /> Twitter
                            </a>
                            <a href="" className={`ml-3 ${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg px-2  hover:text-green-600 inline-block`}>
                                <FaTelegram className='inline-block' /> Telegram
                            </a>
                        </p>
                        <p className={`font-semibold text-sm ${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg px-2 w-max `}>
                            <a href="" className='hover:text-green-600'>
                                <FaSearch className='inline-block' /> Twitter
                            </a>
                        </p>
                        <p className={`font-semibold text-sm ${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg px-2 w-max`}>
                            {searchedCoin.id} <FaCopy className='inline-block' />
                        </p>
                        <button className={`font-semibold text-sm text-left  hover:text-green-600 relative ${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg pl-2`}>
                            Ethereum Ecosystem
                            <span className={`inline-block hover:text-green-600 text-sm rounded-r-lg  w-8 h-full ${theme ? 'bg-slate-800' : 'bg-blue-200'} absolute top-0 right-0`}>...</span>
                        </button>
                    </div>
                </div>
                <button onClick={() => setInfo(false)} className={`w-full ${info ? 'block' : 'hidden'} ${theme ? 'bg-slate-700' : 'bg-blue-100'} rounded-lg my-4  md:hidden text-center font-semibold py-2`}>
                    Hide Info
                </button>
            </div>
        </div>
    )
}

export default Section1