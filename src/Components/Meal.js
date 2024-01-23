import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Meal = ({ title, price, description, imageSrc }) => {
  return (
    <HStack margin={"3px"}>
    <VStack spacing={3} background="#495E57" color="black" borderRadius="6px">
      <Image src={imageSrc} style={{borderRadius: "6px"}} height={"200px"}>
      </Image>
      <VStack padding="10px">
      <Heading>
        {title} {price}
      </Heading>
      <VStack>
          <Text>
          {description}
          <p style={{fontWeight: "bold", marginTop: "10px"}}>
            <button>Order for Delivery</button>
          </p>
          </Text>
      </VStack>
      </VStack>
    </VStack>
    </HStack>
 );
};

export default Meal;
