import type { Meta, StoryObj } from "@storybook/react";
import { Slider as S } from "./Slider";

const meta = {
  title: "Components/Slider",
  component: S,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof S>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    font: 'Arial',
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title 1",
      },
      {
        id: "2",
        url: "https://images.unsplash.com/photo-1647828150413-1717ace5bac2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title 2",
      },
      {
        id: "3",
        url: "https://images.unsplash.com/photo-1682687982423-295485af248a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title 3",
      },
      {
        id: "4",
        url: "https://images.unsplash.com/photo-1682687218904-de46ed992b58?q=80&w=2143&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title 4",
      },
      {
        id: "5",
        url: "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title 5",
      },
    ],
  },
};
