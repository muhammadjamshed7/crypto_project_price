import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter  } from "react-router-dom";
import CoinContextProvider from './components/context/CoinContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<CoinContextProvider>
 <BrowserRouter>
    <App />
  </BrowserRouter>
  </CoinContextProvider>
  </React.StrictMode>,
)
