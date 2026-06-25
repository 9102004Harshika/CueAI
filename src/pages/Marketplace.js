import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppShell from '../components/layout/AppShell';
import MarketingFooter from '../components/layout/MarketingFooter';

const Marketplace = () => {
  const navigate = useNavigate();
  const handlePromptClick = (id) => {
    navigate(`/marketplace/prompt/${id}`);
  };

  const creators = [
    { name: "VectorMind", role: "MJ Expert", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjkgAYq5S5zfPbtsvfVkcBdbuvo0ILo-Po5r2r_6jxGyFIo2Zi53ykQ9U4SnB_RGIF623SdAnaOorO5K-0h5KK_FD9qx1vGKvkSPporp6HnzuS9n43MbSg9zs_gLif5hQZ8rw6jvdvrS9g5qUEqsPwn0tQ-IDCYeeqhuyEpsS5Uy6k4FZNNWfrzTWD_nrIFXiURppQllwkuUCqRNHUlisTrm_gIISjRiY1MnpVKOBJiyEq6i9K5kChuWc5O7VLnHqftEiQB9yBETc" },
    { name: "CyberAlice", role: "SDXL Specialist", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu_QH2Ix-r2My2v3P0RqPiR5UVo0lS-34hKH-ZGfboNFZwPFTNVfqikuTwPwxuVaeLMrMV7PQZo8_Fxre59FfyaDkqvHveT31I-9RFCxQ0MSkBltBpDw7VO0VWUc7DA_vHHg3zAO5R1kgBl0U8EoSlkgZtoe-AJAQ9B6W6QmJuNypYAnfR1yKcqP29EWy7bSATfx6ijYugXNv5WBwlI3dvASvmqtLkjHBGC-v7aXDdlXcaPDRzv0RcXq2l4zCKtUtnktXhztwWRzk" },
    { name: "PromptWizard", role: "DALL-E 3", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ-gqooiH0hZ-CK9AIcTlaS-zQsHm-as6a5jMWWq0W_oo-4uS5OvoSA9_EommPlMfEo-6E-k86E8BW5-Fqzx_Xri4gt7QZ5wOl1uQJufT6GJeTpC9KtFAN8rEAp1UJuEViQg3hDzb-FooxHDpjex1-uBLCHWGqlbnhu0ZES0Q-GyHUsr6htHTuDtLrJA_a3V2sgjfLbRfURUN9kl204SMbNQ8JPLucbTh8XzcITpDz1-abiJujpJPqulR8Nt1P3XEAr4bFjfd_960" },
    { name: "EtherealLens", role: "MJ Photographer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6pxCsSO1INezmMj7n8GZ35S6O-89QKaSmWjLRaVngOTNzBT9-nwfVg6Jajoc3Mm06za2hAAdFTR7OvFkOISR6KSeaCRDCt0bPfRqR5EHVOqteFPEzNI5v5xHoOOvf6j4Z7iZLWu0fe1CfXfViEOTd5vYw_yEF3cIuGef52NgGVd7LFv6DlCmsAMO_M7dBl1lxxyFlgEQZTdjh7vaEOG_O8tlaWv8sa7cBP1RKqidSPdj8NUMlesEW_dB8xY7sPbUXnMVoRuszXos" },
    { name: "NodeRunner", role: "Logic Architect", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf9wU4k6UftH9Y1scM90qvKmu9XW0FFsN8YUdjbWKOYu6X-5xYh4sn6maOXvqSBYeZindqusqMr34rWMdN57ThEha740UCSLAvtVLOu4CiMYHVsEUd7gDUxeJCy3oYVuXKekR5F0cgZTM-b3Jpr66JGhICjKwK1td9Md75BfBft7_slXQDmO5CAzpDlqRcj64KpAD6twlP02EoVtJCozYws49c9Z2hryw1muG0rKUci8VhgyLcpSXLoiyk8n9AhKxxQZ5Eoa8tVmA" }
  ];

  const prompts = [
    { id: 1, title: "Cyberpunk Obsidian Landscapes", price: "$14.99", model: "SDXL", author: "VectorMind", rating: 4.9, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE9o6D3dav7ezBXWgdcvDbzLCvT8mDa1LeH87bVoHA7bCFzG7GZamCiwq8X67QV-BWjlXwBXeY1WupuxaiHWQaRj4_aU3uKqpHoSCLRK8ahk72vUSs1vgTiumooMt9_RKHfeHSN7lzn8waZP1xCMcf5anhsW8bc1-enwngbdzM35JYVB6FV-fgFmUX5HTOyXeehskCXjuC0g6bpktDEakEogJB9ySs6SnCS2njo1ZBZ5n_IqcuSDOSoZsnCFzJtt9UDx5XjLNxyHs" },
    { id: 2, title: "Neolithic Minimalist Homes", price: "$22.00", model: "Midjourney v6", author: "CyberAlice", rating: 5.0, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACIOAY3C_LPPL9AeYrRRCt_fHC5YgrCjANxkxvgTkfNv29FVUU4yTLOeZMCionlgaRfEaBtIzXNX-Whm1V5YTi5S8GMgyiSKZzUenvmDTYEPO2Yl3ZznlY1ePFrTFklc1HPMohQvW29dCE4T0x_EDbn5dRjly4EOCUaboB8vY5_4cNdUm2i512weoCaZc0LEVZtgzK5PlSWCd8HKeGbQNnCYV4W9D59yQFshPP3zeYT2UAQYlcnMt0-uexg4y7pQhHIJEnv7yISok" },
    { id: 3, title: "Eco-Mechanical Wildlife", price: "$9.99", model: "DALL-E 3", author: "PromptWizard", rating: 4.7, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEhmwdJjk_DzGDJF-lX8YacuIht5VWJlJejlE7sJ-wqT3vg9YrKWH92RpyQ-_gkxwn9m2oCXQmFJoKrvTchyhZsqcy1Xds-k_5G_l2NDxYrPz5BDHNQ3D0LwqJPWQPyX834a1u5r6C3NsvGJtfa1GEa7gIl9nKdCz2zynWCD4BUQWLiizDj01_n8DsedlL3xqK5orGrvhmEdyIUzb_m_623DoP05ObTq_C0zi8LbRWdDg023kBJfDLcCII0TspkvLLjFQZuFugXcQ" },
    { id: 4, title: "Luxury Chrono Visualizer", price: "$18.50", model: "Midjourney v6", author: "EtherealLens", rating: 4.9, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkHMV1aIYLlEekSiD-6_TsHDz9dVxRQ26tsrv9SSKk-BQvGeh3-5qtR9SC42_wJy87qZIOmoqcu0xgAKMT_GUawrU2pThlz39lkI1oIEYBiVNLwlohh-VeMq1v_khM0pAfeNCZBwW-pra0XC46r2tQxrEnNxBn8H78W5yKjMYEJUjmKjlboUDdZH56T8fjKSJC3wcydqMghNcxUITfCoMmN2i0ZDPmZG17ugU2a5GtsOkGrI4yceGZGxbL2PqR0krIFpOsJKmSlKs" },
    { id: 5, title: "Holographic HUD Generator", price: "$25.00", model: "SDXL", author: "NodeRunner", rating: 4.8, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALMWrEjv00ewjNsJZDuB206hQdttMpXGyoC2vfF2PqwVqC5Q5GF7bOlTjsQoyHcBAn_UWVdstOZBuryZs9QWZkVNkWzR2fCtOL795EHvPRkxAt_bm4XG4Wem-tOBUs8R3kQ5ExPzv7Np3EvfkiadBQoi6tys8YLxuDGkT76r4CNP7dqu8OLRjT9VIKRlRpbrGihmymIXwyyxBlNdlw90VcpIsNG-ePt2PIGoSFj7k8dJ_Gk7AAXGmz13jEgbLWH06CN1BkJx4ftks" }
  ];

  return (
    <AppShell activeNavItem="Exploration" searchPlaceholder="Search prompts, creators, models...">
      
      {/* Header Section */}
      <section className="mb-12 border-b border-outline-variant pb-12 pt-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-on-background mb-4">
          Marketplace
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl font-body">
          Discover the world's most sophisticated prompt library for creative workflows and enterprise AI solutions. 
          Engineered for precision.
        </p>
      </section>

      {/* Featured Creators */}
      <section className="mb-16">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-display font-semibold text-on-background">Featured Creators</h2>
          <button className="text-sm font-semibold text-primary hover:text-blue-500 transition-colors">
            View Directory &rarr;
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {creators.map((creator, idx) => (
            <div key={idx} className="premium-card p-4 flex flex-col items-center text-center group cursor-pointer">
              <img src={creator.img} alt={creator.name} className="w-16 h-16 rounded-full mb-3 object-cover border border-outline-variant group-hover:border-primary transition-colors" />
              <h3 className="font-semibold text-sm text-on-background">{creator.name}</h3>
              <p className="text-xs text-on-surface-variant mt-1">{creator.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prompts Grid */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-2xl font-display font-semibold text-on-background">Explore Prompts</h2>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Filter by keyword..." 
              className="bg-surface border border-outline-variant rounded-md px-3 py-1.5 text-sm w-full md:w-64 focus:border-primary focus:outline-none"
            />
            <select className="bg-surface border border-outline-variant rounded-md px-3 py-1.5 text-sm focus:border-primary focus:outline-none">
              <option>Trending</option>
              <option>Newest</option>
              <option>Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {prompts.map(prompt => (
            <motion.div 
              key={prompt.id}
              whileHover={{ y: -4 }}
              onClick={() => handlePromptClick(prompt.id)}
              className="premium-card overflow-hidden cursor-pointer flex flex-col"
            >
              <div className="aspect-square relative overflow-hidden bg-surface-variant">
                <img src={prompt.img} alt={prompt.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute top-3 right-3">
                  <span className="bg-background/90 text-on-background text-[10px] font-mono px-2 py-1 rounded shadow-sm border border-outline-variant">
                    {prompt.model}
                  </span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-sm text-on-background leading-snug line-clamp-2 pr-2">{prompt.title}</h3>
                  <span className="font-semibold text-on-background text-sm">{prompt.price}</span>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant font-medium">By {prompt.author}</span>
                  <div className="flex items-center gap-1 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px] text-yellow-500" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                    {prompt.rating}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="premium-card overflow-hidden cursor-pointer flex flex-col items-center justify-center min-h-[300px] border-dashed bg-transparent hover:bg-surface/50">
            <span className="material-symbols-outlined text-4xl text-outline-variant mb-2">add</span>
            <span className="font-semibold text-sm text-on-surface-variant">Sell your prompts</span>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </AppShell>
  );
};

export default Marketplace;
