import { screen } from "@testing-library/react";
import customRenderWithContext from "../../../utils/customRenderWithContext";
import { AccordionTitle } from "../AccordionTitle";
import { AccordionItemContext } from "../AccordionItem";
import { AccordionContext } from "../Accordion";

describe("AccordionTitle Component", () => {
  test("should renders correctly", () => {
    customRenderWithContext(
      <AccordionTitle>
        <></>
      </AccordionTitle>,
      [
        {
          context: AccordionItemContext,
          value: {id: 'item-1'}
        },
        {
          context: AccordionContext,
          value: {
            openItemId: 'item-1',
            toggleItem: jest.fn(),
          }
        }
      ]
    );

    expect(screen.getByTestId("accordion-title")).toBeInTheDocument();
  });
});
