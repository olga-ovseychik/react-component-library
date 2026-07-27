import { createContext, useCallback, useContext, useMemo } from "react";

import {AccordionItem} from "./AccordionItem";
import {AccordionContent} from "./AccordionContent";
import {AccordionTitle} from "./AccordionTitle";
import { Props, AccordionContextType } from "./types";
import { useControllable } from "../../hooks/useControllable";
import './styles.css'


export const AccordionContext = createContext<AccordionContextType | null>(null);

function toggleMultiple(id: string, openedItems?: string[]): string[] {
  if (openedItems!.includes(id)) {
    return openedItems!.filter(item => item !== id);
  } else {
    return [...openedItems!, id];
  }
}

export function useAccordionContext() {
  const ctx = useContext(AccordionContext)

  if (!ctx) {
    throw new Error('Accordion-related components must be wrapped by <Accordion>.')
  }

  return ctx;
}

export const Accordion = (props: Readonly<Props>)=> {
  const {mode, classname, children} = props;
  const value = mode === 'multiple' ? props.value as string[] : props.value as string;
  const defaultValue = mode === 'multiple' ? props.defaultValue as string[] : props.defaultValue as string;
  const onChange = props.onChange as (value?: string | string[]) => void;

  const {currentValue, onChangeHandler} = useControllable<string | string[] | undefined>(value, defaultValue, onChange);

  const toggleItem = useCallback((id: string)=> {
    if (mode === 'multiple') {
      const opened = toggleMultiple(id, currentValue as string[])
      onChangeHandler(opened)
    } else {
      onChangeHandler(currentValue === id ? undefined : id);
    }
  }, [currentValue, onChangeHandler, mode])

  const contextValue: AccordionContextType = useMemo(() => ({
    openItemId: currentValue,
    toggleItem,
  }), [currentValue, toggleItem])

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={`accordion ${classname ?? ''}`}>
        {children}
      </ul>
    </AccordionContext.Provider>
  )
}

Accordion.Item = AccordionItem;
Accordion.Content = AccordionContent;
Accordion.Title = AccordionTitle;