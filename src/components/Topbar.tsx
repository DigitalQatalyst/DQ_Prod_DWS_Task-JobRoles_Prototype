import { User } from 'lucide-react';

interface TopbarProps {
  onNavigate: (view: string) => void;
}

const Topbar = ({ onNavigate }: TopbarProps) => {
  return (
    <header className="topbar-gradient fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-6 gap-4">
      {/* Logo */}
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 shrink-0"
      >
        <div className="w-8 h-8 bg-surface rounded flex items-center justify-center">
          <span className="text-sm font-extrabold" style={{ color: '#dc2626' }}>DQ</span>
        </div>
      </button>

      {/* Nav */}
      <nav className="flex items-center gap-1 ml-4">
        <button
          onClick={() => onNavigate('home')}
          className="px-3 py-1.5 text-sm font-medium rounded-md"
          style={{ color: 'white', background: 'rgba(255,255,255,0.15)' }}
        >
          Explore
        </button>
        <button className="px-3 py-1.5 text-sm font-medium rounded-md" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Discover DQ
        </button>
      </nav>

      <div className="flex-1" />

      {/* Right actions */}
      <div className="flex items-center gap-2">
        <button className="px-3 py-1.5 text-xs font-medium rounded-md border" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
          Scrum Master Space
        </button>
        <button className="px-3 py-1.5 text-xs font-medium rounded-md" style={{ background: 'white', color: '#1e1b4b' }}>
          Request Support
        </button>
        <button className="px-3 py-1.5 text-xs font-medium rounded-md" style={{ background: '#1e1b4b', color: 'white' }}>
          Sign In
        </button>
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
          GG
        </div>
      </div>
    </header>
  );
};

export default Topbar;
