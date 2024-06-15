import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KindeProvider
      clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
      domain={import.meta.env.VITE_KINDE_DOMAIN}
      logoutUri={import.meta.env.VITE_KINDE_LOGOUT_URL}
      redirectUri={import.meta.env.VITE_KINDE_REDIRECT_URL}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </KindeProvider>
  </React.StrictMode>,
)
