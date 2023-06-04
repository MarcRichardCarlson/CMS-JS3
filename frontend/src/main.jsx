import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import './index.scss'
import Header from './components/Header.jsx'
import NavbarNest from '../src/components/NavbarNest.jsx'
import { AuthContextProvider } from "../src/context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
      <Router>
          <NavbarNest>
            <Header/>
          </NavbarNest>
          <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Router>
    // </React.StrictMode>
);
