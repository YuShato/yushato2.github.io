import { images } from '../../components/slider/mockData';
import type { Meta, StoryObj } from '@storybook/react';
import ProductSlider from '../../components/slider/Slider';

const meta = {
  title: 'Slider/ProductSlider',
  component: ProductSlider,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: images,
  },
};
