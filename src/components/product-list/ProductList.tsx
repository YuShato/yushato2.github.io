import React from 'react';
import { ProductListProps } from './types';
import ShortItem from '../item/short/ShortItem';
import UiProductList, { EmptyList } from './ui';
import { IsEmptyArray } from '../../utils/helpers/value-tests';
import EmptySvg from '../common/modals/popup/assets/images/empty.svg';
import { withTranslation } from 'react-i18next';
import { t } from 'i18next';
import LazyImage from '../lazy-image';

export const ProductListComponent: React.FC<ProductListProps> = ({ list }) => {
  const onAddToCart = (id: number) => {
    console.log('Добавить в корзину', id);
  };

  const onAddToFavorite = (id: number) => {
    console.log('Добавить в избранное', id);
  };

  if (!list || IsEmptyArray(list)) {
    return (
      <EmptyList>
        <LazyImage src={EmptySvg} alt="empty" width={400} height={400} />

        <p>{t('components.productList.empty')}</p>
      </EmptyList>
    );
  }

  return (
    <UiProductList>
      {list.map((item, index) => {
        const itemData = {
          onAddToCart,
          onAddToFavorite,
          ...item.data,
        };

        return <ShortItem key={item.id} data={itemData} id={item.id} currentIndex={index} />;
      })}
    </UiProductList>
  );
};

const ProductList = withTranslation()(ProductListComponent);

export default ProductList;
