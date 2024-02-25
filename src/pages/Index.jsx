import React from "react";
import { Box, Container, Grid, GridItem, Heading, Image, Text, Button, VStack, HStack, Divider, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart, FaCoffee } from "react-icons/fa";

const Index = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Premium Arabica Beans",
      description: "Rich and smooth, sourced from the best Colombian farms.",
      price: "15.99",
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcmFiaWNhJTIwY29mZmVlJTIwYmVhbnN8ZW58MHx8fHwxNzA4ODgxMzQwfDA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 2,
      name: "Espresso Roast",
      description: "Bold and intense, perfect for a strong morning espresso.",
      price: "18.50",
      image: 'https://images.unsplash.com/photo-1514134583630-250e42c36dbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMHJvYXN0JTIwY29mZmVlfGVufDB8fHx8MTcwODg4MTM0MHww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 3,
      name: "Light Roast",
      description: "Mild and flavorful, a great choice for casual coffee drinkers.",
      price: "14.75",
      image: 'https://images.unsplash.com/photo-1633275858168-d53d224b2a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaWdodCUyMHJvYXN0JTIwY29mZmVlfGVufDB8fHx8MTcwODg4MTM0MXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
  ];

  return (
    <Container maxW="container.xl" p={5}>
      <VStack>
        <Heading my={4}>
          Coffee Shop <FaCoffee />
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {products.map((product) => (
            <GridItem key={product.id} w="100%" bg={useColorModeValue("gray.100", "gray.700")} p={5} borderRadius="md" boxShadow="md">
              <VStack>
                <Image src={product.image} alt={product.name} borderRadius="md" />
                <Heading size="md" my={2}>
                  {product.name}
                </Heading>
                <Text>{product.description}</Text>
                <HStack justifyContent="space-between" w="100%">
                  <Text fontWeight="bold">${product.price}</Text>
                  <Button colorScheme="yellow" leftIcon={<FaShoppingCart />}>
                    Add to Cart
                  </Button>
                </HStack>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
      <Divider my={6} />
      <Box textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
