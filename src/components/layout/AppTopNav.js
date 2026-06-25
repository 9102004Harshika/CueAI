import { Link, useLocation } from 'react-router-dom';

const TOP_LINKS = [
  { label: 'Marketplace', path: '/marketplace' },
  { label: 'Leaderboard', path: '/feed' },
  { label: 'Labs', path: '/playground' },
];

const AppTopNav = ({ searchPlaceholder = 'Search prompts, creators, or models...' }) => {
  const location = useLocation();

  return (
    <header className="fixed top-0 right-0 left-64 h-16 flex items-center justify-between px-margin-desktop bg-surface/60 backdrop-blur-xl border-b border-white/5 z-40">
      <div className="flex items-center gap-8 flex-1">
        <div className="relative w-full max-w-md group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px] group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            className="w-full h-10 pl-10 pr-4 bg-background rounded-lg border border-outline-variant/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all font-label-md text-on-surface placeholder:text-outline/50 placeholder:font-label-caps"
            placeholder={searchPlaceholder}
            type="text"
          />
        </div>
        <nav className="hidden xl:flex items-center gap-6">
          {TOP_LINKS.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`font-label-md text-label-md transition-all ${
                  active
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button type="button" className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">
          notifications
        </button>
        <button type="button" className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">
          dark_mode
        </button>
        <div className="h-6 w-px bg-outline-variant/30" />
        <Link
          to="/login"
          className="px-5 py-2 rounded-full bg-surface-variant/50 text-on-surface font-label-md text-label-md hover:bg-surface-variant border border-outline-variant/20 transition-all hidden sm:block"
        >
          Sign In
        </Link>
        <Link
          to="/creator-signup"
          className="px-6 py-2 rounded-full bg-primary text-on-primary font-bold text-label-md transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/10"
        >
          Create
        </Link>
      </div>
    </header>
  );
};

export default AppTopNav;
