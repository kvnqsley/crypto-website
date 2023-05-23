<<<<<<< HEAD
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
=======
import { createSlice } from "@reduxjs/toolkit"

const subNavSlice=createSlice({
    name:'subnavigation',
    initialState:{
        value:false
    },
    reducers:{
  showPortfolio : (state=>state.value =true),
  hidePortfolio : (state=>state.value =false)
    }
  })
export const {showPortfolio,hidePortfolio} =subNavSlice.actions
const subNavReducer = subNavSlice.reducer
>>>>>>> ae80c4554c9a6c9eb80c7f5e02dfd1623d5a376f
  export default subNavReducer