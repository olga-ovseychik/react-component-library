import { screen } from "@testing-library/react";
import customRenderWithContext from "../../../utils/customRenderWithContext";
import { AccordionContent } from "../AccordionContent";
import { AccordionItemContext } from "../AccordionItem";
import { AccordionContext } from "../Accordion";

describe("AccordionContent Component", () => {
  test("should renders correctly", () => {
    customRenderWithContext(
      <AccordionContent>
        <></>
      </AccordionContent>,
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

    expect(screen.getByTestId("accordion-content")).toBeInTheDocument();
  });
});
