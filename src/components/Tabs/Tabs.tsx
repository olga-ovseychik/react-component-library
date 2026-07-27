import { useMemo, useState } from "react";
import { TabsProps, TabsContextValue } from "./types";
import { TabContents } from './TabContents'
import { TabLabels }  from "./TabLabels";
import { TabsContext } from "./hooks/useTabsContext";
import "./styles.css";


export const Tabs = ({ children }: Readonly<TabsProps>)=> {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const ctxValue: TabsContextValue = useMemo(
    () => ({
      activeTab,
      handleTabClick,
    }),
    [activeTab],
  );

  return (
    <TabsContext.Provider value={ctxValue}>
      <div className="container" data-testid="children-container">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

Tabs.Labels = TabLabels;
Tabs.Contents = TabContents;
