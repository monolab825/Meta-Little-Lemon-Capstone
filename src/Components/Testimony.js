import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Testimony = ({ rating, imageSrc, profile, review }) => {
  return (
    <HStack margin={"3px"}>
    <VStack spacing={3} background="#495E57" color="black" borderRadius="6px">
    <Heading>
        {rating}
      </Heading>
      <Image src={imageSrc} style={{borderRadius: "6px"}} height={"100px"}>
      </Image>
      <VStack padding="10px">
      <VStack>
          <Heading>
          {profile}
          </Heading>
      </VStack>
      <VStack>
        <Text>
        {review}
          <p style={{fontWeight: "bold", marginTop: "10px"}}></p>
        </Text>
      </VStack>
      </VStack>
    </VStack>
    </HStack>
 );
};

export default Testimony;

