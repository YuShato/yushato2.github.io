import DefaultImage from './assets/default.png';
import React from 'react';
import ShopButton from '../../../components/buttons/card-button/ShopButton';
import { ShopItemProps } from './types';
import TrashIcon from './assets/icons/trash';
import UiShopItem from './ui';

const ShopItem = ({ imgSrc = '', name = '', price = 0, sku = 0, itemCount = 0 }: ShopItemProps) => {
  const total = price * itemCount;

  const deleteFromCart = () => {
    console.log('Delete from cart');
  };

  return (
    <UiShopItem>
      <img src={imgSrc ? imgSrc : DefaultImage} alt={name} width={70} height={70} />

      <UiShopItem.Info>
        <UiShopItem.Name>{name}</UiShopItem.Name>

        <UiShopItem.Sku>
          <span>sku</span>

          {sku}
        </UiShopItem.Sku>
      </UiShopItem.Info>

      <UiShopItem.Price>${price}</UiShopItem.Price>

      <ShopButton itemCount={itemCount} />

      <UiShopItem.Total>${total}</UiShopItem.Total>

      <UiShopItem.TrashButton onClick={deleteFromCart}>
        <TrashIcon aria-label="Delete from cart" />
      </UiShopItem.TrashButton>
    </UiShopItem>
  );
};

export default ShopItem;
