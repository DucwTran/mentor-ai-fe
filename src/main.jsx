import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import CssBaseline from '@mui/material/CssBaseline'
import { GlobalStyles } from '@mui/material'

//Cấu hình react-toastify
import { ToastContainer } from 'react-toastify'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStyles styles={{ a: { textDecoration: 'none' } }} />
    <CssBaseline />
    <App />
    <ToastContainer position='bottom-left' theme='colored' />
  </BrowserRouter>
)
