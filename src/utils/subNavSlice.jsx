import { createSlice } from "@reduxjs/toolkit"

const subNavSlice=createSlice({
    name:'subnavigation',
    initialState:{
        value:false
    },
    reducers:{
  showPortfolio : (state=>{
    return{
      ...state,
      value :true
    }
    }),
  hidePortfolio : (state=>{
    return{
      ...state,
      value :false
    }
    })
  }
})
export const {showPortfolio,hidePortfolio} =subNavSlice.actions
const subNavReducer = subNavSlice.reducer
  export default subNavReducer