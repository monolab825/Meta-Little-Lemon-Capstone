import React from "react";
import Logo from "../Pictures/Logo.png"
import { NavLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Footer = () => {
    return (
        <footer className="footer">
            <body className="footer-content">
                <div id="logo2">
                    <img src={Logo} height={"100px"} alt="Little Lemon Logo"/>
                </div>
                <div className="footer-nav">
                    <h3>Menu</h3>
                    <ul>
                        <li><NavLink to="/" activeClassName="active-link" className="foot-link">Home</NavLink></li>
                        <li><ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500} activeClassName="active-link" className="foot-link">About</ScrollLink></li>
                        <li><ScrollLink to="meal-cards" spy={true} smooth={true} offset={-70} duration={500} activeClassName="active-link" className="foot-link">Menu</ScrollLink></li>
                        <li><NavLink to="/booking-page" activeClassName="active-link" className="foot-link">Reservations</NavLink></li>
                        <li><ScrollLink to="meal-cards" spy={true} smooth={true} offset={-70} duration={500} activeClassName="active-link" className="foot-link">Order Online</ScrollLink></li>
                        <li><NavLink to="/" activeClassName="active-link" className="foot-link">Login</NavLink></li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Contact us</h3>
                    <ul>
                        <li>23 Main Road,</li>
                        <li>60604 Chicago</li>
                        <li><a href="mailto:l.lemon@gamail.con" className="foot-link">Email: l.lemon@gamail.con</a></li>
                        <li><a href="tel:+12345667890" className="foot-link">Phone: +1 234 567 890</a></li>
                    </ul>
                </div>
                <div className="socials">
                    <h3>Socials</h3>
                        <ul>
                            <li><a href="https://www.facebook.com" className="foot-link" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://www.instagram.com" className="foot-link" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://www.linkedin.com" className="foot-link" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                        </ul>
                </div>
            </body>
        </footer>
    )
  };


export default Footer;