import { createSlice } from "@reduxjs/toolkit";

 const Searchslice =(createSlice({
     name:'searchbox',
     initialState:{
         value:false
     },
     reducers:{
         showSearchDD: (state=>{
             return {
                 ...state,
                 value:true
             }
         }),
         hideSearchDD: (state=>{
            return {
                ...state,
                value:false
            }
        })
     }
 }))
  const searchboxReducer = Searchslice.reducer
 export const {showSearchDD, hideSearchDD} = Searchslice.actions

 export default searchboxReducer