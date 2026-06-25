import { Link } from 'react-router-dom';

const MarketingFooter = () => (
  <footer className="w-full py-stack-xl bg-surface-container-lowest border-t border-outline-variant/20">
    <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-stack-lg">
      <div className="col-span-2 md:col-span-1">
        <span className="font-headline-md text-on-surface block mb-stack-md">Cue AI</span>
        <p className="font-label-md text-on-surface-variant">
          The premium ecosystem for prompt engineers and creative visionaries.
        </p>
      </div>
      <div className="flex flex-col gap-stack-sm">
        <span className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase mb-2">
          Product
        </span>
        <Link to="/marketplace" className="font-label-md text-on-surface-variant hover:text-primary transition-colors">
          Marketplace
        </Link>
        <Link to="/playground" className="font-label-md text-on-surface-variant hover:text-primary transition-colors">
          Playground
        </Link>
        <Link to="/faq" className="font-label-md text-on-surface-variant hover:text-primary transition-colors">
          Pricing
        </Link>
      </div>
      <div className="flex flex-col gap-stack-sm">
        <span className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase mb-2">
          Resources
        </span>
        <Link to="/feed" className="font-label-md text-on-surface-variant hover:text-primary transition-colors">
          Creator Resources
        </Link>
        <Link to="/faq" className="font-label-md text-on-surface-variant hover:text-primary transition-colors">
          Documentation
        </Link>
        <Link to="/faq" className="font-label-md text-on-surface-variant hover:text-primary transition-colors">
          API Support
        </Link>
      </div>
      <div className="flex flex-col gap-stack-sm">
        <span className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase mb-2">
          Legal
        </span>
        <Link to="/privacy-policy" className="font-label-md text-on-surface-variant hover:text-primary transition-colors">
          Privacy Policy
        </Link>
        <Link to="/terms" className="font-label-md text-on-surface-variant hover:text-primary transition-colors">
          Terms of Service
        </Link>
        <div className="flex gap-stack-sm mt-4">
          <a href="https://cueai.com" className="text-on-surface-variant hover:text-primary" aria-label="Website">
            <span className="material-symbols-outlined">public</span>
          </a>
          <a href="https://cueai.com" className="text-on-surface-variant hover:text-primary" aria-label="Share">
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
      </div>
    </div>
    <div className="max-w-container-max mx-auto px-margin-desktop mt-stack-xl pt-stack-md border-t border-outline-variant/10 text-center">
      <p className="font-label-caps text-label-caps text-on-surface-variant">
        © 2024 Cue AI. Precision Prompting.
      </p>
    </div>
  </footer>
);

export default MarketingFooter;
