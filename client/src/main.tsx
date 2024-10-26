import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import React from 'react'
import { Provider } from "react-redux";
import store from "./infra/store/store.ts";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
<BrowserRouter>
    <React.StrictMode>
    <App />
    </React.StrictMode>
    </BrowserRouter>
    </Provider>
)
