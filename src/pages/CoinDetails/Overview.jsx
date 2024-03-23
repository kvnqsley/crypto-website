
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
import { useEffect, useState } from 'react'
import { getBtcToCurrencyExchangeRate } from '../../utils/api'
import currencySymbol from '../../utils/currencySymbol'
import { Link } from 'react-router-dom'
import { NavigationBtn } from '../../components/Buttons'
import NavigationTab from './NavigationTab'
import Markets from './Markets'
import { useContext } from 'react'
import { ComponentContext } from './ContextProvider'

const Overview = () => {

    const { tab,
        theme,
        toggleGeneral,
        toggleSocial,
        toggleDeveloper,
        toggleWidgets,
        searchedCoin
        , id,
        isBitcoin,
        currency,
        readMore,
        setComponent,
        togglePages,
        data,
        handleClick } = useContext(ComponentContext)
    const dispatch = useDispatch()
    const [exchangeRate, setExchangeRate] = useState(null)

    useEffect(() => {
        getBtcToCurrencyExchangeRate(setExchangeRate)
    }, [])



    const [year_ath, month_ath, day_ath] = useDate(searchedCoin.ath_date)

    const [year_atl, month_atl, day_atl] = useDate(searchedCoin.atl_date)
    const symbol = currencySymbol()

    return (
        <>
            <div>
                <ul className={`relative xl:pb-7 pb-2  mt-8 h-min border-b-[1px] w-full overflow-scroll border-neutral-400
gap-5  flex`} >

                    <li className={`  border-b-2 -mb-2 xl:-mb-7 `}> <button onClick={() => togglePages()}>
                        Overview </button> </li>
                    <li className={`hover:border-b-2    -mb-2 xl:-mb-7 border-cyan-100  min-w-max`}><button onClick={() => setComponent(<Markets />)} >Markets</button></li>
                    <li className={`hover:border-b-2    -mb-2 xl:-mb-7 border-cyan-100  min-w-max`}><button onClick={() => setComponent(<Markets />)}>Historical Data</button></li>
                    <li className={`hover:border-b-2    -mb-2 xl:-mb-7 border-cyan-100  min-w-max`}><button onClick={() => setComponent(<Markets />)} >Markets</button></li>
                   {!!isBitcoin &&  <li className={`hover:border-b-2    -mb-2 xl:-mb-7 border-cyan-100  min-w-max`}><button onClick={() => setComponent(<Markets />)}>Bitcoin Halving Countdown</button></li>}
                    <li className={`hover:border-b-2    -mb-2 xl:-mb-7 border-cyan-100  min-w-max`}><button onClick={() => setComponent(<Markets />)}>Tokenomics</button></li>
                    <li className='text-green-600 px-2 rounded bg-green-200 '>
                        New
                    </li>

                </ul>


                <NavigationTab>
                    <li >
                        <NavigationBtn event={toggleGeneral} theme={theme} variant={tab.general} >
                            General
                        </NavigationBtn>
                    </li>
                    <li>
                        <NavigationBtn event={toggleSocial} theme={theme} variant={tab.social} >
                            Social
                        </NavigationBtn>
                    </li>
                    <li>
                        <NavigationBtn event={toggleDeveloper} theme={theme} variant={tab.developer} >
                            Developer
                        </NavigationBtn>
                    </li>


                    <li>
                        <NavigationBtn event={toggleWidgets} theme={theme} variant={tab.widgets}>
                            Widgets
                        </NavigationBtn>

                    </li>

                </NavigationTab>
            </div>
            <h3 className='font-semibold text-2xl mt-4'>
                {id.Capitalize} Price Chart {searchedCoin.symbol.toUpperCase()}
            </h3>
            <div className='w-full chart-grid-xs gap-x-6 xl:chart-grid'>
                <div className=' row-span-2  overflow-hidden w-full'>
                    <PriceChart theme={theme} currency={currency} />

                    <div className='flex w-full justify-between  flex-col'>
                        <ul className={`w-full flex rounded-tr-xl border rounded-tl-xl ${theme ? 'bg-slate-700' : 'bg-blue-100'}`}>
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
                        <ul className={`w-full flex rounded-br-xl border rounded-bl-xl `}>
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
                            <div className='flex w-1/2 xl:items-center items-end mx-auto justify-end'>
                                <TransparentBtn variant={`h-8 min-w-max `} >
                                    Good  <img className='w-6 inline-block float-right ml-2 h-6' src="https://static.coingecko.com/s/sentiment_positive-3c061f48ad805930938407b726cb987bc05ca809ea5f31818dbe848a5bbef24a.svg" alt="happy-emoji" />
                                </TransparentBtn>

                                <TransparentBtn variant={'ml-2 h-8 min-w-max mr-2'} >
                                    Bad <img className='w-6 ml-2 inline-block float-right h-6' src="https://static.coingecko.com/s/sentiment_negative-166b904f7e3eac2bcf80349f2319d12d2099aa95a04d3f006b7726cd6e849195.svg" alt="sad-emoji" />
                                </TransparentBtn>
                            </div>
                        </div>
                    </Container>

                    <div className='relative h-fit'>
                        <div className={`overflow-hidden relative after:top-0 after:left-0 after:content-['']  after:absolute after:bg-gradient-to-b after:from-transparent after:to-[#000000c4] after:from-80% after:to-100% after:h-full after:w-full   ${!readMore ? 'h-[50vh]  ' : 'h-fit' }`}>

                            <div className='w-full mt-6'>
                                <Header1>
                                    {searchedCoin.name} ({searchedCoin.symbol.toUpperCase()}) has increased today.
                                </Header1>
                                <P1>
                                    The price of {searchedCoin.name} {searchedCoin.symbol.toUpperCase()} is ${searchedCoin.current_price.toLocaleString()} today with a 24-hour trading volume of ${searchedCoin.total_volume.toLocaleString()
                                    }. This represents a {searchedCoin.market_cap_change_percentage_24h}% price increase in the last 24 hours and a - price increase in the past 7 days. With a circulating supply of {formatNumber(searchedCoin.circulating_supply)}  {searchedCoin.symbol.toUpperCase()},{searchedCoin.name} is valued at a market cap of ${searchedCoin.market_cap.toLocaleString()}.
                                </P1>
                            </div>

                            {!!isBitcoin && <div >
                                <Header1>
                                    What is Bitcoin?
                                </Header1>
                                <P1>
                                    Bitcoin is a cryptocurrency launched in January 2009, where the first genesis block was mined on 9th January 2009. It is a decentralized digital currency that is based on cryptography. As such, it can operate without the need of a central authority like a central bank or a company. It is unlike government-issued or fiat currencies such as US Dollars or Euro in which they are controlled by the country’s central bank. The decentralized nature allows it to operate on a peer-to-peer network whereby users are able to send funds to each other without going through intermediaries.

                                </P1>
                                <Header1>
                                    Who created Bitcoin?
                                </Header1>
                                <P1>
                                    The creator is an unknown individual or group that goes by the name Satoshi Nakamoto with the idea of an electronic peer-to-peer cash system as it is written in a whitepaper. Until today, the true identity of Satoshi Nakamoto has not been verified though there has been speculation and rumor as to who Satoshi might be.

                                </P1>

                                <Header1>
                                    How does Bitcoin work?
                                </Header1>
                                <P1>
                                    While the general public perceives Bitcoin as a physical looking coin, it is actually far from that. Under the hood, it is a distributed accounting ledger that is stored as a chain of blocks - hence the name blockchain.
                                    <br />
                                    <br />
                                    Let's compare how Bitcoin is different from a commercial bank, which operates as a centralized system. Given a situation where Alice wants to transact with Bob, the bank is the only entity that holds the ledger that describes how much balance Alice and Bob has. As the bank maintains the ledger, they will do the verification as to whether Alice has enough funds to send to Bob. Finally when the transaction successfully takes place, the Bank will deduct Alice’s account and credit Bob’s account with the latest amount.
                                    <br />
                                    <br/>
                                    Bitcoin conversely works in a decentralized manner. Since there is no central figure like a bank to verify the transactions and maintain the ledger, a copy of the ledger is distributed across Bitcoin nodes. A node is a piece of software that anybody can download and run to participate in the network. With that, everybody has a copy of how much balance Alice and Bob has, and there will be no dispute of fund balance.
                                    <br/>
                                    <br/>
                                    Now, if Alice were to transact with Bob using bitcoin. Alice will have to broadcast her transaction to the network that she intends to send $1 to Bob in equivalent amount of bitcoin. So how does the system determine if Alice has enough bitcoin to execute the transaction?

                                </P1>
                                <Header1>
                                    Bitcoin Mining
                                </Header1>
                             <P1>
                             This is where mining takes place. A Bitcoin miner will use his or her computer rigs to validate Alice’s transaction to be added into the ledger. In order to stop a miner from adding any arbitrary transactions, they will need to solve a complex puzzle. Only if the miner is able to solve the puzzle (called the Proof of Work), which happens at random, then he or she is able to add the transactions into the ledger and the record is final.
                                <br />
                                <br />
                                Since running computer rigs cost money due to capital expenditure, which includes the cost of the rigs and the cost of electricity, miners are rewarded with new supply of bitcoins. This is the monetary system behind Bitcoin, where the fees for validating transactions on the network is paid by the person who wishes to transact (in this case it is Alice).
                                <br />
                                <br />
                                This makes the Bitcoin ledger resilient against fraud in a trustless manner. While it is resilient, there are still some risks associated with the system such as the 51% attack where by miners control more than 51% of the total computation power and also there can be security risks outside of the control of the Bitcoin protocol.
                                <br />
                                <br />
                             </P1>
                                To learn more about Bitcoin (BTC), you may:

                                <ul>
                                    <li className='text-green-500'>Watch a video on Bitcoin's DeFi ecosystem</li>
                                    <li className='text-green-500'>Watch a video on Bitcoin's Lightning Network</li>
                                    <li className='text-green-500'>Read an article on Bitcoin's DeFi ecosystem</li>
                                    <li className='text-green-500'>Compare the differences between Bitcoin vs Litecoin</li>
                                </ul>

                                <Header1>
                                    How to keep your Bitcoin safe?
                                </Header1>
                                <P1>
                                    When transacting coins, you would typically be doing it on your personal computer. Since your personal computer is connected to the internet, it has the potential to be infected by malware or spywares which could compromise your funds.

                                    <br />
                                    <br />
                                    Hardware wallets such as Trezor and Ledger are strongly encouraged in mitigating that risk. These are external devices that look like USB sticks. A hardware wallet secures your private key that holds your Bitcoin into an external device outside of your personal computer. When you intend to transact, you would connect the hardware wallet into your personal computer, and all the key signing in order to transact would be done in the hardware itself outside of your computer.
                                    <br />
                                    <br />
                                    However, if you physically lose your hardware wallet without a key phrase backup, there is no other way of recovering your funds ever. As such when setting up your hardware wallet, always remember to keep a copy of the key phrase and put it somewhere safe from fire or flood.
                                </P1>
                                <Header1>
                                    What is Bitcoin Halving
                                </Header1>
                                <P1>
                                    Bitcoin Halving or sometimes also known as the Halvening, refers to the reduction of block reward to miners by half. This is part of its built-in monetary policy, in which after every approximately 4 years, the mining reward will be halved towards the limited capped supply of 21 million Bitcoin. Once 21 million of Bitcoin have been minted, there will no longer be new supply of it rewarded to miners, and miners are expected to earn revenue by way of transaction fees. In order to follow the real time of when the halving will take place, you can bookmark the CoinGecko's bitcoin halving page.
                                    <br />
                                    <br />
                                    This is seen as a significant event for couple of reasons. Firstly, traders may speculate on the possible scarcity of Bitcoin making way to high volatility. Secondly, as miners' rewards will be reduced, we may see some miners exiting the market as they could not sustain the lower profitability. This in turn may cause the hashing rate to reduce and mining pools may consolidate. Due to this, the bitcoin network may be a little unstable during the halving period.
                                </P1>
                                <br/>
                                FAQ
                            </div>}

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
                            {!readMore ? 'Read More' : 'Read Less'}
                        </TransparentBtn>
                    </div>

                </div>






                {/* 
===================== THE PRICE CONVERTER TAB GOES HERE======================  */}






                <Container variant={'h-[90%]'} theme={theme}>
                    <h3 className='font-semibold'>
                        {id.toUpperCase()} Converter
                    </h3>
                    <div className={`rounded-lg h-8 mt-2 w-full relative ${theme ? 'bg-slate-800' : 'bg-white'} `}>
                        <p className='inline-block w-[60px] pl-1 h-full border-r'>
                            {searchedCoin.symbol.toUpperCase()}
                        </p>
                        <input type="number" className='h-full pl-2 right-0 absolute bg-inherit  w-[60%] outline-none' />
                    </div>
                    <div className={`rounded-lg mt-2 relative  mt-8 h-8 xl:w-full ${theme ? 'bg-slate-800' : 'bg-white'} px-2`}>
                        <button onClick={() => { dispatch(toggleCurrency()); SCROLL_TO_TOP() }} className=' w-[60px] h-full  inline-block border-r'>
                            {currency}  <FaCaretDown className='inline-block' />
                        </button>
                        <input type="number" className={` bg-inherit right-0 absolute pl-2 inline-block h-full  w-[56%] outline-none`} />
                    </div>

                    <p className='mt-2'>
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


            <div className='grid grid-rows-2 w-full grid-cols-1 xl:grid-cols-2 gap-x-8 xl:gap-x-7'>

                {exchangeRate && <>
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
                            <p className={`font-semibold`}>
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

            <TrendingCoins data={data} />
        </>
    )
}

export default Overview