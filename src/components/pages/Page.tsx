import FullItem from '../item/full/FullItem';
import Layout from '../common/layout/Layout';
import React from 'react';
import { mockProductData } from '../item/full/mockData';

export const Page: React.FC = () => {
  return (
    <Layout>
      <FullItem data={mockProductData} />
    </Layout>
  );
};
