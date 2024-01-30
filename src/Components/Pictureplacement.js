import React from "react";

const Pictureplacement = ({ imageSrc, altText }) => {

    return (
        <body className="picture_container">
                <div class="photo1">
                    <img src={imageSrc} alt={altText} />
                </div>
        </body>
    )
}

export default Pictureplacement;