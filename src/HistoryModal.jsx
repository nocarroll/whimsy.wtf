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

function HistoryModal ({ controlIsOpen, suggestionHistory, afterClose }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function onControlIsOpenChange () {
    if (controlIsOpen) onOpen();
  }

  useEffect(onControlIsOpenChange, [controlIsOpen]);

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
          <ModalHeader>Last 10 Suggestions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {suggestionHistory.map((suggestion, index) => {
              return <Box
                key={suggestion}
                mb={2}
              >
              {'‣'} {suggestion}
              </Box>;
            })}
          </ModalBody>
          <Box mb={2} />
        </ModalContent>
      </Modal>
  );
}

export default HistoryModal;