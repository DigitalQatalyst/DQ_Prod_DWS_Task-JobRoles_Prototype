interface GHCCardProps {
  number?: string;
  title: string;
  coverClass: string;
  description: string;
  chips?: string[];
  meta?: string;
  dimmed?: boolean;
  onClick?: () => void;
  buttonLabel?: string;
}

const GHCCard = ({ number, title, coverClass, description, chips, meta, dimmed, onClick, buttonLabel }: GHCCardProps) => {
  return (
    <div
      className={`rounded-xl overflow-hidden bg-surface shadow-sm border border-border flex flex-col ${dimmed ? 'dimmed-card' : 'cursor-pointer hover:shadow-md transition-shadow'}`}
      onClick={dimmed ? undefined : onClick}
    >
      {/* Cover */}
      <div className={`${coverClass} relative h-[116px] flex items-center justify-center`}>
        {number && (
          <span className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
            {number}
          </span>
        )}
        <h3 className="text-lg font-bold px-4 text-center" style={{ color: 'white' }}>{title}</h3>
      </div>
      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs mb-3" style={{ color: 'hsl(var(--muted-foreground))' }}>{description}</p>
        {chips && chips.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {chips.map((chip) => (
              <span key={chip} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-muted text-muted-foreground">{chip}</span>
            ))}
          </div>
        )}
        {meta && (
          <p className="text-[10px] mb-3" style={{ color: 'hsl(var(--muted-foreground))' }}>{meta}</p>
        )}
        <div className="mt-auto">
          <button
            className="w-full py-2 rounded-lg text-xs font-semibold transition-colors"
            style={dimmed
              ? { background: '#e5e7eb', color: '#9ca3af', cursor: 'not-allowed' }
              : { background: '#1e1b4b', color: 'white' }
            }
          >
            {dimmed ? 'Coming Soon' : (buttonLabel || 'View Details →')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GHCCard;
