import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { AuthProvider } from './contexts/authContext'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
  </BrowserRouter>
)
