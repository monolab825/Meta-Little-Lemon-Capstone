import React from "react";
import {Box} from "@chakra-ui/react";
import Meal from "./Meal"


const meals = [
    {
        getImageSrc: () => require("../Pictures/greek salad.jpg"),
        title: "Greek Salad",
        price: "$12.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
        getImageSrc: () => require("../Pictures/brushetta.jpg"),
        title: "Bruchetta",
        price: "$12.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",

    },
    {
        getImageSrc: () => require("../Pictures/lemon dessert.jpg"),
        title: "Greek Salad",
        price: "$12.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",

    }
]
const MealCards = () => {
    return (
        <Box
        display="flex"
        padding="100px"
        >
            {meals.map((meal) => (
                <Meal
                key={meal.title}
                title={meal.title}
                price={meal.price}
                description={meal.description}
                imageSrc={meal.getImageSrc()}
                />
            ))}
        </Box>
    );
}

export default MealCards;