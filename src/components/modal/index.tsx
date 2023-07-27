import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ModalPopup from '../common/modals/popup/ModalPopup';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRoot = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(modalRoot);

    return () => {
      document.body.removeChild(modalRoot);
    };
  }, [modalRoot]);

  return isOpen
    ? ReactDOM.createPortal(
        <ModalPopup visible={isOpen} onClose={onClose}>
          {children}
        </ModalPopup>,
        modalRoot
      )
    : null;
};

export default Modal;
