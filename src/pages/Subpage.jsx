import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Subpage = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <Heading as="h2" size="xl" mb={6}>
        Subpage Title
      </Heading>
      <Box p={5}>
        <Text>This is the content of the subpage.</Text>
      </Box>
    </Container>
  );
};

export default Subpage;
