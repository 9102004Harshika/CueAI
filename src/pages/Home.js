import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MarketingFooter from '../components/layout/MarketingFooter';

const Home = () => {
  return (
    <div className="bg-background text-on-background min-h-screen font-body antialiased selection:bg-primary/30 selection:text-primary">
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-[1200px] mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-32 flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-outline-variant text-xs font-semibold text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Introducing CueAI Studio 2.0
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-on-background mb-6 max-w-4xl leading-[1.1]">
            The professional <br/> prompt engineering platform.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed font-body">
            Discover, execute, and monetize production-ready AI prompts. Built for developers, designers, and prompt engineers who demand precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/marketplace" className="bg-on-background text-background font-semibold px-8 py-4 rounded-md hover:bg-secondary transition-colors text-center shadow-sm">
              Explore Marketplace
            </Link>
            <Link to="/playground" className="bg-surface border border-outline-variant text-on-surface font-semibold px-8 py-4 rounded-md hover:bg-surface-variant transition-colors text-center shadow-sm flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">terminal</span>
              Open Playground
            </Link>
          </div>
        </section>

        {/* Value Prop Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { title: 'Deterministic Results', desc: 'Stop guessing. Our marketplace features highly tuned prompts that produce consistent outputs across LLMs and image models.', icon: 'tune' },
            { title: 'Integrated Playground', desc: 'Test prompts directly in your browser. Our playground connects to GPT-4o, Claude 3.5, and Midjourney via unified API.', icon: 'code' },
            { title: 'Monetize Expertise', desc: 'Turn your prompt engineering skills into revenue. Package your workflows and sell them directly to enterprise users.', icon: 'payments' }
          ].map((feature, idx) => (
            <div key={idx} className="premium-card p-8 bg-surface/30">
              <div className="w-12 h-12 bg-background border border-outline-variant rounded-md flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-on-background mb-3">{feature.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* Visual Showcase */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-on-background mb-6">Designed for speed. Engineered for precision.</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                CueAI provides an IDE-like experience for crafting prompts. With token tracking, latency metrics, and version control, you have total visibility into how your prompts perform in production.
              </p>
              <ul className="space-y-4">
                {['Syntax highlighting for prompt variables', 'Instant switching between 12+ AI models', 'Export to React, Python, or raw JSON'].map((li, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm font-semibold text-on-surface">
                     <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                     {li}
                   </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="premium-card p-2 bg-surface-variant/30">
                <div className="rounded border border-outline-variant overflow-hidden aspect-[4/3] bg-background relative flex items-center justify-center">
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDETUBEh_6pV568DuHDzQZpmJbJ648RdfNwXfo6tTclTq6Z0_wHeLnZ-5qgWoULjrmqfiE83Y3p6Vjk9wvLHdCYkhe-2fGNMrpZpz-YTE8bf8qfDo-y0d1Y6Pw87CXOUU9M-0v6f0_6zD80m6yrMRRSresZUxXWpzUE_0-h_hmbnkWw7_lUPmK9HjMSGYc5VZ4PwKLgMt3vmzkDT5MDJZ74aHVm2-JS2RlaNGghNrl59HlBxU9Sn7Oc" alt="App Preview" className="w-full h-full object-cover opacity-90" />
                   
                   {/* Overlay UI element */}
                   <div className="absolute top-4 left-4 right-4 bg-background/90 backdrop-blur border border-outline-variant p-4 rounded shadow-sm">
                      <div className="flex justify-between mb-2">
                        <span className="text-[10px] font-mono text-on-surface-variant uppercase">Prompt String</span>
                        <span className="text-[10px] font-mono text-primary">140ms</span>
                      </div>
                      <div className="text-xs font-mono text-on-background line-clamp-2">"Futuristic dashboard design, minimalist typography, 8k resolution, cinematic lighting..."</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};

export default Home;