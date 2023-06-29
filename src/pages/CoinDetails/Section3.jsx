
import useDate from '/src/utils/hooks/useDate'
import { Header1, Header2, P1 } from '/src/components/Typography'
import formatNumber from '/src/utils/formatNumber'
import { Container } from '/src/components/Container'
import { TransparentBtn } from '/src/components/Buttons'
import { SCROLL_TO_TOP } from '/src/utils/scrollTop'
import { toggleCurrency } from '/src/utils/CurrencySlice'
import { FaStar, FaChevronRight, FaChartLine, FaBars, FaCaretDown } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import TrendingCoins from '../../components/TrendingCoins'
import PriceChart from './PriceChart'
import { useEffect,useState } from 'react'
import { getBtcToCurrencyExchangeRate } from '../../utils/api'
import currencySymbol from '../../utils/currencySymbol'
const Section3 = ({ theme,
    searchedCoin,
    id,
    currency,
    active,
    handleClick
}) => {

    const dispatch = useDispatch()
    const [exchangeRate,setExchangeRate] = useState(null)

    useEffect(()=>{
        getBtcToCurrencyExchangeRate(setExchangeRate)
    },[])
    
    
    const [year_ath, month_ath, day_ath] = useDate(searchedCoin.ath_date)

    const [year_atl, month_atl, day_atl] = useDate(searchedCoin.atl_date)
    const symbol = currencySymbol()
    return (
        <>
            <h3 className='font-semibold text-2xl mt-4'>
                {id.Capitalize} Price Chart {searchedCoin.symbol.toUpperCase()}
            </h3>
            <div className='w-full chart-grid-xs gap-x-6 md:chart-grid'>
                <div className=' row-span-2  overflow-hidden w-full'>
                    <PriceChart theme={theme} currency={currency} />

                    <div className='flex w-full justify-between  flex-col'>
                        <ul className={`w-full flex rounded-tr-md border rounded-tl-md ${theme ? 'bg-slate-700' : 'bg-blue-100'}`}>
                            <li className={`min-w-[16%] p-2 text-center  border-x border-t border-neutral-400`}>
                                1h
                            </li>
                            <li className={` min-w-[16%] p-2 text-center border-x border-t border-neutral-400`}>
                                24h
                            </li>
                            <li className={` min-w-[16%] p-2 text-center  border-x border-t border-neutral-400`}>
                                7d
                            </li>
                            <li className={` min-w-[16%] p-2 text-center  border-x border-t border-neutral-400`}>
                                14d
                            </li>
                            <li className={` min-w-[16%] p-2 text-center  border-x border-t border-neutral-400`}>
                                30d
                            </li>
                            <li className={` min-w-[16%]  p-2 text-center border-l border-neutral-400`}>
                                1y
                            </li>
                        </ul>
                        <ul className={`w-full flex rounded-br-md border rounded-bl-md `}>
                            <li className={`min-w-[16%]  p-2 text-center  border border-neutral-400`}>
                               -
                            </li>
                            <li className={` min-w-[16%]  p-2 text-center  border border-neutral-400`}>
                                -
                            </li>
                            <li className={` min-w-[16%]  p-2 text-center  border border-neutral-400`}>
                               -
                            </li>
                            <li className={` min-w-[16%]  p-2 text-center  border border-neutral-400`}>
                                -
                            </li>
                            <li className={` min-w-[16%]  p-2 text-center  border border-neutral-400`}>
                                -
                            </li>
                            <li className={` min-w-[16%]  p-2 text-center  border-l border-neutral-400`}>
                               -
                            </li>
                        </ul>

                    </div>

                    <Container theme={theme} >

                        <div className='flex justify-between w-full'>
                            <div>
                                <Header1>
                                    How do you feel about {searchedCoin.name} today?
                                </Header1>
                                <P1>
                                    Vote to see community's results
                                </P1>
                            </div>
                            <div className='flex w-1/2 md:items-center items-end mx-auto justify-end'>
                                <TransparentBtn variant={`h-16`} >
                                    Good  <img className='w-6 inline-block float-right h-6' src="https://static.coingecko.com/s/sentiment_positive-3c061f48ad805930938407b726cb987bc05ca809ea5f31818dbe848a5bbef24a.svg" alt="happy-emoji" />
                                </TransparentBtn>

                                <TransparentBtn variant={'ml-2 h-16'} >
                                    Bad <img className='w-6 inline-block float-right h-6' src="https://static.coingecko.com/s/sentiment_negative-166b904f7e3eac2bcf80349f2319d12d2099aa95a04d3f006b7726cd6e849195.svg" alt="sad-emoji" />
                                </TransparentBtn>
                            </div>
                        </div>
                    </Container>

                    <div className='relative h-fit'>
                        <div className={`overflow-hidden ${!active ? ' h-[50vh]' : 'h-fit'}`}>
                            <div className='w-full mt-6'>
                                <Header1>
                                    {searchedCoin.name} ({searchedCoin.symbol.toUpperCase()}) has increased today.
                                </Header1>
                                <P1>
                                    The price of {searchedCoin.name} {searchedCoin.symbol.toUpperCase()} is ${searchedCoin.current_price.toLocaleString()} today with a 24-hour trading volume of ${searchedCoin.total_volume.toLocaleString()
                                    }. This represents a {searchedCoin.market_cap_change_percentage_24h}% price increase in the last 24 hours and a - price increase in the past 7 days. With a circulating supply of {formatNumber(searchedCoin.circulating_supply)}  {searchedCoin.symbol.toUpperCase()},{searchedCoin.name} is valued at a market cap of ${searchedCoin.market_cap.toLocaleString()}.
                                </P1>
                            </div>

                            <div className='w-full mt-6'>
                                <Header1>
                                    Where can you buy  {searchedCoin.name} ?
                                </Header1>
                                <P1>
                                    {searchedCoin.symbol.toUpperCase()} tokens can be traded on centralized crypto exchanges.The most popular exchange to buy and trade {searchedCoin.name} is -, where the most active trading pair {searchedCoin.name}/USDT has a trading volume of - in the last 24 hours. Other popular options include - and -.
                                </P1>
                            </div>
                            <div className='w-full mt-6'>
                                <Header1>

                                    What is the daily trading volume of  {searchedCoin.name} {searchedCoin.symbol.toUpperCase()} ?
                                </Header1>
                                <P1>
                                    The trading volume of  {searchedCoin.name} {searchedCoin.symbol.toUpperCase()} is  ${searchedCoin.total_volume.toLocaleString()} in the last 24 hours,representing a {searchedCoin.market_cap_change_percentage_24h}% increase from one day ago and signalling a recent rise in market activity.
                                </P1>
                            </div>

                            <div className='w-full mt-6'>
                                <Header1>
                                    What is the all-time low for {searchedCoin.name} ({searchedCoin.symbol.toUpperCase()})?
                                </Header1>
                                <P1>
                                    The lowest price paid for {searchedCoin.name} ({searchedCoin.symbol.toUpperCase()}) is ${searchedCoin.atl}, which was recorded on  {month_atl} {day_atl},{year_atl}. Comparatively, the current price is - higher than the all-time low price.
                                </P1>
                            </div>

                            <div className='w-full mt-6'>
                                <Header1>
                                    What is the market cap of {searchedCoin.name} ({searchedCoin.symbol.toUpperCase()})?
                                </Header1>
                                <P1>
                                    Market capitalization of {searchedCoin.name} ({searchedCoin.symbol.toUpperCase()}) is {searchedCoin.market_cap.toLocaleString()} and is ranked #{searchedCoin.market_cap_rank} on CoinMamba today. Market cap is measured by multiplying token price with the circulating supply of {searchedCoin.symbol.toUpperCase()} tokens ({formatNumber(searchedCoin.circulating_supply)}  are tradable on the market today).
                                </P1>
                            </div>

                            <div className='w-full mt-6'>
                                <Header1>
                                    What is the fully diluted valuation of {searchedCoin.name} ( {searchedCoin.symbol.toUpperCase()})?
                                </Header1>
                                <P1>
                                    The fully diluted valuation (FDV) of {searchedCoin.name} ({searchedCoin.symbol.toUpperCase()}) is ${searchedCoin.fully_diluted_valuation.toLocaleString()
                                    }. This is a statistical representation of the maximum market cap, assuming total number of 1 Billion ETH tokens are in circulation today.
                                </P1>

                            </div>

                            <div className='w-full   mt-6'>
                                <Header1>
                                    How does the price performance of {searchedCoin.name} compare against its peers?
                                </Header1>
                                <P1>
                                    With a price increase of 16.60% in the last 7 days, {searchedCoin.name} ({searchedCoin.symbol.toUpperCase()}) is outperforming the global cryptocurrency market which is up 4.40%, while outperforming when compared to similar Smart Contract Platform cryptocurrencies which are up 2.20%.
                                </P1>
                            </div>

                            <div className='w-full mt-6'>
                                <Header1>

                                    What is the market sentiment of {searchedCoin.name} today?
                                </Header1>
                                <P1>
                                    The community is bearish as more than 50% of users are feeling bad about {searchedCoin.name} ({searchedCoin.symbol.toUpperCase()}) today.
                                </P1>
                            </div>

                        </div>

                        <TransparentBtn event={handleClick} theme={theme} variant={'mt-8  relative'}>
                            Read More
                        </TransparentBtn>
                    </div>

                </div>






                {/* 
===================== THE PRICE CONVERTER TAB GOES HERE======================  */}






                <Container variant={'h-[90%]'} theme={theme}>
                    <h3 className='font-semibold'>
                        {id.toUpperCase()} Converter
                    </h3>
                    <div className={`rounded-lg h-8 w-full ${theme ? 'bg-slate-800' : 'bg-white'} `}>
                        <p className='inline-block w-[60px] pl-1 border-r'>
                            {searchedCoin.symbol.toUpperCase()}
                        </p>
                        <input type="number" className='h-full pl-2 inline-block bg-inherit  w-3/4 outline-none' />
                    </div>
                    <div className={`rounded-lg  mt-8 h-8 md:w-full ${theme ? 'bg-slate-800' : 'bg-white'} px-2`}>
                        <button onClick={() => { dispatch(toggleCurrency()); SCROLL_TO_TOP() }} className=' w-[60px]  inline-block border-r'>
                            {currency}  <FaCaretDown className='inline-block' />
                        </button>
                        <input type="number" className={` bg-inherit pl-2 inline-block h-full  w-3/4 outline-none`} />
                    </div>

                    <p>
                        1 {searchedCoin.symbol.toUpperCase()} = {symbol}{searchedCoin.current_price.toLocaleString()}
                    </p>

                </Container>

                <Container theme={theme}>
                    <h3 className='font-semibold'>
                        {searchedCoin.symbol.toUpperCase()} Price Statistics
                    </h3>

                    <div>
                        <div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
                            <p>
                                {id.toUpperCase()} Price
                            </p>
                            <p>${searchedCoin.current_price}</p>
                        </div>
                        <div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
                            <p>
                                24h Low / 24h High
                            </p>
                            <p>${searchedCoin.low_24h} / ${searchedCoin.high_24h}</p>
                        </div>
                        <div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
                            <p>
                                7d Low / 7d High
                            </p>
                            <p>-</p>
                        </div>
                        <div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
                            <p>
                                Trading Volume
                            </p>
                            <p>${searchedCoin.total_volume.toLocaleString()}</p>
                        </div>
                        <div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
                            <p>
                                Market Cap Rank
                            </p>
                            <p>{searchedCoin.market_cap_rank}</p>
                        </div>
                        <div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
                            <p>
                                Market Cap
                            </p>
                            <p>${searchedCoin.market_cap.toLocaleString()}</p>
                        </div>
                        <div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
                            <p>
                                Market Cap Dominance
                            </p>
                            <p>-</p>
                        </div>
                        <div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
                            <p>
                                Volume / Market Cap
                            </p>
                            <p>-</p>
                        </div>
                        <div className='flex justify-between border-b border-neutral-400 py-2 mt-3 w-full'>
                            <p>
                                All-Time High
                            </p>
                            <div>
                                <p>${searchedCoin.ath.toLocaleString()} <span className='text-red-600'> {searchedCoin.ath_change_percentage.toFixed(2)}%</span></p>
                                <p>
                                    {month_ath} {day_ath}, {year_ath}
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-between mb-2 py-2 mt-3 w-full'>
                            <p>
                                All-Time Low
                            </p>
                            <div>
                                <p>${searchedCoin.atl.toLocaleString()} <span className='text-green-600'> {searchedCoin.atl_change_percentage.toFixed(2)}%</span></p>
                                <p>
                                    {month_atl} {day_atl}, {year_atl}
                                </p>
                            </div>
                        </div>


                    </div>

                </Container>
            </div>
            
            
                <Header1>
                Global {searchedCoin.name} Prices
                    </Header1>
            

            <div className='grid grid-rows-2 w-full grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-7'>

              {exchangeRate  &&   <>
                <div>
                    <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8' >
                        <p className='flex-grow  font-semibold'>
                            {searchedCoin.symbol.toUpperCase()} / USD  <span className={`font-light ml-2`}>
                            US Dollar
                            </span>
                        </p>
                        <p className=' font-semibold'>
                        {exchangeRate.rates.usd.unit}{exchangeRate.rates.usd.value.toLocaleString()}</p>
                    </div>
                    <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8' >
                        <p className='flex-grow font-semibold'>
                            {searchedCoin.symbol.toUpperCase()} / AUD <span className={`font-light ml-2`}>
                            Australian Dollar
                            </span>
                        </p>
                        <p className=' font-semibold'>
                        {exchangeRate.rates.aud.unit}{exchangeRate.rates.aud.value.toLocaleString()}
                       
                        </p>
                    </div>
                    <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8' >
                        <p className='flex-grow font-semibold'>
                            {searchedCoin.symbol.toUpperCase()} / INR <span className={`font-light ml-2`}>
                            Indian Rupee
                            </span>
                        </p>
                        <p className=' font-semibold'>
                        {exchangeRate.rates.inr.unit}{exchangeRate.rates.inr.value.toLocaleString()}
                       
                        </p>
                    </div>
                </div>


                <div>
                    <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8'>
                        <p className={`font-semibold`}>
                            {searchedCoin.symbol.toUpperCase()} / CAD <span className={`font-light ml-2`}>
                            Canadian Dollar
                            </span>
                        </p>
                        <p className='font-semibold'>
                        {exchangeRate.rates.cad.unit}{exchangeRate.rates.cad.value.toLocaleString()}

                        </p>
                    </div>
                    <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8'>
                        <p  className={`font-semibold`}>
                            {searchedCoin.symbol.toUpperCase()} / GBP <span className={`font-light ml-2`}>
                            British Pound Sterling
                            </span>
                        </p>
                        <p className='font-semibold'>
                        {exchangeRate.rates.gbp.unit}{exchangeRate.rates.gbp.value.toLocaleString()}

                        </p>
                    </div>
                    <div className='flex justify-between border-b border-neutral-400 py-3 gap-x-8'>
                        <p className={`font-semibold`}>
                            {searchedCoin.symbol.toUpperCase()} / PHP <span className={`font-light ml-2`}>
                            Philippine Peso
                            </span>
                        </p>
                        <p className='font-semibold'>
                        {exchangeRate.rates.php.unit}{exchangeRate.rates.php.value.toLocaleString()}

                        </p>
                    </div>
                </div>
              </>
}
            </div>
            <Container theme={theme} variant={'flex flex-col h-1/2 w-full justify-between sm:flex-row '} >
                <div className='relative'>
                    <h3>
                        Why are you interested in {searchedCoin.name}?

                    </h3>

                    <p className='text-neutral-400'>
                        I want to...
                    </p>

                    <img src='/mamba-cartoon.png' className='h-6 hidden lg:block absolute bottom-16 w-6' alt='coinmamba-figure' />
                </div>
                <ul className=' w-full max-w-[70%] flex-grow  text-neutral-400'>
                    <li className={`py-3  w-full flex  border-b border-neutral-400`}>
                        <p className='min-w-[90%] flex-grow'>
                            Track live prices &amp; charts on my phone
                        </p>
                        <FaChevronRight className='float-right justify-items-end inline-block' />
                    </li>
                    <li className={`py-3  w-full flex  border-b border-neutral-400`}>
                        <p className='min-w-[90%] flex-grow'>
                            Create a Watchlist &amp; monitor my Portfolio value
                        </p>
                        <FaChevronRight className='float-right justify-items-end inline-block' />
                    </li>
                    <li className={`py-3  w-full flex  border-b border-neutral-400`}>
                        <p className='min-w-[90%] flex-grow'>
                            Trade {searchedCoin.name} on top exchanges
                        </p>
                        <FaChevronRight className='float-right justify-items-end inline-block' />
                    </li>
                    <li className={`py-3  w-full flex  border-b border-neutral-400`}>
                        <p className='min-w-[90%] flex-grow'>
                            Use CoinGecko's Data API to power my application
                        </p>
                        <FaChevronRight className='float-right justify-items-end inline-block' />
                    </li>
                    <li className={`py-3  w-full flex  `}>
                        <p className='min-w-[90%] flex-grow'>
                            Learn more about Cryptocurrency
                        </p>
                        <FaChevronRight className='float-right justify-items-end inline-block' />
                    </li>

                </ul>


            </Container>

            <TrendingCoins />
        </>
    )
}

export default Section3