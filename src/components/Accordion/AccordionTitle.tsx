import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";
import { AccordionTitleProps } from "./types";


export const AccordionTitle = ({classname, children}: Readonly<AccordionTitleProps>)=> {
  const {toggleItem} = useAccordionContext()
  const {id} = useAccordionItemContext()

  return (
    <button data-testid='accordion-title' onClick={() => toggleItem(id)} className={`accordion-item-title ${classname ?? ''}`}>
      <p >{children}</p>
    </button>
  )
}