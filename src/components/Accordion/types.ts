import { ReactNode } from "react";

export interface SingleProps {
  mode: "single"
  value?: string
  defaultValue?: string
  onChange?: (id: string | undefined) => void,
  classname?: string
  children?: ReactNode
}

export interface MultipleProps {
  mode: "multiple"
  value?: string[]
  defaultValue?: string[]
  onChange?: (id: string[] | undefined) => void,
  classname?: string
  children?: ReactNode
}

export type Props = SingleProps | MultipleProps

export interface AccordionItemProps {
  id: string,
  classname?: string,
  children: ReactNode
}

export interface AccordionItemContextType {
  id: string
}

export type AccordionContextType = {
  openItemId?: string | string[],
  toggleItem: (id: string) => void,
}

export type AccordionContentProps = {
  classname?: string,
  children: ReactNode,
}

export type AccordionTitleProps = {
  classname?: string,
  children: ReactNode,
}