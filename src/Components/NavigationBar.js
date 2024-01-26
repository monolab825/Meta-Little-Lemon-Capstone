
import React from "react";
import LittleLemon from '../Pictures/LittleLemon.png'
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
       <body className="navigation">
        <header>
            <div class="logo">
            <img src={LittleLemon} alt="Little Lemon Logo"/>
            </div>
            <nav>
            <ul>
                    <li><NavLink to="/" activeClassName="active-link" className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/" activeClassName="active-link" className="nav-link">About</NavLink></li>
                    <li><NavLink to="/" activeClassName="active-link" className="nav-link">Menu</NavLink></li>
                    <li><NavLink to="/" activeClassName="active-link" className="nav-link">Reservations</NavLink></li>
                    <li><NavLink to="/" activeClassName="active-link" className="nav-link">Order Online</NavLink></li>
                    <li><NavLink to="/" activeClassName="active-link" className="nav-link">Login</NavLink></li>
            </ul>
            </nav>
        </header>
        </body>
    )
}

export default Header;