import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition, staggerContainer, itemVariant } from '../animations/variants';
import SectionReveal from '../components/SectionReveal';
import AnimatedButton from '../components/AnimatedButton';
const LikeButton = ({ initialCount }) => {
  const [liked, setLiked] = useState(false);

  return (
    <button 
      onClick={() => setLiked(!liked)}
      className={`flex items-center gap-2 transition-all ${liked ? 'text-error' : 'text-on-surface-variant hover:text-primary'}`}
    >
      <span 
        className="material-symbols-outlined" 
        style={{ fontVariationSettings: liked ? "'FILL' 1" : "'FILL' 0" }}
      >
        favorite
      </span>
      <span className="font-label-caps text-label-caps">{initialCount}</span>
    </button>
  );
};

const GetPromptButton = () => {
  const [state, setState] = useState('idle');

  const handleClick = () => {
    if (state !== 'idle') return;
    setState('loading');
    setTimeout(() => {
      setState('success');
      setTimeout(() => {
        setState('idle');
      }, 2000);
    }, 800);
  };

  if (state === 'loading') {
    return (
      <AnimatedButton className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md font-bold primary-glow flex items-center gap-2">
        <span className="material-symbols-outlined animate-spin text-[18px]">sync</span> Copying...
      </AnimatedButton>
    );
  }

  if (state === 'success') {
    return (
      <AnimatedButton className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md font-bold primary-glow flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">check</span> Copied!
      </AnimatedButton>
    );
  }

  return (
    <AnimatedButton onClick={handleClick} className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md font-bold primary-glow flex items-center gap-2 active:scale-95 transition-all">
      <span className="material-symbols-outlined text-[18px]">terminal</span>
      Get Prompt
    </AnimatedButton>
  );
};

