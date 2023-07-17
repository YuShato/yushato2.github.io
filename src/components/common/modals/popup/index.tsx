import React, { useEffect, useRef, useState } from 'react';

import { Button } from '../../../buttons/button/Button';
import EmptySvg from './assets/images/empty.svg';
import ModalPopup from './ModalPopup';
import UiPopup from './ui';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [text, setText] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const changeTextValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        console.log('User pressed: ', e.key);

        e.preventDefault();

        closeModal();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <UiPopup>
      <UiPopup.Input ref={inputRef} type="search" onChange={changeTextValue} />

      <Button label="Open Modal" onClick={openModal} primary type="button" viewtype="default" />

      <ModalPopup visible={isOpen} onClose={closeModal}>
        {Boolean(!text) && <img src={EmptySvg} alt="empty" width={400} height={400} />}

        <p>{text}</p>
      </ModalPopup>
    </UiPopup>
  );
};

export default Popup;
