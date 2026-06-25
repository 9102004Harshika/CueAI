import React from 'react';
import Navbar from '../components/Navbar';
import MarketingFooter from '../components/layout/MarketingFooter';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="bg-background text-on-background min-h-screen font-body selection:bg-primary/30 selection:text-primary">
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <section className="text-center mb-20 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-on-background mb-6 max-w-3xl leading-[1.1]">
            Predictable pricing <br/> for professional teams.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Start for free, then upgrade when you need higher rate limits, enterprise SLA, and advanced model access.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
          
          {/* Hobby */}
          <div className="premium-card p-8 bg-surface/30 flex flex-col">
            <h3 className="text-xl font-display font-semibold text-on-background mb-2">Hobby</h3>
            <p className="text-sm text-on-surface-variant mb-6 h-10">Perfect for solo developers experimenting with AI.</p>
            <div className="mb-6">
               <span className="text-4xl font-display font-bold text-on-background">$0</span>
               <span className="text-on-surface-variant">/mo</span>
            </div>
            <button className="w-full bg-background border border-outline-variant text-on-surface font-semibold py-3 rounded-md hover:bg-surface-variant transition-colors mb-8 shadow-sm">
               Get Started
            </button>
            <ul className="space-y-4 mt-auto">
               <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  10,000 token limit / month
               </li>
               <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Access to standard models
               </li>
               <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Community support
               </li>
            </ul>
          </div>

          {/* Pro */}
          <div className="premium-card p-8 bg-surface-variant border-primary/30 relative flex flex-col shadow-elevated">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
               Most Popular
            </div>
            <h3 className="text-xl font-display font-semibold text-on-background mb-2">Pro</h3>
            <p className="text-sm text-on-surface-variant mb-6 h-10">For prompt engineers and creators building products.</p>
            <div className="mb-6">
               <span className="text-4xl font-display font-bold text-on-background">$29</span>
               <span className="text-on-surface-variant">/mo</span>
            </div>
            <button className="w-full bg-on-background text-background font-semibold py-3 rounded-md hover:bg-secondary transition-colors mb-8 shadow-sm">
               Upgrade to Pro
            </button>
            <ul className="space-y-4 mt-auto">
               <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  500,000 token limit / month
               </li>
               <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Access to GPT-4o & Claude 3.5
               </li>
               <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Priority API routing
               </li>
               <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Sell prompts on Marketplace
               </li>
            </ul>
          </div>

          {/* Enterprise */}
          <div className="premium-card p-8 bg-surface/30 flex flex-col">
            <h3 className="text-xl font-display font-semibold text-on-background mb-2">Enterprise</h3>
            <p className="text-sm text-on-surface-variant mb-6 h-10">For large teams demanding scale and security.</p>
            <div className="mb-6">
               <span className="text-4xl font-display font-bold text-on-background">Custom</span>
            </div>
            <button className="w-full bg-background border border-outline-variant text-on-surface font-semibold py-3 rounded-md hover:bg-surface-variant transition-colors mb-8 shadow-sm">
               Contact Sales
            </button>
            <ul className="space-y-4 mt-auto">
               <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Unlimited tokens
               </li>
               <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  Organization workspaces & RBAC
               </li>
               <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  99.99% SLA & Dedicated Support
               </li>
               <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  SSO & Audit Logs
               </li>
            </ul>
          </div>

        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};

export default Pricing;
