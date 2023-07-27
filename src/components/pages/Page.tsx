import Layout from '../common/layout/Layout';
import React, { FC, useContext } from 'react';
import ProductList from '../product-list/ProductList';
import { ShortItemProps } from '../item/short/types';
import { ProductsContext } from '../../App';

interface LayoutProps {
  toggleTheme: () => void;
}

export const Page: FC<LayoutProps> = ({ toggleTheme }) => {
  const mockListData = useContext(ProductsContext);

  return (
    <Layout toggleTheme={toggleTheme}>
      <ProductList list={mockListData as ShortItemProps[]} />
    </Layout>
  );
};
