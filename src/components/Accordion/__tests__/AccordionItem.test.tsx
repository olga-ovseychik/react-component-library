import { screen } from "@testing-library/react";
import customRenderWithContext from "../../../utils/customRenderWithContext";
import { AccordionItem } from "../AccordionItem";
import { AccordionContext } from "../Accordion";

describe("AccordionItem Component", () => {
  test("should renders correctly", () => {
    const providerProps = {
      openItemId: 'item-1',
      toggleItem: jest.fn(function (id: string) {
        providerProps.openItemId = id;
      }),
    };

    customRenderWithContext(
      <AccordionItem id='item-1'>
        <></>
      </AccordionItem>, [
        {
          context: AccordionContext,
          value: {...providerProps}
        }
      ]);

    expect(screen.getByTestId("accordion-item")).toBeInTheDocument();
  });
});
