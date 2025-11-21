import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import CssBaseline from '@mui/material/CssBaseline'
import { GlobalStyles } from '@mui/material'

//Cấu hình react-toastify
import { ToastContainer } from 'react-toastify'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from '~/redux/store'

//Cấu hình Redux Persist
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
const persistor = persistStore(store)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <GlobalStyles styles={{ a: { textDecoration: 'none' } }} />
        <CssBaseline />
        <App />
        <ToastContainer position='bottom-left' theme='colored' />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
