import { screen, render } from "@testing-library/react";
import {Tabs} from "../Tabs";
import {TabLabels} from "../TabLabels";
import { mockData } from "./mockData";

describe("Tabs Component", () => {
  test("should render children component", () => {
    render(
      <Tabs>
        <TabLabels items={mockData} />
      </Tabs>,
    );

    expect(screen.getByTestId("children-container")).toBeInTheDocument();
  });
});
