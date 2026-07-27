import { useTabsContext } from "./hooks/useTabsContext";
import { TabLabelsProps } from "./types";

export const TabLabels = ({ items }: Readonly<TabLabelsProps>) => {
  const { handleTabClick, activeTab } = useTabsContext();

  return (
    <div className="label" data-testid="labels-container">
      {items.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => {
            handleTabClick(id);
          }}
          style={{
            backgroundColor: activeTab === id ? "red" : "",
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
