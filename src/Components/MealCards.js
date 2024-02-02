import React from "react";
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
        title: "Lemon cake",
        price: "$12.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",

    }
]
const MealCards = () => {
    return (
        <div className="meal-cards">
            <h1 id="specials">
            This Week's Specials
            <button className="button" id="button2">Order Online</button>
            </h1>
            <div className="meals">
            {meals.map((meal) => (
                <Meal
                key={meal.title}
                title={meal.title}
                price={meal.price}
                description={meal.description}
                imageSrc={meal.getImageSrc()}
                />
            ))}
            </div>
        </div>
    );
}

export default MealCards;