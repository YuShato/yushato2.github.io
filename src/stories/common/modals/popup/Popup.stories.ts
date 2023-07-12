import type { Meta, StoryObj } from '@storybook/react';
import Popup from '../../../../components/common/modals/popup';

const meta = {
  title: 'Common/Modals/Popup',
  component: Popup,
  tags: ['autodocs'],
} satisfies Meta<typeof Popup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {};
