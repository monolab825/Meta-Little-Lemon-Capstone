import React from "react";
import restaurantfood from "../Pictures/restauranfood.jpg"

const Intro = () => {

    return (
        <main>
            <heading>Little Lemon</heading>
            <heading2>Chicago</heading2>
            <p>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
            </p>
            <img src={restaurantfood} height={"500px"} alt="Picture of restaurant food" />
        </main>
    )
}

export default Intro;