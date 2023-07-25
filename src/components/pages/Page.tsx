import Layout from '../common/layout/Layout';
import React from 'react';
import ProductList from '../product-list/ProductList';
import { mockListData } from '../product-list/mockData';
import { ShortItemProps } from '../item/short/types';
import { useDarkMode } from '../../hooks/useDarkMode';
import { darkTheme, lightTheme } from '../../styles/theme';

export const Page: React.FC = () => {
  return (
    <Layout>
      <ProductList list={mockListData as ShortItemProps[]} />
    </Layout>
  );
};
