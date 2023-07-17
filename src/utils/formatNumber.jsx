
import {FaInfinity } from "react-icons/fa"
const formatNumber=(number)=>{
    if ((number/1e13) >= 1) {
        let output =`$${(number/1e15).toPrecision(3) } Quadrillion`
        return output
    }
    else if ((number/1e9) >= 1){
        let output =`$${(number/1e9).toPrecision(3) } Billion`
        return output
    
    }
    else if ((number/1e6) >= 1){
        let output =`$${(number/1e6).toPrecision(3) } Million`
        return output
    
    }
    else if ((number/1e3) >= 1){
        let output =`$${(number/1e3).toPrecision(3) } Thousand`
        return output
    
    }
    else{
       
        return <>
         <FaInfinity className="inline-block text-xm font-light text-right"/>
        </>

    }

}
export default formatNumber