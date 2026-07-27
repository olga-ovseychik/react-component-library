import { screen } from "@testing-library/react";
import customRenderWithContext from "../../../utils/customRenderWithContext";
import {TabContents} from "../TabContents";
import { TabsContext } from "../hooks/useTabsContext";
import { mockData } from "./mockData";


describe("TabContents Component", () => {
  test("should show contents", () => {
    const providerProps = {
      activeTab: 0,
      handleTabClick: jest.fn(function (index: number) {
        providerProps.activeTab = index;
      }),
    };

    customRenderWithContext(<TabContents items={mockData} />, [
      {
        context: TabsContext,
        value: {...providerProps}
      }
    ]);

    expect(screen.getByTestId("contents-container")).toBeInTheDocument();
  });
});
