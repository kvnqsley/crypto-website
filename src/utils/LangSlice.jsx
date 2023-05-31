import {createSlice} from '@reduxjs/toolkit'
const LangSlice = createSlice({
    name:'language',
    initialState:{
        value: false,
        currency: false
       
    },
    reducers:{
        toggleLanguages : (state=>{
            return{
                ...state,
                value : !state.value,
             
            }
        }),
        toggleSidebarLanguages : (state=>{
            return{
                ...state,
                value : !state.value
            }
        }),
        hideLanguages : (state=>{
            return{
                ...state,
                value : false
            }
        }),
        toggleCurrency : (state=>{
            return{
                ...state,
                currency :!state.currency
            }
            
        }),
       hideCurrency : (state=>{
            return{
                ...state,
                currency : false
            }
        }),
       showCurrency : (state=>{
            return{
                ...state,
                currency : true
            }
        }),
       showLanguages : (state=>{
            return{
                ...state,
                value : true
            }
        })
    }
})

const langReducer = LangSlice.reducer
export const { toggleLanguages,hideLanguages,showLanguages,toggleSidebarLanguages,toggleCurrency,hideCurrency,showCurrency  } =LangSlice.actions
export default langReducer
