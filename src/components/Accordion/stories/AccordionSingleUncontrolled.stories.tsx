import type { Meta, StoryObj } from "@storybook/react-vite";
import {Accordion} from "../Accordion";
import { mockData } from "../__tests__/mockData";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleUncontrolledStory: Story = {
  args: {
    mode: 'single',
    defaultValue: 'default-value'
  },
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item id={mockData[0].id}>
        <Accordion.Title>{mockData[0].title}</Accordion.Title>
        <Accordion.Content>{mockData[0].content}</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item id={mockData[1].id}>
        <Accordion.Title>{mockData[1].title}</Accordion.Title>
        <Accordion.Content>{mockData[1].content}</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
};