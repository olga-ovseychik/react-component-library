import { ReactNode } from "react";

export type Toast = {
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  id: number;
}

export type ToastContainerProps = {
  renderToast: (toast: Toast) => ReactNode;
  container?: HTMLElement;
}