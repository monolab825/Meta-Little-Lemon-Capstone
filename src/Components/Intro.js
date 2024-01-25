import React from "react";
import restaurantfood from "../Pictures/restauranfood.jpg"

const Intro = () => {

    return (
        <body className="container">
            <div className="text-photo">
                <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="intro-text">
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                </p>
                <button className="button">Reserve a table</button>
            </article>
                <div class="food-photo">
                    <img src={restaurantfood} alt="Picture of restaurant food" />
                </div>
            </div>
        </body>
    )
}

export default Intro;