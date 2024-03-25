import type { Meta, StoryObj } from "@storybook/react";
import { HorizontalSection as H } from "./HorizontalSection";

const meta = {
  title: "Components/HorizontalSection",
  component: H,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof H>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
