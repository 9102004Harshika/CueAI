import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EXPERTISE_OPTIONS = ['Midjourney', 'DALL-E', 'Stable Diffusion', 'GPT-4', 'Claude 3'];

const CreatorOnboardingStep2 = () => {
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState('');
  const [bio, setBio] = useState('');
  const [expertise, setExpertise] = useState([]);

  const toggleExpertise = (item) => {
    setExpertise((prev) =>
      prev.includes(item) ? prev.filter((e) => e !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/creator-signup/final');
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary bg-background text-on-background">
      <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full max-w-container-max mx-auto">
          <Link to="/" className="font-headline-md text-headline-md text-primary tracking-tighter">Cue AI</Link>
          <div className="hidden md:flex gap-stack-md">
            <Link to="/faq" className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors">Support</Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-margin-mobile md:px-margin-desktop overflow-x-hidden relative">
        <div className="w-full max-w-container-max grid grid-cols-1 md:grid-cols-12 gap-gutter items-center z-10">
          <div className="hidden md:flex md:col-span-5 flex-col space-y-stack-md pr-stack-lg">
            <div className="space-y-stack-sm">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Build your <span className="text-secondary">digital legacy</span>.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                Join an elite ecosystem of high-end AI creators and engineers turning prompts into scalable assets.
              </p>
            </div>
            <div className="glass-card p-stack-md rounded-xl space-y-stack-sm border-l-4 border-l-secondary">
              <div className="flex items-center gap-base">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                <span className="font-label-caps text-label-caps text-secondary">Earning Potential</span>
              </div>
              <p className="font-headline-md text-headline-md text-on-surface">
                Top creators earn <span className="text-primary">$10k+</span>/mo
              </p>
              <p className="font-label-md text-label-md text-on-surface-variant">
                Our top 5% of creators leverage multiple models to maximize their output and revenue stream.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="glass-card p-stack-md md:p-stack-lg rounded-xl space-y-stack-lg">
              <div className="space-y-stack-md">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-label-caps text-label-caps text-primary mb-stack-xs block">Step 2 of 3</span>
                    <h1 className="font-headline-md text-headline-md text-on-surface">Portfolio &amp; Expertise</h1>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant">66% Complete</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full flex overflow-hidden">
                  <div className="step-active rounded-full" />
                  <div className="step-active border-l border-background" />
                  <div className="step-inactive border-l border-background" />
                </div>
              </div>

              <form className="space-y-stack-md" onSubmit={handleSubmit}>
                <div className="space-y-stack-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant ml-1">Portfolio URL</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">link</span>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg py-3 pl-12 pr-4 text-on-surface font-body-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-outline-variant placeholder:font-label-caps"
                      placeholder="https://behance.net/yourname"
                      type="url"
                      value={portfolio}
                      onChange={(e) => setPortfolio(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-stack-sm">
                  <label className="font-label-md text-label-md text-on-surface-variant ml-1">Primary Model Expertise</label>
                  <div className="flex flex-wrap gap-base">
                    {EXPERTISE_OPTIONS.map((item) => (
                      <div key={item} className="expertise-chip">
                        <input
                          className="hidden"
                          id={item}
                          type="checkbox"
                          checked={expertise.includes(item)}
                          onChange={() => toggleExpertise(item)}
                        />
                        <label
                          className="cursor-pointer border border-outline-variant/30 px-4 py-2 rounded-full font-label-md text-on-surface-variant hover:bg-white/5 transition-all flex items-center gap-2"
                          htmlFor={item}
                        >
                          {item}
                          {expertise.includes(item) && (
                            <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          )}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-stack-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant ml-1">Bio / Professional Summary</label>
                  <textarea
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4 text-on-surface font-body-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-outline-variant resize-none"
                    placeholder="Briefly describe your creative journey and specialization..."
                    rows={4}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>

                <div className="pt-stack-sm">
                  <button className="glow-button w-full bg-primary py-4 rounded-lg flex items-center justify-center gap-base text-on-primary-container font-headline-md text-lg" type="submit">
                    <span>Continue to Final Step</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                </div>
                <p className="text-center font-label-md text-label-md text-outline">Step 2 of 3 • Almost there</p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-stack-lg border-t border-outline-variant/10 bg-surface-container-lowest mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-stack-md max-w-container-max mx-auto">
          <span className="font-headline-lg text-primary text-2xl tracking-tighter">Cue AI</span>
          <div className="flex gap-stack-md">
            <Link to="/privacy-policy" className="font-label-md text-on-surface-variant hover:text-primary transition-all">Privacy Policy</Link>
            <Link to="/terms" className="font-label-md text-on-surface-variant hover:text-primary transition-all">Terms of Service</Link>
            <Link to="/faq" className="font-label-md text-on-surface-variant hover:text-primary transition-all">Help Center</Link>
          </div>
          <span className="font-label-md text-on-surface-variant">© 2024 Cue AI. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default CreatorOnboardingStep2;
