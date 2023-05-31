import { createSlice } from "@reduxjs/toolkit";

const DataSlice =createSlice({
    name:'data',
    initialState:{
        market:null,
        header:null,
    },
    reducers:{
        updateMarketData:(state,action)=>{
            return{
                ...state,
                market:action.payload
            }
        }
    }
})
const DataSliceReducer = DataSlice.reducer
export const {updateMarketData}= DataSlice.actions
export default DataSliceReducer