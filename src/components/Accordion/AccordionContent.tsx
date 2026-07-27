import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";
import { AccordionContentProps } from "./types";


export const AccordionContent = ({ classname, children }: Readonly<AccordionContentProps>) => {
  const {openItemId} = useAccordionContext()
  const {id} = useAccordionItemContext()

  const isOpen =  Array.isArray(openItemId) ? openItemId.includes(id) : openItemId === id

  return (
    <div data-testid='accordion-content'
       className={`${isOpen 
        ? 'open' 
        : 'close'} 
        ${classname ?? ''}`}
    >
      {children}
    </div>
  )
}