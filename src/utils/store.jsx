import {configureStore} from '@reduxjs/toolkit'
import subNavReducer from './subNavSlice'
import sidebarReducer from './Sidebarslice'
import langReducer from './LangSlice'
 const store = configureStore({
     reducer:{
         subnavigation :subNavReducer,
         sideBarActive : sidebarReducer,
         language:langReducer
     }
 })
export default store