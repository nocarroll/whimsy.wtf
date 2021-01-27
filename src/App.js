import { useEffect, useState } from 'react';
import { RepeatIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Text
} from '@chakra-ui/react'

import { getOne } from './generators/silly';
import './App.css';

function App() {
  const [suggestion, setSuggestion] = useState('');

  function onGenerate () {
    setSuggestion(getOne());
  }

  useEffect(onGenerate, []);

  return (
    <div className="App">
      <Box
        p={4}
        h="100vh"
        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      >
        <Container>
          <Heading>fawm-gen</Heading>
          <Box h={10} />
          <Center h={200} p={6}>
            <Text color="#333" fontSize="2xl">{suggestion}</Text>
          </Center>
          <Box h={10} />
          <Button
            isFullWidth
            onClick={onGenerate}
            colorScheme="pink"
            leftIcon={<RepeatIcon/>}
          >
            New Suggestion
          </Button>
        </Container>
      </Box>
    </div>
  );
}

export default App;
