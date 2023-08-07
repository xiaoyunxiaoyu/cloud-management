import React from 'react'
import ReactDOM from 'react-dom/client'
import "@/reset.css"
import "@/assets/style/global.scss"
import {HashRouter} from "react-router-dom";
// import Home from "@/components/Home.tsx";
import App from "@/App.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <HashRouter>
          <App></App>
      </HashRouter>
  </React.StrictMode>,
)
