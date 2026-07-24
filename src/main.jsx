import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Bootstrap como base de estilos (grid, utilidades, breakpoints mobile-first)
import 'bootstrap/dist/css/bootstrap.min.css'

// Tokens de diseño y estilos propios de Salvia (se cargan después de Bootstrap
// para poder sobrescribir con las variables de marca)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
