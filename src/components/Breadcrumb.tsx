import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

const DQBreadcrumb = ({ items, variant = 'dark' }: BreadcrumbProps) => {
  const textColor = variant === 'dark' ? 'rgba(255,255,255,0.4)' : 'hsl(var(--muted-foreground))';
  const activeColor = variant === 'dark' ? 'rgba(255,255,255,0.7)' : 'hsl(var(--foreground))';

  return (
    <div className="flex items-center gap-1.5 text-xs" style={{ color: textColor }}>
      <Home className="w-3.5 h-3.5" />
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="w-3 h-3" />
          {item.onClick ? (
            <button
              onClick={item.onClick}
              className="hover:underline"
              style={{ color: i === items.length - 1 ? activeColor : textColor }}
            >
              {item.label}
            </button>
          ) : (
            <span style={{ color: i === items.length - 1 ? activeColor : textColor }}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default DQBreadcrumb;
