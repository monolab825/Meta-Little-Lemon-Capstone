import React from "react";

const Testimony = ({ rating, profileImageSrc, ratingImageSrc, profile, review }) => {
  return (
    <body className="testimony-card">
        <h2 id="rating">
            {rating}
            <img src={ratingImageSrc}/>
        </h2>
        <div className="profile-photo">
        <img src={profileImageSrc}/>
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

