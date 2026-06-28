import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Star, Zap, TrendingUp, Sparkles } from 'lucide-react';

const creators = [
  { name: "VectorMind", role: "MJ Expert", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjkgAYq5S5zfPbtsvfVkcBdbuvo0ILo-Po5r2r_6jxGyFIo2Zi53ykQ9U4SnB_RGIF623SdAnaOorO5K-0h5KK_FD9qx1vGKvkSPporp6HnzuS9n43MbSg9zs_gLif5hQZ8rw6jvdvrS9g5qUEqsPwn0tQ-IDCYeeqhuyEpsS5Uy6k4FZNNWfrzTWD_nrIFXiURppQllwkuUCqRNHUlisTrm_gIISjRiY1MnpVKOBJiyEq6i9K5kChuWc5O7VLnHqftEiQB9yBETc" },
  { name: "CyberAlice", role: "SDXL Specialist", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu_QH2Ix-r2My2v3P0RqPiR5UVo0lS-34hKH-ZGfboNFZwPFTNVfqikuTwPwxuVaeLMrMV7PQZo8_Fxre59FfyaDkqvHveT31I-9RFCxQ0MSkBltBpDw7VO0VWUc7DA_vHHg3zAO5R1kgBl0U8EoSlkgZtoe-AJAQ9B6W6QmJuNypYAnfR1yKcqP29EWy7bSATfx6ijYugXNv5WBwlI3dvASvmqtLkjHBGC-v7aXDdlXcaPDRzv0RcXq2l4zCKtUtnktXhztwWRzk" },
  { name: "PromptWizard", role: "DALL-E 3", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ-gqooiH0hZ-CK9AIcTlaS-zQsHm-as6a5jMWWq0W_oo-4uS5OvoSA9_EommPlMfEo-6E-k86E8BW5-Fqzx_Xri4gt7QZ5wOl1uQJufT6GJeTpC9KtFAN8rEAp1UJuEViQg3hDzb-FooxHDpjex1-uBLCHWGqlbnhu0ZES0Q-GyHUsr6htHTuDtLrJA_a3V2sgjfLbRfURUN9kl204SMbNQ8JPLucbTh8XzcITpDz1-abiJujpJPqulR8Nt1P3XEAr4bFjfd_960" },
  { name: "EtherealLens", role: "MJ Photographer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6pxCsSO1INezmMj7n8GZ35S6O-89QKaSmWjLRaVngOTNzBT9-nwfVg6Jajoc3Mm06za2hAAdFTR7OvFkOISR6KSeaCRDCt0bPfRqR5EHVOqteFPEzNI5v5xHoOOvf6j4Z7iZLWu0fe1CfXfViEOTd5vYw_yEF3cIuGef52NgGVd7LFv6DlCmsAMO_M7dBl1lxxyFlgEQZTdjh7vaEOG_O8tlaWv8sa7cBP1RKqidSPdj8NUMlesEW_dB8xY7sPbUXnMVoRuszXos" },
  { name: "NodeRunner", role: "Logic Architect", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf9wU4k6UftH9Y1scM90qvKmu9XW0FFsN8YUdjbWKOYu6X-5xYh4sn6maOXvqSBYeZindqusqMr34rWMdN57ThEha740UCSLAvtVLOu4CiMYHVsEUd7gDUxeJCy3oYVuXKekR5F0cgZTM-b3Jpr66JGhICjKwK1td9Md75BfBft7_slXQDmO5CAzpDlqRcj64KpAD6twlP02EoVtJCozYws49c9Z2hryw1muG0rKUci8VhgyLcpSXLoiyk8n9AhKxxQZ5Eoa8tVmA" },
];

const prompts = [
  { id: 1, title: "Cyberpunk Obsidian Landscapes", price: "$14.99", model: "SDXL", author: "VectorMind", rating: 4.9, sales: 1240, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE9o6D3dav7ezBXWgdcvDbzLCvT8mDa1LeH87bVoHA7bCFzG7GZamCiwq8X67QV-BWjlXwBXeY1WupuxaiHWQaRj4_aU3uKqpHoSCLRK8ahk72vUSs1vgTiumooMt9_RKHfeHSN7lzn8waZP1xCMcf5anhsW8bc1-enwngbdzM35JYVB6FV-fgFmUX5HTOyXeehskCXjuC0g6bpktDEakEogJB9ySs6SnCS2njo1ZBZ5n_IqcuSDOSoZsnCFzJtt9UDx5XjLNxyHs" },
  { id: 2, title: "Neolithic Minimalist Homes", price: "$22.00", model: "Midjourney v6", author: "CyberAlice", rating: 5.0, sales: 870, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACIOAY3C_LPPL9AeYrRRCt_fHC5YgrCjANxkxvgTkfNv29FVUU4yTLOeZMCionlgaRfEaBtIzXNX-Whm1V5YTi5S8GMgyiSKZzUenvmDTYEPO2Yl3ZznlY1ePFrTFklc1HPMohQvW29dCE4T0x_EDbn5dRjly4EOCUaboB8vY5_4cNdUm2i512weoCaZc0LEVZtgzK5PlSWCd8HKeGbQNnCYV4W9D59yQFshPP3zeYT2UAQYlcnMt0-uexg4y7pQhHIJEnv7yISok" },
  { id: 3, title: "Eco-Mechanical Wildlife", price: "$9.99", model: "DALL-E 3", author: "PromptWizard", rating: 4.7, sales: 650, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEhmwdJjk_DzGDJF-lX8YacuIht5VWJlJejlE7sJ-wqT3vg9YrKWH92RpyQ-_gkxwn9m2oCXQmFJoKrvTchyhZsqcy1Xds-k_5G_l2NDxYrPz5BDHNQ3D0LwqJPWQPyX834a1u5r6C3NsvGJtfa1GEa7gIl9nKdCz2zynWCD4BUQWLiizDj01_n8DsedlL3xqK5orGrvhmEdyIUzb_m_623DoP05ObTq_C0zi8LbRWdDg023kBJfDLcCII0TspkvLLjFQZuFugXcQ" },
  { id: 4, title: "Luxury Chrono Visualizer", price: "$18.50", model: "Midjourney v6", author: "EtherealLens", rating: 4.9, sales: 1020, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkHMV1aIYLlEekSiD-6_TsHDz9dVxRQ26tsrv9SSKk-BQvGeh3-5qtR9SC42_wJy87qZIOmoqcu0xgAKMT_GUawrU2pThlz39lkI1oIEYBiVNLwlohh-VeMq1v_khM0pAfeNCZBwW-pra0XC46r2tQxrEnNxBn8H78W5yKjMYEJUjmKjlboUDdZH56T8fjKSJC3wcydqMghNcxUITfCoMmN2i0ZDPmZG17ugU2a5GtsOkGrI4yceGZGxbL2PqR0krIFpOsJKmSlKs" },
  { id: 5, title: "Holographic HUD Generator", price: "$25.00", model: "SDXL", author: "NodeRunner", rating: 4.8, sales: 1580, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALMWrEjv00ewjNsJZDuB206hQdttMpXGyoC2vfF2PqwVqC5Q5GF7bOlTjsQoyHcBAn_UWVdstOZBuryZs9QWZkVNkWzR2fCtOL795EHvPRkxAt_bm4XG4Wem-tOBUs8R3kQ5ExPzv7Np3EvfkiadBQoi6tys8YLxuDGkT76r4CNP7dqu8OLRjT9VIKRlRpbrGihmymIXwyyxBlNdlw90VcpIsNG-ePt2PIGoSFj7k8dJ_Gk7AAXGmz13jEgbLWH06CN1BkJx4ftks" },
];

const MODEL_COLORS = {
  'SDXL': 'text-violet-400 border-violet-500/30 bg-violet-500/10',
  'Midjourney v6': 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  'DALL-E 3': 'text-amber-400 border-amber-500/30 bg-amber-500/10',
};

const CATEGORIES = ['All', 'Image Generation', 'Code', 'Writing', 'Architecture', 'Product'];

const Marketplace = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('Trending');
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Header */}
      <div className="relative border-b border-outline-variant bg-surface/40 backdrop-blur-sm">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 left-1/3 w-[600px] h-[300px] rounded-full bg-primary/8 blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-10">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Live Marketplace</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-background mb-3 tracking-tight">
            Prompt Marketplace
          </h1>
          <p className="text-on-surface-variant max-w-xl">
            The world's most sophisticated prompt library for creative workflows and enterprise AI. Engineered for precision.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Featured Creators */}
        <section className="mb-14">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h2 className="text-lg font-display font-semibold text-on-background">Featured Creators</h2>
            </div>
            <button className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {creators.map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                className="group cursor-pointer p-4 rounded-xl border border-outline-variant bg-surface/60 hover:border-blue-500/40 hover:bg-surface transition-all flex flex-col items-center text-center"
              >
                <div className="relative mb-3">
                  <img src={c.img} alt={c.name} className="w-14 h-14 rounded-full object-cover border-2 border-outline-variant group-hover:border-blue-500/50 transition-colors" />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-surface" />
                </div>
                <h3 className="font-semibold text-sm text-on-background">{c.name}</h3>
                <p className="text-xs text-on-surface-variant mt-0.5">{c.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Search & Filters */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-on-primary shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                      : 'bg-surface border border-outline-variant text-on-surface-variant hover:border-outline hover:text-on-surface'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                <input
                  type="text"
                  placeholder="Search prompts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 pr-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm text-on-background placeholder-on-surface-variant focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 w-52 transition-all"
                />
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-surface border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary/60 cursor-pointer"
              >
                <option>Trending</option>
                <option>Newest</option>
                <option>Highest Rated</option>
                <option>Best Selling</option>
              </select>
            </div>
          </div>
        </section>

        {/* Prompt Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {prompts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => navigate(`/marketplace/prompt/${p.id}`)}
                className="group cursor-pointer rounded-2xl border border-outline-variant bg-surface overflow-hidden hover:border-blue-500/30 transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                {/* Image */}
                <div className="aspect-square relative overflow-hidden bg-surface-variant">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3">
                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${MODEL_COLORS[p.model] || 'text-on-surface-variant border-outline-variant bg-surface/80'}`}>
                      {p.model}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] font-mono text-on-surface-variant">{p.sales.toLocaleString()} sales</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-sm text-on-background leading-snug mb-3 line-clamp-2 group-hover:text-blue-100 transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-semibold text-on-surface">{p.rating}</span>
                      <span className="text-xs text-on-surface-variant">· by {p.author}</span>
                    </div>
                    <span className="font-bold text-sm text-blue-400">{p.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Sell CTA card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="cursor-pointer rounded-2xl border-2 border-dashed border-outline-variant hover:border-blue-500/40 bg-surface/20 hover:bg-blue-500/5 transition-all min-h-[300px] flex flex-col items-center justify-center gap-3 p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-variant border border-outline-variant flex items-center justify-center group-hover:border-blue-500/30 transition-colors">
                <Zap className="w-5 h-5 text-on-surface-variant group-hover:text-blue-400 transition-colors" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm text-on-surface group-hover:text-on-background transition-colors">Sell your prompts</p>
                <p className="text-xs text-on-surface-variant mt-1">Join 3,400+ creators earning on CueAI</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Marketplace;
