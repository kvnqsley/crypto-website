

import { FaStar, FaSpinner, FaChevronDown } from "react-icons/fa"
import { useState } from "react";
import { Shufflebtn } from "./Buttons";
import { Link } from "react-router-dom";




const CoinTable = ({ data, pageNumber, shuffleData, theme, openFavourite }) => {

    const [col, setCol] = useState({
        firstCol: false,
        secondCol: false,
        thirdCol: false,
        fourthCol: false,
        fifthCol: false,
        sixthCol: false,
        lastCol: false,
    })

    const clickTable = (col) => {
        setCol((state) => ({
            ...Object.keys(state).reduce((acc, key) => {
                acc[key] = key === col;
                return acc;
            }, {}),
        }));
    }


    return <>

        <div className=" w-full close    flex ">

            <table className="table-fixed  ">


                {!data?.market.length ? <tbody className="text-center h-screen col-">
                    <tr className='text-left md:text-center'>
                        <td colSpan={9}>Loading <FaSpinner className="inline-block animate-spin" /></td>

                    </tr>
                </tbody> : <>
                    <thead >
                        <tr className={`${theme ? 'bg-neutral-800' : ''}`} >

                            <th className='font-semibold  md:w-3 z-20 sm:w-10 px-6 py-4 '>
                                <h3 className=" md:w-3 sm:w-4  ">
                                    #
                                </h3>
                            </th>

                            <th className='font-semibold  text-right py-4 px-6 s '>
                                <h3 className=" md:w-16 sm:w-24 group  ">
                                    Coin <Shufflebtn
                                        theme={theme}
                                        shuffleData={shuffleData} />
                                </h3>
                            </th>
                            <th className='font-semibold py-4 text-right px-6 s '>

                            </th>



                        </tr>
                    </thead>
                    <tbody className="h-screen  overflow-hidden ">


                        {data.market.slice(0, 100).map(coin => <tr key={coin.market_cap_rank} className={`${pageNumber.page1 ? '' : 'hidden'}  mb-4 -t w-full closestEl  gap-x-8`}>


                            <td className='  md:w-32 w-32 h-14   text-left  ' >
                                <h3 className=" w-full   "><FaStar onClick={(e) => openFavourite(e)} className={`inline-block favourite mr-2   cursor-pointer   outline-green-100`} />{coin.market_cap_rank}</h3>
                            </td>

                            <td  className=' px-2 md:pl-4 ml-8  text-left  '      >

                              <Link className=" md:w-max md:block inline-block w-24 " to={`/${coin.id}` }>
                              <img src={coin.image} className="w-4 h-4 inline-block " alt="" /> {coin.name}

<p className="uppercase  md:inline-block md:ml-2 ml-5   text-md font-thin m ">{coin.symbol}</p>
                              </Link>
                                <h3 > 
                                </h3>
                            </td>

                            <td>
                                <p className=" mr-4 px-2 py-1 rounded-lg bg-green-700 cursor-pointer opacity-0 ease-in delay-300  duration-300 text-sm  text-teal-100">Buy</p>
                            </td>






                        </tr>)}
                        {data.market.slice(100, 200).map(coin => <tr key={coin.market_cap_rank} className={`${pageNumber.page2 ? '' : 'hidden'}  mb-4 -t w-full closestEl  gap-x-8`}>


                            <td className='  md:w-32 w-32 h-14   text-left  ' >
                                <h3 className=" w-full   "><FaStar onClick={(e) => openFavourite(e)} className={`inline-block favourite mr-2   cursor-pointer   outline-green-100`} />{coin.market_cap_rank}</h3>
                            </td>

                            <td  className=' px-2 md:pl-4 ml-8  text-left  '      >

                                <h3 className=" md:w-max md:block inline-block w-24 ">
                                    <img src={coin.image} className="w-10 h-4 inline-block " alt="" /> {coin.name}

                                    <p className="uppercase  md:inline-block md:ml-2 ml-5   text-md font-thin m ">{coin.symbol}</p>
                                </h3>
                            </td>
                            <td>
                                <p className=" mr-4 px-2 py-1 rounded-lg bg-green-700 cursor-pointer opacity-0 ease-in delay-300  duration-300 text-sm  text-teal-100">Buy</p>
                            </td>







                        </tr>)}
                        {data.market.slice(200, 250).map(coin => <tr key={coin.market_cap_rank} className={`${pageNumber.page3 ? '' : 'hidden'}  mb-4 -t w-full closestEl  gap-x-8`}>


                            <td className='  md:w-32 w-32 h-14   text-left  ' >
                                <h3 className=" w-full   "><FaStar onClick={(e) => openFavourite(e)} className={`inline-block favourite mr-2   cursor-pointer   outline-green-100`} />{coin.market_cap_rank}</h3>
                            </td>

                            <td   className=' px-2 md:pl-4 ml-8  text-left  '      >

                                <h3 className=" md:w-max md:block inline-block w-24 ">  <img src={coin.image} className="w-4 h-4 inline-block " alt="" /> {coin.name}

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

            <div className="overflow-x-scroll no-scrollbar   h-full">

                <table className='table-fixed   '>

                    {!data?.market.length ? <tbody className="text-center h-screen col-">
                        <tr className='text-left md:text-center'>
                            <td colSpan={9}>Loading <FaSpinner className="inline-block animate-spin" /></td>

                        </tr>
                    </tbody> : <>
                        <thead className="">
                            <tr className={` ${theme ? 'bg-neutral-800' : ''}`}>
                                <th onClick={() => clickTable('firstCol')} className={`font-semibold ${!theme ? (col.firstCol ? 'bg-sky-800' : '') : (col.firstCol ? 'bg-stone-800' : '')}  px-6  sm:py-0`}>
                                    <h3 className=" md:w-16 sm:w-4  ">
                                        Price
                                    </h3>
                                </th>

                                <th onClick={() => clickTable('secondCol')} className={`  ${!theme ? (col.secondCol ? 'bg-sky-800' : '') : (col.secondCol ? 'bg-stone-800' : '')}  text-center pl-1 sm:py-0   font-semibold  `}>

                                    <h3 className=" md:w-16 sm:w-4  ">
                                        1h
                                    </h3>
                                </th>

                                <th onClick={() => clickTable('thirdCol')} className={`  ${!theme ? (col.thirdCol ? 'bg-sky-800' : '') : (col.thirdCol ? 'bg-stone-800' : '')} font-semibold sm:py-0 `}>
                                    24h
                                </th>
                                <th onClick={() => clickTable('fourthCol')} className={`   ${!theme ? (col.fourthCol ? 'bg-sky-800' : '') : (col.fourthCol ? 'bg-stone-800' : '')}  t  font-semibold px-6 md:py-4 sm:py-0 `}>
                                    7d
                                </th>
                                <th onClick={() => clickTable('fifthCol')} className={`   ${!theme ? (col.fifthCol ? 'bg-sky-800' : '') : (col.fifthCol ? 'bg-stone-800' : '')}  font-semibold text-left   sm:py-0   `}>
                                    24h Volume
                                </th>
                                <th onClick={() => clickTable('sixthCol')} className={`px-4  ${!theme ? (col.sixthCol ? 'bg-sky-800' : '') : (col.sixthCol ? 'bg-stone-800' : '')} font-semibold  text-left sm:py-0  `}>
                                    MKT Cap
                                </th>
                                <th onClick={() => clickTable('lastCol')} className={`  ${!theme ? (col.lastCol ? 'bg-sky-800' : '') : (col.lastCol ? 'bg-stone-800' : '')}  text-left  px-4     }      text-left  font-semibold  `}>
                                    Last 7 days
                                </th>

                            </tr>
                        </thead>
                        <tbody className="h-screen  overflow-hidden ">


                            {data.market.slice(0, 100).map(coin => <tr key={coin.market_cap_rank} className={`${pageNumber.page1 ? '' : 'hidden'}  mb-4 -t w-full closestEl  gap-x-8`}>


                                <td className={`p-4 pointer   text-left  ${!theme ? (col.firstCol ? 'bg-sky-800' : '') : (col.firstCol ? 'bg-stone-800' : '')}`}>
                                    <h3 className="w-16">${coin.current_price.toLocaleString()}</h3>
                                </td>
                                <td className={`p-4 text-left  ${!theme ? (col.secondCol ? 'bg-sky-800' : '') : (col.secondCol ? 'bg-stone-800' : '')}`}>
                                    <h3 className=" ">-</h3>
                                </td>
                                <td className={`p-4   ${!theme ? (col.thirdCol ? 'bg-sky-800' : '') : (col.thirdCol ? 'bg-stone-800' : '')}  text-left `}>

                                    <h3 className={`w-full  md:block ${coin.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'}`}>{coin.price_change_percentage_24h?.toFixed(1)
                                    }%</h3>

                                </td>
                                <td className={`p-4       ${!theme ? (col.fourthCol ? 'bg-sky-800' : '') : (col.fourthCol ? 'bg-stone-800' : '')}   text-left `}>
                                    <h3 className=" md:block">-</h3>
                                </td>
                                <td className={`p-4    ${!theme ? (col.fifthCol ? 'bg-sky-800' : '') : (col.fifthCol ? 'bg-stone-800' : '')}    text-left `}>
                                    <h3 className=" md:block">${coin.total_volume.toLocaleString()}</h3>
                                </td>
                                <td className={`p-4    ${!theme ? (col.sixthCol ? 'bg-sky-800' : '') : (col.sixthCol ? 'bg-stone-800' : '')}  text-left   `}>
                                    <h3 className=" md:block">${coin.market_cap.toLocaleString()}</h3>
                                </td>
                                <td className={`md:px-4 px-2 p-4   ${!theme ? (col.lastCol ? 'bg-sky-800' : '') : (col.lastCol ? 'bg-stone-800' : '')}    text-left`}>
                                    <div className=""><img className="w-full h-full" src={`https://www.coingecko.com/coins/${coin.market_cap_rank}}/sparkline.svg`} alt="photo" /></div>

                                </td>









                            </tr>)}
                            {data.market.slice(100, 200).map(coin => <tr key={coin.market_cap_rank} className={`${pageNumber.page2 ? '' : 'hidden'}   mb-4 -t w-full closestEl  gap-x-8`}>


                                <td className='p-4   text-left  '>
                                    <h3 className="w-16">${coin.current_price.toLocaleString()}</h3>
                                </td>
                                <td className='p-4   text-left  '>
                                    <h3 className=" ">-</h3>
                                </td>
                                <td className='p-4   text-left  '>
                                    <h3 className={`w-3  md:block ${coin.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'}`}>{coin.price_change_percentage_24h?.toFixed(1)
                                    }%</h3>
                                </td>
                                <td className='p-4   text-left  '>
                                    <h3 className=" md:block">-</h3>
                                </td>
                                <td className='p-4   text-left  '>
                                    <h3 className=" md:block">${coin.total_volume.toLocaleString()}</h3>
                                </td>
                                <td className='p-4   text-left  '>
                                    <h3 className=" md:block">${coin.market_cap.toLocaleString()}</h3>
                                </td>
                                <td className='md:px-4 px-2  text-left  '>
                                    <div className=""><img className="w-16 h-16" src={`https://www.coingecko.com/coins/${coin.market_cap_rank}}/sparkline.svg`} alt="photo" /></div>

                                </td>









                            </tr>)}
                            {data.market.slice(200, 250).map(coin => <tr key={coin.market_cap_rank} className={`${pageNumber.page3 ? '' : 'hidden'}  mb-4 -t w-full closestEl  gap-x-8`}>


                                <td className='p-4   text-left  '>
                                    <h3 className="w-16">${coin.current_price.toLocaleString()}</h3>
                                </td>
                                <td className='p-4   text-left  '>
                                    <h3 className=" ">-</h3>
                                </td>
                                <td className='p-4   text-left  '>
                                    <h3 className={`w-3  md:block ${coin.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'}`}>{coin.price_change_percentage_24h?.toFixed(1)
                                    }%</h3>
                                </td>
                                <td className='p-4   text-left  '>
                                    <h3 className=" md:block">-</h3>
                                </td>
                                <td className='p-4   text-left  '>
                                    <h3 className=" md:block">${coin.total_volume.toLocaleString()}</h3>
                                </td>
                                <td className='p-4   text-left  '>
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