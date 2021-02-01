import { useState, useCallback } from 'react';
import { RepeatIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Text
} from '@chakra-ui/react'

import AppHeader from './AppHeader';
import HistoryModal from './HistoryModal';
import InfoModal from './InfoModal';
import { getSuggestion } from './generators';
import './App.css';

function App() {
  const firstSuggestion = getSuggestion();
  const [historyModalIsOpen, setHistoryModalIsOpen] = useState(false);
  const [infoModalIsOpen, setInfoModalIsOpen] = useState(false);
  const [suggestion, setSuggestion] = useState(firstSuggestion);
  const [suggestionHistory, setSuggestionHistory] = useState([firstSuggestion]);

  const onGenerate = useCallback(() => {
    const nextSuggestion = getSuggestion(suggestion);
    setSuggestionHistory([nextSuggestion, ...suggestionHistory].slice(0, 10));
    setSuggestion(nextSuggestion);
  }, [suggestion, suggestionHistory]);

  return (
    <div className="App">
      <Box
        p={4}
        h="100vh"
        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      >
        <Container>
          <AppHeader onHistoryClick={() => setHistoryModalIsOpen(true)} onInfoClick={() => setInfoModalIsOpen(true)} />
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
        <InfoModal
          controlIsOpen={infoModalIsOpen}
          afterClose={() => setInfoModalIsOpen(false)}
        />
      </Box>
    </div>
  );
}

export default App;
