import { useEffect, useState } from 'react';
import {
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Text
} from "@chakra-ui/react"

import { generateSillySuggestion } from './generators/silly';
import './App.css';

function App() {
  const [suggestion, setSuggestion] = useState('');

  function onGenerate () {
    setSuggestion(generateSillySuggestion());
  }

  useEffect(onGenerate, []);

  return (
    <div className="App">
      <Container>
        <Heading>fawm-gen</Heading>
        <Center h={50}>
          <Divider />
        </Center>
        <Center bg="white" h={200}>
          <Text fontSize="2xl">{suggestion}</Text>
        </Center>
        <Center h={50}>
          <Divider />
        </Center>
        <Button onClick={onGenerate}>New Suggestion</Button>
      </Container>
    </div>
  );
}

export default App;
