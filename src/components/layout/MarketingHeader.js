import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Marketplace', path: '/marketplace' },
  { label: 'Feed', path: '/feed' },
  { label: 'Playground', path: '/playground' },
];

const MarketingHeader = ({ activeLink = 'Marketplace' }) => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('[data-marketing-header]');
      if (!header) return;
      if (window.scrollY > 20) {
        header.classList.add('bg-background/80');
        header.classList.remove('bg-background/60');
      } else {
        header.classList.remove('bg-background/80');
        header.classList.add('bg-background/60');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      data-marketing-header
      className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm h-16 flex justify-between items-center px-margin-desktop transition-all duration-300 ease-out"
    >
      <div className="flex items-center gap-stack-md">
        <Link
          to="/"
          className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface"
        >
          Cue AI
        </Link>
        <div className="hidden md:flex gap-base">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`font-body-md text-body-md px-stack-sm py-1 rounded transition-colors ${
                item.label === activeLink
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-stack-sm">
        <button type="button" className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-white/5 rounded-full transition-colors">
          notifications
        </button>
        <Link to="/login" className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-white/5 rounded-full transition-colors">
          account_circle
        </Link>
        <Link
          to="/creator-signup"
          className="bg-primary text-on-primary font-bold px-stack-md py-2 rounded-lg hover:brightness-110 active:scale-95 transition-all duration-300 primary-glow"
        >
          Create
        </Link>
      </div>
    </header>
  );
};

export default MarketingHeader;
