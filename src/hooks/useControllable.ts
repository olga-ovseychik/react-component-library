import { useState } from "react";

export function useControllable<T>(value?: T, defaultValue?: T, onChange?: (value: T) => void) {
  const [internalValue, setInternalValue] = useState<T | undefined>(defaultValue)

  const isControlled = value !== undefined

  const currentValue = isControlled ? value : internalValue

  const onChangeHandler = (newValue: T) => {
    if (isControlled) {
      if (onChange) onChange(newValue)
    } else {
      setInternalValue(newValue)
    }
  }

  return {
    currentValue,
    onChangeHandler
  }
}