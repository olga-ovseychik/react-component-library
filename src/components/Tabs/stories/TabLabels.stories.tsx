import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from 'storybook/test';
import { TabLabels } from "../TabLabels";
import { TabsContext } from "../hooks/useTabsContext";

const mockTabsData = [
    { id: 0, label: "Tab 1", content: "Content 1" },
];

const meta = {
    title: "Components/Tabs/TabLabels",
    component: TabLabels,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof TabLabels>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTabLabel: Story = {
    args: {
        items: mockTabsData
    },
    decorators: [
        (Story) => (
            <TabsContext.Provider
                value={{activeTab: 1, handleTabClick: fn(),}}>
                <Story/>
            </TabsContext.Provider>
        )
    ]
};

export const ActiveTabLabel: Story = {
    args: {
        items: mockTabsData
    },
    decorators: [
        (Story) => (
            <TabsContext.Provider
                value={{activeTab: 0, handleTabClick: fn(),}}>
                <Story/>
            </TabsContext.Provider>
        )
    ]
};
