import type { Meta, StoryObj } from "@storybook/react";
import { ButtonPrimary as B } from "./ButtonPrimary";

const meta = {
  title: "Components/ButtonPrimary",
  component: B,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof B>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    font: 'Arial',
    title: "Button",
  },
};
