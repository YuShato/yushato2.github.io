import React, { useContext } from 'react';
import Layout from '../../components/common/layout/Layout';
import ProductList from '../../components/product-list/ProductList';
import { ProductsContext } from '../../App';
import { ShortItemProps } from '../../components/item/short/types';

function ProductPage() {
  const mockListData = useContext(ProductsContext);

  return (
    <Layout>
      <ProductList list={mockListData as ShortItemProps[]} />
    </Layout>
  );
}

export default ProductPage;
