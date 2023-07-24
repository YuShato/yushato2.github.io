import type { Meta, StoryObj } from '@storybook/react';
import { fullDescription } from '../../../components/item/full/mockData';
import { images } from '../../../components/slider/mockData';
import { DEFAULT_SIZE, SIZES } from '../../../components/buttons/sizes/utils/constants';
import { PRODUCT_SOCIAL } from '../../../components/buttons/product-social/utils/constants/product-social';
import FullItem from '../../../components/item/full/FullItem';
import { CATEGORIES, TAGS } from '../../../components/text/categories/utils/constants/categories';

const meta = {
  title: 'Item/FullItem',
  component: FullItem,
  tags: ['autodocs'],
} satisfies Meta<typeof FullItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    data: {
      name: 'Barberton Daisy',
      price: 119,
      itemCount: 1,
      activeSize: DEFAULT_SIZE,
      reviewCount: 19,
      rating: 4,
      sku: 1995751877966,
      categories: CATEGORIES,
      tags: TAGS,
      onAddToCart: () => {
        console.log('onAddToCart');
      },
      onAddToFavorite: () => {
        console.log('onAddToFavorite');
      },
      shortDescription:
        'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
      fullDescription: fullDescription,
      images,
      productSocial: PRODUCT_SOCIAL,
      sizes: SIZES,
    },
  },
  argTypes: {
    data: {
      categories: {
        list: { control: 'check', options: { ...CATEGORIES } },
      },
    },
  },
};
