import {createSlice} from '@reduxjs/toolkit'
const CurrencySlice = createSlice({
    name:'currency',
    initialState:{
        value: false,
        
       
    },
    reducers:{
        toggleCurrency : (state=>{
            return{
                ...state,
                value : !state.value,
             
            }
        }),
        
        hideCurrency : (state=>{
            return{
                ...state,
                value : false
            }
        }),
        
       showCurrency : (state=>{
            return{
                ...state,
                value : true
            }
        }),
      
    }
})

const currencyReducer = CurrencySlice.reducer
export const { toggleCurrency,hideCurrency,showCurrency  } =CurrencySlice.actions
export default currencyReducer
