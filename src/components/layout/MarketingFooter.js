import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { label: 'Marketplace', to: '/marketplace' },
      { label: 'Playground', to: '/playground' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'API Docs', to: '/api-docs' },
    ],
  },
  {
    title: 'Creators',
    links: [
      { label: 'Creator Hub', to: '/feed' },
      { label: 'Sell Prompts', to: '/signup' },
      { label: 'Creator Program', to: '/faq' },
      { label: 'Analytics', to: '/dashboard' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', to: '/faq' },
      { label: 'API Reference', to: '/api-docs' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Support', to: '/issues' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
];

const MarketingFooter = () => (
  <footer className="w-full bg-surface/20 border-t border-outline-variant">
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-10">

        {/* Brand */}
        <div className="col-span-2">
          <Link to="/" className="text-xl font-display font-bold text-on-background tracking-tight mb-4 block">
            Cue<span className="text-blue-400">AI</span>
          </Link>
          <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
            The professional prompt engineering platform. Discover, execute, and monetize production-ready AI prompts.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://cueai.com"
              aria-label="Website"
              className="w-8 h-8 rounded-lg border border-outline-variant bg-surface flex items-center justify-center text-on-surface-variant hover:text-blue-400 hover:border-blue-500/40 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">public</span>
            </a>
            <a
              href="https://cueai.com"
              aria-label="Share"
              className="w-8 h-8 rounded-lg border border-outline-variant bg-surface flex items-center justify-center text-on-surface-variant hover:text-blue-400 hover:border-blue-500/40 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">share</span>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {FOOTER_LINKS.map((col) => (
          <div key={col.title}>
            <p className="text-[10px] font-bold text-on-surface uppercase tracking-widest mb-4">{col.title}</p>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-14 pt-6 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-on-surface-variant">
          © {new Date().getFullYear()} CueAI. All rights reserved.
        </p>
        <p className="text-xs text-on-surface-variant font-mono">
          Made for prompt engineers. ⚡
        </p>
      </div>
    </div>
  </footer>
);

export default MarketingFooter;
