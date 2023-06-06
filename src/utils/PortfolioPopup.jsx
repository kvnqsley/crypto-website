import { FaStar,FaCheck,FaPlus } from "react-icons/fa"

  const PortfolioPopup=({setAddPortfolio,
addToPortfolio,handlePortfolio,
theme,
removeCoin})=>{


    return   <>
        <div  className={`${theme ? 'bg-neutral-900' : 'bg-sky-800'} portfolio-tab  p-4 a shadow-lg shadow-neutral-700 left-20 top-0 absolute rounded w-[50%] md:w-[20%] cursor-pointer`}>
           <button onClick={()=>   setAddPortfolio(prev=>{
    return    {
           ...prev,
        addPortfolio: false
        }
     })} className="py-4 w-full text-left  hover:bg-sky-900 ease-in">
             My Portfolio {!addToPortfolio.coinAdded ? <FaPlus onClick={handlePortfolio} className="inline-block float-right" /> :  <FaCheck onClick={removeCoin}  className="inline-block text-green-600 float-right" />  } 
           </button>
           <button onClick={()=>      setAddPortfolio(prev=>{
    return    {
           ...prev,
        addPortfolio:false
        }
     })} className="py-4 text-right hover:bg-sky-900 w-full ease-in border-t border-neutral-400">
           <FaPlus className="inline-block float-left" /> Add To New Portfolio
           </button>
        </div>
        </>
}

export default PortfolioPopup