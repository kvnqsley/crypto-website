import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const GetExchanges =()=>{

    const api ='https://api.coingecko.com/api/v3/exchanges?per_page=250'

    const{data} =useQuery(['exchanges'],()=>axios.get(api).then(res=> res.data))
  
  return  data ? data :   null
}
export default GetExchanges