import type { ReactNode } from "react";

export interface TabsProps {
  children: ReactNode;
}

export interface TabLabelsProps {
  items: {
    id: number;
    label: string;
  }[];
}

export interface TabContentsProps {
  items: {
    id: number;
    content: string;
  }[];
}

export interface TabsContextValue {
  activeTab: number;
  handleTabClick: (index: number) => void;
}
