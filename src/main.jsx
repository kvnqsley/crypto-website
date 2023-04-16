import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import {ReactQueryDevtoolsPanel} from '@tanstack/react-query-devtools'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './utils/store'
import App from './App'
import './App.css'




const queryClient = new QueryClient;
const root =document.getElementById('root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
  <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <App />
    {/* <ReactQueryDevtoolsPanel /> */}
    </QueryClientProvider>
  </Provider>
   

  </React.StrictMode>,
)
