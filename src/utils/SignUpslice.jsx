import {createSlice} from '@reduxjs/toolkit'

const Signupslice = createSlice({
    name:'signup',
    initialState:{
        value:false
    },
    reducers:{
        handleSignup:(state=>{
            return {
                ...state,
                value:true
            }
        }),
        closeSignup:(state=>{
            return {
                ...state,
                value:false
            }
        })
    }
})
export const {handleSignup,closeSignup}= Signupslice.actions
const signupReducer = Signupslice.reducer
export default signupReducer