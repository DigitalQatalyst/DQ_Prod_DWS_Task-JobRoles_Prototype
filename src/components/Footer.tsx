const Footer = () => {
  return (
    <footer className="text-sm" style={{ background: '#0f172a', color: 'rgba(255,255,255,0.7)' }}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-surface rounded flex items-center justify-center">
              <span className="text-sm font-extrabold" style={{ color: '#dc2626' }}>DQ</span>
            </div>
            <span className="font-bold text-base" style={{ color: 'white' }}>DigitalQatalyst</span>
          </div>
          <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
            The digital transformation engine powering excellence across every domain.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-1.5 rounded text-xs flex-1"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
            />
            <button className="px-3 py-1.5 rounded text-xs font-medium" style={{ background: '#2563eb', color: 'white' }}>
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3" style={{ color: 'white' }}>Get to Know Us</h4>
          <ul className="space-y-2 text-xs">
            <li><span className="cursor-pointer hover:underline">About DQ</span></li>
            <li><span className="cursor-pointer hover:underline">Our Mission</span></li>
            <li><span className="cursor-pointer hover:underline">Leadership</span></li>
            <li><span className="cursor-pointer hover:underline">Careers</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3" style={{ color: 'white' }}>For You</h4>
          <ul className="space-y-2 text-xs">
            <li><span className="cursor-pointer hover:underline">Task Standards</span></li>
            <li><span className="cursor-pointer hover:underline">Task Templates</span></li>
            <li><span className="cursor-pointer hover:underline">Working Rooms</span></li>
            <li><span className="cursor-pointer hover:underline">Knowledge Base</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3" style={{ color: 'white' }}>Find Us</h4>
          <ul className="space-y-2 text-xs">
            <li><span className="cursor-pointer hover:underline">GHC Portal</span></li>
            <li><span className="cursor-pointer hover:underline">Viva Engage</span></li>
            <li><span className="cursor-pointer hover:underline">DWS Platform</span></li>
            <li><span className="cursor-pointer hover:underline">Support</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t px-6 py-4 text-center text-xs" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>
        © 2026 DigitalQatalyst. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
