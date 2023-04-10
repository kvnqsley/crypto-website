import { createSlice } from "@reduxjs/toolkit"

const SidebarSlice= createSlice({
    name:'sideBarActive',
    initialState:{
        value:false
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
    },
})
const sidebarReducer = SidebarSlice.reducer
export const {openSidebar,closeSidebar} = SidebarSlice.actions
export default sidebarReducer