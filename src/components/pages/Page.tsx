import Layout from '../common/layout/Layout';
import React, { FC } from 'react';
import ProductList from '../product-list/ProductList';
// import { mockListData } from '../product-list/mockData';
import { ShortItemProps } from '../item/short/types';
import generateRandomData from '../product-list/utils/helpers/item';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../localization';

interface LayoutProps {
  toggleTheme: () => void;
}

export const Page: FC<LayoutProps> = ({ toggleTheme }) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language as Locale) === Locale.ru ? Locale.en : Locale.ru;

  const mockListData = generateRandomData(100, lang);

  return (
    <Layout toggleTheme={toggleTheme}>
      <ProductList list={mockListData as ShortItemProps[]} />
    </Layout>
  );
};
