import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
import { I18nProvider } from "./i18n/I18nContext";
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <I18nProvider>
        <App />
      </I18nProvider>
    </StrictMode>
)


// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <I18nProvider>
//       <App />
//     </I18nProvider>
//   </React.StrictMode>
// );
