import Header from './components/Header'
import HomeContent from './components/HomeContent'
import Loading from '/src/utils/Loading'
import './App.css'
import './index.css'
import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import NFT from './components/NFT'
import ErrorPage from './components/ErrorPag'

function App() {
  const [isActive,setIsActive] = useState(false)
const handleToggle=()=>{
setIsActive(prev=>!prev)
}
const router = createBrowserRouter([
  {
    element:<Header  isActive={isActive}
    handleToggle={handleToggle}/>,
path:'/',
children:[
  {
    element:<HomeContent/>,
    index:true,
      },
  {
    element:<NFT/>,
    path:'nft'
  },
  {
    element:<ErrorPage/>,
    path:'*'

  }
]
  }
])
  return <>
<RouterProvider  router={router} />

  </>
  
}

export default App
