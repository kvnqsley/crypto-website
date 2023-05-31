import {configureStore} from '@reduxjs/toolkit'
import sidebarReducer from './Sidebarslice'
import langReducer from './LangSlice'
import themeReducer from './themeSlice'
import currencyReducer from './CurrencySlice'
import searchboxReducer from './Searchslice'
import authReducer from './AuthSlice'
import DataSliceReducer from './DataSlice'
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist'
 
const currencyConfig ={
    key: 'root',
    storage
}
const themeConfig ={
    key: 'root',
    storage
}


const persistedReducer1 =persistReducer(currencyConfig,currencyReducer)
const persistedReducer2 =persistReducer(themeConfig,themeReducer)

const store = configureStore({
     reducer:{
     
         sideBarActive : sidebarReducer,
         language:langReducer,
         theme: persistedReducer2,
         currency:persistedReducer1,
         searchbox: searchboxReducer,
         auth:authReducer,
         data:DataSliceReducer
     }
 })


 
  export const persistor= persistStore(store)
export default store