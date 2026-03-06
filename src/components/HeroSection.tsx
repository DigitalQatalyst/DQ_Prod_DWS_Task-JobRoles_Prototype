import DQBreadcrumb from './Breadcrumb';

interface HeroSectionProps {
  breadcrumbs: { label: string; onClick?: () => void }[];
  tagPill?: string;
  meta?: string;
  title: string;
  subtitle: string;
}

const HeroSection = ({ breadcrumbs, tagPill, meta, title, subtitle }: HeroSectionProps) => {
  return (
    <div className="hero-gradient hero-glow relative overflow-hidden" style={{ paddingTop: '56px' }}>
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-12">
        <DQBreadcrumb items={breadcrumbs} variant="dark" />

        {tagPill && (
          <div className="mt-4">
            <span className="glass-pill px-3 py-1 rounded-full text-xs font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {tagPill}
            </span>
          </div>
        )}

        {meta && (
          <p className="mt-3 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{meta}</p>
        )}

        <h1 className="mt-3 text-[32px] font-extrabold" style={{ color: 'white' }}>{title}</h1>
        <p className="mt-2 text-sm max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroSection;
