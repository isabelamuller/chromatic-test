import type { Meta, StoryObj } from '@storybook/react';

import { Teste } from './index';

const meta = {
  component: Teste,
} satisfies Meta<typeof Teste>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};