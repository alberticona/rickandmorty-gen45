// se ejecuta 2 vcs xq tenemos activado el modo estricto de react y estamos en desarrollo el efecto se ejecuta 2 vcs
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
