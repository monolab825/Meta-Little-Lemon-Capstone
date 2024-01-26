import React from "react";
import Logo from "../Pictures/Logo.png"
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <body className="footer-content">
                <div id="logo">
                    <img src={Logo} height={"100px"} alt="Little Lemon Logo"/>
                </div>
                <div className="footer-nav">
                    <h3>Menu</h3>
                    <ul>
                        <li><NavLink to="/" activeClassName="active-link" className="foot-link">Home</NavLink></li>
                        <li><NavLink to="/" activeClassName="active-link" className="foot-link">About</NavLink></li>
                        <li><NavLink to="/" activeClassName="active-link" className="foot-link">Menu</NavLink></li>
                        <li><NavLink to="/" activeClassName="active-link" className="foot-link">Reservations</NavLink></li>
                        <li><NavLink to="/" activeClassName="active-link" className="foot-link">Order Online</NavLink></li>
                        <li><NavLink to="/" activeClassName="active-link" className="foot-link">Login</NavLink></li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Contact us</h3>
                    <ul>
                        <li>23 Main Road,</li>
                        <li>60604 Chicago</li>
                        <li>Email: l.lemon@gamal.con</li>
                        <li>Phone: +1 111 111 111</li>
                    </ul>
                </div>
                <div className="socials">
                    <h3>Socials</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Linkedin</li>
                        </ul>
                </div>
            </body>
        </footer>
    )
  };


export default Footer;