import type { Meta, StoryObj } from "@storybook/react-vite";
import {TabLabels} from "../TabLabels";
import {TabContents} from "../TabContents";
import {Tabs} from "../Tabs";

const mockTabsData = [
  { id: 0, label: "Tab 1", content: "Content 1" },
  { id: 1, label: "Tab 2", content: "Content 2" },
];

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TabLabels items={mockTabsData}></TabLabels>
        <TabContents items={mockTabsData}></TabContents>
      </>
    ),
  },
};
