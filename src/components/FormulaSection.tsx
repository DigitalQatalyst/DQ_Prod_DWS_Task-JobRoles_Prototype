import { useState, useRef } from 'react';

const formulaParts = [
  { tag: 'UNIT', name: 'DQ Unit', desc: 'The team or division', tooltip: 'The DigitalQatalyst unit that owns this task' },
  { tag: 'COMPETENCE', name: 'Competence', desc: 'The skill domain', tooltip: '' },
  { tag: 'PROGRESS', name: 'WiPxx', desc: 'Work In Progress (0–100)', tooltip: 'Work In Progress (0–100) — how close you are to your target outcome' },
  { tag: 'AI', name: 'AI › [Action]', desc: 'AI-enhanced execution', tooltip: 'AI is applied at every stage — research, debate, pinpoint, validate, deliver' },
  { tag: 'DELIVERABLE', name: '[N]x [Deliverable]', desc: 'What the task produces', tooltip: 'What the task produces — defined by the unit or team' },
  { tag: 'PLATFORM', name: '[Platform]', desc: 'Where work happens', tooltip: 'Where work happens — GHC, Viva Engage, DWS, WRs, Planner, Products' },
  { tag: 'FRAMEWORK', name: '[Framework]', desc: 'Operating framework', tooltip: 'The operating framework — 6xD, GHC, 7S Task System' },
];

const formulaPlaceholders: Record<string, string> = {
  '[DQ Unit]': 'The DigitalQatalyst unit that owns this task',
  'WiPxx': 'Work In Progress (0–100) — how close you are to your target outcome',
  'AI ›': 'AI is applied at every stage — research, debate, pinpoint, validate, deliver',
  '[Deliverable]': 'What the task produces — defined by the unit or team',
  '[Platform]': 'Where work happens — GHC, Viva Engage, DWS, WRs, Planner, Products',
  '[Framework]': 'The operating framework — 6xD, GHC, 7S Task System',
};

const FormulaSection = () => {
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleHover = (key: string, e: React.MouseEvent) => {
    const text = formulaPlaceholders[key];
    if (text) {
      setTooltip({ text, x: e.clientX, y: e.clientY - 50 });
    }
  };

  const formulaString = '[DQ Unit] | [Competence] – WiPxx (AI › [Action]) – [N]x [Deliverable] | [Platform] | [Framework]';

  return (
    <div ref={containerRef}>
      <h3 className="text-lg font-bold text-foreground mb-4">What Each Section Defines</h3>

      {/* Formula box */}
      <div className="formula-box rounded-lg p-4 mb-8 text-sm">
        {Object.keys(formulaPlaceholders).map((key) => {
          const idx = formulaString.indexOf(key);
          return null; // rendered inline below
        })}
        <span className="break-all">
          {formulaString.split(/(\[DQ Unit\]|WiPxx|AI ›|\[Deliverable\]|\[Platform\]|\[Framework\])/).map((part, i) => {
            if (formulaPlaceholders[part]) {
              return (
                <span
                  key={i}
                  className="cursor-help font-bold px-0.5 rounded"
                  style={{ color: '#2563eb' }}
                  onMouseEnter={(e) => handleHover(part, e)}
                  onMouseLeave={() => setTooltip(null)}
                >
                  {part}
                </span>
              );
            }
            return <span key={i}>{part}</span>;
          })}
        </span>
      </div>

      {tooltip && (
        <div
          className="dq-tooltip"
          style={{ left: tooltip.x, top: tooltip.y, transform: 'translateX(-50%)' }}
        >
          {tooltip.text}
        </div>
      )}

      {/* Parts grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {formulaParts.map((part) => (
          <div key={part.tag} className="rounded-lg border border-border bg-surface p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#2563eb' }}>{part.tag}</span>
            <h4 className="font-bold text-sm text-foreground mt-1">{part.name}</h4>
            <p className="text-xs text-muted-foreground mt-1">{part.desc}</p>
          </div>
        ))}
      </div>

      {/* EVMO Example */}
      <h3 className="text-lg font-bold text-foreground mb-4">An EVMO Example</h3>
      <div className="rounded-lg border border-border overflow-hidden">
        <div className="formula-box px-4 py-3 text-sm">
          CoE | Standards – WiP45 (AI › Validate) – 2x Governance Docs | DWS | 7S Task System
        </div>
        <div className="bg-surface divide-y divide-border">
          {[
            ['CoE', 'The unit is Centre of Excellence'],
            ['Standards', 'Competence area within CoE'],
            ['WiP45', '45% progress toward outcome'],
            ['AI › Validate', 'Currently in the validation stage with AI'],
            ['2x Governance Docs', 'Producing 2 governance documents'],
            ['DWS', 'Work is happening on DWS platform'],
            ['7S Task System', 'Following the 7S Task System framework'],
          ].map(([label, explanation]) => (
            <div key={label} className="flex items-start px-4 py-2.5 gap-4">
              <span className="font-mono text-xs font-bold shrink-0 w-40" style={{ color: '#2563eb' }}>{label}</span>
              <span className="text-sm text-muted-foreground">{explanation}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormulaSection;
