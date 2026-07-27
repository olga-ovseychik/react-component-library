import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from 'storybook/test';
import { TabContents } from "../TabContents";
import { TabsContext } from "../hooks/useTabsContext";
import { TabsContextValue } from "../types";

const mockTabsData = [
    { id: 0, label: "Tab 1", content: "Content 1" },
];

const mockCtxValue: TabsContextValue = {
    activeTab: 0,
    handleTabClick: fn()
}

const meta = {
    title: "Components/Tabs/TabContents",
    component: TabContents,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof TabContents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: mockTabsData
    },
    decorators: [
        (Story) => (
            <TabsContext.Provider
                value={mockCtxValue}>
                <Story/>
            </TabsContext.Provider>
        )
    ]
};
