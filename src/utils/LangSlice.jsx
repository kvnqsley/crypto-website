import {createSlice} from '@reduxjs/toolkit'
const LangSlice = createSlice({
    name:'language',
    initialState:{
        value: false,
        currency:false,
       
    },
    reducers:{
        togggleLanguages : (state=>{
            return{
                ...state,
                value : !state.value,
             
            }
        }),
        togggleSidebarLanguages : (state=>{
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
        })
    }
})

const langReducer = LangSlice.reducer
export const { togggleLanguages,hideLanguages,togggleSidebarLanguages,toggleCurrency,hideCurrency} =LangSlice.actions
export default langReducer