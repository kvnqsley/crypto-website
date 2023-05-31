import {createSlice} from '@reduxjs/toolkit'

const Authslice = createSlice({
    name:'auth',
    initialState:{
        signup:false,
        login:false
    },
    reducers:{
        handleSignup:(state=>{
            return {
                ...state,
                signup:true
            }
        }),
        closeSignup:(state=>{
            return {
                ...state,
                signup:false
            }
        }),
        openLogin:(state=>{
            return {
                ...state,
                login:true
            }
        }),
        closeLogin:(state=>{
            return {
                ...state,
                login:false
            }
        })
    }
})
export const {handleSignup,closeSignup,openLogin,closeLogin}= Authslice.actions
const authReducer = Authslice.reducer
export default authReducer