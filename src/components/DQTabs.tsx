interface DQTabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

const DQTabs = ({ tabs, activeTab, onTabChange }: DQTabsProps) => {
  return (
    <div className="border-b" style={{ borderColor: '#e5e7eb' }}>
      <div className="flex gap-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="dq-tab"
            style={activeTab === tab.id ? { color: 'hsl(var(--foreground))', borderBottomColor: '#2563eb' } : {}}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DQTabs;
