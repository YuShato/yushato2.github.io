import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../../../../components/common/modals/modal/Modal';

const meta = {
  title: 'Common/Modals/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    visible: true,
    children: 'Open Modal',
  },
};
