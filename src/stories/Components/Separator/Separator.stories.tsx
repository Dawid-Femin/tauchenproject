import type { Meta, StoryObj } from "@storybook/react";
import { Separator as S } from "./Separator";

const meta = {
    title: "Components/Separator",
    component: S,
    parameters: {},
    tags: ["autodocs"],
    argTypes: {
        font: { control: { type: "object" } },
    },
    args: {
        font: "inter",
    },
} satisfies Meta<typeof S>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
