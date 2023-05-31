import { useSelector } from "react-redux"
const Symbol=()=>{
    const currency = useSelector(state=>state.currency.currency)

    switch (currency) {
        case 'USD':
            
          return '$';
        case 'JPY':
            
          return String.fromCharCode(165);
        case 'EUR':
            
            return String.fromCharCode(8364);
        case 'TWD':
            
            return String.fromCharCode(78);
        case 'CNY':
            
            return String.fromCharCode(165);
        case 'RUB':
            
            return String.fromCharCode(1088);
        case 'IDR':
            
         
            return String.fromCharCode(8377);
        case 'KRW':
            
         
            return String.fromCharCode(8361);
        default:
          return;
    }
}

export default Symbol