import React from "react";
import { Link, useColorModeValue } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/layout";

const Navigation = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg={useColorModeValue("gray.50", "gray.900")} color="white">
      <Box>
        <Text fontSize="lg" fontWeight="bold" color={linkColor}>
          Coffee Shop
        </Text>
      </Box>
      <Box>
        <Link px={2} color={linkColor} to="/">
          Home
        </Link>
        <Link px={2} color={linkColor} to="/">
          Home
        </Link>
        <Link px={2} color={linkColor} to="/subpage">
          Subpage
        </Link>
        <Link px={2} color={linkColor} to="/basket">
          Basket
        </Link>
        <Link px={2} color={linkColor} to="/survey">
          Survey
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
