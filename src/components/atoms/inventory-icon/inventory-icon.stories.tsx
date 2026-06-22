// inventory-icon.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { InventoryIcon } from './inventory-icon';

const meta = {
  component: InventoryIcon,
  title: 'My Game Library/Atoms/InventoryIcon', // 👈 Creates a "Design System" folder -> "Atoms" subfolder
  argTypes: {
    glow: {
      control: 'select',
      options: ['cyan', 'amber', 'red'],
    },
    outline: { control: 'boolean' },
  },
} satisfies Meta<InventoryIcon>;

export default meta;

export const DefaultInventoryIcon: StoryObj = {
  args: {
    src: '',
    alt: 'Carbon',
    glow: 'cyan',
    outline: false,
  },
};
