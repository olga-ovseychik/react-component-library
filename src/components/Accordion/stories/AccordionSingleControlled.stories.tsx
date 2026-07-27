import type { Meta, StoryObj } from "@storybook/react-vite";
import {Accordion} from "../Accordion";
import { useState } from "react";
import { mockData } from "../__tests__/mockData";
import { SingleModeArgs } from "../__tests__/types";


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
type Story = StoryObj<SingleModeArgs>;

export const SingleControlledStory: Story = {
  args: {
    mode: 'single',
  },
  render: (args) => {
    const [value, setValue] = useState<string | undefined>(mockData[0].id)
    return (
      <Accordion
        {...args}
        value={value}
        onChange={(val?: string) => {
          setValue(val)
        }}
      >
        <Accordion.Item id={mockData[0].id}>
          <Accordion.Title>{mockData[0].title}</Accordion.Title>
          <Accordion.Content>{mockData[0].content}</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item id={mockData[1].id}>
          <Accordion.Title>{mockData[1].title}</Accordion.Title>
          <Accordion.Content>{mockData[1].content}</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    )}
};
