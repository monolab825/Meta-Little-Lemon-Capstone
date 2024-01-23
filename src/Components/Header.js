import React from "react";
import {Box, Flex, HStack} from "@chakra-ui/react";
import LittleLemon from '../Pictures/LittleLemon.png'
import { Link } from "react-router-dom";


const Header = () => {

    return (
        <Box
      backgroundColor="white"
    >
        <Box maxWidth="1280px" margin="0 auto">
          <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          >
        <nav>
        <HStack spacing={20}>
            <img src={LittleLemon} alt="Little Lemon Logo" width={"200px"}/>
                <a><Link to="/">Home</Link></a>
                <a><Link to="/">About</Link></a>
                <a><Link to="/">Menu</Link></a>
                <a><Link to="/">Reservations</Link></a>
                <a><Link to="/">Order Online</Link></a>
                <a><Link to="/">Login</Link></a>
            </HStack>
        </nav>
        </HStack>
        </Box>
        </Box>
    )
}

export default Header;