import { getTrendingCoins } from '../utils/api'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {  FaCalendarPlus, FaSearch,FaListAlt, } from "react-icons/fa"
const TrendingCoins = ({data}) => {
    const storedState = localStorage.getItem('coinsData')
 

    let btc = data?.market.find(coin => coin.id == 'bitcoin');

    let btcStandardPrice = btc?.current_price;

    const [trending, setTrending] = useState({
        coins: [],
        exchanges: [],
        stat: false,
        trend2: true
    })

    useEffect(() => {
getTrendingCoins(setTrending)
    }, [])

    const nextTrendingStat = () => {
        setTrending(prev => {
           return {
              ...prev,
              stat: true,
              trend2: false
           }
        })
     }
     const prevTrendingStat = () => {
        setTrending(prev => {
           return {
              ...prev,
              stat: false,
              trend2: true
           }
        })
     }

    return (
        <section className="mt-40">
            <div className="flex justify-around items-center  gap-4">
                <h2 className="font-semibold flex-grow  text-2xl">
                    Trending Coins
                </h2>
                <h2 className=" md:hidden">
                    {trending.stat ? 2 : 1}/2
                </h2>
                <span onClick={prevTrendingStat} className="w-8 h-8 md:hidden rounded-full text-center text-xl border-neutral-400 cursor-pointer  border">
                    &lt;
                </span>
                <span onClick={nextTrendingStat} className="w-8 h-8 md:hidden rounded-full text-center text-xl border-neutral-400 cursor-pointer border">
                    &gt;
                </span>
            </div>


            <div className="grid md:grid-rows-3 md:grid-cols-5 grid-cols-1 gap-4 grid-rows-5">
                {trending.coins.slice(0, 5).map(coin => <div className={`${!trending.stat ? 'block' : 'hidden'} ease-in mt-8 cursor-pointer    md:min-h-24 pb-4 md:border-none shadow-lg  `} key={coin.item.id}>
                    <img src={coin.item.small} alt="" className="h-12 mr-4 float-left" />
                    <p className="text-neutral-400 text-sm font-bold">{coin.item.name}</p>
                    <p>&euro; {(coin.item.price_btc * btcStandardPrice).toFixed(10)}</p>

                    <img src={`https://www.coingecko.com/coins/${coin.item.coin_id}/sparkline.svg`} className="hidden md:block" alt="" />


                </div>)}

                {trending.coins.slice(5).map(coin => <div className={`${trending.stat ? 'block' : 'hidden'} md:block ease-in mt-8 cursor-pointer    md:min-h-24 pb-4 md:border-none shadow-lg  `} key={coin.item.id}>
                    <img src={coin.item.small} alt="" className="h-12 mr-4 float-left" />
                    <p className="text-neutral-400 text-sm font-bold">{coin.item.name}</p>
                    <p>&euro; {(coin.item.price_btc * btcStandardPrice).toFixed(10)}</p>

                    <img src={`https://www.coingecko.com/coins/${coin.item.coin_id}/sparkline.svg`} className="hidden md:block" alt="" />


                </div>)}
                <div className={`${trending.stat ? 'block' : 'hidden'} ease-in mt-8 cursor-pointer md:hidden p-3 text-neutral-400    md:min-h-24 pb-4 md:border-none shadow-lg  `}>
                    <FaSearch className='inline-block mr-4' />
                    More Coins

                </div>

                <div className={`${trending.stat ? 'block' : 'hidden'} ease-in mt-8 cursor-pointer  md:hidden p-3 text-neutral-400   md:min-h-24 pb-4 md:border-none shadow-lg  `}><FaListAlt className="inline-block mr-4" /> Categories
                </div>

                <div className={`${trending.stat ? 'block' : 'hidden'} ease-in mt-8 cursor-pointer md:hidden p-3 text-neutral-400    md:min-h-24 pb-4 md:border-none shadow-lg  `}>
                    <FaCalendarPlus className='inline-block mr-4' />Recently Added</div>




                <a className=" hidden md:inline-block p-3 cursor-pointer text-neutral-100 bg-contain bg-left-top bg-origin-border bg-no-repeat h-full w-full bg-[url('https://static.coingecko.com/s/more_coins_bg_image-0a368fca5478fcab5133f19ab08675800bf7b916db394f865b590a82e649a0a4.png')]">
                    <div className="md:h-24">
                        <FaSearch className='inline-block mr-4' />
                        More Coins

                    </div>
                </a>
                <a className=" hidden md:inline-block p-3 cursor-pointer text-neutral-100 bg-contain bg-left-top bg-origin-border bg-no-repeat h-full w-full bg-[url('https://static.coingecko.com/s/top_categories_bg-6972db9c971f4682ce537a14f6b27eee5bcd43e64da9b7d039d539a3936c0075.png')]">
                    <div className=""><FaListAlt className="inline-block mr-4" /> Categories
                    </div>
                </a>

                <a className=" hidden md:inline-block p-3 cursor-pointer text-neutral-100 bg-contain bg-left-top bg-origin-border bg-no-repeat h-full w-full bg-[url('https://static.coingecko.com/s/recently_added_bg-5d0819d31cca2c427e7633bb5ef933896813d8d65f78e7d0fc9fc0b5d77fa045.png')]">
                    <div><FaCalendarPlus className='inline-block mr-4' />Recently Added</div>
                </a>
            </div>

        </section>
    )
}

export default TrendingCoins