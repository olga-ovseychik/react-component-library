import { renderHook } from "@testing-library/react";
import { toastsStore } from "../store";
import { useToastsStore } from "../useToastsStore";
import { mockToast } from "./mock-data";
import { act } from "@testing-library/react";


describe('useToastsStore hook', () => {
  beforeEach(() => {
    toastsStore.reset();
    jest.clearAllMocks();
  })

  test('should return current toasts from the store', () => {
    const { result } = renderHook(() => useToastsStore())
    expect(result.current).toEqual([])
  })

  test('should re-render when store changes', () => {
    const { result } = renderHook(() => useToastsStore())

    act(() => {
      toastsStore.addToast(mockToast)
    })

    expect(result.current).toEqual([mockToast])
  })

  test('should stop updating after unmount', () => {
    const subscriber = jest.fn()
    jest.spyOn(toastsStore, 'subscribe').mockReturnValueOnce(subscriber)

    const { unmount } = renderHook(() => useToastsStore())

    unmount();

    expect(subscriber).toHaveBeenCalled()
  })
})