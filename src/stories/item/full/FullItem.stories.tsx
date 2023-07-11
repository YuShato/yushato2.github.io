import type { Meta, StoryObj } from '@storybook/react';

import FullItem from './FullItem';
import { fullDescription } from './mockData';
import { images } from '../../slider/mockData';
import { CATEGORIES, TAGS } from '../../text/full-description/categories/utils/constants/categories';
import { DEFAULT_SIZE, SIZES } from '../../../components/buttons/sizes/utils/constants';
import { PRODUCT_SOCIAL } from '../../../components/buttons/product-social/utils/constants/product-social';

const meta = {
  title: 'Item/FullItem',
  component: FullItem,
  tags: ['autodocs'],
} satisfies Meta<typeof FullItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
