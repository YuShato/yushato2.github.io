import React from 'react';
import { mockProductData } from '../item/full/mockData';
import Layout from '../common/layout/Layout';
import FullItem from '../item/full/FullItem';

export const Page: React.FC = () => {
  return (
    <Layout>
      <FullItem data={mockProductData} />
    </Layout>
  );
};
