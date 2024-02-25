import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function Basket() {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={6}>
        Your Basket
      </Heading>
      <Text>No items in your basket yet!</Text>
    </Box>
  );
}

export default Basket;
