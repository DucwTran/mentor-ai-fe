import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

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
