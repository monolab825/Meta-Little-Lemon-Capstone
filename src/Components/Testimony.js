import React from "react";


const Testimony = ({ rating, imageSrc, profile, review }) => {
  return (
    <body className="testimony-card">
        <h2 id="rating">
            {rating}
        </h2>
        <div className="profile-photo">
        <img src={imageSrc}/>
        </div>
        <h2 id="profile-name">
          {profile}
        </h2>
          <p id="review">
          {review}
          </p>
    </body>
 );
};

export default Testimony;

