import { useState } from 'react';
import { Search } from 'lucide-react';
import DQBreadcrumb from '../components/Breadcrumb';
import DQTabs from '../components/DQTabs';
import FilterPanel from '../components/FilterPanel';
import GHCCard from '../components/GHCCard';
import { sectors } from '../data/sectors';

interface CoEViewProps {
  onNavigate: (view: string, id?: string) => void;
}

const coeTeamFilters = [
  { id: 'evmo', label: 'EVMO' },
  { id: 'simo', label: 'SIMO' },
  { id: 'dpmo', label: 'DPMO' },
  { id: 'pcmo', label: 'PCMO' },
];

const CoEView = ({ onNavigate }: CoEViewProps) => {
  const [teamFilter, setTeamFilter] = useState('all');
  const [search, setSearch] = useState('');
  const coe = sectors.find((s) => s.id === 'coe')!;
  const teams = coe.teams || [];

  const filteredTeams = teams.filter((t) => {
    if (teamFilter !== 'all' && t.id !== teamFilter) return false;
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.fullName.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ paddingTop: '56px' }}>
      {/* White header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <DQBreadcrumb
            items={[
              { label: 'Home', onClick: () => onNavigate('home') },
              { label: 'Task & Job Roles', onClick: () => onNavigate('home') },
              { label: 'Task Templates', onClick: () => onNavigate('home') },
              { label: 'CoE' },
            ]}
            variant="light"
          />
          <h1 className="mt-4 text-[26px] font-extrabold text-foreground">CoE — Centre of Excellence</h1>
          <p className="mt-1 text-sm text-muted-foreground max-w-2xl">
            Quality governance, performance intelligence and capability building across DQ.
          </p>
          <div className="mt-6">
            <DQTabs
              tabs={[{ id: 'teams', label: 'Teams' }]}
              activeTab="teams"
              onTabChange={() => {}}
            />
          </div>
        </div>
      </div>

      {/* Strip */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-2.5">
          <p className="text-xs text-muted-foreground">Select a team to explore their task templates. EVMO templates are live.</p>
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
              placeholder="Search teams..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-surface text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-background min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <div className="flex gap-8">
            <FilterPanel
              items={coeTeamFilters}
              activeId={teamFilter}
              onSelect={setTeamFilter}
              allLabel="All Teams"
              allCount={4}
            />
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {filteredTeams.map((t) => (
                <GHCCard
                  key={t.id}
                  title={t.name}
                  coverClass={t.coverClass}
                  description={t.description}
                  chips={t.chips}
                  meta={t.meta}
                  dimmed={!t.active}
                  onClick={t.active ? () => onNavigate('evmo') : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoEView;
