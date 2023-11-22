import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Inicío
            </Link>
            <Link to="/contact">
                <i className="fa fa-user"></i> Contato
            </Link>
        </nav>
    </aside>