import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import { AppProvider } from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter> 
    <AppProvider>
      <App/>
    </AppProvider>
</BrowserRouter>
   
  
)
