import React from 'react';
import { ProductListProps } from './types';
import ShortItem from '../item/short/ShortItem';
import UiProductList, { EmptyList } from './ui';
import UiLayout from '../common/layout/ui';
import { IsEmptyArray } from '../../utils/helpers/value-tests';
import EmptySvg from '../common/modals/popup/assets/images/empty.svg';
import { withTranslation } from 'react-i18next';
import { t } from 'i18next';

const ProductListComponent: React.FC<ProductListProps> = ({ list }) => {
  const onAddToCart = (id: number) => {
    console.log('Добавить в корзину', id);
  };

  const onAddToFavorite = (id: number) => {
    console.log('Добавить в избранное', id);
  };

  if (!list || IsEmptyArray(list)) {
    return (
      <UiLayout.Container>
        <EmptyList>
          <img src={EmptySvg} alt="empty" width={400} height={400} />
          <p>{t('components.productList.empty')}</p>
        </EmptyList>
      </UiLayout.Container>
    );
  }

  return (
    <UiLayout.Container>
      <UiProductList>
        {list.map((item) => {
          const itemData = {
            onAddToCart,
            onAddToFavorite,
            ...item.data,
          };

          return <ShortItem key={item.id} data={itemData} id={item.id} />;
        })}
      </UiProductList>
    </UiLayout.Container>
  );
};

const ProductList = withTranslation()(ProductListComponent);

export default ProductList;
