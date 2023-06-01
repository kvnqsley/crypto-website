import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const getDerivatives =()=>{

    

    const{data} =useQuery(['derivatives'],()=>axios.get(api).then(res=> res.data))
  
    const api ='https://api.coingecko.com/api/v3/derivatives/exchanges'
    return data ? data :   null
}
export default getDerivatives