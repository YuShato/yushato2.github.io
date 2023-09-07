import Layout from '../common/layout/Layout';
import React, { FC, useContext } from 'react';
import ProductList from '../product-list/ProductList';
import { ShortItemProps } from '../item/short/types';
import { ProductsContext } from '../../App';

export const Page: FC = () => {
  const mockListData = useContext(ProductsContext);

  return (
    <Layout>
      <ProductList list={mockListData as ShortItemProps[]} />
    </Layout>
  );
};
