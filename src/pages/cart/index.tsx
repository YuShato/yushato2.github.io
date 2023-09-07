import React, { useContext } from 'react';
import Layout from '../../components/common/layout/Layout';
import { ProductsContext } from '../../App';
import ShopItem from '../../components/item/card-item/ShopItem';
import { ShopItemProps } from '../../components/item/card-item/types';

const CartPage = () => {
  const cartData = [
    {
      name: 'Blushing Bromeliad',
      imgSrc:
        'https://plus.unsplash.com/premium_photo-1676321046535-848a104819ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90dGVkJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      sku: 1995751877966,
      price: 119,
      itemCount: 2,
    },
    {
      name: 'Blushing Bromeliad 121123',
      imgSrc:
        'https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG90dGVkJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      sku: 1995751877966,
      price: 119,
      itemCount: 2,
    },
  ];

  return (
    <Layout>
      {cartData.map((item: ShopItemProps) => {
        return <ShopItem key={item.id} {...item} />;
      })}
    </Layout>
  );
};

export default CartPage;
