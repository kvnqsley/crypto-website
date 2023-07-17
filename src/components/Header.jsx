
import { FaMoon, FaCaretDown, FaQuestionCircle, FaSearch, FaLevelDownAlt, FaLevelUpAlt, FaSun, FaUser, FaHeart } from 'react-icons/fa'
import axios from 'axios'
import { useEffect, useReducer, useState, useRef, useId, useContext } from 'react'
import NavigateMenu from '../utils/navigation'
import CurrencyDropDown from './CurrencyDropDown'
import LanguagesDropDown from './LanguagesDropDown'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { openSidebar } from '../utils/Sidebarslice'
import { toggleLanguages, hideLanguages, showLanguages } from '../utils/LangSlice'
import { hideCurrency, setCurrency, showCurrency, toggleCurrency } from '../utils/CurrencySlice'
import { handleSignup, openLogin } from '../utils/AuthSlice'
import { handleTheme } from '../utils/themeSlice'
import SearchboxDropdown from './SearchBarDropdown'
import { useAuthState } from 'react-firebase-hooks/auth'
import currencySymbol from '../utils/currencySymbol'
import UpDowntrend from '../utils/UpDowntrend.jsx'
import useAuthenticationStatus from "../utils/hooks/useAuthenticationStatus"
import useSignOut from '../utils/hooks/useSignOut'


