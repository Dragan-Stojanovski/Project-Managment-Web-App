import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import React from 'react'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
    <App />
    </React.StrictMode>
    </BrowserRouter>
)
