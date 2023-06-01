import Header from './components/Header'
import HomeContent from './components/HomeContent'
import Loading from '/src/utils/Loading'
import './App.css'
import './index.css'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import NFT from './pages/NFT'
import Root from './components/Root'
import ErrorPage from './pages/ErrorPag'
import Home from './pages/Home'
import AllCrypto from './pages/AllCryptocurrencies'
import CryptoEx from './components/CryptoEx'
import GetExchanges from './utils/getExchanges'


function App() {
  const theme = useSelector(state=>state.theme.mytheme)
  
  
 
  const [isActive,setIsActive] = useState(false)
const handleToggle=()=>{
setIsActive(prev=>!prev)
}
const savedState  =localStorage.getItem('main-page')

const [pages,setPages]= useState(savedState ? JSON.parse(savedState) : {
    coins:true,
    newcoins:false,
    category:false,
    portfolio:false,
  })


  useEffect(()=>{

    const root = document.getElementById('root')

    const setLight=()=>{
    root.classList.remove('bg-black')
    root.classList.add('bg-sky-700')
  }
    const setDark=()=>{
    root.classList.add('bg-black')
    root.classList.remove('bg-sky-700')
  }
    {theme ? setDark() : setLight()}
  

    
    
    
  },[theme])










const router = createBrowserRouter([
  {
    element:
    <Home
    theme={theme}
    isActive={isActive}
    handleToggle={handleToggle}
    pages={pages}
    setPages={setPages}
    />  ,  
path:'/',
children:[

  {
    element:<HomeContent
    theme={theme}
    pages={pages}
    setPages={setPages}
    />,
 index:true
  },
  {
    element:<AllCrypto 
    theme={theme}/>,
    path:'/all-cryptocurrencies'
  },
  {
    element:<CryptoEx
    theme={theme}/>,
    loader:GetExchanges,
    path:'/exchanges'
  },
  {
    element:<ErrorPage/>,
    path:'*'

  }
],

  },
 
])
  return <>
<RouterProvider  router={router} />

  </>
  
}

export default App
