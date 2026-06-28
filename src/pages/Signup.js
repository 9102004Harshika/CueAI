import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ArrowRight, Check } from 'lucide-react';

const PERKS = [
  'Access to 12,000+ production-ready prompts',
  'Integrated Playground with 12+ AI models',
  'Sell your own prompts and earn revenue',
  'Version control and prompt analytics',
];

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">

      {/* ── Left Brand Panel ── */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-surface/30 border-r border-outline-variant flex-col justify-between p-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px]" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px]" />
        </div>

        <div className="relative">
          <Link to="/" className="text-2xl font-display font-bold text-on-background tracking-tight">
            Cue<span className="text-blue-400">AI</span>
          </Link>
        </div>

        <div className="relative">
          <p className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-4">Get started free</p>
          <h2 className="text-4xl font-display font-bold text-on-background leading-tight mb-4">
            Join the platform<br />powering the AI era.
          </h2>
          <p className="text-on-surface-variant leading-relaxed max-w-md mb-10">
            Build with the world's best prompt engineers. No credit card required for your first 30 days.
          </p>

          <ul className="space-y-3">
            {PERKS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-on-surface">
                <div className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-blue-400" />
                </div>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom card */}
        <div className="relative p-5 rounded-2xl border border-outline-variant bg-gradient-to-br from-blue-600/10 to-violet-600/5">
          <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">Creator Economy</p>
          <p className="text-2xl font-display font-bold text-on-background mb-0.5">$2.1M+</p>
          <p className="text-sm text-on-surface-variant">paid out to prompt engineers and creators in 2024</p>
        </div>
      </div>

      {/* ── Right Form Panel ── */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <Link to="/" className="text-2xl font-display font-bold text-on-background">
              Cue<span className="text-blue-400">AI</span>
            </Link>
          </div>

          <h1 className="text-3xl font-display font-bold text-on-background mb-2">Create your account</h1>
          <p className="text-on-surface-variant text-sm mb-8">Start building and exploring AI prompts today</p>

          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="signup-name" className="block text-sm font-semibold text-on-surface mb-1.5">
                Full name
              </label>
              <input
                id="signup-name"
                type="text"
                autoComplete="name"
                required
                placeholder="Jane Doe"
                className="w-full px-4 py-3 bg-[#0d0e17] border border-[#2a2d3e] rounded-xl text-sm text-on-background placeholder-on-surface-variant/40 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            {/* Username */}
            <div>
              <label htmlFor="signup-username" className="block text-sm font-semibold text-on-surface mb-1.5">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-on-surface-variant font-mono">@</span>
                <input
                  id="signup-username"
                  type="text"
                  required
                  placeholder="janedoe"
                  className="w-full pl-8 pr-4 py-3 bg-[#0d0e17] border border-[#2a2d3e] rounded-xl text-sm text-on-background placeholder-on-surface-variant/40 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all font-mono"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="signup-email" className="block text-sm font-semibold text-on-surface mb-1.5">
                Email address
              </label>
              <input
                id="signup-email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
                className="w-full px-4 py-3 bg-[#0d0e17] border border-[#2a2d3e] rounded-xl text-sm text-on-background placeholder-on-surface-variant/40 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="signup-password" className="block text-sm font-semibold text-on-surface mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  placeholder="Min. 8 characters"
                  className="w-full px-4 py-3 bg-[#0d0e17] border border-[#2a2d3e] rounded-xl text-sm text-on-background placeholder-on-surface-variant/40 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 pt-1">
              <input
                id="signup-terms"
                type="checkbox"
                required
                className="w-4 h-4 rounded border-outline-variant bg-surface accent-blue-500 mt-0.5"
              />
              <label htmlFor="signup-terms" className="text-sm text-on-surface-variant leading-snug">
                I agree to the{' '}
                <Link to="/terms" className="text-blue-400 hover:text-blue-300 font-semibold">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 font-semibold">Privacy Policy</Link>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-primary text-on-primary font-semibold rounded-xl hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] text-sm mt-2"
            >
              Create Account <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-background text-xs text-on-surface-variant">or sign up with</span>
            </div>
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            <button type="button" id="signup-google" className="flex items-center justify-center gap-2 py-2.5 px-4 border border-outline-variant bg-surface rounded-xl text-sm font-medium text-on-surface hover:bg-surface-variant hover:border-outline transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              Google
            </button>
            <button type="button" id="signup-github" className="flex items-center justify-center gap-2 py-2.5 px-4 border border-outline-variant bg-surface rounded-xl text-sm font-medium text-on-surface hover:bg-surface-variant hover:border-outline transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </button>
          </div>

          <p className="mt-7 text-center text-sm text-on-surface-variant">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
