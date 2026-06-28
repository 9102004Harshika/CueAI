import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, ShoppingBag, Code2, ArrowRight, Check } from 'lucide-react';
import MarketingFooter from '../components/layout/MarketingFooter';

const FEATURES = [
  {
    icon: <ShoppingBag className="w-5 h-5 text-blue-400" />,
    title: 'Prompt Marketplace',
    desc: 'Discover and purchase production-ready prompts engineered by experts for GPT-4, Claude, Midjourney, and 12+ other models.',
  },
  {
    icon: <Code2 className="w-5 h-5 text-violet-400" />,
    title: 'Live Playground',
    desc: 'Test any prompt directly in your browser. Variable extraction, temperature tuning, and one-click API integration.',
  },
  {
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    title: 'Monetize Your Skills',
    desc: 'Publish your prompt library and sell directly to developers and enterprises. Set your own pricing.',
  },
];

const STATS = [
  { value: '12,000+', label: 'Prompts Available' },
  { value: '3,400+', label: 'Active Creators' },
  { value: '99ms', label: 'Avg Execution Time' },
  { value: '$2.1M', label: 'Paid to Creators' },
];

const Home = () => {
  return (
    <div className="bg-background text-on-background min-h-screen font-body antialiased overflow-x-hidden">
      {/* ───── Hero ───── */}
      <main className="relative">
        {/* Background Orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute top-60 -left-60 w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[120px]" />
          <div className="absolute top-80 -right-60 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px]" />
        </div>

        <section className="relative pt-32 pb-28 px-6 max-w-[1200px] mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-semibold text-blue-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Introducing CueAI Studio 2.0
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.08] mb-6"
          >
            The professional{' '}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-300 bg-clip-text text-transparent">
              prompt engineering
            </span>
            <br />
            platform.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Discover, execute, and monetize production-ready AI prompts.
            Built for developers, designers, and prompt engineers who demand precision.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/marketplace"
              className="group inline-flex items-center gap-2 bg-primary text-on-primary font-semibold px-7 py-3.5 rounded-lg hover:bg-blue-500 transition-all shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:shadow-[0_0_36px_rgba(37,99,235,0.5)] text-sm"
            >
              Explore Marketplace
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/playground"
              className="inline-flex items-center gap-2 bg-surface border border-outline text-on-surface font-semibold px-7 py-3.5 rounded-lg hover:bg-surface-variant transition-all text-sm"
            >
              <span className="material-symbols-outlined text-[18px] leading-none">terminal</span>
              Open Playground
            </Link>
          </motion.div>

          {/* Hero Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 relative max-w-4xl mx-auto"
          >
            <div className="rounded-2xl border border-outline-variant overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)] bg-surface">
              {/* Window chrome */}
              <div className="px-4 py-3 border-b border-outline-variant bg-surface-variant/50 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-4 text-xs font-mono text-on-surface-variant">cueai.io/playground</span>
              </div>
              {/* Split view mockup */}
              <div className="flex" style={{ minHeight: 320 }}>
                <div className="w-1/2 border-r border-outline-variant p-6 bg-background">
                  <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest mb-3">Prompt Input</p>
                  <div className="text-sm font-mono text-on-surface leading-relaxed">
                    <span className="text-violet-400">Generate</span> a{' '}
                    <span className="text-amber-400">{'{{style}}'}</span> UI dashboard for{' '}
                    <span className="text-amber-400">{'{{app_name}}'}</span> using{' '}
                    <span className="text-amber-400">{'{{framework}}'}</span>.{' '}
                    <span className="text-blue-400">Include</span> data visualizations and a dark sidebar...
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-outline bg-surface-variant text-on-surface-variant">TEMP: 0.7</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-outline bg-surface-variant text-on-surface-variant">GPT-4o</span>
                  </div>
                </div>
                <div className="w-1/2 p-6 bg-surface/30">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">Output Stream</p>
                    <span className="text-[10px] font-mono text-blue-400">842 tokens · 1.2s</span>
                  </div>
                  <div className="text-xs font-mono leading-relaxed text-on-surface">
                    <span className="text-violet-400">import</span> React <span className="text-violet-400">from</span> <span className="text-green-400">'react'</span>;<br />
                    <span className="text-violet-400">import</span> {'{ '}<span className="text-blue-400">Card</span>{' }'} <span className="text-violet-400">from</span> <span className="text-green-400">'@/components'</span>;<br /><br />
                    <span className="text-violet-400">export default function</span> <span className="text-blue-400">Dashboard</span>() {'{'}<br />
                    &nbsp;&nbsp;<span className="text-violet-400">return</span> (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-on-surface-variant">&lt;Card className=<span className="text-green-400">"p-6 bg-zinc-950"</span>&gt;</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-on-surface-variant">&lt;h1&gt;</span>Analytics<span className="text-on-surface-variant">&lt;/h1&gt;</span><br />
                    <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse align-middle ml-1" />
                  </div>
                </div>
              </div>
            </div>
            {/* Glow under card */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-primary/20 blur-2xl rounded-full" />
          </motion.div>
        </section>

        {/* ───── Stats Bar ───── */}
        <section className="border-y border-outline-variant bg-surface/40 backdrop-blur-sm py-10">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-display font-bold text-on-background mb-1">{s.value}</p>
                <p className="text-sm text-on-surface-variant">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───── Features ───── */}
        <section className="py-28 px-6 max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-on-background mb-4">
              Everything you need to ship with AI
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              From ideation to production, CueAI is the complete platform for prompt engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative group p-8 rounded-2xl border border-outline-variant bg-surface/60 backdrop-blur-sm overflow-hidden cursor-default"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-600/5 to-violet-600/5" />
                <div className="w-10 h-10 rounded-xl bg-surface-variant border border-outline-variant flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-on-background mb-3">{f.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ───── Detail Section ───── */}
        <section className="py-20 px-6 max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-4">For Developers</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-on-background mb-6 leading-snug">
                Designed for speed.<br />Engineered for precision.
              </h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                CueAI provides an IDE-like experience for crafting prompts. With token tracking, latency metrics,
                and version control, you have total visibility into how your prompts perform in production.
              </p>
              <ul className="space-y-3">
                {[
                  'Syntax highlighting for prompt variables',
                  'Instant switching between 12+ AI models',
                  'Export to React, Python, or raw JSON',
                  'Real-time streaming output',
                ].map((li) => (
                  <li key={li} className="flex items-center gap-3 text-sm text-on-surface">
                    <div className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    {li}
                  </li>
                ))}
              </ul>
              <Link
                to="/playground"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Try the Playground <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-outline-variant overflow-hidden bg-surface shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <div className="px-4 py-2.5 border-b border-outline-variant bg-surface-variant/40 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="p-6 font-mono text-xs leading-relaxed">
                  <p className="text-on-surface-variant mb-1">// Marketplace prompt execution</p>
                  <p><span className="text-violet-400">import</span> {'{ '}<span className="text-blue-400">CueAI</span>{' }'} <span className="text-violet-400">from</span> <span className="text-green-400">'cueai'</span>;</p>
                  <br />
                  <p><span className="text-violet-400">const</span> cue = <span className="text-violet-400">new</span> <span className="text-blue-400">CueAI</span>({'{ '}apiKey<span className="text-on-surface-variant">: process.env.</span><span className="text-amber-400">CUE_API_KEY</span>{' }'});</p>
                  <br />
                  <p><span className="text-violet-400">const</span> result = <span className="text-violet-400">await</span> cue.prompts.<span className="text-blue-400">execute</span>({'{'}</p>
                  <p>&nbsp;&nbsp;id: <span className="text-green-400">"prm_cyberpunk_arch"</span>,</p>
                  <p>&nbsp;&nbsp;variables: {'{'} style: <span className="text-green-400">"brutalist"</span>{' }'},</p>
                  <p>&nbsp;&nbsp;model: <span className="text-green-400">"gpt-4o"</span></p>
                  <p>{'}'});</p>
                  <br />
                  <p className="text-on-surface-variant">// → Streams 842 tokens in 1.2s</p>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-blue-600/15 blur-2xl rounded-full" />
            </div>
          </div>
        </section>

        {/* ───── CTA Section ───── */}
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto text-center relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 rounded-full bg-primary/10 blur-[80px]" />
            </div>
            <h2 className="relative text-4xl md:text-5xl font-display font-bold text-on-background mb-6">
              Start building with the best prompts.
            </h2>
            <p className="relative text-on-surface-variant mb-10 text-lg">
              Join 3,400+ creators and developers already using CueAI to ship faster.
            </p>
            <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-primary text-on-primary font-semibold px-8 py-4 rounded-lg hover:bg-blue-500 transition-all shadow-[0_0_32px_rgba(37,99,235,0.5)] hover:shadow-[0_0_48px_rgba(37,99,235,0.6)] text-sm"
              >
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/marketplace"
                className="inline-flex items-center gap-2 bg-surface border border-outline text-on-surface font-semibold px-8 py-4 rounded-lg hover:bg-surface-variant transition-all text-sm"
              >
                Browse Marketplace
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};

export default Home;
