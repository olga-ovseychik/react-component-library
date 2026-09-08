import { useSyncExternalStore } from "react";
import { toastsStore } from "./store";
import { Toast } from "./types";

export function useToastsStore(): Toast[] {
  return useSyncExternalStore(toastsStore.subscribe, toastsStore.getSnapshot);
}