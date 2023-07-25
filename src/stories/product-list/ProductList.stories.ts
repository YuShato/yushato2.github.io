import type { Meta, StoryObj } from '@storybook/react';
import ProductList from '../../components/product-list/ProductList';
import { mockListData } from '../../components/product-list/mockData';

const meta = {
  title: 'Item/ProductList',
  component: ProductList,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    list: mockListData.map((item) => ({
      id: item.id,
      data: {
        ...item.data,
        images: item.data.images || [],
        onAddToCart: () => {
          console.log('onAddToCart');
        },
        onAddToFavorite: () => {
          console.log('onAddToFavorite');
        },
      },
    })),
  },
};
