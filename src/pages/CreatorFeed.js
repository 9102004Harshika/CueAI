import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Terminal, UserPlus, Bookmark, Search, Bell, User, Hash } from 'lucide-react';
import { Link } from 'react-router-dom';

const PostCard = ({ creator, avatar, time, model, type, content, metadata }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="premium-card bg-surface overflow-hidden mb-6">
      <div className="p-4 flex items-center justify-between border-b border-outline-variant/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-background border border-outline-variant">
            <img src={avatar} alt={creator} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-on-background">{creator}</h4>
            <p className="text-xs text-on-surface-variant">{model} • {time}</p>
          </div>
        </div>
        <button className="px-4 py-1.5 rounded-full border border-outline-variant text-xs font-semibold text-on-surface hover:bg-surface-variant transition-colors">
          Follow
        </button>
      </div>

      {type === 'image' && (
        <div className="relative aspect-square sm:aspect-[4/3] bg-background">
          <img src={content.image} alt="Post content" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md border border-outline-variant p-4 rounded-lg flex justify-between items-center shadow-sm">
             <div>
                <span className="text-[10px] font-mono font-semibold text-primary uppercase tracking-widest">{metadata.tag}</span>
                <h3 className="font-display font-semibold text-on-background mt-1">{metadata.title}</h3>
             </div>
             <button className="bg-primary text-on-primary px-4 py-2 rounded text-xs font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Terminal size={14} /> Run
             </button>
          </div>
        </div>
      )}

      {type === 'code' && (
         <div className="p-6 bg-background">
            <h3 className="font-display font-semibold text-on-background mb-2">{metadata.title}</h3>
            <p className="text-sm text-on-surface-variant mb-4">{content.description}</p>
            <div className="border border-outline-variant rounded-md overflow-hidden bg-surface-variant/30">
               <div className="bg-surface px-4 py-2 border-b border-outline-variant text-xs font-mono text-on-surface-variant flex justify-between">
                  <span>{content.filename}</span>
                  <span>{content.language}</span>
               </div>
               <pre className="p-4 text-xs font-mono text-on-surface overflow-x-auto">
                  <code>{content.code}</code>
               </pre>
            </div>
         </div>
      )}

      <div className="p-4 flex items-center justify-between border-t border-outline-variant/50">
        <div className="flex items-center gap-6">
          <button onClick={() => setLiked(!liked)} className={`flex items-center gap-2 transition-colors ${liked ? 'text-error' : 'text-on-surface-variant hover:text-on-surface'}`}>
            <Heart size={18} className={liked ? 'fill-current' : ''} />
            <span className="text-xs font-semibold">{metadata.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors">
            <MessageCircle size={18} />
            <span className="text-xs font-semibold">{metadata.comments}</span>
          </button>
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors">
            <Share2 size={18} />
          </button>
        </div>
        <div className="flex items-center gap-4">
           {metadata.price && <span className="text-sm font-mono font-semibold text-on-background">{metadata.price}</span>}
           <button onClick={() => setBookmarked(!bookmarked)} className={`transition-colors ${bookmarked ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
             <Bookmark size={18} className={bookmarked ? 'fill-current' : ''} />
           </button>
        </div>
      </div>
    </div>
  );
};

const CreatorFeed = () => {
  return (
    <div className="bg-background text-on-background min-h-screen font-body">
      
      {/* Top Navbar */}
      <header className="fixed top-0 w-full h-14 bg-surface border-b border-outline-variant z-50 flex items-center justify-between px-6">
         <div className="flex items-center gap-8">
            <Link to="/" className="font-display font-semibold text-lg tracking-tight">CueAI</Link>
            <nav className="hidden md:flex gap-6">
               <Link to="/marketplace" className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">Marketplace</Link>
               <Link to="/feed" className="text-sm font-medium text-on-background border-b-2 border-primary py-4">Feed</Link>
               <Link to="/playground" className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">Playground</Link>
            </nav>
         </div>
         <div className="flex-1 max-w-md mx-6 hidden md:block">
            <div className="relative">
               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
               <input type="text" placeholder="Search community..." className="w-full bg-background border border-outline-variant rounded-md py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:border-primary" />
            </div>
         </div>
         <div className="flex items-center gap-4">
            <button className="bg-on-background text-background px-4 py-1.5 rounded-md text-xs font-semibold hover:bg-secondary transition-colors">New Post</button>
            <button className="text-on-surface-variant hover:text-on-surface transition-colors"><Bell size={18} /></button>
            <Link to="/profile" className="text-on-surface-variant hover:text-on-surface transition-colors"><User size={18} /></Link>
         </div>
      </header>

      {/* Main Layout */}
      <div className="pt-14 flex justify-center max-w-7xl mx-auto">
         
         {/* Left Sidebar */}
         <aside className="hidden lg:block w-64 p-6 fixed left-auto xl:-ml-[350px] h-[calc(100vh-56px)] overflow-y-auto">
            <div className="space-y-6">
               <div>
                  <h3 className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-3">Feed</h3>
                  <ul className="space-y-1">
                     <li><button className="w-full text-left px-3 py-2 rounded-md bg-surface border border-outline-variant text-sm font-semibold text-on-background">For You</button></li>
                     <li><button className="w-full text-left px-3 py-2 rounded-md hover:bg-surface-variant text-sm font-medium text-on-surface-variant transition-colors">Following</button></li>
                     <li><button className="w-full text-left px-3 py-2 rounded-md hover:bg-surface-variant text-sm font-medium text-on-surface-variant transition-colors">Bookmarks</button></li>
                  </ul>
               </div>
               <div>
                  <h3 className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-3">Topics</h3>
                  <ul className="space-y-1">
                     {['Generative Art', 'System Prompts', 'UI/UX Engineering', 'Data Analysis'].map(topic => (
                        <li key={topic}>
                           <button className="w-full text-left px-3 py-2 rounded-md hover:bg-surface-variant text-sm font-medium text-on-surface-variant transition-colors flex items-center gap-2">
                              <Hash size={14} />
                              {topic}
                           </button>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </aside>

         {/* Center Feed */}
         <main className="w-full max-w-2xl p-6 lg:ml-64 xl:ml-0">
            <PostCard 
               creator="@NeuroArtisan"
               avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAYdbCwbKXxb6CzS4bEDPuonwV9LQgHIpJd8CVxrOjBs_Im_gx78BnYJrRwEeLh1w7HRMkU5Shh_xRzR04JPSdy1E3HIqf74oEgDIILgB86YidZCbobTHS4QDJBwVuVf6fOq5JOojKYUr6UgJPxdT_u_zZoUY3NJ5ym2ktheTlpHwoop5rh6yEDbQrI6TonA1u9EM7VxwIcaidQvm_zv68NsJl8Qni-CaOgRJtolGCdsi1nassNt5SvZONUtiOAdwq-V9qh04J3ES0"
               time="2h ago"
               model="Midjourney v6"
               type="image"
               content={{ image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA42prUKIhCgJCQlLRL2tDbACp0NCkLPeA_nqOc7wIRztqNnEQ_p5CXiwbh68MrKl1I3ooobaeZcVoC9fmC0i61n03RYVWZa_kas_NPiBysmX_r06JZiqMSVQrkqyrj9nFGfHwN57ZHlOzP1zDiUU1m56zuMCZLHImQ7YGGI7PnMzWOrwbEA0CsS7dnpX0viVH6L5tiubqI0XbcRJhEsU-Dtps243tOSrTyiAqSU3jpqf4KCOAty-s_e8dIEIgFk-s1gt8_AlhJwo" }}
               metadata={{ title: "Vitreous Flow Dynamics", tag: "Premium Prompt", likes: "1.2k", comments: "48", price: "$12.00" }}
            />

            <PostCard 
               creator="@CodeMorph"
               avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAKtcjDrDyKtusbsjYkfHIVA-kwxnDx2HpNUXJkdMxiXG7Nhia49VtC7xlH1e1i73PxHzZRwetk560fW2H8YW5OKFpb0DNFkE-GfojJ_BkFlddfrFXCLeCOh5FShU768HJjffSQ_E1zqEZds9ng-rrWg3UIx2DkgVncEMtK4JxzQdhEs21KQE-MiR99bRMDWkIm1HUJlGya-US-4mS-s1R2s_tpqr-b9CIY-RfiUmWI5w4F8AYc0lWSuKt1kCY4ZkQ1y3nA1HIV-71k"
               time="5h ago"
               model="GPT-4o"
               type="code"
               content={{ 
                  description: "A precision-engineered React hook for managing complex states.",
                  filename: "useAdaptiveState.ts",
                  language: "TypeScript",
                  code: "export const useAdaptiveState = <T>(initial: T) => {\n  const [state, setState] = useState<T>(initial);\n  // AI optimized state logic\n  return [state, setState] as const;\n};"
               }}
               metadata={{ title: "Adaptive UI Hook", tag: "System Prompt", likes: "892", comments: "15" }}
            />
         </main>

         {/* Right Sidebar */}
         <aside className="hidden xl:block w-80 p-6">
            <div className="premium-card p-4 mb-6">
               <h3 className="text-sm font-semibold font-display tracking-tight text-on-background mb-4">Suggested Creators</h3>
               <div className="space-y-4">
                  {[
                     { name: '@SynthWave', followers: '42.1k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvDDGweAxBgzTeMG8gXI45BAwpg3fr5Zf04J984TMqqpaJ3qqlSNbQCxaVHiiW8bi3bhOMTGua5rSy16EM-j0HWBlnZJ1vn9aZl5mTWF_8yFu15uiGY1oqC7NQxVPNBHpHHTU3x4V9zWJHnVYSQZHvFpdhYA1oHgUz7VVeRuNfg4AN18uQn6RzSWBJDwDo7KwU7NncEEvNvKDg9s7pIqzxe2tkERbJ_x4cFtBdwj5VEyXN4uDTnvvc6cvInzFpKrfDM3fDm8Q051U' },
                     { name: '@PixelSorceress', followers: '18.5k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUG2iWUTcyz1FuIyjXmtMq0mmPz6gh_vPEXb1mJHZRBt6CPDLZP1pL7-GH0q89ul7t-yOYUJzXW97zTt4tJQ5qqlhGhhFQkrL-WngBENKu7gfXAPq0ZGs5O4nFc5Wo0pTxeoIQkUjh6kCyWurU9jVs0z8t_IbSeb4vWZb5pX1mNq0svrrYE76TGzB-2PwwyzvyJhBpnjwaAgEVk1I3E8L2ZqW2X81Hy5NvTL_LtUgJ-i1mjel8JOYHyjhSk6PFCu0sFQBRNjVpxcc' }
                  ].map(c => (
                     <div key={c.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <img src={c.img} alt={c.name} className="w-8 h-8 rounded-full object-cover bg-surface-variant" />
                           <div>
                              <p className="text-xs font-semibold text-on-background">{c.name}</p>
                              <p className="text-[10px] text-on-surface-variant">{c.followers} followers</p>
                           </div>
                        </div>
                        <button className="text-on-surface-variant hover:text-primary transition-colors"><UserPlus size={16} /></button>
                     </div>
                  ))}
               </div>
            </div>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2 px-2">
               <a href="#" className="text-[10px] font-semibold text-on-surface-variant hover:text-on-surface uppercase tracking-widest transition-colors">Privacy</a>
               <a href="#" className="text-[10px] font-semibold text-on-surface-variant hover:text-on-surface uppercase tracking-widest transition-colors">Terms</a>
               <a href="#" className="text-[10px] font-semibold text-on-surface-variant hover:text-on-surface uppercase tracking-widest transition-colors">Docs</a>
               <span className="text-[10px] text-on-surface-variant mt-2 block w-full">© 2026 CueAI Platform</span>
            </div>
         </aside>

      </div>
    </div>
  );
};

export default CreatorFeed;
