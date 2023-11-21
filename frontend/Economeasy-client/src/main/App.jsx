import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { HashRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

export default props => {
 
  return (
    <HashRouter>
        <div className="app">
            <Routes/>
        </div>
    </HashRouter>  
  )
}


