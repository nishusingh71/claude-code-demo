import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Handle redirects from 404.html
const redirectPath = sessionStorage.getItem('redirectPath');
if (redirectPath) {
  sessionStorage.removeItem('redirectPath');
  window.history.replaceState(null, '', redirectPath);
}

// Handle legacy redirect from sessionStorage.redirect (from 404.html)
if (sessionStorage.redirect) {
  const url = new URL(sessionStorage.redirect);
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, '', url.pathname + url.search + url.hash);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
