import { DEFAULT_SIZE, SIZES } from '../../../components/buttons/sizes/utils/constants';
import TabsCmp, { mockTabsData } from '../../../components/common/tabs/Tabs';

import { Button } from '../../../components/buttons/button/Button';
import Categories from '../../../components/text/categories/Categories';
import { FullItemProps } from './types';
import ProductSlider from '../../../components/slider/Slider';
import ProductSocialList from '../../../components/buttons/product-social/ProductSocial';
import Rating from '../../../components/buttons/rating/Rating';
import React from 'react';
import ShopButton from '../../../components/buttons/card-button/ShopButton';
import Sizes from '../../../components/buttons/sizes/Sizes';
import UiCategories from '../../../components/text/categories/ui';
import UiFItem from './ui';
import UiLayout from '../../../components/common/layout/ui';

export const DEF_DESCRIPTION = {
  common: '',
  living_room: '',
  dinning_room: '',
  office: '',
};

const FullItem = ({ data }: FullItemProps) => {
  const {
    name = '',
    price = 0,
    itemCount = 0,
    activeSize = DEFAULT_SIZE,
    reviewCount = 0,
    rating = 4,
    sku = 0,
    categories = [],
    tags = [],
    onAddToCart,
    onAddToFavorite,
    shortDescription = '',

    images = [],
    productSocial = [],
  } = data;

  return (
    <UiLayout.Container>
      <UiFItem.MainInfo>
        <ProductSlider images={images} />

        <UiFItem>
          <UiFItem.Title>{name}</UiFItem.Title>

          <UiFItem.Price>${price}</UiFItem.Price>

          <Rating rating={rating} title="Customer Review" reviewCount={reviewCount} />

          <UiFItem.Info>
            <UiFItem.SubTitle>Short Description:</UiFItem.SubTitle>

            <UiFItem.Description>{shortDescription}</UiFItem.Description>

            <Sizes sizes={SIZES} activeSize={activeSize} />

            <UiFItem.ButtonList>
              <ShopButton itemCount={itemCount} />

              <UiFItem.ButtonList>
                <Button label="BUY NOW" primary={false} size="medium" type="button" onClick={onAddToCart} />

                <Button label="ADD TO CART" primary={true} size="medium" type="button" onClick={onAddToCart} />

                <Button label="" primary={true} size="small" type="button" viewtype="like" onClick={onAddToFavorite} />
              </UiFItem.ButtonList>
            </UiFItem.ButtonList>

            <UiFItem.InfoList>
              <UiCategories>
                <h4>SKU:</h4> {sku}
              </UiCategories>

              <Categories list={categories} title="Categories" />

              <Categories list={tags} title="Tags" />

              <ProductSocialList list={productSocial} />
            </UiFItem.InfoList>
          </UiFItem.Info>
        </UiFItem>
      </UiFItem.MainInfo>

      <TabsCmp data={mockTabsData} />
    </UiLayout.Container>
  );
};

export default FullItem;
