import type { Meta, StoryObj } from '@storybook/react';
import ProductSocialList from '../../../components/buttons/product-social/ProductSocial';
import { PRODUCT_SOCIAL } from '../../../components/buttons/product-social/utils/constants/product-social';

const meta = {
  title: 'Buttons/ProductSocial',
  component: ProductSocialList,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductSocialList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    list: PRODUCT_SOCIAL,
  },
  argTypes: {
    list: { control: 'check', options: { ...PRODUCT_SOCIAL } },
  },
};
