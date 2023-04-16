import {useQuery} from '@tanstack/react-query'
const {isError,data,error,isLoading }=useQuery(['market value'],()=> axios.get(api).then(res=>{
    return res.data
     
     }) )
     const api = 'https://api.coingecko.com/api/v3/global'
     export  {isError,data,error,isLoading}