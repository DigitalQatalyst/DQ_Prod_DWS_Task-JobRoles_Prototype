import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import DQTabs from '../components/DQTabs';
import Footer from '../components/Footer';
import { standards } from '../data/standards';
import FormulaSection from '../components/FormulaSection';

interface StandardDetailViewProps {
  standardId: string;
  onNavigate: (view: string, id?: string) => void;
}

const StandardDetailView = ({ standardId, onNavigate }: StandardDetailViewProps) => {
  const standard = standards.find((s) => s.id === standardId);
  const [activeTab, setActiveTab] = useState('overview');

  if (!standard) return <div className="pt-20 text-center">Standard not found</div>;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'practice', label: 'In DQ Practice' },
    { id: 'governance', label: 'Governance Rule' },
  ];

  return (
    <div>
      <HeroSection
        breadcrumbs={[
          { label: 'Home', onClick: () => onNavigate('home') },
          { label: 'Task & Job Roles', onClick: () => onNavigate('home') },
          { label: 'Task Standards', onClick: () => onNavigate('home') },
          { label: standard.name },
        ]}
        tagPill={`Standard ${standard.number} · Task Standards`}
        meta={`Standard ${standard.number}`}
        title={standard.name}
        subtitle={standard.subtitle}
      />

      {/* White section with tabs */}
      <div className="bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <DQTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {activeTab === 'overview' && (
            <div>
              <p className="text-sm text-muted-foreground max-w-[820px] leading-relaxed">{standard.description}</p>
              <h2 className="mt-8 text-lg font-bold text-foreground">{standard.name} Highlights</h2>
              <div className="mt-4 space-y-3">
                {standard.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#16a34a' }} />
                    <p className="text-sm">
                      <span className="font-semibold text-foreground">{h.label}</span>
                      <span className="text-muted-foreground"> — {h.description}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'practice' && (
            <div>
              {standard.practiceContent.type === 'task-naming' ? (
                <FormulaSection />
              ) : (
                <div>
                  <p className="text-sm text-muted-foreground max-w-[820px] leading-relaxed mb-8">{standard.description}</p>
                  {standard.practiceContent.sections?.map((sec, i) => (
                    <div key={i} className="mb-6">
                      <h3 className="text-base font-bold text-foreground mb-2">{sec.heading}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-[820px]">{sec.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'governance' && (
            <div>
              <p className="text-sm text-muted-foreground mb-6">
                What is enforced, and when — across every stage of the task.
              </p>
              <div className="space-y-4">
                {standard.governanceRules.map((rule, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 border"
                    style={{
                      background: `${rule.color}08`,
                      borderColor: `${rule.color}25`,
                    }}
                  >
                    <h4 className="font-bold text-foreground mb-1">{rule.title}</h4>
                    <p className="text-sm text-muted-foreground">{rule.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StandardDetailView;
