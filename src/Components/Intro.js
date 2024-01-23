import React from "react";
import {Box, Flex, HStack, VStack} from "@chakra-ui/react";
import restaurantfood from "../Pictures/restauranfood.jpg"

const Intro = () => {

    return (
        <Box
      backgroundColor="#495E57"
    >
        <main>
            <HStack>
        <VStack spacing={20} align={"left"}>
            <heading>Little Lemon</heading>
            <heading2>Chicago</heading2>
            <p>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
            </p>
            </VStack>
            <img src={restaurantfood} height={"500px"} alt="Picture of restaurant food" />
        </HStack>
        </main>
        </Box>
    )
}

export default Intro;