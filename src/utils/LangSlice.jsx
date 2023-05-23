<<<<<<< HEAD
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
=======
import {createSlice} from '@reduxjs/toolkit'
const LangSlice = createSlice({
    name:'language',
    initialState:{
        value: false
    },
    reducers:{
        togggleLanguages : (state=>{
            return{
                ...state,
                value : !state.value
            }
        })
    }
})

const langReducer = LangSlice.reducer
export const { togggleLanguages} =LangSlice.actions
export default langReducer
>>>>>>> ae80c4554c9a6c9eb80c7f5e02dfd1623d5a376f
