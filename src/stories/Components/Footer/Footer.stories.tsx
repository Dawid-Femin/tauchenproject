import type { Meta, StoryObj } from "@storybook/react";
import { Footer as F } from "./Footer";

const meta = {
    title: "Components/Footer",
    component: F,
    parameters: {},
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof F>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        font: 'Arial'
    },
};
