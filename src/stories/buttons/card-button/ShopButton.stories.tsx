import type { Meta, StoryObj } from '@storybook/react';
import ShopButton from '../../../components/buttons/card-button/ShopButton';

const meta = {
  title: 'Buttons/ShopButton',
  component: ShopButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ShopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    itemCount: 0,
  },
};
