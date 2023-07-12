import { ReactNode } from 'react';
import { UiModalProps } from '../modal/ui';

export interface PopupProps extends UiModalProps {
  onClose: () => void;
  children: ReactNode;
}
