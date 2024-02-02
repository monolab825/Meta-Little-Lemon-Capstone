import React from "react";

const Meal = ({ title, price, description, imageSrc }) => {
  return (
    <div className="meal-card">
        <div id="image">
          <img src={imageSrc} alt={`Picture of ${title}`}/>
        </div>
        <div className="description">
            <h1>
            {title} {price}</h1>
            <h2>
            {description}
            </h2>
            <div>
            <button className="button" id="button3">Order for Delivery</button>
            </div>
        </div>
    </div>
 );
};

export default Meal;
