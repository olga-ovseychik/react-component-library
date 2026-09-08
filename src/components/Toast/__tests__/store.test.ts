import { toastsStore } from "../store";
import { mockToast } from "./mock-data";

const mockSubscriber = jest.fn();

describe('Toast store', () => {
  beforeEach(() => {
    toastsStore.reset();
    jest.clearAllMocks();
  })

  test('should return current toasts', () => {
    const toasts = toastsStore.getSnapshot()
    expect(toasts).toHaveLength(0)
  })

  test('should be able to add toast to the list', () => {
    toastsStore.addToast(mockToast)
    const toasts = toastsStore.getSnapshot()
    expect(toasts).toHaveLength(1)
  })

  test('should be able to remove the correct toast by id', () => {
    toastsStore.addToast(mockToast)
    toastsStore.removeToast(1)
    const toasts = toastsStore.getSnapshot()
    expect(toasts).toHaveLength(0)
  })

  test('should return an unsubscribe function that actually unsubscribes', () => {
    const unsubscribe = toastsStore.subscribe(mockSubscriber)
    unsubscribe()
    toastsStore.addToast(mockToast)
    expect(mockSubscriber).not.toHaveBeenCalled()
  })

  test('should notify all subscribers when toast is added/removed', () => {
    toastsStore.subscribe(mockSubscriber)
    toastsStore.addToast(mockToast)
    expect(mockSubscriber).toHaveBeenCalled()
  })
})