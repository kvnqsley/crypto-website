import {configureStore} from '@reduxjs/toolkit'
import subNavReducer from './subNavSlice'
import sidebarReducer from './Sidebarslice'
import langReducer from './LangSlice'
import themeReducer from './themeSlice'
import currencyReducer from './CurrencySlice'


 const store = configureStore({
     reducer:{
         subnavigation :subNavReducer,
         sideBarActive : sidebarReducer,
         language:langReducer,
         theme: themeReducer,
         currency:currencyReducer
     }
 })
export default store