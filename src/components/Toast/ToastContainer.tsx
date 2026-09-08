import { useToastsStore } from "./useToastsStore";
import { Toast, ToastContainerProps } from "./types";
import { createPortal } from "react-dom";

export const ToastContainer = ({renderToast, container}: ToastContainerProps) => {
  const toasts: Toast[] = useToastsStore();

  const mappedToasts = toasts.map((toast) => (
    <div key={toast.id}>
      {renderToast(toast)}
    </div>
  ));

  return (
    createPortal(mappedToasts, container ?? document.body)
  )
}