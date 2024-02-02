import React from "react";

const Testimony = ({ rating, profileImageSrc, ratingImageSrc, profile, review }) => {
  return (
    <div className="testimony-card">
        <h2 id="rating">
            {rating}
            <img src={ratingImageSrc} alt={`Rating: ${rating}`} />
        </h2>
        <div className="profile-photo">
        <img src={profileImageSrc} alt={`Profile: ${profile}`} />
        </div>
        <h2 id="profile-name">
          {profile}
        </h2>
          <p id="review">
          {review}
          </p>
    </div>
 );
};

export default Testimony;

