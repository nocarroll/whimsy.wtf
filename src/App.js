import { useEffect, useState } from 'react';
import { RepeatIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Text,
  useDisclosure
} from '@chakra-ui/react'

import AppHeader from './AppHeader';
import HistoryModal from './HistoryModal';
import { getOne } from './generators/silly';
import './App.css';

function App() {
  const [historyModalIsOpen, setHistoryModalIsOpen] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [suggestionHistory, setSuggestionHistory] = useState([]);

  function onGenerate () {
    const nextSuggestion = getOne();
    setSuggestionHistory([nextSuggestion, ...suggestionHistory].slice(0, 10));
    setSuggestion(nextSuggestion);
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
          <AppHeader onHistoryClick={() => setHistoryModalIsOpen(true)} />
          <Center h={200} p={6} mb={6}>
            <Text color="#333" fontSize="2xl">{suggestion}</Text>
          </Center>
          <Button
            isFullWidth
            onClick={onGenerate}
            colorScheme="pink"
            leftIcon={<RepeatIcon/>}
          >
            New Suggestion
          </Button>
        </Container>
        <HistoryModal
          controlIsOpen={historyModalIsOpen}
          suggestionHistory={suggestionHistory}
          afterClose={() => setHistoryModalIsOpen(false)}
        />
      </Box>
    </div>
  );
}

export default App;
