import React from 'react';

import FullItem from '../../stories/item/full/FullItem';
import { mockProductData } from '../../stories/item/full/mockData';
import Layout from '../common/layout/Layout';

export const Page: React.FC = () => {
  return (
    <Layout>
      <FullItem data={mockProductData} />
    </Layout>
  );
};
