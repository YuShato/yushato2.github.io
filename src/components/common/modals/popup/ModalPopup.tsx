import React, { FC } from 'react';

import CloseIcon from '../modal/assets/close';
import { PopupProps } from './types';
import UiModal from '../modal/ui';

const ModalPopup: FC<PopupProps> = ({ visible, children, onClose }) => {
  if (!visible) {
    return null;
  }

  return (
    <UiModal onClick={onClose}>
      <UiModal.Window>
        <UiModal.CloseButton onClick={onClose}>
          <CloseIcon />
        </UiModal.CloseButton>

        {children}
      </UiModal.Window>
    </UiModal>
  );
};

export default ModalPopup;
