import React from "react";

const Meal = ({ title, price, description, imageSrc }) => {
  return (
    <div>
    <img src={imageSrc} style={{borderRadius: "6px"}} height={"200px"}/>
      <heading>
      {title} {price}
      </heading>
       <main>
          {description}
          <p>
            <button>Order for Delivery</button>
          </p>
       </main>
    </div>
 );
};

export default Meal;
