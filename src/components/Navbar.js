import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary">
        <div type = 'button' className="navbar-brand">
           <h1>Product manager</h1>
            <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link"
        to="/" exact>Список продуктів</NavLink>
        <NavLink className="nav-link"
        to="/addcategory" exact>Додати продукт</NavLink>
      </li>
             </ul>
        </div>
    </nav>
)