import {configureStore} from '@reduxjs/toolkit'
import subNavReducer from './subNavSlice'
import sidebarReducer from './Sidebarslice'
import langReducer from './LangSlice'
import themeReducer from './themeSlice'
import currencyReducer from './CurrencySlice'
import searchboxReducer from './Searchslice'
import signupReducer from './SignUpslice'

 const store = configureStore({
     reducer:{
         subnavigation :subNavReducer,
         sideBarActive : sidebarReducer,
         language:langReducer,
         theme: themeReducer,
         currency:currencyReducer,
         searchbox: searchboxReducer,
         signup:signupReducer
     }
 })
export default store