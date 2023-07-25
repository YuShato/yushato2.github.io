import Layout from '../common/layout/Layout';
import React, { FC } from 'react';
import ProductList from '../product-list/ProductList';
import { mockListData } from '../product-list/mockData';
import { ShortItemProps } from '../item/short/types';

interface LayoutProps {
  toggleTheme: () => void;
}

export const Page: FC<LayoutProps> = ({ toggleTheme }) => {
  return (
    <Layout toggleTheme={toggleTheme}>
      <ProductList list={mockListData as ShortItemProps[]} />
    </Layout>
  );
};
