import { useState } from 'react';
import Modal from '../components/commons/modal/modal';

export default function useModal(initialIsOpen, { initialData, onRequestClose } = {}) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [modalData, setModalData] = useState(initialData || {});

  const open = (data) => {
    setModalData(data);
    setTimeout(() => {
      setIsOpen((prevStateIsOpen) => {
        if (prevStateIsOpen) { // If modal is already opened, close first then open it again
          setTimeout(() => {
            setIsOpen(true);
          }, 200);
          return false;
        }
        return true;
      });
    }, 300);
  };

  const close = () => {
    if (onRequestClose) onRequestClose();
    setIsOpen(false);
  };

  const props = {
    isOpen,
    onRequestClose: close,
  };

  return {
    open,
    close,
    props,
    data: modalData,
  };
}

export { Modal };
