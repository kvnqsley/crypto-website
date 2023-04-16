import { createSlice } from "@reduxjs/toolkit";
const ThemeSlice= createSlice({
    name:'theme',
    initialState:{
        mytheme:false
    },
    reducers:{
        handleTheme:(state=>{
            return{
                ...state,
                mytheme:!state.mytheme
            }
        })
    }
})
const themeReducer = ThemeSlice.reducer
export const {handleTheme} =ThemeSlice.actions
export default themeReducer

