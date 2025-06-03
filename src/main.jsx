import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cities from "./Cities.jsx"
import Spells from "./Spells.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    <Cities />
    <Spells />
  </StrictMode>,
)
