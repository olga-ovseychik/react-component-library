import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "../Toggle";
import { useState } from "react";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Uncontrolled: Story = {
  render: () => {
    return (

        <Toggle defaultValue={false}>
          {(isOn, toggle) => (
            <div>
              <input type='checkbox' checked={isOn} onChange={toggle} />
              <label htmlFor="scales">{isOn ? 'Checked' : 'Unchecked'}</label>
            </div>
          )}
        </Toggle>
    )}
};


export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<boolean>(false)

    return (
      <Toggle value={value} onChange={setValue}>
        {(isOn, toggle) => (
          <div>
            <input type='checkbox' checked={isOn} onChange={toggle} />
            <label htmlFor="scales">{isOn ? 'Checked' : 'Unchecked'}</label>
          </div>
        )}
      </Toggle>
    )}
};
