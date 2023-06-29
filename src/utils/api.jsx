import axios from "axios"

   const api1 = import.meta.env.VITE_COINGECKO_HEADER_API;
   const api2 = import.meta.env.VITE_COINGECKO_MARKET_API;
   const api3 = import.meta.env.VITE_COINGECKO_TRENDING_API;
   const api4 = import.meta.env.VITE_COINGECKO_CATEGORIES_API;
   const api5 = import.meta.env.VITE_COINGECKO_EXCHANGES_API;
   const api7 = import.meta.env.VITE_COINGECKO_ALLCOINS_API;
   const api8 = import.meta.env.VITE_COINGECKO_EXCHANGE_RATE_API;
  
   // const api6 =`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=max`



export const getHeaderData=(setData,setStats,)=>{
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
      
    ).catch(err=>console.log(err))
    
 }
 export const getMarketData=(setData,updateMarketData)=>{
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
    //.then(res =>dispatch(updateMarketData(res.data))).catch(err=>console.log(err))
   //.then(()=>SAVE_TO_STORAGE())
 }
export const getTrendingCoins =(setTrending)=>{
    axios.get(api3).then(res=> setTrending(prev=>{
       return {
          coins:res.data.coins,
        exchanges:res.data.exchanges
       }
    })
       ).catch(err=>console.log(err))
 }
 export const getCategories=(setCategory,data)=> axios.get(api4).then(res=>{
     setCategory(res.data)
 })
 .catch(
              err=>console.warn(err)
          )
export const getCryptoExchanges=(setData)=>axios.get(api5).then(res=> setData(res.data))
export const getChartData=(coin,setChartData)=>axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=max`)
.then(res=> setChartData(res.data))
export const getGlobalData=(setAllCoins)=>axios.get(api7)
.then(res=> setAllCoins(res.data))

export const getBtcToCurrencyExchangeRate=(setExchangeRate)=>axios.get(api8)
.then(res=> setExchangeRate(res.data))