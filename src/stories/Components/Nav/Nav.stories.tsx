import type { Meta, StoryObj } from "@storybook/react";
import { Nav as N } from "./Nav";

const meta = {
  title: "Components/Nav",
  component: N,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    font: { control: { type: "object" } },
  },
  args: {
    font: "inter",
  },
} satisfies Meta<typeof N>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    font: { control: { type: "object" } },
  },
};
