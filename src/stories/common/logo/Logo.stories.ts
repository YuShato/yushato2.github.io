import type { Meta, StoryObj } from '@storybook/react';
import Logo from '../../../components/common/logo/Logo';

const meta = {
  title: 'Common/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    viewtype: { control: 'radio' },
  },
} satisfies Meta<typeof Logo>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    viewtype: 'default',
  },
};

export const Big: Story = {
  args: {
    viewtype: 'big',
  },
};

export const Mobile: Story = {
  args: {
    viewtype: 'mobile',
  },
};

export default meta;
