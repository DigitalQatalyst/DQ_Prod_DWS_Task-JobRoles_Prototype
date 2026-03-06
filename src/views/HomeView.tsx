import { useState } from 'react';
import { Search } from 'lucide-react';
import DQBreadcrumb from '../components/Breadcrumb';
import DQTabs from '../components/DQTabs';
import FilterPanel from '../components/FilterPanel';
import GHCCard from '../components/GHCCard';
import { standards } from '../data/standards';
import { sectors, sectorFilterGroups } from '../data/sectors';

interface HomeViewProps {
  onNavigate: (view: string, id?: string) => void;
}

const standardFilters = [
  { id: 'task-naming', label: 'Task Naming' },
  { id: 'context', label: 'Context' },
  { id: 'purpose', label: 'Purpose' },
  { id: 'approach', label: 'Approach' },
  { id: 'outcome', label: 'Outcome' },
  { id: 'links', label: 'Links' },
  { id: 'checklist', label: 'Checklist (CLS)' },
];

const HomeView = ({ onNavigate }: HomeViewProps) => {
  const [activeTab, setActiveTab] = useState('standards');
  const [standardFilter, setStandardFilter] = useState('all');
  const [sectorFilter, setSectorFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredStandards = standards.filter((s) => {
    if (standardFilter !== 'all' && s.id !== standardFilter) return false;
    if (search && !s.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const filteredSectors = sectors.filter((s) => {
    if (sectorFilter !== 'all' && s.id !== sectorFilter) return false;
    if (search && !s.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const stripText = activeTab === 'standards'
    ? 'Explore the 7 governance standards that define how every DQ task is structured and executed.'
    : 'Browse task templates by sector. Select a sector to explore team-level templates.';

  return (
    <div style={{ paddingTop: '56px' }}>
      {/* White header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <DQBreadcrumb
            items={[
              { label: 'Home', onClick: () => onNavigate('home') },
              { label: 'Task & Job Roles' },
            ]}
            variant="light"
          />
          <h1 className="mt-4 text-[26px] font-extrabold text-foreground">Task & Job Roles</h1>
          <p className="mt-1 text-sm text-muted-foreground max-w-2xl">
            The central reference for how DQ tasks are structured, named and executed across all sectors.
          </p>

          <div className="mt-6">
            <DQTabs
              tabs={[
                { id: 'standards', label: 'Task Standards' },
                { id: 'templates', label: 'Task Templates' },
              ]}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </div>
      </div>

      {/* Grey strip */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-2.5">
          <p className="text-xs text-muted-foreground">{stripText}</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${activeTab === 'standards' ? 'standards' : 'sectors'}...`}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-surface text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-background min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 pb-12">
          {activeTab === 'standards' ? (
            <div className="flex gap-8">
              <FilterPanel
                label="Task Standards"
                items={standardFilters}
                activeId={standardFilter}
                onSelect={setStandardFilter}
                allCount={7}
              />
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredStandards.map((s) => (
                  <GHCCard
                    key={s.id}
                    number={s.number}
                    title={s.name}
                    coverClass={s.coverClass}
                    description={s.description}
                    onClick={() => onNavigate('standard', s.id)}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex gap-8">
              <FilterPanel
                label="Sectors"
                groups={sectorFilterGroups}
                activeId={sectorFilter}
                onSelect={setSectorFilter}
                allCount={5}
              />
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredSectors.map((s) => (
                  <GHCCard
                    key={s.id}
                    title={s.name}
                    coverClass={s.coverClass}
                    description={s.description}
                    dimmed={!s.active}
                    onClick={s.active ? () => onNavigate('coe') : undefined}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
