import {useQuery} from '@tanstack/react-query'
import {useEffect,useState} from 'react'


 const api=()=>{
    const api1 = 'https://api.coingecko.com/api/v3/global'
    const api2='https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=%201h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y&locale=en'
    const api3 = 'https://api.coingecko.com/api/v3/search/trending'
    const [trending,setTrending] = useState({
        coins: [],
        exchanges:[],
        stat:false,
        trend2:true
     })
   
     const [data,setData] = useState({
        market: [],
        header: []
     });

     const [showStats,setStats] = useState({
        statsActive : false,
        statsData : false
     })
    
    const getTrendingCoins =()=>{
        axios.get(api3).then(res=> setTrending(prev=>{
           return {
              coins:res.data.coins,
            exchanges:res.data.exchanges
           }
        })
           )
     }
     const getHeaderData=()=>{
        axios.get(api1).then(
           res=>{
         
              setData((prev=>{
                 return {
                    ...prev,
                    header: res.data
                 }
              }))
              if (res.status === 200) {
                 setStats(stats=>{
                    return {
                       ...stats,
                       statsData : true
                    }
                 })
              }
           }
          
        )
        
     }
     const getMarketData=()=>{
        axios.get(api2).then(
           res=>{
         
              setData((prev=>{
                 return {
                    ...prev,
                    market: res.data
                 }
              }))
         
           }
       
        )
       
     }
    useEffect(()=>{
    
        getMarketData();
     getHeaderData()
     getTrendingCoins()
     
        },[])
     
}
