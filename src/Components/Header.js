import React from "react";
import {Box, Flex, HStack} from "@chakra-ui/react";
import LittleLemon from '../Pictures/LittleLemon.png'
import { Link } from "react-router-dom";


const Header = () => {

    return (
        <nav>
            <img src={LittleLemon} alt="Little Lemon Logo" width={"200px"}/>
                <a><Link to="/">Home</Link></a>
                <a><Link to="/">About</Link></a>
                <a><Link to="/">Menu</Link></a>
                <a><Link to="/">Reservations</Link></a>
                <a><Link to="/">Order Online</Link></a>
                <a><Link to="/">Login</Link></a>
        </nav>
    )
}

export default Header;