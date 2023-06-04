

import { FaStar,FaSpinner,FaChevronDown } from "react-icons/fa"
import { Shufflebtn } from "./Buttons";




const CoinTable =  ({data,pageNumber,shuffleData,theme,openFavourite}) => {
   

    return <>

<div className=" w-full close    flex ">
    
<table className="table-fixed  ">


{!data?.market.length ? <tbody className="text-center h-screen col-">
 <tr className='text-left md:text-center'>
 <td colSpan={9}>Loading <FaSpinner className="inline-block animate-spin"/></td>

     </tr> 
 </tbody>: <>
 <thead >
    <tr >

    <th className='font-semibold  md:w-3 z-20 sm:w-10 p-6 '>
    <h3 className=" md:w-3 sm:w-4  "> 
#
    </h3>
                </th>

<th  className='font-semibold text-right p-6 s '>
        <h3 className=" md:w-16 sm:w-24 group  "> 
        Coin <Shufflebtn
        theme={theme}
         shuffleData= {shuffleData}/>
            </h3>
                </th>
                
           
            
    </tr>
</thead>
  <tbody className="h-screen  overflow-hidden ">
  
 
  {data.market.slice(0,100).map(coin=><tr key={coin.market_cap_rank} className={`${pageNumber.page1 ? '' : 'hidden'}  mb-4 -t w-full closestEl  gap-x-8`}>
  
  
  <td className='  md:w-32 w-32 h-14   text-left  ' >
  <h3 className=" w-full   "><FaStar onClick={(e)=>openFavourite(e)}   className={`inline-block favourite mr-2   cursor-pointer   outline-green-100`}/>{coin.market_cap_rank}</h3>
  </td>
             
             <td  className=' px-2 md:pl-4 ml-8  text-left  '      >
           
             <h3 className=" md:w-max md:block inline-block w-24 ">  <img src={coin.image} className="w-4 h-4 inline-block "  alt="" /> {coin.name}
             
              <p className="uppercase  md:inline-block md:ml-2 ml-5   text-md font-thin m ">{coin.symbol}</p>
              </h3>
             </td>
       
             <td>
                <p className=" mr-4 px-2 py-1 rounded-lg bg-green-700 cursor-pointer opacity-0 ease-in delay-300  duration-300 text-sm  text-teal-100">Buy</p>
            </td>
   
  
  
  
         
  
  </tr>)} 
  {data.market.slice(100,200).map(coin=><tr key={coin.market_cap_rank} className={`${pageNumber.page2 ? '' : 'hidden'}  mb-4 -t w-full closestEl  gap-x-8`}>
  
  
  <td className='  md:w-32 w-32 h-14   text-left  ' >
  <h3 className=" w-full   "><FaStar onClick={(e)=>openFavourite(e)}   className={`inline-block favourite mr-2   cursor-pointer   outline-green-100`}/>{coin.market_cap_rank}</h3>
  </td>
             
             <td  className=' px-2 md:pl-4 ml-8  text-left  '      >
           
             <h3 className=" md:w-max md:block inline-block w-24 ">  <img src={coin.image} className="w-4 h-4 inline-block "  alt="" /> {coin.name}
             
              <p className="uppercase  md:inline-block md:ml-2 ml-5   text-md font-thin m ">{coin.symbol}</p>
              </h3>
             </td>
             <td>
                <p className=" mr-4 px-2 py-1 rounded-lg bg-green-700 cursor-pointer opacity-0 ease-in delay-300  duration-300 text-sm  text-teal-100">Buy</p>
            </td>
  
   
  
  
  
         
  
  </tr>)} 
  {data.market.slice(200,250).map(coin=><tr key={coin.market_cap_rank} className={`${pageNumber.page3 ? '' : 'hidden'}  mb-4 -t w-full closestEl  gap-x-8`}>
  
  
  <td className='  md:w-32 w-32 h-14   text-left  ' >
  <h3 className=" w-full   "><FaStar onClick={(e)=>openFavourite(e)}   className={`inline-block favourite mr-2   cursor-pointer   outline-green-100`}/>{coin.market_cap_rank}</h3>
  </td>
             
             <td  className=' px-2 md:pl-4 ml-8  text-left  '      >
           
             <h3 className=" md:w-max md:block inline-block w-24 ">  <img src={coin.image} className="w-4 h-4 inline-block "  alt="" /> {coin.name}
             
              <p className="uppercase  md:inline-block md:ml-2 ml-5   text-md font-thin m ">{coin.symbol}</p>
              </h3>
             </td>
       
             <td>
                <p className=" mr-4 px-2 py-1 rounded-lg bg-green-700 cursor-pointer opacity-0 ease-in delay-300  duration-300 text-sm  text-teal-100">Buy</p>
            </td>
   
  
  
  
         
  
  </tr>)}  
  </tbody>
 
  
             </>
}

      </table>

       <div className="overflow-x-scroll no-scrollbar   md:ml-24 h-full">

       <table className='table-fixed   '>

        {!data?.market.length ? <tbody className="text-center h-screen col-">
 <tr className='text-left md:text-center'>
 <td colSpan={9}>Loading <FaSpinner className="inline-block animate-spin"/></td>

     </tr> 
 </tbody> : <>
 <thead className="">
    <tr className=" ">
   <th className='font-semibold px-6  py-4 '>
                                <h3 className=" md:w-16 sm:w-4  "> 
               Price
                    </h3>
                </th>

                <th className='font-semibold px-6 py-4 '>
                <h3 className=" md:w-16 sm:w-4  "> 
                    1h
                </h3>
                </th>

                <th className='font-semibold px-6 py-4'>
                   24h
                </th>
                <th className='font-semibold px-6 py-4 '>
                   7d
                </th>
                <th className='font-semibold px-6 py-4 '>
               24h Volume
                </th>
                <th className='font-semibold  px-6 py-4'>
              MKT Cap
                </th>
                <th className='font-semibold  '>
                Last 7 days
                </th>
            
    </tr>
</thead>
  <tbody className="h-screen  overflow-hidden ">
  
 
  {data.market.slice(0,100).map(coin=><tr key={coin.market_cap_rank} className={`${pageNumber.page1 ? '' : 'hidden'}  mb-4 -t w-full closestEl  gap-x-8`}>
  
 
  <td  className='p-4   text-left  '>
                 <h3 className="w-16">${coin.current_price.toLocaleString()}</h3>
            </td>
         <td  className='p-4   text-left  '>
         <h3 className=" ">-</h3>
         </td>
     <td  className='p-4   text-left  '> 
     <h3 className={`w-3  md:block ${coin.price_change_percentage_24h<0 ? 'text-red-600':'text-green-600'}`}>{coin.price_change_percentage_24h?.toFixed(1)
}%</h3>
     </td>
            <td  className='p-4   text-left  '>
            <h3  className=" md:block">-</h3>
            </td>
           <td  className='p-4   text-left  '>
           <h3 className=" md:block">${coin.total_volume.toLocaleString()}</h3>
           </td>
          <td  className='p-4   text-left  '>
          <h3 className=" md:block">${coin.market_cap.toLocaleString()}</h3>
          </td>
          <td className='md:px-4 px-2  text-left  '>
            <div className=""><img className="w-16 h-16" src={`https://www.coingecko.com/coins/${coin.market_cap_rank}}/sparkline.svg`} alt="photo" /></div>
             
            </td>
           
           
  
   
  
  
  
         
  
  </tr>)} 
  {data.market.slice(100,200).map(coin=><tr key={coin.market_cap_rank} className={`${pageNumber.page2 ? '' : 'hidden'}   mb-4 -t w-full closestEl  gap-x-8`}>
  
  
  <td  className='p-4   text-left  '>
                 <h3 className="w-16">${coin.current_price.toLocaleString()}</h3>
            </td>
         <td  className='p-4   text-left  '>
         <h3 className=" ">-</h3>
         </td>
     <td  className='p-4   text-left  '> 
     <h3 className={`w-3  md:block ${coin.price_change_percentage_24h<0 ? 'text-red-600':'text-green-600'}`}>{coin.price_change_percentage_24h?.toFixed(1)
}%</h3>
     </td>
            <td  className='p-4   text-left  '>
            <h3  className=" md:block">-</h3>
            </td>
           <td  className='p-4   text-left  '>
           <h3 className=" md:block">${coin.total_volume.toLocaleString()}</h3>
           </td>
          <td  className='p-4   text-left  '>
          <h3 className=" md:block">${coin.market_cap.toLocaleString()}</h3>
          </td>
          <td className='md:px-4 px-2  text-left  '>
            <div className=""><img className="w-16 h-16" src={`https://www.coingecko.com/coins/${coin.market_cap_rank}}/sparkline.svg`} alt="photo" /></div>
             
            </td>
           
           
  
   
  
  
  
         
  
  </tr>)} 
  {data.market.slice(200,250).map(coin=><tr key={coin.market_cap_rank} className={`${pageNumber.page3 ? '' : 'hidden'}  mb-4 -t w-full closestEl  gap-x-8`}>
  
 
  <td  className='p-4   text-left  '>
                 <h3 className="w-16">${coin.current_price.toLocaleString()}</h3>
            </td>
         <td  className='p-4   text-left  '>
         <h3 className=" ">-</h3>
         </td>
     <td  className='p-4   text-left  '> 
     <h3 className={`w-3  md:block ${coin.price_change_percentage_24h<0 ? 'text-red-600':'text-green-600'}`}>{coin.price_change_percentage_24h?.toFixed(1)
}%</h3>
     </td>
            <td  className='p-4   text-left  '>
            <h3  className=" md:block">-</h3>
            </td>
           <td  className='p-4   text-left  '>
           <h3 className=" md:block">${coin.total_volume.toLocaleString()}</h3>
           </td>
          <td  className='p-4   text-left  '>
          <h3 className=" md:block">${coin.market_cap.toLocaleString()}</h3>
          </td>
          <td className='md:px-4 px-2  text-left  '>
            <div className=""><img className="w-16 h-16" src={`https://www.coingecko.com/coins/${coin.market_cap_rank}}/sparkline.svg`} alt="photo" /></div>
             
            </td>
           
           
  
   
  
  
  
         
  
  </tr>)} 
  </tbody>
 
  
             </>
}
        </table>
       </div>
</div>
    </>
};

export default CoinTable