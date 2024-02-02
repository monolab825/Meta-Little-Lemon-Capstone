import React from "react";

const Pictureplacement = ({ imageSrc, altText }) => {

    return (
        <div className="picture_container">
                <div class="photo1">
                    <img src={imageSrc} alt={altText} />
                </div>
        </div>
    )
}

export default Pictureplacement;