import { screen } from "@testing-library/react";
import customRenderWithContext from "../../../utils/customRenderWithContext";
import {TabLabels} from "../TabLabels";
import { TabsContext } from "../hooks/useTabsContext";
import { mockData } from "./mockData";


describe("TabLabels Component", () => {
  test("should show labels", () => {
    const providerProps = {
      activeTab: 0,
      handleTabClick: jest.fn(function (index: number) {
        providerProps.activeTab = index;
      }),
    };

    customRenderWithContext(<TabLabels items={mockData} />, [
      {
        context: TabsContext,
        value: {...providerProps}
      }
    ]);

    expect(screen.getByTestId("labels-container")).toBeInTheDocument();
  });
});
