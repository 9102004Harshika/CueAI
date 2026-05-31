import React from 'react';
import { FiArrowRight, FiStar, FiTrendingUp, FiLayers, FiUsers } from 'react-icons/fi';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white font-sans selection:bg-[#8B5CF6] selection:text-white">
      {/* Navbar Placeholder */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#0B0B0F]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Cue AI
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Marketplace</a>
            <a href="#" className="hover:text-white transition-colors">Creators</a>
            <a href="#" className="hover:text-white transition-colors">Playground</a>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <button className="text-gray-300 hover:text-white transition-colors">Log in</button>
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8B5CF6]/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[300px] bg-[#06B6D4]/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
            Introducing the ultimate AI Creator Ecosystem
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Unlock the power of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
              perfectly engineered prompts
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover, buy, and sell top-tier AI prompts. Join the premier marketplace where creators monetize their AI mastery and users find instant solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              Start Exploring <FiArrowRight />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
              Become a Creator
            </button>
          </div>
        </div>

        {/* Mock UI/Dashboard Preview */}
        <div className="max-w-5xl mx-auto mt-20 relative z-10 rounded-2xl border border-white/10 bg-[#14141A]/80 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)]">
          <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="p-8 aspect-video flex items-center justify-center bg-gradient-to-br from-[#0B0B0F] to-[#1A1A24]">
             {/* Abstract Code/Prompt Visual */}
             <div className="w-full max-w-2xl bg-black/40 border border-white/5 rounded-xl p-6 font-mono text-sm text-gray-400">
                <div className="flex gap-4 mb-4">
                  <span className="text-[#8B5CF6]">System:</span>
                  <span className="text-gray-300">Act as an expert UX designer.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#06B6D4]">User:</span>
                  <span className="text-gray-300 typing-animation">Generate a dark-mode first landing page...|</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Active Creators', value: '10,000+' },
            { label: 'Prompts Sold', value: '2.5M' },
            { label: 'Avg. Rating', value: '4.9/5' },
            { label: 'Volume Traded', value: '$12M+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Prompts */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FiTrendingUp className="text-[#8B5CF6]" /> Trending Prompts
          </h2>
          <a href="#" className="text-[#06B6D4] hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
            View all <FiArrowRight />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative rounded-2xl bg-[#14141A] border border-white/5 p-6 hover:border-[#8B5CF6]/50 transition-all cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/0 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2">
                  <span className="px-2 py-1 text-xs rounded bg-white/5 text-gray-300">GPT-4</span>
                  <span className="px-2 py-1 text-xs rounded bg-white/5 text-gray-300">Midjourney</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                  <FiStar className="fill-current" /> 4.9
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#06B6D4] transition-colors">SaaS Copywriter Pro</h3>
              <p className="text-sm text-gray-400 mb-6 line-clamp-2">The ultimate prompt structure for generating high-converting landing page copy in seconds.</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                  <span className="text-sm font-medium text-gray-300">@alexdesign</span>
                </div>
                <span className="font-bold text-white">$12.00</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Creators */}
      <section className="py-24 bg-gradient-to-b from-[#0B0B0F] to-[#12121A] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <FiUsers className="text-[#06B6D4]" /> Elite Creators
            </h2>
            <p className="text-gray-400">Subscribe to the top minds in AI engineering.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="rounded-2xl border border-white/5 bg-[#1A1A24]/50 p-6 flex flex-col items-center text-center hover:bg-[#1A1A24] transition-colors">
                <div className="w-20 h-20 rounded-full mb-4 bg-gradient-to-tr from-cyan-400 to-purple-500 p-1">
                   <div className="w-full h-full rounded-full bg-[#1A1A24] border-2 border-transparent overflow-hidden">
                     {/* Avatar placeholder */}
                     <div className="w-full h-full bg-gray-800" />
                   </div>
                </div>
                <h4 className="text-lg font-bold">Sarah Jenkins</h4>
                <p className="text-sm text-[#06B6D4] mb-4">@sarahai</p>
                <div className="flex gap-4 text-sm text-gray-400 mb-6">
                  <div><span className="text-white font-bold block">12k</span> Followers</div>
                  <div><span className="text-white font-bold block">45</span> Prompts</div>
                </div>
                <button className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#8B5CF6]/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to monetize your prompts?</h2>
          <p className="text-xl text-gray-400 mb-10">Join thousands of creators earning a living from their AI skills on Cue AI.</p>
          <button className="px-8 py-4 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full font-bold text-lg transition-colors shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            Create Your Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div>© 2026 Cue AI. All rights reserved.</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Discord</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
