import { Toast } from "./types";

let toasts: Toast[] = []
let subscribers: Array<() => void> = []
let timeouts = new Map<number, ReturnType<typeof setTimeout>>();

export const toastsStore = {
  subscribe(callback: () => void) {
    subscribers.push(callback)

    return () => {
      subscribers = subscribers.filter(sub => sub !== callback)
    }
  },
  addToast(toast: Toast) {
    toasts.push(toast)
    emitChange()

    const timeoutID = setTimeout(() => {
      toastsStore.removeToast(toast.id)
    }, 5000);

    timeouts.set(toast.id, timeoutID)
  },
  removeToast(id: number) {
    toasts = toasts.filter(toast => toast.id !== id)
    emitChange();

    clearTimeout(timeouts.get(id));
    timeouts.delete(id);
  },
  getSnapshot() {
    return toasts;
  },
  reset() {
    toasts = []
    subscribers = []
  },
}

function emitChange() {
  subscribers.forEach(fn => fn())
}