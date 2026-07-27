import { useTabsContext } from "./hooks/useTabsContext";
import { TabContentsProps } from "./types";

export const TabContents = ({ items }: Readonly<TabContentsProps>) => {
  const { activeTab } = useTabsContext();
  const { id, content } = items[activeTab];

  return (
    <div key={id} className="content" data-testid="contents-container">
      {content}
    </div>
  );
}
