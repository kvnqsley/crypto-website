import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import {ReactQueryDevtoolsPanel} from '@tanstack/react-query-devtools'
import { Suspense } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store,{persistor} from './utils/store'
import App from './App'
import './App.css'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './utils/Loading'




const queryClient = new QueryClient;
const root =document.getElementById('root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        
        <App />
      
    
    {/* <ReactQueryDevtoolsPanel /> */}
    </QueryClientProvider>
    </PersistGate>
 
  </Provider>
   

  </React.StrictMode>,
)
