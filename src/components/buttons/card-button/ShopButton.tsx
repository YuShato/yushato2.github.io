import { Button } from '../button/Button';
import MinusIcon from './assets/minus';
import PlusIcon from './assets/plus';
import React from 'react';
import { ShopButtonProps } from './types';
import UiBuy from './ui';

const ShopButton = ({ itemCount = 0 }: ShopButtonProps) => {
  const onClickShopButton = () => {
    console.log('Shop button clicked');
  };

  const onIncreaseValue = () => {
    console.log('Increase value');
  };

  const onDecreaseValue = () => {
    console.log('Decrease value');
  };

  if (!itemCount || itemCount <= 0) {
    return <Button label="BUY NOW" size="medium" type="button" onClick={onClickShopButton} />;
  }

  return (
    <UiBuy>
      <UiBuy.Button onClick={onDecreaseValue}>
        <MinusIcon />
      </UiBuy.Button>

      <UiBuy.Input type="number" min={0} max={100} step={1} value={itemCount} />

      <UiBuy.Button onClick={onIncreaseValue}>
        <PlusIcon />
      </UiBuy.Button>
    </UiBuy>
  );
};

export default ShopButton;
