import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Testimony = ({ rating, imageSrc, profile, review }) => {
  return (
    <div>
        <heading>
            {rating}
        </heading>
        <img src={imageSrc} style={{borderRadius: "6px"}} height={"100px"}/>
        <h2>
          {profile}
        </h2>
          {review}
          <p style={{fontWeight: "bold", marginTop: "10px"}}></p>
    </div>
 );
};

export default Testimony;

