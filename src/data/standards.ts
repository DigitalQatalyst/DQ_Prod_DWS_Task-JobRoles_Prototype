export interface Standard {
  id: string;
  number: string;
  name: string;
  coverClass: string;
  description: string;
  subtitle: string;
  highlights: { label: string; description: string }[];
  practiceContent: {
    type: 'task-naming' | 'generic';
    sections?: { heading: string; content: string }[];
  };
  governanceRules: { title: string; explanation: string; color: string }[];
}

export const standards: Standard[] = [
  {
    id: 'task-naming',
    number: '01',
    name: 'Task Naming',
    coverClass: 'ghc-cover-task-naming',
    description: 'How every DQ task is named — a living formula that encodes unit, competence, progress and deliverable.',
    subtitle: 'The formula that defines how every DQ task is identified, tracked and understood.',
    highlights: [
      { label: 'Universally Applied', description: 'Every task across DQ follows the same naming convention — no exceptions, no shortcuts.' },
      { label: 'Progress Embedded', description: 'WiP (Work In Progress) is baked into the name, giving instant visibility of task maturity.' },
      { label: 'AI-Driven', description: 'AI is present at every stage — research, debate, pinpoint, validate, deliver — and the name reflects it.' },
      { label: 'Platform Agnostic', description: 'The naming formula works across GHC, DWS, Planner, Viva Engage and all DQ platforms.' },
    ],
    practiceContent: { type: 'task-naming' },
    governanceRules: [
      { title: 'WiP starts at 0', explanation: 'Every new task begins at WiP0 — no assumptions, no inherited progress. You earn your WiP.', color: '#2563eb' },
      { title: 'AI at every stage', explanation: 'AI is not optional. Every task must demonstrate AI involvement across research, debate, pinpoint, validate and deliver.', color: '#2563eb' },
      { title: 'WiP reflects actual progress', explanation: 'WiP must honestly represent task maturity. Inflating WiP without evidence is a governance violation.', color: '#2563eb' },
      { title: 'Formula must be followed exactly', explanation: 'No shorthand, no abbreviations, no creative reinterpretation. The formula is the standard.', color: '#2563eb' },
    ],
  },
  {
    id: 'context',
    number: '02',
    name: 'Context',
    coverClass: 'ghc-cover-context',
    description: 'The background and environment that shapes why a task exists and what conditions surround it.',
    subtitle: 'Understanding the environment and circumstances that give a task its meaning.',
    highlights: [
      { label: 'Situational Awareness', description: 'Context ensures every team member understands the landscape before taking action.' },
      { label: 'Dependency Mapping', description: 'Identifies upstream and downstream dependencies that affect task execution.' },
      { label: 'Stakeholder Clarity', description: 'Defines who is involved, who is affected, and who needs to be informed.' },
    ],
    practiceContent: {
      type: 'generic',
      sections: [
        { heading: 'What Context Is', content: 'Context is the set of circumstances, history, and environmental factors that frame a task. It answers "why now?" and "what surrounds this?" — grounding every action in reality rather than assumption.' },
        { heading: 'What Context Is Not', content: 'Context is not a summary of the task itself. It\'s not the deliverable, the deadline, or the goal. It\'s the terrain — the conditions that make the task necessary, urgent, or shaped the way it is.' },
      ],
    },
    governanceRules: [
      { title: 'Context must be documented before execution begins', explanation: 'No task may progress beyond WiP10 without a clearly articulated context statement.', color: '#16a34a' },
      { title: 'Context must reference real conditions', explanation: 'Vague or generic context statements are not acceptable — specificity is required.', color: '#16a34a' },
      { title: 'Context must be reviewed at each WiP milestone', explanation: 'As the task progresses, context may evolve — it must be kept current.', color: '#16a34a' },
    ],
  },
  {
    id: 'purpose',
    number: '03',
    name: 'Purpose',
    coverClass: 'ghc-cover-purpose',
    description: 'The clear reason a task exists — the "why" that drives every action and decision.',
    subtitle: 'The driving force behind every task — why it matters and what it aims to achieve.',
    highlights: [
      { label: 'Clarity of Intent', description: 'Purpose eliminates ambiguity — every team member knows exactly why this task exists.' },
      { label: 'Decision Filter', description: 'When in doubt, purpose guides which actions to take and which to discard.' },
      { label: 'Measurable Impact', description: 'Purpose must connect to a tangible outcome that can be validated.' },
    ],
    practiceContent: {
      type: 'generic',
      sections: [
        { heading: 'What Purpose Is', content: 'Purpose is the reason a task exists. It\'s the answer to "why are we doing this?" — connecting effort to impact and ensuring every action serves a meaningful goal.' },
        { heading: 'What Purpose Is Not', content: 'Purpose is not the method or the deliverable. It\'s not how you do something — it\'s why it needs to be done at all.' },
      ],
    },
    governanceRules: [
      { title: 'Every task must have a stated purpose', explanation: 'No task exists without a clear, documented reason. Purposeless tasks are immediately flagged.', color: '#dc2626' },
      { title: 'Purpose must align with unit objectives', explanation: 'Individual task purpose must connect to the broader goals of the DQ unit or team.', color: '#dc2626' },
    ],
  },
  {
    id: 'approach',
    number: '04',
    name: 'Approach',
    coverClass: 'ghc-cover-approach',
    description: 'The methodology and strategy used to execute the task — the "how" of DQ work.',
    subtitle: 'How every task is executed — the methods, tools and strategies that drive delivery.',
    highlights: [
      { label: 'AI-First Methodology', description: 'Every approach must integrate AI at every stage — research, debate, pinpoint, validate, deliver.' },
      { label: 'Framework Alignment', description: 'Approaches must align with DQ frameworks: 6xD, GHC, 7S Task System.' },
      { label: 'Iterative by Design', description: 'Approaches are not fixed — they evolve as WiP progresses and understanding deepens.' },
    ],
    practiceContent: {
      type: 'generic',
      sections: [
        { heading: 'What Approach Is', content: 'Approach is the strategic method chosen to execute a task. It defines the tools, sequence, and reasoning behind how work gets done — always with AI involvement.' },
        { heading: 'What Approach Is Not', content: 'Approach is not a rigid plan set in stone. It\'s a living strategy that adapts as the task matures through WiP stages.' },
      ],
    },
    governanceRules: [
      { title: 'AI must be embedded in the approach', explanation: 'No approach is valid without demonstrating AI involvement across all five stages.', color: '#0891b2' },
      { title: 'Approach must reference the applicable framework', explanation: 'Every approach must explicitly name the DQ framework guiding its execution.', color: '#0891b2' },
      { title: 'Approach must adapt with WiP progression', explanation: 'Static approaches that don\'t evolve with task maturity are flagged for review.', color: '#0891b2' },
    ],
  },
  {
    id: 'outcome',
    number: '05',
    name: 'Outcome',
    coverClass: 'ghc-cover-outcome',
    description: 'The measurable result a task is expected to produce — the evidence of completion.',
    subtitle: 'What success looks like — the tangible, measurable result of every task.',
    highlights: [
      { label: 'Evidence-Based', description: 'Outcomes must be demonstrable — not claimed, but proven with deliverables.' },
      { label: 'WiP100 = Outcome Achieved', description: 'A task reaches WiP100 only when its defined outcome is fully delivered and validated.' },
      { label: 'Quality Governed', description: 'Outcomes are reviewed against DQ quality standards before being marked complete.' },
    ],
    practiceContent: {
      type: 'generic',
      sections: [
        { heading: 'What Outcome Is', content: 'Outcome is the tangible result of a task — the deliverable, the change, the measurable impact that proves the task was worth doing.' },
        { heading: 'What Outcome Is Not', content: 'Outcome is not effort or activity. "I worked on it" is not an outcome. "I delivered X with Y measurable impact" is.' },
      ],
    },
    governanceRules: [
      { title: 'Outcomes must be defined before WiP20', explanation: 'By WiP20, the expected outcome must be clearly documented and agreed upon.', color: '#0891b2' },
      { title: 'Outcomes must be validated at WiP100', explanation: 'No task can be marked WiP100 without evidence that the outcome was achieved.', color: '#0891b2' },
    ],
  },
  {
    id: 'links',
    number: '06',
    name: 'Links',
    coverClass: 'ghc-cover-links',
    description: 'The connections between tasks, platforms, people and knowledge that create DQ\'s networked intelligence.',
    subtitle: 'How tasks connect to people, platforms, knowledge and each other.',
    highlights: [
      { label: 'Cross-Platform Connectivity', description: 'Links connect work across GHC, DWS, Planner, Viva Engage and all DQ platforms.' },
      { label: 'Knowledge Graph', description: 'Every link contributes to DQ\'s collective intelligence and searchable knowledge base.' },
      { label: 'Traceability', description: 'Links create an audit trail — from task origin to final deliverable.' },
    ],
    practiceContent: {
      type: 'generic',
      sections: [
        { heading: 'What Links Are', content: 'Links are the connections that tie a task to its ecosystem — related tasks, reference materials, platforms, stakeholders, and knowledge sources.' },
        { heading: 'What Links Are Not', content: 'Links are not random URLs or bookmark dumps. Every link must serve a purpose and be relevant to the task\'s context, approach, or outcome.' },
      ],
    },
    governanceRules: [
      { title: 'Every task must have at least one link', explanation: 'No task exists in isolation. At minimum, link to the parent workstream or reference material.', color: '#7c3aed' },
      { title: 'Links must be validated and accessible', explanation: 'Broken or inaccessible links are governance violations — verify before submission.', color: '#7c3aed' },
    ],
  },
  {
    id: 'checklist',
    number: '07',
    name: 'Checklist (CLS)',
    coverClass: 'ghc-cover-checklist',
    description: 'The structured completion log that tracks every step of task execution with dated evidence.',
    subtitle: 'The step-by-step completion system that ensures nothing is missed.',
    highlights: [
      { label: 'Dated Accountability', description: 'Every checklist item has a date stamp — showing exactly when each step was completed.' },
      { label: 'Sequential Integrity', description: 'Steps must be completed in order — no skipping ahead, no backfilling.' },
      { label: 'WiP Alignment', description: 'Checklist completion must align with WiP progression — they move together.' },
    ],
    practiceContent: {
      type: 'generic',
      sections: [
        { heading: 'What CLS Is', content: 'CLS (Checklist System) is the structured log of task execution — each step dated, each action recorded, each milestone evidenced.' },
        { heading: 'What CLS Is Not', content: 'CLS is not a to-do list you check off casually. It\'s a governance instrument that creates an auditable record of how work was completed.' },
      ],
    },
    governanceRules: [
      { title: 'Checklist must be created at task inception', explanation: 'Every task starts with a defined checklist — the steps are known before work begins.', color: '#ca8a04' },
      { title: 'Steps must be dated on completion', explanation: 'Each checklist item receives a DD.MM date stamp when completed — no batch dating.', color: '#ca8a04' },
      { title: 'Checklist order must be respected', explanation: 'Sequential integrity is mandatory — completing step 5 before step 3 is a violation.', color: '#ca8a04' },
    ],
  },
];
