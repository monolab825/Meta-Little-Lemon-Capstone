import React from "react";
import Logo from "../Pictures/Logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <img src={Logo} height={"100px"} alt="Little Lemon Logo"/>
            <nav>
                <p>Menu</p>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Login</Link></li>
                </ul>
            </nav>
            <nav>
                <p>Contact us</p>
                <ul>
                    <li>Address</li>
                    <li>Email</li>
                    <li>Phone: 077-77-77-77</li>
                </ul>
            </nav>
            <nav>
                <p>Socials</p>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>linkedin</li>
                </ul>
            </nav>
        </div>
    )
  };


export default Footer;