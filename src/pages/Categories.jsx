import {useCallback, useEffect,useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { FaStar,FaSpinner, FaChevronDown } from "react-icons/fa"



export default function Categories() {
 const  [categoryData,setCategory]= useState([])

const api = 'https://api.coingecko.com/api/v3/coins/categories'

const {isError,data,error,isLoading }=useQuery(['categories'],()=> axios.get(api).then(res=>{
  return res.data
        
        }).then(setCategory(data)).catch(
            err=>console.warn(err)
        ) )

        const shuffleData=()=>{
          const sortedData= data.sort(()=>Math.random() - 0.5)
          setCategory(sortedData)
       
        }


    
    return<>
    <section className="mt-32 ">
    <h3 className="font-semibold text-xl  mt-2">
    Top Crypto Categories By Market Cap
    </h3>

    <p className='text-sm mt-4'>
    View the largest cryptocurrency categories based on market capitalization. The top categories are Layer 1 (L1), Smart Contract Platform, and Stablecategorys. Compared to the previous day, the market cap of Layer 1 (L1) has decreased by -0.1% while Smart Contract Platform has decreased by -0.2%.
    </p>
    <p className="mt-8 text-sm">
    Click on a cryptocurrency category to view cryptocurrencies listed within the category and their price performance. Note: Some cryptocurrencies may overlap across multiple categories.
    </p>

   <div className='overflow-x-scroll no-scrollbar w-full'>
   <table  className=" w-screen  mt-10">
       <thead className='w-full text-left '>
          <tr >
             <th className='table-fixed p-6'>#</th>
             <th className='p-6 group'>Category  <FaChevronDown  onClick={shuffleData} className='sm:inline-block opacity-20 group-hover:opacity-100 ease-in-out font-extralight text-xs group-hover:text-black text-neutral-800 hidden cursor-pointer'/></th>
             <th className='p-6 '>Top Gainers</th>
             <th className='p-6'>Market Capitalization</th>
             <th className='p-6'>24h Volume</th>
          </tr>
       </thead>
       <tbody >
      {categoryData ? categoryData.map(category=><tr key={category.id} className={`h-16 border-neutral-700 border-y  overflow-x-scroll w-full  `}>
 
 
 <td className='  md:w-32 w-32 h-8  text-left  ' >
 <h3 className=" w-full   ">{categoryData.indexOf(category) + 1}</h3>
 </td>
         <td>
            <h3 className='font-semibold'>
               {category.name}
            </h3>

         </td>
            
            <td  className='md:px-9 px-2 md:pl-4  text-left  '      >
          
             <img src={category.top_3_coins[0]} className="w-6 h-6 ml-2 inline-block "  alt="coin image" /> 
             <img src={category.top_3_coins[1]} className="w-6 h-6 ml-2 inline-block "  alt="coin image" /> 
             <img src={category.top_3_coins[2]} className="w-6 h-6 md:ml-2 inline-block "  alt="coin image" /> 
            
            
             
            </td>
          
            <td className='md:px-9 px-2  text-left  '>
                
             <h3 className="w-16">${category.market_cap?.toLocaleString()}</h3>
            </td>
 
            <td className='md:px-9 px-2  text-left  '>
             <h3 className="">${category.volume_24h?.toLocaleString()}</h3>
 
            </td>

           
             
 
 </tr>) :  
 <tr className=' w-full md:text-center'>
 <td className='w-full  ' colSpan={5}>Loading <FaSpinner className="inline-block  animate-spin"/></td>

     </tr> 
 }
       </tbody>
    </table>
   </div>
    </section>

    </>
}