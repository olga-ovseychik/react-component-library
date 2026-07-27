import { ReactNode } from "react";

export interface ToggleProps {
  children?: (isOn: boolean, toggle: () => void) => ReactNode;
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
}