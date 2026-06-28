import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Terminal, UserPlus, Bookmark, Hash } from 'lucide-react';
import { motion } from 'framer-motion';

const PostCard = ({ creator, avatar, time, model, type, content, metadata }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const MODEL_COLORS = {
    'Midjourney v6': 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    'GPT-4o': 'text-violet-400 border-violet-500/30 bg-violet-500/10',
    'SDXL': 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    'DALL-E 3': 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-outline-variant bg-surface overflow-hidden mb-5 hover:border-outline transition-all"
    >
      {/* Header */}
      <div className="px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant shrink-0">
            <img src={avatar} alt={creator} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-on-background">{creator}</h4>
            <div className="flex items-center gap-2 mt-0.5">
              <span className={`text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded border ${MODEL_COLORS[model] || 'text-on-surface-variant border-outline-variant bg-surface-variant'}`}>
                {model}
              </span>
              <span className="text-[10px] text-on-surface-variant">{time}</span>
            </div>
          </div>
        </div>
        <button className="px-4 py-1.5 rounded-full border border-outline-variant text-xs font-semibold text-on-surface hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/5 transition-all">
          Follow
        </button>
      </div>

      {/* Image Post */}
      {type === 'image' && (
        <div className="relative bg-background overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <img src={content.image} alt="Post" className="w-full h-full object-cover" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
          {/* Bottom overlay pill */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <div>
              <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">{metadata.tag}</span>
              <h3 className="font-display font-bold text-on-background text-base mt-0.5">{metadata.title}</h3>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-blue-500 transition-all shadow-[0_0_14px_rgba(37,99,235,0.5)] flex items-center gap-1.5">
              <Terminal size={13} /> Run
            </button>
          </div>
        </div>
      )}

      {/* Code Post */}
      {type === 'code' && (
        <div className="px-5 pb-4 bg-background/30">
          <h3 className="font-display font-bold text-on-background text-base mb-1.5">{metadata.title}</h3>
          <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">{content.description}</p>
          <div className="rounded-xl border border-outline-variant overflow-hidden bg-[#08090e]">
            <div className="px-4 py-2.5 border-b border-[#1e2030] bg-[#0d0e17] flex justify-between items-center">
              <span className="text-xs font-mono text-on-surface-variant">{content.filename}</span>
              <span className="text-[10px] font-mono text-violet-400 border border-violet-500/20 bg-violet-500/10 px-2 py-0.5 rounded">{content.language}</span>
            </div>
            <pre className="p-4 text-xs font-mono text-[#abb2bf] overflow-x-auto leading-relaxed">
              <code>{content.code}</code>
            </pre>
          </div>
        </div>
      )}

      {/* Footer Actions */}
      <div className="px-5 py-3.5 flex items-center justify-between border-t border-outline-variant/50">
        <div className="flex items-center gap-5">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${liked ? 'text-rose-400' : 'text-on-surface-variant hover:text-rose-400'}`}
          >
            <Heart size={17} className={liked ? 'fill-current' : ''} />
            {metadata.likes}
          </button>
          <button className="flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant hover:text-blue-400 transition-colors">
            <MessageCircle size={17} />
            {metadata.comments}
          </button>
          <button className="flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors">
            <Share2 size={17} />
          </button>
        </div>
        <div className="flex items-center gap-4">
          {metadata.price && (
            <span className="text-sm font-mono font-bold text-on-background">{metadata.price}</span>
          )}
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`transition-colors ${bookmarked ? 'text-blue-400' : 'text-on-surface-variant hover:text-blue-400'}`}
          >
            <Bookmark size={17} className={bookmarked ? 'fill-current' : ''} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const TOPICS = ['Generative Art', 'System Prompts', 'UI/UX Engineering', 'Data Analysis', 'Creative Writing'];
const FEED_TABS = ['For You', 'Following', 'Bookmarks'];

const SUGGESTED_CREATORS = [
  { name: '@SynthWave', followers: '42.1k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvDDGweAxBgzTeMG8gXI45BAwpg3fr5Zf04J984TMqqpaJ3qqlSNbQCxaVHiiW8bi3bhOMTGua5rSy16EM-j0HWBlnZJ1vn9aZl5mTWF_8yFu15uiGY1oqC7NQxVPNBHpHHTU3x4V9zWJHnVYSQZHvFpdhYA1oHgUz7VVeRuNfg4AN18uQn6RzSWBJDwDo7KwU7NncEEvNvKDg9s7pIqzxe2tkERbJ_x4cFtBdwj5VEyXN4uDTnvvc6cvInzFpKrfDM3fDm8Q051U' },
  { name: '@PixelSorceress', followers: '18.5k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUG2iWUTcyz1FuIyjXmtMq0mmPz6gh_vPEXb1mJHZRBt6CPDLZP1pL7-GH0q89ul7t-yOYUJzXW97zTt4tJQ5qqlhGhhFQkrL-WngBENKu7gfXAPq0ZGs5O4nFc5Wo0pTxeoIQkUjh6kCyWurU9jVs0z8t_IbSeb4vWZb5pX1mNq0svrrYE76TGzB-2PwwyzvyJhBpnjwaAgEVk1I3E8L2ZqW2X81Hy5NvTL_LtUgJ-i1mjel8JOYHyjhSk6PFCu0sFQBRNjVpxcc' },
  { name: '@NeuralBrush', followers: '9.3k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjkgAYq5S5zfPbtsvfVkcBdbuvo0ILo-Po5r2r_6jxGyFIo2Zi53ykQ9U4SnB_RGIF623SdAnaOorO5K-0h5KK_FD9qx1vGKvkSPporp6HnzuS9n43MbSg9zs_gLif5hQZ8rw6jvdvrS9g5qUEqsPwn0tQ-IDCYeeqhuyEpsS5Uy6k4FZNNWfrzTWD_nrIFXiURppQllwkuUCqRNHUlisTrm_gIISjRiY1MnpVKOBJiyEq6i9K5kChuWc5O7VLnHqftEiQB9yBETc' },
];

const CreatorFeed = () => {
  const [activeTab, setActiveTab] = useState('For You');

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8 justify-center">

        {/* ── Left Sidebar ── */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24">
            {/* Feed tabs */}
            <div className="mb-7">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3">Feed</p>
              <ul className="space-y-0.5">
                {FEED_TABS.map(tab => (
                  <li key={tab}>
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        activeTab === tab
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : 'text-on-surface-variant hover:bg-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Topics */}
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3">Topics</p>
              <ul className="space-y-0.5">
                {TOPICS.map(topic => (
                  <li key={topic}>
                    <button className="w-full text-left px-3 py-2 rounded-xl text-sm text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
                      <Hash size={13} className="shrink-0 text-on-surface-variant/60" />
                      {topic}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* ── Center Feed ── */}
        <main className="w-full max-w-xl">
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
              code: `export const useAdaptiveState = <T>(initial: T) => {
  const [state, setState] = useState<T>(initial);
  // AI optimized state logic
  return [state, setState] as const;
};`
            }}
            metadata={{ title: "Adaptive UI Hook", tag: "System Prompt", likes: "892", comments: "15" }}
          />
        </main>

        {/* ── Right Sidebar ── */}
        <aside className="hidden xl:block w-72 shrink-0">
          <div className="sticky top-24 space-y-5">
            {/* Suggested Creators */}
            <div className="rounded-2xl border border-outline-variant bg-surface p-5">
              <h3 className="text-sm font-display font-bold text-on-background mb-4">Suggested Creators</h3>
              <div className="space-y-4">
                {SUGGESTED_CREATORS.map(c => (
                  <div key={c.name} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <img src={c.img} alt={c.name} className="w-9 h-9 rounded-full object-cover border border-outline-variant" />
                      <div>
                        <p className="text-sm font-semibold text-on-background">{c.name}</p>
                        <p className="text-[11px] text-on-surface-variant">{c.followers} followers</p>
                      </div>
                    </div>
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-blue-400 hover:bg-blue-500/10 transition-all">
                      <UserPlus size={15} />
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors text-center">
                See all creators →
              </button>
            </div>

            {/* Trending Topics */}
            <div className="rounded-2xl border border-outline-variant bg-surface p-5">
              <h3 className="text-sm font-display font-bold text-on-background mb-4">Trending Topics</h3>
              <div className="space-y-2.5">
                {[
                  { tag: '#GenerativeArt', posts: '4.2k posts' },
                  { tag: '#SystemPrompts', posts: '2.8k posts' },
                  { tag: '#UIEngineering', posts: '1.9k posts' },
                ].map(t => (
                  <div key={t.tag} className="flex items-center justify-between cursor-pointer hover:bg-surface-variant p-2 -mx-2 rounded-lg transition-colors">
                    <span className="text-sm font-semibold text-blue-400">{t.tag}</span>
                    <span className="text-[11px] text-on-surface-variant">{t.posts}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer links */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 px-1">
              {['Privacy', 'Terms', 'Docs', 'API'].map(l => (
                <a key={l} href="#" className="text-[10px] font-bold text-on-surface-variant hover:text-on-surface uppercase tracking-widest transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default CreatorFeed;
