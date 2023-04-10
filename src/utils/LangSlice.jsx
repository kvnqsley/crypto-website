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