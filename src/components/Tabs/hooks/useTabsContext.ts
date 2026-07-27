import {TabsContextValue} from "../types";
import { createContext, useContext } from "react";

export const TabsContext = createContext<TabsContextValue | null>(null);

export const useTabsContext = (): TabsContextValue => {
    const ctx = useContext(TabsContext);

    if (!ctx) {
        throw new Error(
            "useTabsContext must be used within a TabsContext.Provider",
        );
    }

    return ctx;
}