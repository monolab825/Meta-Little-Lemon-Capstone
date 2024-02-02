
import React from "react";
import LittleLemon from '../Pictures/LittleLemon.png'
import { NavLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {

    return (
       <div className="navigation">
        <header>
            <div class="logo">
            <img src={LittleLemon} alt="Little Lemon Logo"/>
            </div>
            <nav>
            <ul>
                    <li><NavLink to="/" activeClassName="active-link" className="nav-link">Home</NavLink></li>
                    <li><ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500} activeClassName="active-link" className="nav-link">About</ScrollLink></li>
                    <li><ScrollLink to="meal-cards" spy={true} smooth={true} offset={-70} duration={500} activeClassName="active-link" className="nav-link">Menu</ScrollLink></li>
                    <li><NavLink to="/booking-page" activeClassName="active-link" className="nav-link">Reservations</NavLink></li>
                    <li><ScrollLink to="meal-cards" spy={true} smooth={true} offset={-70} duration={500} activeClassName="active-link" className="nav-link">Order Online</ScrollLink></li>
                    <li><NavLink to="/" activeClassName="active-link" className="nav-link">Login</NavLink></li>
            </ul>
            </nav>
        </header>
        </div>
    )
}

export default Header;