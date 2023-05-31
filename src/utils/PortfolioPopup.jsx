import { FaStar,FaCheck,FaPlus } from "react-icons/fa"

  const PortfolioPopup=({setAddPortfolio,
addToPortfolio,handlePortfolio,
theme,
removeCoin})=>{


    return   <>
        <div  className={`${theme ? 'bg-neutral-900' : 'bg-sky-800'} portfolio-tab  p-4 a shadow-lg shadow-neutral-700 left-20 top-0 absolute rounded w-[90vw] md:w-[20%] cursor-pointer`}>
           <h3 onClick={()=>   setAddPortfolio(prev=>{
    return    {
           ...prev,
        addPortfolio: false
        }
     })} className="py-4 hover:bg-sky-900 ease-in">
             My Portfolio {!addToPortfolio.coinAdded ? <FaPlus onClick={handlePortfolio} className="inline-block float-right" /> :  <FaCheck onClick={removeCoin}  className="inline-block text-green-600 float-right" />  } 
           </h3>
           <h3 onClick={()=>      setAddPortfolio(prev=>{
    return    {
           ...prev,
        addPortfolio:false
        }
     })} className="py-4 hover:bg-sky-900 ease-in border-t border-neutral-400">
           <FaPlus className="inline-block float-left" /> Add To New Portfolio
           </h3>
        </div>
        </>
}

export default PortfolioPopup