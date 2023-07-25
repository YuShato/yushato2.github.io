import { Meta, StoryObj } from '@storybook/react';
import ShortItem from '../../../components/item/short/ShortItem';
import { images } from '../../../components/slider/mockData';
const { v4: uuidv4 } = require('uuid');

const meta = {
  title: 'Item/ShortItem',
  component: ShortItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ShortItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: uuidv4(),
    data: {
      title: 'Barberton Daisy',
      newPrice: 199,
      oldPrice: 229,
      images: images,
      discount: 13,
      onAddToCart: () => {
        console.log('onAddToCart');
      },
      onAddToFavorite: () => {
        console.log('onAddToFavorite');
      },
      description:
        'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
    },
  },
};