const CreatorFeed = () => {
  return (
    <motion.div 
      initial="initial" 
      animate="in" 
      exit="out" 
      variants={pageVariants} 
      transition={pageTransition}
      className="bg-background text-on-background selection:bg-primary/30 selection:text-primary min-h-screen"
    >
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm flex justify-between items-center px-margin-desktop h-16">
        <div className="flex items-center gap-stack-md">
          <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">Cue AI</span>
          <nav className="hidden md:flex gap-stack-md">
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/marketplace">Marketplace</Link>
            <Link className="font-body-md text-body-md text-primary font-bold border-b-2 border-primary pb-1" to="/feed">Feed</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/playground">Playground</Link>
          </nav>
        </div>
        <div className="flex items-center gap-stack-md flex-1 max-w-xl mx-stack-lg">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-full py-2 pl-10 pr-4 font-label-caps text-label-caps focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="Search prompts or creators..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-stack-sm">
          <AnimatedButton className="bg-primary text-on-primary font-label-md text-label-md px-stack-md py-2 rounded-full font-bold hover:opacity-90 primary-glow transition-all">Create</AnimatedButton>
          <button className="text-on-surface-variant hover:bg-white/5 p-2 rounded-full transition-all">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:bg-white/5 p-2 rounded-full transition-all">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </header>

      {/* SideNavBar (Hidden on Mobile) */}
      <aside className="hidden lg:flex h-full w-64 fixed left-0 top-16 bg-surface-container-low/40 backdrop-blur-lg border-r border-outline-variant/10 flex-col py-stack-md gap-stack-sm z-40">
        <div className="px-6 mb-stack-sm">
          <h3 className="text-on-surface font-headline-md text-[20px] leading-tight">Categories</h3>
          <p className="text-on-surface-variant font-label-md text-label-md">Browse by model</p>
        </div>
        <div className="flex flex-col gap-1">
          <a className="flex items-center gap-stack-sm px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 active:scale-95 transition-all" href="#">
            <span className="material-symbols-outlined">category</span>
            <span className="font-label-md text-label-md">All Prompts</span>
          </a>
          <a className="flex items-center gap-stack-sm px-6 py-3 bg-primary-container/20 text-primary border-r-2 border-primary active:scale-95 transition-all" href="#">
            <span className="material-symbols-outlined">image</span>
            <span className="font-label-md text-label-md">Midjourney</span>
          </a>
          <a className="flex items-center gap-stack-sm px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 active:scale-95 transition-all" href="#">
            <span className="material-symbols-outlined">chat</span>
            <span className="font-label-md text-label-md">ChatGPT</span>
          </a>
          <a className="flex items-center gap-stack-sm px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 active:scale-95 transition-all" href="#">
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="font-label-md text-label-md">Stable Diffusion</span>
          </a>
          <a className="flex items-center gap-stack-sm px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 active:scale-95 transition-all" href="#">
            <span className="material-symbols-outlined">brush</span>
            <span className="font-label-md text-label-md">DALL-E</span>
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="lg:pl-64 pr-0 lg:pr-[320px] pt-24 pb-stack-xl min-h-screen">
        <div className="max-w-2xl mx-auto px-margin-mobile lg:px-0">
          {/* Feed Filter Tabs */}
          <div className="flex gap-stack-md mb-stack-lg border-b border-outline-variant/10">
            <button className="pb-3 text-primary border-b-2 border-primary font-label-md text-label-md transition-all">For You</button>
            <button className="pb-3 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all">Following</button>
            <button className="pb-3 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all">Latest</button>
          </div>

          {/* Feed Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-stack-lg"
          >
            {/* Card 1: AI Image */}
            <motion.article variants={itemVariant} className="glass-card rounded-xl overflow-hidden group">
              {/* Creator Info */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest">
                    <img className="w-full h-full object-cover" alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYdbCwbKXxb6CzS4bEDPuonwV9LQgHIpJd8CVxrOjBs_Im_gx78BnYJrRwEeLh1w7HRMkU5Shh_xRzR04JPSdy1E3HIqf74oEgDIILgB86YidZCbobTHS4QDJBwVuVf6fOq5JOojKYUr6UgJPxdT_u_zZoUY3NJ5ym2ktheTlpHwoop5rh6yEDbQrI6TonA1u9EM7VxwIcaidQvm_zv68NsJl8Qni-CaOgRJtolGCdsi1nassNt5SvZONUtiOAdwq-V9qh04J3ES0"/>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface font-bold">@NeuroArtisan</h4>
                    <p className="text-[12px] text-on-surface-variant">Midjourney v6 • 2h ago</p>
                  </div>
                </div>
                <button className="text-secondary font-label-md text-label-md px-4 py-1.5 rounded-full border border-secondary/20 hover:bg-secondary/10 transition-all">Subscribe</button>
              </div>

              {/* Content Media */}
              <div className="relative aspect-square overflow-hidden bg-surface-dim">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Artwork" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA42prUKIhCgJCQlLRL2tDbACp0NCkLPeA_nqOc7wIRztqNnEQ_p5CXiwbh68MrKl1I3ooobaeZcVoC9fmC0i61n03RYVWZa_kas_NPiBysmX_r06JZiqMSVQrkqyrj9nFGfHwN57ZHlOzP1zDiUU1m56zuMCZLHImQ7YGGI7PnMzWOrwbEA0CsS7dnpX0viVH6L5tiubqI0XbcRJhEsU-Dtps243tOSrTyiAqSU3jpqf4KCOAty-s_e8dIEIgFk-s1gt8_AlhJwo"/>
                {/* Overlay Metadata */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background/90 to-transparent flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-label-caps text-[10px] uppercase tracking-wider">Premium Prompt</span>
                    <h3 className="font-headline-md text-[24px] text-on-surface leading-tight">Vitreous Flow Dynamics</h3>
                  </div>
                  <GetPromptButton />
                </div>
              </div>

              {/* Interactions */}
              <div className="p-4 flex items-center justify-between border-t border-outline-variant/10">
                <div className="flex items-center gap-stack-md">
                  <LikeButton initialCount="1.2k" />
                  <button className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-all">
                    <span className="material-symbols-outlined">bookmark</span>
                    <span className="font-label-caps text-label-caps">450</span>
                  </button>
                  <button className="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-all">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                </div>
                <div className="text-on-surface-variant font-label-caps text-[12px]">$12.00</div>
              </div>
            </motion.article>

            {/* Card 2: Code Snippet / Component */}
            <motion.article variants={itemVariant} className="glass-card rounded-xl overflow-hidden group">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest">
                    <img className="w-full h-full object-cover" alt="Developer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKtcjDrDyKtusbsjYkfHIVA-kwxnDx2HpNUXJkdMxiXG7Nhia49VtC7xlH1e1i73PxHzZRwetk560fW2H8YW5OKFpb0DNFkE-GfojJ_BkFlddfrFXCLeCOh5FShU768HJjffSQ_E1zqEZds9ng-rWg3UIx2DkgVncEMtK4JxzQdhEs21KQE-MiR99bRMDWkIm1HUJlGya-US-4mS-s1R2s_tpqr-b9CIY-RfiUmWI5w4F8AYc0lWSuKt1kCY4ZkQ1y3nA1HIV-71k"/>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface font-bold">@CodeMorph</h4>
                    <p className="text-[12px] text-on-surface-variant">GPT-4o • 5h ago</p>
                  </div>
                </div>
                <button className="text-on-surface-variant hover:text-on-surface transition-all"><span className="material-symbols-outlined">more_horiz</span></button>
              </div>

              <div className="bg-surface-container-lowest p-6 font-label-caps text-label-caps border-y border-outline-variant/10">
                <div className="flex justify-between mb-4">
                  <span className="text-secondary">Glassmorphism_Card.tsx</span>
                  <span className="text-on-surface-variant">React / Tailwind</span>
                </div>
                <pre className="text-tertiary-fixed-dim leading-relaxed overflow-x-auto hide-scrollbar">
<span className="text-primary">export const</span> <span className="text-secondary">GlassCard</span> = () =&gt; {"{\n"}
  <span className="text-primary">return</span> (
    &lt;div className="<span className="text-tertiary">backdrop-blur-xl bg-white/10 ...</span>"&gt;
      &lt;h2&gt;{"{"}<span className="text-tertiary">title</span>{"}"}&lt;/h2&gt;
      <span className="text-on-surface-variant">// AI-optimized glass logic</span>
    &lt;/div&gt;
  );
{"}"};
                </pre>
              </div>

              <div className="p-6">
                <h3 className="font-headline-md text-[20px] text-on-surface mb-2">Adaptive UI Hook</h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">A precision-engineered React hook for managing complex translucency states and kinetic depth in modern web apps.</p>
                <div className="mt-4 flex gap-2">
                  <span className="bg-surface-container-highest px-3 py-1 rounded-full text-[12px] text-on-surface-variant font-label-caps">#React</span>
                  <span className="bg-surface-container-highest px-3 py-1 rounded-full text-[12px] text-on-surface-variant font-label-caps">#UI_Engineering</span>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between border-t border-outline-variant/10">
                <div className="flex items-center gap-stack-md">
                  <LikeButton initialCount="892" />
                  <button className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-all">
                    <span className="material-symbols-outlined">bookmark</span>
                    <span className="font-label-caps text-label-caps">210</span>
                  </button>
                </div>
                <button className="text-primary font-bold font-label-md text-label-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                  Get Snippet
                </button>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </main>

      {/* Sidebar Right: Trends & Creators */}
      <aside className="hidden lg:flex flex-col fixed right-0 top-16 h-full w-[320px] bg-background/40 backdrop-blur-md p-stack-md border-l border-outline-variant/10 gap-stack-lg z-40 overflow-y-auto">
        {/* Recommended Creators */}
        <section>
          <div className="flex justify-between items-end mb-stack-md">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant">Recommended Creators</h3>
            <a className="text-[11px] text-primary hover:underline" href="#">View All</a>
          </div>
          <div className="flex flex-col gap-stack-sm">
            {/* Creator Row */}
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-primary/20 p-0.5">
                  <img className="w-full h-full object-cover rounded-full" alt="Creator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvDDGweAxBgzTeMG8gXI45BAwpg3fr5Zf04J984TMqqpaJ3qqlSNbQCxaVHiiW8bi3bhOMTGua5rSy16EM-j0HWBlnZJ1vn9aZl5mTWF_8yFu15uiGY1oqC7NQxVPNBHpHHTU3x4V9zWJHnVYSQZHvFpdhYA1oHgUz7VVeRuNfg4AN18uQn6RzSWBJDwDo7KwU7NncEEvNvKDg9s7pIqzxe2tkERbJ_x4cFtBdwj5VEyXN4uDTnvvc6cvInzFpKrfDM3fDm8Q051U"/>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-bold">@SynthWave</p>
                  <p className="text-[12px] text-on-surface-variant">42.1k followers</p>
                </div>
              </div>
              <button className="p-2 rounded-full border border-outline-variant/20 text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                <span className="material-symbols-outlined text-[20px]">person_add</span>
              </button>
            </div>
            
            {/* Creator Row */}
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-primary/20 p-0.5">
                  <img className="w-full h-full object-cover rounded-full" alt="Creator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUG2iWUTcyz1FuIyjXmtMq0mmPz6gh_vPEXb1mJHZRBt6CPDLZP1pL7-GH0q89ul7t-yOYUJzXW97zTt4tJQ5qqlhGhhFQkrL-WngBENKu7gfXAPq0ZGs5O4nFc5Wo0pTxeoIQkUjh6kCyWurU9jVs0z8t_IbSeb4vWZb5pX1mNq0svrrYE76TGzB-2PwwyzvyJhBpnjwaAgEVk1I3E8L2ZqW2X81Hy5NvTL_LtUgJ-i1mjel8JOYHyjhSk6PFCu0sFQBRNjVpxcc"/>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-bold">@PixelSorceress</p>
                  <p className="text-[12px] text-on-surface-variant">18.5k followers</p>
                </div>
              </div>
              <button className="p-2 rounded-full border border-outline-variant/20 text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                <span className="material-symbols-outlined text-[20px]">person_add</span>
              </button>
            </div>
          </div>
        </section>

        {/* Trending Hashtags */}
        <section>
          <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-stack-md">Trending Hashtags</h3>
          <div className="flex flex-wrap gap-2">
            <a className="glass-card px-3 py-1.5 rounded-full font-label-md text-[13px] text-on-surface-variant hover:text-secondary transition-all" href="#">#GenerativeArt</a>
            <a className="glass-card px-3 py-1.5 rounded-full font-label-md text-[13px] text-on-surface-variant hover:text-secondary transition-all" href="#">#MidjourneyV6</a>
            <a className="glass-card px-3 py-1.5 rounded-full font-label-md text-[13px] text-on-surface-variant hover:text-secondary transition-all" href="#">#StableVideo</a>
            <a className="glass-card px-3 py-1.5 rounded-full font-label-md text-[13px] text-on-surface-variant hover:text-secondary transition-all" href="#">#LumaDream</a>
            <a className="glass-card px-3 py-1.5 rounded-full font-label-md text-[13px] text-on-surface-variant hover:text-secondary transition-all" href="#">#NextJS_UI</a>
          </div>
        </section>

        {/* Footer Mini */}
        <footer className="mt-auto pt-stack-md border-t border-outline-variant/10">
          <p className="font-label-caps text-[10px] text-on-surface-variant mb-2">© 2024 Cue AI. Precision Prompting.</p>
          <div className="flex flex-wrap gap-3">
            <a className="text-[10px] text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest" href="#">Legal</a>
            <a className="text-[10px] text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest" href="#">Twitter</a>
            <a className="text-[10px] text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest" href="#">GitHub</a>
          </div>
        </footer>
      </aside>

      {/* Mobile BottomNavBar */}
      <nav className="md:hidden fixed bottom-0 w-full bg-surface-container-low/80 backdrop-blur-xl border-t border-outline-variant/10 flex justify-around items-center h-16 z-50">
        <button className="flex flex-col items-center text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="text-[10px] font-label-md">Feed</span>
        </button>
        <button className="flex flex-col items-center text-on-surface-variant">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-label-md">Explore</span>
        </button>
        <div className="-mt-8 bg-primary rounded-full p-3 shadow-lg primary-glow flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary">add</span>
        </div>
        <button className="flex flex-col items-center text-on-surface-variant">
          <span className="material-symbols-outlined">bookmark</span>
          <span className="text-[10px] font-label-md">Library</span>
        </button>
        <button className="flex flex-col items-center text-on-surface-variant">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-label-md">Profile</span>
        </button>
      </nav>
    </motion.div>
  );
};

export default CreatorFeed;
