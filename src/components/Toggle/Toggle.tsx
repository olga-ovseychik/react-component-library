import { ToggleProps } from "./types";
import { useControllable } from "../../hooks/useControllable";

export const Toggle = (props: Readonly<ToggleProps>) => {
  const {currentValue, onChangeHandler} = useControllable<boolean>(props.value, props.defaultValue, props.onChange);

  return (
    <>
      {props.children?.(currentValue ?? false, () => onChangeHandler(!currentValue))}
    </>
  )
}