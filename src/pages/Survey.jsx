import React from 'react';
import { VStack, Radio, RadioGroup, Button, Box } from '@chakra-ui/react';

function Survey() {
  const [value, setValue] = React.useState('hot');

  return (
    <VStack>
      <RadioGroup onChange={setValue} value={value}>
        <Radio value="hot">Hot Coffee</Radio>
        <Radio value="cold">Cold Coffee</Radio>
      </RadioGroup>
      <Button mt={4} colorScheme="blue">Submit</Button>
    </VStack>
  );
}

export default Survey;