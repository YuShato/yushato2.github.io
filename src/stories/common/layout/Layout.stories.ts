import React from 'react';

import Layout from '../../../components/common/layout/Layout';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPage: Story = {
  args: {
    children: React.createElement('div', {}, 'Content'),
  },
};
