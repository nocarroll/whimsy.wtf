import { useEffect } from 'react';
import {
  Box,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  OrderedList,
  useDisclosure
} from "@chakra-ui/react"

function HistoryModal ({ controlIsOpen, suggestionHistory, afterClose }) {
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
          <ModalHeader pb={0}>Recent Suggestions</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={6}>
            <OrderedList>
              {suggestionHistory.map(suggestion => {
                return <ListItem
                  key={suggestion}
                >
                  {suggestion}
                </ListItem>;
              })}
            </OrderedList>
          </ModalBody>
          <Box mb={2} />
        </ModalContent>
      </Modal>
  );
}

export default HistoryModal;