import React from "react";

const Meal = ({ title, price, description, imageSrc }) => {
  return (
    <body className="meal-card">
        <div id="image">
          <img src={imageSrc}/>
        </div>
        <div className="description">
            <h1>
            {title} {price}</h1>
            <h2>
            {description}
            </h2>
            <p>
            <button className="button" id="button3">Order for Delivery</button>
            </p>
        </div>
    </body>
 );
};

export default Meal;
