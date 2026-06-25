import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { icon: 'explore', label: 'Exploration', path: '/marketplace' },
  { icon: 'image', label: 'Midjourney', path: '/marketplace', query: 'midjourney' },
  { icon: 'chat', label: 'ChatGPT', path: '/marketplace', query: 'chatgpt' },
  { icon: 'auto_awesome', label: 'Stable Diffusion', path: '/marketplace', query: 'stable-diffusion' },
  { icon: 'folder_special', label: 'Personal Library', path: '/feed', filled: true },
];

const SideNav = ({ activeItem = 'Exploration' }) => {
  const location = useLocation();

  const isActive = (item) => {
    if (activeItem) return item.label === activeItem;
    return location.pathname === item.path;
  };

  return (
    <aside className="h-full w-64 fixed left-0 top-0 bg-surface/60 backdrop-blur-xl border-r border-outline-variant/20 shadow-2xl flex flex-col py-base z-50">
      <div className="px-6 py-4 mb-stack-md">
        <Link to="/" className="block">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center glow-primary">
              <span
                className="material-symbols-outlined text-on-primary-container text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
            </div>
            <div>
              <h1 className="font-display-xl text-headline-md font-bold text-primary tracking-tight leading-none">
                Cue AI
              </h1>
              <p className="font-label-caps text-[10px] text-outline mt-1 uppercase tracking-widest">
                Prompt Engineering
              </p>
            </div>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item);
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 relative group ${
                active
                  ? 'text-primary font-bold bg-primary/10'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30'
              }`}
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={item.filled && active ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="font-body-md text-body-md">{item.label}</span>
              {active && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-l-full" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 pt-4 pb-2 border-t border-outline-variant/10 mt-auto space-y-1">
        <button
          type="button"
          className="w-full mb-4 py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary-container font-bold text-label-md transition-all active:scale-95 shadow-lg shadow-primary/20"
        >
          Upgrade to Pro
        </button>
        <Link
          to="/faq"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 transition-colors duration-200"
        >
          <span className="material-symbols-outlined text-[20px]">settings</span>
          <span className="font-body-md text-body-md">Settings</span>
        </Link>
        <Link
          to="/faq"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 transition-colors duration-200"
        >
          <span className="material-symbols-outlined text-[20px]">help_outline</span>
          <span className="font-body-md text-body-md">Support</span>
        </Link>
      </div>
    </aside>
  );
};

export default SideNav;
