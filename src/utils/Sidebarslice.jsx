import { createSlice } from "@reduxjs/toolkit"

const SidebarSlice= createSlice({
    name:'sideBarActive',
    initialState:{
        value:false,
        currencies:false,
        signUp:false,
    },
    reducers:{
        openSidebar : (state => {
            return {
                ...state,
                value: true
            }
        }),
        closeSidebar : (state => {
            return {
                ...state,
                value: false
            }
        }),
        toggleSidebarCurrency : (state => {
            return {
                ...state,
                currencies: !state.currencies
            }
        }),
        toggleCurrency : (state => {
            return {
                ...state,
                currencies: !state.currencies
            }
        }),

        openSignup : (state => {
            return {
                ...state,
                signUp: !state.signUp
            }
        }),
    },
       
    
})
const sidebarReducer = SidebarSlice.reducer
export const {openSidebar,openSignup,closeSidebar,toggleSidebarCurrency,     toggleCurrency} = SidebarSlice.actions
export default sidebarReducer