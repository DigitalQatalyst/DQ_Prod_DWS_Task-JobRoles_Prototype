import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface FilterItem {
  id: string;
  label: string;
  count?: number;
}

interface FilterGroup {
  id: string;
  label: string;
  expandable: boolean;
  children?: FilterItem[];
}

interface FilterPanelProps {
  label?: string;
  items?: FilterItem[];
  groups?: FilterGroup[];
  activeId: string;
  onSelect: (id: string) => void;
  allLabel?: string;
  allCount?: number;
}

const FilterPanel = ({ label, items, groups, activeId, onSelect, allLabel = 'See All', allCount }: FilterPanelProps) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ coe: true });

  const renderItem = (item: FilterItem, indent = false) => {
    const isActive = activeId === item.id;
    return (
      <button
        key={item.id}
        onClick={() => onSelect(item.id)}
        className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${indent ? 'pl-8' : ''}`}
        style={isActive ? { background: 'rgba(37,99,235,0.1)', color: '#2563eb' } : { color: 'hsl(var(--foreground))' }}
      >
        {isActive && <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#2563eb' }} />}
        <span className="flex-1">{item.label}</span>
        {item.count !== undefined && <span className="text-xs text-muted-foreground">{item.count}</span>}
      </button>
    );
  };

  return (
    <div className="w-[210px] shrink-0">
      {label && <p className="text-xs font-semibold mb-2 px-3 text-muted-foreground uppercase tracking-wide">{label}</p>}

      {/* Simple items */}
      {items && (
        <>
          <button
            onClick={() => onSelect('all')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors"
            style={activeId === 'all' ? { background: 'rgba(37,99,235,0.1)', color: '#2563eb' } : { color: 'hsl(var(--foreground))' }}
          >
            {activeId === 'all' && <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#2563eb' }} />}
            <span className="flex-1">{allLabel}</span>
            {allCount !== undefined && <span className="text-xs text-muted-foreground">{allCount}</span>}
          </button>
          <div className="h-px bg-border my-1 mx-3" />
          {items.map((item) => renderItem(item))}
        </>
      )}

      {/* Groups */}
      {groups && (
        <>
          <button
            onClick={() => onSelect('all')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors"
            style={activeId === 'all' ? { background: 'rgba(37,99,235,0.1)', color: '#2563eb' } : { color: 'hsl(var(--foreground))' }}
          >
            {activeId === 'all' && <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#2563eb' }} />}
            <span className="flex-1">{allLabel}</span>
            {allCount !== undefined && <span className="text-xs text-muted-foreground">{allCount}</span>}
          </button>
          <div className="h-px bg-border my-1 mx-3" />
          {groups.map((group) => (
            <div key={group.id}>
              {group.expandable ? (
                <>
                  <button
                    onClick={() => setExpanded((prev) => ({ ...prev, [group.id]: !prev[group.id] }))}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-muted transition-colors"
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 transition-transform"
                      style={{ transform: expanded[group.id] ? 'rotate(90deg)' : 'rotate(0deg)' }}
                    />
                    <span>{group.label}</span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-200"
                    style={{ maxHeight: expanded[group.id] ? '300px' : '0px' }}
                  >
                    {group.children?.map((child) => renderItem(child, true))}
                  </div>
                </>
              ) : (
                <button
                  onClick={() => onSelect(group.id)}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors"
                  style={activeId === group.id ? { background: 'rgba(37,99,235,0.1)', color: '#2563eb' } : { color: 'hsl(var(--foreground))' }}
                >
                  {activeId === group.id && <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#2563eb' }} />}
                  <span>{group.label}</span>
                </button>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FilterPanel;
