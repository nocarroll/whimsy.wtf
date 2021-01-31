import { InfoIcon, RepeatClockIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer
} from '@chakra-ui/react'

function AppHeader ({ onHistoryClick, onInfoClick }) {
  return (
    <Box mb={4} bg="white" p={[2, 4]} borderRadius={6}>
      <Flex>
        <Heading color="#333">whimsy.wtf</Heading>
        <Spacer />
        <IconButton
          onClick={onHistoryClick}
          mr="2"
          variant="outline"
          colorScheme="pink"
          fontSize="20px"
          icon={<RepeatClockIcon />}
        />
        <IconButton
          onClick={onInfoClick}
          variant="outline"
          colorScheme="pink"
          fontSize="20px"
          icon={<InfoIcon />}
        />
      </Flex>
    </Box>
  );
}

export default AppHeader;