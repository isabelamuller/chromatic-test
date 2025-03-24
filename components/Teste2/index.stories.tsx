import type { Meta, StoryObj } from '@storybook/react';

import { Teste1 } from './index';

const meta = {
  component: Teste1,
} satisfies Meta<typeof Teste1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};