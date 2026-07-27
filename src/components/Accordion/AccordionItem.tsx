import { createContext, ReactNode, useContext, useMemo } from "react";
import {AccordionItemProps, AccordionItemContextType} from './types'


export const AccordionItemContext = createContext<AccordionItemContextType | null>(null)

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext)

  if (!ctx) {
    throw new Error('AccordionItem-related components must be wrapped by <Accordion.Item>.')
  }

  return ctx;
}

export const AccordionItem = ({id, classname, children}: Readonly<AccordionItemProps>) => {
  const contextValue = useMemo(() => (
    {id}
  ), [id])

  return (
    <AccordionItemContext.Provider value={contextValue}>
      <li className={`accordion-item ${classname ?? ''}`} data-testid='accordion-item'>
        {children}
      </li>
    </AccordionItemContext.Provider>
  )
}