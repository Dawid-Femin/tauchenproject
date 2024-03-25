import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Header as H } from './Header';

const meta = {
    title: 'Components/Header',
    component: H,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: { onClick: fn() },
} satisfies Meta<typeof H>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};