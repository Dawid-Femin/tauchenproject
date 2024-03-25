import type { Meta, StoryObj } from "@storybook/react";
import { Facebook as F } from "./Facebook";

const meta = {
  title: "Components/Facebook",
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
  },};
