import { useEffect,useState } from "react"
import { getChartData } from "../../utils/api"
import { FaStar,FaChartLine,FaBars } from "react-icons/fa"
import { TransparentBtn } from "../../components/Buttons"
import Plot from 'react-plotly.js';
const PriceChart = ({currency,theme}) => {
    
    const [chartData,setChartData] = useState([])
    const xPrice= chartData.prices?.map(price=>price)
   
    const pricePoints1 =xPrice?.map(test=>test[0])
    const pricePoints2 =xPrice?.map(test=>test[1])
    
    const config =[
        {
        x: pricePoints1,
        y:pricePoints2,
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: 'green'},
        },

    ]
    const layout ={width: 800, 
        height: 720,
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        xaxis: { showgrid: false }, 

        }
        useEffect(()=>{
            getChartData('bitcoin',setChartData)
        },[])
  return (
    <>
           <div className='flex justify-between w-full'>
                        <h3>
                            Last updated 01:53PPM UTC, Currency in {currency}
                        </h3>
                        <button className='underline mr-16 float-right'>
                            <FaStar className='inline-block' /> Add to Watchlist
                        </button>
                    </div>

                    <div className='md:grid md:grid-cols-2 flex flex-col gap-y-3  grid-rows-2 grid-cols-1 md:grid-rows-2'>
                        <div className='flex  w-max rounded-lg'>
                            <TransparentBtn variant={''} theme={theme}>
                                Price
                            </TransparentBtn>
                            <TransparentBtn theme={theme}>
                                Market Cap
                            </TransparentBtn>
                            <TransparentBtn theme={theme}>
                                TradingView
                            </TransparentBtn>

                        </div>

                        <div className='flex w-max rounded-lg'>
                            <TransparentBtn variant={'rounded-l-md border-r-0'}>
                                24h
                            </TransparentBtn>
                            <TransparentBtn variant={'border-x-0'}>
                                7d
                            </TransparentBtn>
                            <TransparentBtn variant={'border-x-0'}>
                                14d
                            </TransparentBtn>
                            <TransparentBtn variant={'border-x-0'}>
                                30d
                            </TransparentBtn>
                            <TransparentBtn variant={'border-x-0'}>
                                90d
                            </TransparentBtn>
                            <TransparentBtn variant={'rounded-r-md border-l-0'}>
                                Max
                            </TransparentBtn>

                        </div>
                        <div></div>
                        <div className='flex w-full text-right h-full'>
                            <button className={`bg-blue-200 rounded-l-lg p-2`}>
                                <FaChartLine className='inline-block' />
                            </button>
                            <button className={`bg-blue-200 rounded-r-lg p-2`}>
                                <FaBars className='inline-block' />
                            </button>
                        </div>
                    </div>
                    <div className='w-full -translate-x-11 md:translate-x-0'>
                        <Plot
                            data={config}
                            layout={layout}
                        />
                    </div>
    </>
  )
}

export default PriceChart