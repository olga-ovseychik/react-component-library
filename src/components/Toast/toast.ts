import { Toast } from "./types";
import { toastsStore } from "./store";

let id = 0;

export const toast = {
  info(message: string) {
    const infoToast: Toast = {
      message,
      type: 'info',
      id: ++id,
    }

    toastsStore.addToast(infoToast);
  },
  success(message: string) {
    const successToast: Toast = {
      message,
      type: 'success',
      id: ++id,
    }

    toastsStore.addToast(successToast);
  },
  warning(message: string) {
    const warningToast: Toast = {
      message,
      type: 'warning',
      id: ++id,
    }

    toastsStore.addToast(warningToast);
  },
  error(message: string) {
    const errorToast: Toast = {
      message,
      type: 'error',
      id: ++id,
    }

    toastsStore.addToast(errorToast);
  },
  dismiss(toastId: number) {
    toastsStore.removeToast(toastId)
  }
}