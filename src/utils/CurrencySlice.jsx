import {createSlice} from '@reduxjs/toolkit'


const CurrencySlice = createSlice({
    name:'currency',
    initialState:{
        value: false,
        currency:'USD'
       
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
        setCurrency:(state,action)=>{
            return {
                ...state,
            currency:action.payload
            }
        }
      
    }
})

const currencyReducer = CurrencySlice.reducer
export const { toggleCurrency,hideCurrency,showCurrency,setCurrency  } =CurrencySlice.actions
export default currencyReducer
