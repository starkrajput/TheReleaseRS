/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
/*import App from './App.jsx'
import './index.css'*/
import Home from './Pages/Home.jsx';
import WebApp from './Pages/WebApp.jsx';
import AppRouter from '../src/AppRouter.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppRouter/>
        {/* <App />*/}
         {/* <Home/>*/}
   {/*  <WebApp/>*/}
  </React.StrictMode>,
)
