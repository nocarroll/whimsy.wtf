import { useEffect } from 'react';
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react"

function InfoModal ({ controlIsOpen, afterClose }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function onControlIsOpenChange () {
    if (controlIsOpen) onOpen();
  }

  useEffect(onControlIsOpenChange, [controlIsOpen, onOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        afterClose();
      }}
    >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pb={0}>About</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={6}>
            <Box mb={2}>
              Click the New Suggestion button to get a new song suggestion.
            </Box>
            <Box>
              Click the History button to show the 10 most recent suggestions.
            </Box>
          </ModalBody>
          <Box mb={2} />
        </ModalContent>
      </Modal>
  );
}

export default InfoModal;