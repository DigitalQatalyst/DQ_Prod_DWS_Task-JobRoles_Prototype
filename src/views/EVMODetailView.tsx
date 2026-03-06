import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import DQTabs from '../components/DQTabs';
import Footer from '../components/Footer';
import { evmoData } from '../data/evmo';

interface EVMODetailViewProps {
  onNavigate: (view: string, id?: string) => void;
}

const EVMODetailView = ({ onNavigate }: EVMODetailViewProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  const d = evmoData;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    ...d.workstreams.map((w) => ({ id: w.id, label: w.tabLabel })),
  ];

  const activeWorkstream = d.workstreams.find((w) => w.id === activeTab);

  return (
    <div>
      <HeroSection
        breadcrumbs={[
          { label: 'Home', onClick: () => onNavigate('home') },
          { label: 'Task & Job Roles', onClick: () => onNavigate('home') },
          { label: 'Task Templates', onClick: () => onNavigate('home') },
          { label: 'CoE', onClick: () => onNavigate('coe') },
          { label: 'EVMO' },
        ]}
        tagPill={d.tagPill}
        meta={d.meta}
        title={d.title}
        subtitle={d.subtitle}
      />

      <div className="bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <DQTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {activeTab === 'overview' && (
            <div>
              <p className="text-sm text-muted-foreground max-w-[820px] leading-relaxed mb-8">{d.overview.intro}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Mission - full width */}
                <div className="md:col-span-2 rounded-xl bg-muted p-6">
                  <h3 className="font-bold text-foreground mb-2">Mission</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.overview.mission}</p>
                </div>

                <div className="rounded-xl bg-muted p-6">
                  <h3 className="font-bold text-foreground mb-3">Strategic Focus Areas</h3>
                  <ul className="space-y-2">
                    {d.overview.strategicFocus.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#2563eb' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl bg-muted p-6">
                  <h3 className="font-bold text-foreground mb-3">Key Benefits to DQ</h3>
                  <ul className="space-y-2">
                    {d.overview.keyBenefits.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#16a34a' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeWorkstream && (
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{
                  background: `${activeWorkstream.color}15`,
                  color: activeWorkstream.color,
                  border: `1px solid ${activeWorkstream.color}30`,
                }}
              >
                {activeWorkstream.name}
              </span>

              <p className="text-sm text-muted-foreground max-w-[820px] leading-relaxed mb-6">{activeWorkstream.intro}</p>

              {/* Formula */}
              <div className="formula-box rounded-lg p-4 mb-8 text-sm">
                {activeWorkstream.formula}
              </div>

              {/* Sections grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {activeWorkstream.sections.map((sec) => {
                  const isFullWidth = sec.title === 'Approach' || sec.title === 'Checklist CLS';
                  return (
                    <div key={sec.title} className={`rounded-xl border border-border bg-surface p-5 ${isFullWidth ? 'md:col-span-2' : ''}`}>
                      <h4 className="font-bold text-foreground mb-2">{sec.title}</h4>
                      {sec.title === 'Checklist CLS' ? (
                        <div className="space-y-1.5">
                          {sec.content.split('\n').map((line, i) => (
                            <div key={i} className="flex items-start gap-3 text-sm">
                              <span className="font-mono text-xs shrink-0" style={{ color: '#2563eb' }}>
                                {line.split(' → ')[0]}
                              </span>
                              <span className="text-muted-foreground">→ {line.split(' → ')[1]}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground leading-relaxed">{sec.content}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EVMODetailView;
