import { Button } from './../../../components/buttons/button/Button';
import React from 'react';
import { ShortItemProps } from './types';
import UiShort from './ui';

const ShortItem = ({ data }: ShortItemProps) => {
  const {
    oldPrice = null,
    newPrice = null,
    discount = null,
    title = '',
    images = [],
    description,
    // id,
    onAddToCart,
    onAddToFavorite,
  } = data;

  return (
    <UiShort>
      <UiShort.Info>
        {Boolean(discount) && <UiShort.Discount>{discount}% OFF</UiShort.Discount>}
        <UiShort.Img>
          {/* переделать на слайдер */}
          <img src={images[0].src} alt="" />
        </UiShort.Img>

        <UiShort.Prices>
          <Button label="" onClick={onAddToCart} primary={true} size="small" type="button" viewtype="cart" />

          <Button label="" onClick={onAddToFavorite} primary={true} size="small" type="button" viewtype="like" />
        </UiShort.Prices>
      </UiShort.Info>

      <a href="#">
        <UiShort.Title>{title}</UiShort.Title>
      </a>

      <UiShort.Prices>
        {Boolean(newPrice) && <UiShort.Price>${newPrice}</UiShort.Price>}

        {Boolean(oldPrice) && <UiShort.OldPrice>${oldPrice}</UiShort.OldPrice>}
      </UiShort.Prices>

      {description && <UiShort.Description>{description}</UiShort.Description>}
    </UiShort>
  );
};

export default ShortItem;
