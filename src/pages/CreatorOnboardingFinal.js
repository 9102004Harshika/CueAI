import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreatorOnboardingFinal = () => {
  const navigate = useNavigate();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [payoutType, setPayoutType] = useState('wallet');

  const handleFinish = () => {
    if (!termsAccepted) {
      alert('Please accept the terms and conditions to proceed.');
      return;
    }
    setShowSuccess(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background">
      <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/5">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full max-w-container-max mx-auto">
          <Link to="/" className="font-headline-md text-headline-md text-primary tracking-tighter">Cue AI</Link>
          <div className="hidden md:flex gap-stack-md items-center">
            <span className="font-label-caps text-label-caps text-on-surface-variant">Step 03 of 03</span>
            <div className="w-32 h-1 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full step-gradient w-full" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-[800px] mx-auto w-full relative">
        <section className="relative z-10 space-y-stack-lg">
          <div className="space-y-stack-sm">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Creator Onboarding - Final Step
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Complete your profile security and establish your payout channels to join the elite network.
            </p>
          </div>

          <div className="space-y-stack-md">
            <div className="glass-card p-stack-md rounded-xl flex items-start gap-stack-sm border-secondary/20 bg-secondary/5">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'opsz' 32" }}>verified</span>
              <div>
                <h3 className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-1">Status: Verification Pending</h3>
                <p className="font-body-md text-body-md text-on-surface">
                  You&apos;re almost ready to start selling. Once you finalize these details, your storefront will go live.
                </p>
              </div>
            </div>

            <div className="glass-card p-stack-md rounded-xl space-y-stack-sm">
              <div className="flex items-center gap-stack-xs text-primary">
                <span className="material-symbols-outlined">fingerprint</span>
                <h2 className="font-label-md text-label-md font-bold uppercase">Identity &amp; Compliance</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                To maintain high-fidelity standards, we require a brief automated identity check. Your data is encrypted and never stored on our primary servers.
              </p>
              <div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/10">
                <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant">id_card</span>
                </div>
                <div className="flex-grow">
                  <span className="font-label-md text-label-md block text-on-surface">Government Issued ID</span>
                  <span className="text-xs text-outline font-label-caps">PASSPORT, DRIVER&apos;S LICENSE, OR NATIONAL ID</span>
                </div>
                <button type="button" className="px-stack-sm py-2 bg-surface-container-high hover:bg-surface-bright text-on-surface rounded font-label-md transition-colors border border-white/5">
                  Upload
                </button>
              </div>
            </div>

            <div className="glass-card p-stack-md rounded-xl space-y-stack-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-stack-xs text-secondary">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                  <h2 className="font-label-md text-label-md font-bold uppercase">Payout Channels</h2>
                </div>
                <span className="font-label-caps text-label-caps text-secondary bg-secondary/10 px-2 py-1 rounded">Recommended</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {[
                  { id: 'wallet', icon: 'toll', color: 'text-primary', title: 'Connect Wallet', desc: 'Instant payouts via Ethereum or Solana. Lower platform fees applied.', meta: 'METAMASK, PHANTOM, LEDGER', hover: 'hover:border-primary/30' },
                  { id: 'bank', icon: 'payments', color: 'text-secondary', title: 'Set Up Payouts', desc: 'Standard bank transfers via Stripe Connect. Global support for 40+ currencies.', meta: 'DIRECT DEPOSIT, SWIFT', hover: 'hover:border-secondary/30' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPayoutType(opt.id)}
                    className={`cursor-pointer group glass-card p-stack-md rounded-lg border-2 transition-all flex flex-col justify-between h-full bg-surface-container-lowest text-left ${
                      payoutType === opt.id ? (opt.id === 'wallet' ? 'border-primary/30' : 'border-secondary/30') : 'border-transparent'
                    } ${opt.hover}`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className={`material-symbols-outlined ${opt.color} text-4xl`} style={{ fontVariationSettings: "'opsz' 40" }}>{opt.icon}</span>
                        <input className="w-5 h-5 bg-black border-outline-variant text-primary focus:ring-primary focus:ring-offset-black pointer-events-none" name="payout_type" type="radio" checked={payoutType === opt.id} readOnly />
                      </div>
                      <h3 className="font-headline-md text-[20px] mb-1 text-on-surface">{opt.title}</h3>
                      <p className="text-on-surface-variant text-label-md">{opt.desc}</p>
                    </div>
                    <div className="mt-stack-md pt-stack-sm border-t border-white/5">
                      <span className="font-label-caps text-[10px] text-outline">{opt.meta}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-stack-sm p-2">
              <input
                className="mt-1 w-5 h-5 bg-black border-outline-variant rounded text-primary focus:ring-primary focus:ring-offset-black"
                id="terms"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label className="font-label-md text-on-surface-variant leading-tight cursor-pointer" htmlFor="terms">
                I confirm that all provided identity information is accurate and I agree to the{' '}
                <Link to="/terms" className="text-primary hover:underline">Creator Services Agreement</Link> and{' '}
                <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            <div className="pt-stack-md flex flex-col md:flex-row items-center gap-stack-md">
              <button
                type="button"
                onClick={handleFinish}
                className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold rounded-lg primary-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Finish Setup
                <span className="material-symbols-outlined">rocket_launch</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="font-label-md text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1"
              >
                Skip for now, continue to Dashboard
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {showSuccess && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-stack-md">
          <div className="glass-card max-w-md w-full p-stack-xl rounded-2xl text-center space-y-stack-md border-primary/20">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-stack-lg">
              <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Welcome, Creator.</h2>
            <p className="font-body-md text-on-surface-variant">Your identity is being verified. You now have full access to the Cue AI Creator Hub.</p>
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="w-full py-4 bg-surface-container-high text-on-surface font-bold rounded-lg border border-white/10 hover:bg-surface-bright transition-all"
            >
              Enter Workspace
            </button>
          </div>
        </div>
      )}

      <footer className="bg-surface-container-lowest w-full py-stack-lg border-t border-outline-variant/10 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-stack-md max-w-container-max mx-auto">
          <div className="font-headline-lg text-headline-lg text-on-surface">Cue AI</div>
          <div className="flex gap-stack-md font-label-md text-on-surface-variant">
            <Link to="/privacy-policy" className="hover:text-primary transition-all">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-all">Terms of Service</Link>
            <Link to="/faq" className="hover:text-primary transition-all">Help Center</Link>
          </div>
          <div className="font-label-md text-on-surface-variant">© 2024 Cue AI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default CreatorOnboardingFinal;
