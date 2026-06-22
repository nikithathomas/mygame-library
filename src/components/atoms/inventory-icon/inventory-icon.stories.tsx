// inventory-icon.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { InventoryIcon } from './inventory-icon';

const meta = {
  component: InventoryIcon,
  title: 'My Game Library/Atoms/InventoryIcon', // 👈 Creates a "Design System" folder -> "Atoms" subfolder
  argTypes: {
    src: {
      control: 'select',
      options: ['./raw-materials/sodium.webp'],
    },
    alt: { control: 'text' },
    outline: { control: 'boolean' },
  },
} satisfies Meta<InventoryIcon>;

export default meta;

export const DefaultInventoryIcon: StoryObj = {
  args: {
    src: '',
    alt: 'Carbon',
    outline: false,
  },
};