export default function Header({ setPages, banner,setBanner, theme }) {
  const authStatus = useAuthenticationStatus()
 const handleSignOut = useSignOut({setBanner})
  const dispatch = useDispatch()



  
  const [languageDDActive, setLanguagesDDActive] = useState(true)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const currencyRef = useRef('')
  const languageRef = useRef('')

  const currency = useSelector(state => state.currency.currency)


  const currencyId = useId()

  const lang = useId()


  const { isError, data, error, isLoading } = useQuery(['market value'], () => axios.get(api).then(res => {
    return res.data

  }).catch(
    err => console.warn(err)
  ))

  const api = import.meta.env.VITE_COINGECKO_HEADER_API



  const [dialogRef, setDialogRef] = useState()
  const showAsModal = () => {
    dialogRef?.current.showModal()

  }


  const [rootClicked, setRootClicked] = useState(false)
  const [currencyClicked, setcurrencyClicked] = useState(false)
  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 641)
    window.addEventListener('resize', () => {
      setIsSmallScreen(window.innerWidth < 641)

    })



    const root = document.getElementById('root')
    if (window.screen.width >= 900) {
      root.addEventListener('click', (e) => {
        try {


          if (!languageRef.current.contains(e.target)) {
            setRootClicked(true)
            rootClicked ? dispatch(hideLanguages()) : null


          };
          if (languageRef.current.contains(e.target)) {
            setRootClicked(false)
            rootClicked ? dispatch(showLanguages()) : null
          }
          if (currencyRef.current.contains(e.target)) {
            setRootClicked(false)
            rootClicked ? dispatch(showCurrency()) : null
          }
          if (!currencyRef.current.contains(e.target)) {
            setRootClicked(true)
            rootClicked ? dispatch(hideCurrency()) : null


          };
          if (e.target.textContent == 'USD') {
            setRootClicked(false)
            rootClicked ? dispatch(showCurrency()) : null
          }



          //               /* 
          //               I'll confirm if this is good practice
          //               */




        } catch (error) {
          console.log(error);
        }


      })

      return () => (root.removeEventListener('click', (e) => {
        try {


          if (!languageRef.current.contains(e.target)) {
            setRootClicked(true)
            rootClicked ? dispatch(hideLanguages()) : null


          };
          if (languageRef.current.contains(e.target)) {
            setRootClicked(false)
            rootClicked ? dispatch(showLanguages()) : null
          }
          if (!currencyRef.current.contains(e.target)) {
            setRootClicked(true)
            rootClicked ? dispatch(hideCurrency()) : null


          };
          if (currencyRef.current.contains(e.target)) {
            setRootClicked(false)
            rootClicked ? dispatch(showCurrency()) : null
          }



          //               /* 
          //               I'll confirm if this is good practice
          //               */




        } catch (error) {
          console.log(error);
        }
      }))
    }



  }, [rootClicked, currencyClicked])

  const symbol = currencySymbol()


















  return <>
    <header className={`${theme ? 'bg-black text-white' : 'bg-sky-700'} relative  sm:mx-16 mx-4 md:mx-auto   md:w-full `}>

      {isLoading ? <marquee behavior="" className='text-red-800' direction="">Real time data not availabile.
        <h1 className='text-red-800 inline ml-4'>Please Check your Network</h1>
      </marquee> : <ul className=' w-full  md:flex  justify-around'>
        <li className='w-full h-full' >
          <ul className='absolute sm:overflow-visible overflow-x-scroll  border-y md:border-none  py-2 z-10  w-full  flex mb-6 md:justify-start gap-x-6 top-32 md:relative sm:top-36 md:top-auto '>
            <li className='min-w-max md:w-auto  text-xs md:ml-0 ml-2'>Exchanges: <Link className=' hover:text-green-800 text-green-500' to={'/exchanges'}>{data?.data.markets}</Link>
            </li>
            <li className='min-w-max  md:w-auto text-xs'>Coins: <Link className='text-green-500 hover:text-green-800' to={'/'}>{data?.data.active_cryptocurrencies
            }</Link>
            </li>




            <li className='md:w-96  text-xs min-w-max'>Market Cap: <Link to={'/global-charts'} className=' text-blue-200'>{symbol}{data?.data.updated_at.toLocaleString()}
              <span className={`${data?.data.market_cap_change_percentage_24h_usd < 0 ? 'text-red-700' : 'text-green-400'} text-xs`} > {data?.data.market_cap_change_percentage_24h_usd.toFixed(1)}%<UpDowntrend value={data?.data.market_cap_change_percentage_24h_usd} />
              </span>
            </Link>

            </li>
          </ul>
        </li>
        <li>
          <ul className=' hidden md:flex  min-w-[10rem] gap-4 '>
            <li className='cursor-pointer' >
              <div id='langId' ref={languageRef}
                onClick={() => dispatch(toggleLanguages())} className='cursor-pointer h-full w-full'>EN<FaCaretDown className='inline ' />
                <LanguagesDropDown
                  theme={theme}
                  languageDDActive={languageDDActive}
                /></div>
            </li>
            <li ref={currencyRef} className='cursor-pointer'>

              <div id='currencyId'
                onClick={() => dispatch(toggleCurrency())}
                className='cursor-pointer  h-full w-full'>{currency} <FaCaretDown className='inline' /></div>
              <CurrencyDropDown />
            </li>
            <li
              onClick={() => dispatch(handleTheme())}
              className='cursor-pointer'>
              {
                !theme ? <FaMoon className='inline' /> : <FaSun className='inline text-white' />
              }
            </li>
          </ul>
        </li>

      </ul>}

      {/* =====================customized 
     ================== hamburger
     ======================   menu */}


      <div onClick={() => dispatch(openSidebar())} className='inline-block cursor-pointer px-2  w-18 md:hidden mt-4 ' >
        <div className={`${!theme ? 'bg-slate-900' : 'bg-neutral-700'}  w-6 mt-1 h-1 `}></div>
        <div className={`${!theme ? 'bg-slate-900' : 'bg-neutral-700'}  w-6 mt-1 h-1 `}></div>
        <div className={`${!theme ? 'bg-slate-900 ' : 'bg-neutral-700'}  w-6  mt-1 h-1 `}></div>
      </div>

      <div className=' inline md:hidden'>
       
      <img src='/d1azcfjq.png' className='rounded-full inline-block ml-4 h-10 mr-4 ' width={40} />
        <h4 className='inline text-xl '>CoinMamba</h4>
      </div>

      <div className='relative md:hidden'>

        <FaSearch className='inline-block top-[1rem] left-12 text-gray-50 absolute' />
        <SearchboxDropdown theme={theme} />
      </div>

      <nav className={`sticky z-40 hidden md:gap-4 md:flex min-w-full h-16 top-0 pt-3 border-t-2 border-b-2 border-t-slate-100`} >




      <img src='/d1azcfjq.png' className='rounded-full inline-block ml-4 h-10 mr-4 ' width={40} />
        <h4 className=' min-w-[15rem]'>CoinMamba</h4>
        <ul className='flex min-w-{10rem} gap-12  '>
          <li className='cursor-pointer group'><NavLink to={'nft'}>NFT</NavLink>
            <ul className={`border-sky-900 ${theme ? 'bg-black' : 'bg-sky-700 '} min-w-max border absolute t hidden ease-linear duration-100 group-hover:block  border-neutral-400 min-h-max `}>
              <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '>NFT Floor Price</li>
              <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" pb-4'>NFT Related Coins  <span className='text-teal-900 ml-4 bg-green-600 rounded-md text-xs pl-2 pr-1'>New </span> </li>
            </ul></li>
          <li className='cursor-pointer group'>EXCHANGE
            <ul className={`border-sky-900 ${theme ? 'bg-black' : 'bg-sky-700 '} min-w-max border absolute t hidden ease-linear duration-100 group-hover:block  border-neutral-400 min-h-max `}>
              <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '><Link to={'/exchanges'}>Crypto Exchanges</Link></li>
              <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" pb-4'><Link to={'/exchanges/derivatives'}>Derivatives</Link></li>
            </ul></li>
          <li className='cursor-pointer group'>CRYPTOCURRENCY
            <ul className={`border-sky-900 ${theme ? 'bg-black' : 'bg-sky-700 '} min-w-max border absolute t hidden ease-linear duration-100 group-hover:block  border-neutral-400 min-h-max `}>
              <li onClick={(e) => NavigateMenu(e, setPages)} className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '><Link to={'/'}>By Market Cap</Link></li>
              <li onClick={(e) => NavigateMenu(e, setPages)} className='mt-4  px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" border-neutral-400 border-b pb-4 '><Link to={'/'}>New Cryptocurrencies</Link></li>
              <li onClick={(e) => NavigateMenu(e, setPages)} className='mt-4  px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '><Link to={'/'}>Categories</Link><span className='text-teal-900 ml-4 bg-green-600 rounded-md text-xs pl-2 pr-1'>New </span></li>
              <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer"'>Watchlists</li>
              <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '>Gainers &amp; Losers</li>
              <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" border-neutral-400 pb-4 border-b'>High Volume</li>
              <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '><Link to={'/all-cryptocurrencies'}>All coins</Link></li>
              <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer"'>Compare Coins <span className='text-teal-900 ml-4 bg-green-600 rounded-md text-xs pl-2 pr-1'>New </span></li>
              <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer"'>Converter <span className='text-teal-900 ml-4 bg-green-600 rounded-md text-xs pl-2 pr-1'>New </span></li>
              <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" pb-4'>Global Chart</li>
            </ul>
          </li>
          <li className='cursor-pointer group'>PRODUCTS
            <ul className={`border-sky-900 ${theme ? 'bg-black' : 'bg-sky-700 '} min-w-max border absolute t hidden ease-linear duration-100 group-hover:block  border-neutral-400 min-h-max `}>
              <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '>MambaTerminal  <span className='text-teal-900 ml-4 bg-green-600 rounded-md text-xs pl-2 pr-1'>New </span></li>
              <li className='mt-4  px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer"  border-b pb-4 '>CoinMamba Research</li>
              <li className='mt-4  px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '>Coinmamba App</li>
              <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer"'>Crypto Portfolio</li>
              <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '>Crypto Api</li>
              <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" border-neutral-400 pb-4 border-b'>Crypto Widget</li>
              <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '>CoinMamba Store</li>
            </ul>
          </li>
          <li className='cursor-pointer group'> LEARN
            <ul className={`border-sky-900 ${theme ? 'bg-black' : 'bg-sky-700 '} min-w-max border absolute t hidden ease-linear duration-100 group-hover:block  border-neutral-400 min-h-max `}>
              <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '>All Crypto Articles</li>
              <li className='mt-4  px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer"   pb-4 '>Analysis</li>
              <li className='mt-4  px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer border-neutral-400 border-b '>Guides</li>
              <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer"'>Glossary</li>
              <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer border-neutral-400 border-b '>Methodology</li>
              <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer"  pb-4'>Videos</li>
              <li className='mt-4 px-4 " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" '>Podcasts</li>
              <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer"'>Newsletter</li>
              <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer" pb-4'>Research Report</li>
            </ul>
          </li>
        </ul>

        <ul className='flex relative gap-2 '>
{/* 
          HEADER COMPONENT TO RENDER ON USER SIGN IN------------------------------------  */}
          {
            authStatus ? <div className='group z-50'>
              <FaUser className={`${theme ? 'text-white' : 'text-black '}  inline-block mr-5 cursor-pointer group mt-1`} />
              <ul className={`border-sky-900 ${theme ? 'bg-black' : 'bg-sky-700 '} min-w-max border absolute t hidden ease-linear duration-100 group-hover:block  border-neutral-400 min-h-max `}>
                <li className='mt-4 px-4   mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer  '>Portfolio <span className='text-teal-900 ml-4 bg-green-600 rounded-md text-xs pl-2 pr-1'>New </span> </li>
                <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer " '>Price Alert</li>
                <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer " '>Login and Security</li>
                <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer " '> Subscription <FaHeart className='inline-block text-red-500' /> </li>
                <li className='mt-4 px-4  " mb-5 hover:bg-orange-100  hover:text-green-400 cursor-pointer " '><button onClick={handleSignOut}>Sign Out</button></li>
              </ul>

            </div> :
              <>
                <li  ><button onClick={() => { dispatch(openLogin()) }

                } className=''>LOGIN</button></li>
                <li className='cursor-pointer w-max h-6 bg-blue-600 hover:bg-green-500 rounded-lg text-center px-2  '> <button onClick={
                  () => {
                    dispatch(handleSignup());
                    showAsModal()

                  }
                }>
                  SIGN UP
                </button> </li>
                <li className='cursor-pointer'><FaQuestionCircle className='inline-block  mr-2' />
                </li>
              </>

          }


          <SearchboxDropdown />
        </ul>


      </nav>
      <div className={`${banner.active ? 'block' : 'hidden'} text-center absolute md:left-16 left-8 md:top-24  r bg-neutral-200 bg-opacity-20 mt-8 rounded font-semibold h-10 text-teal-700 w-[90%]    md:w-[calc(93%)] `}>{banner.message}</div>

    </header>
    <Outlet />
  </>
}
