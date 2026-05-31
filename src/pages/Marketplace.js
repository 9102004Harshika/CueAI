import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition, staggerContainer, itemVariant } from '../animations/variants';
import SectionReveal from '../components/SectionReveal';
import AnimatedButton from '../components/AnimatedButton';

const Marketplace = () => {
  const navigate = useNavigate();
  const handlePromptClick = (id) => {
    navigate(`/marketplace/prompt/${id}`);
  };

  return (
    <motion.div 
      initial="initial" 
      animate="in" 
      exit="out" 
      variants={pageVariants} 
      transition={pageTransition}
      className="bg-background text-on-background min-h-screen"
    >
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Cue AI | Prompt Marketplace</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Geist:wght@600;700&family=JetBrains+Mono:wght@500&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            background: rgba(22, 22, 30, 0.6);\n            backdrop-filter: blur(24px);\n            border: 1px solid rgba(255, 255, 255, 0.05);\n            border-top: 1px solid rgba(255, 255, 255, 0.15);\n            transition: all 0.3s ease-out;\n        }\n        .glass-card:hover {\n            border-color: rgba(208, 188, 255, 0.3);\n            box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.5);\n        }\n        .primary-glow {\n            box-shadow: 0 0 20px rgba(208, 188, 255, 0.25);\n        }\n        ::-webkit-scrollbar {\n            width: 6px;\n            height: 6px;\n        }\n        ::-webkit-scrollbar-track {\n            background: #131317;\n        }\n        ::-webkit-scrollbar-thumb {\n            background: #353439;\n            border-radius: 10px;\n        }\n        .hide-scrollbar::-webkit-scrollbar {\n            display: none;\n        }\n    "
    }}
  />
  {/* TopNavBar */}
  <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm flex justify-between items-center w-full px-margin-desktop h-16">
    <div className="flex items-center gap-stack-md">
      <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
        Cue AI
      </span>
      <nav className="hidden md:flex gap-stack-md ml-stack-md">
        <Link
          className="font-body-md text-body-md text-primary font-bold border-b-2 border-primary pb-1 transition-all duration-300 ease-out"
          to="/marketplace"
        >
          Marketplace
        </Link>
        <Link
          className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors transition-all duration-300 ease-out"
          to="/feed"
        >
          Feed
        </Link>
        <Link
          className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors transition-all duration-300 ease-out"
          to="/playground"
        >
          Playground
        </Link>
      </nav>
    </div>
    <div className="flex items-center gap-stack-sm">
      <div className="relative group">
        <span
          className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"
          data-icon="search"
        >
          search
        </span>
        <input
          className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg pl-10 pr-4 py-2 font-label-caps text-label-caps focus:outline-none focus:border-primary transition-colors w-64"
          placeholder="Search prompts..."
          type="text"
        />
      </div>
      <AnimatedButton className="bg-primary text-on-primary font-bold px-4 py-2 rounded-lg hover:opacity-90 active:scale-95 transition-all duration-300">
        Create
      </AnimatedButton>
      <div className="flex gap-stack-xs ml-stack-sm">
        <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <span className="material-symbols-outlined" data-icon="notifications">
            notifications
          </span>
        </button>
        <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <span
            className="material-symbols-outlined"
            data-icon="account_circle"
          >
            account_circle
          </span>
        </button>
      </div>
    </div>
  </header>
  {/* Sidebar Integration as Advanced Filter */}
  <aside className="h-full w-64 fixed left-0 top-16 bg-surface-container-low/40 backdrop-blur-lg border-r border-outline-variant/10 flex flex-col py-stack-md gap-stack-sm hidden lg:flex">
    <div className="px-6 mb-4">
      <h3 className="text-on-surface font-headline-md text-lg font-bold">
        Categories
      </h3>
      <p className="text-on-surface-variant font-label-md text-xs opacity-70">
        Browse by model
      </p>
    </div>
    <nav className="flex flex-col gap-1">
      <a
        className="mx-4 px-4 py-3 flex items-center gap-3 bg-primary-container/20 text-primary border-r-2 border-primary font-label-md transition-transform active:scale-95"
        href="#"
      >
        <span
          className="material-symbols-outlined text-[20px]"
          data-icon="category"
        >
          category
        </span>
        <span>All Prompts</span>
      </a>
      <a
        className="mx-4 px-4 py-3 flex items-center gap-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 font-label-md transition-transform active:scale-95"
        href="#"
      >
        <span
          className="material-symbols-outlined text-[20px]"
          data-icon="image"
        >
          image
        </span>
        <span>Midjourney</span>
      </a>
      <a
        className="mx-4 px-4 py-3 flex items-center gap-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 font-label-md transition-transform active:scale-95"
        href="#"
      >
        <span
          className="material-symbols-outlined text-[20px]"
          data-icon="chat"
        >
          chat
        </span>
        <span>ChatGPT</span>
      </a>
      <a
        className="mx-4 px-4 py-3 flex items-center gap-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 font-label-md transition-transform active:scale-95"
        href="#"
      >
        <span
          className="material-symbols-outlined text-[20px]"
          data-icon="auto_awesome"
        >
          auto_awesome
        </span>
        <span>Stable Diffusion</span>
      </a>
      <a
        className="mx-4 px-4 py-3 flex items-center gap-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 font-label-md transition-transform active:scale-95"
        href="#"
      >
        <span
          className="material-symbols-outlined text-[20px]"
          data-icon="brush"
        >
          brush
        </span>
        <span>DALL-E</span>
      </a>
    </nav>
    <div className="mt-stack-lg px-6">
      <h4 className="text-on-surface font-label-caps text-xs uppercase tracking-widest mb-stack-sm">
        Refine
      </h4>
      <div className="space-y-stack-md">
        <div>
          <label className="text-on-surface-variant text-xs mb-2 block">
            Price Range
          </label>
          <div className="flex items-center gap-2">
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-2 font-label-caps text-[10px]"
              placeholder="$0"
              type="text"
            />
            <span className="text-on-surface-variant">-</span>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-2 font-label-caps text-[10px]"
              placeholder="$100"
              type="text"
            />
          </div>
        </div>
        <div>
          <label className="text-on-surface-variant text-xs mb-2 block">
            Rating
          </label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                className="rounded bg-surface-container-lowest border-outline-variant/20 text-primary focus:ring-primary"
                type="checkbox"
              />
              <span className="text-label-md text-on-surface-variant group-hover:text-on-surface">
                4.5+ Stars
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                className="rounded bg-surface-container-lowest border-outline-variant/20 text-primary focus:ring-primary"
                type="checkbox"
              />
              <span className="text-label-md text-on-surface-variant group-hover:text-on-surface">
                3.0+ Stars
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </aside>
  {/* Main Content Area */}
  <main className="lg:ml-64 pt-24 pb-stack-xl px-margin-mobile md:px-margin-desktop">
    {/* Featured Creators Section */}
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-stack-xl"
    >
      <motion.div variants={itemVariant} className="flex justify-between items-end mb-stack-md">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Featured Creators
          </h2>
          <p className="text-on-surface-variant text-body-md">
            Top engineering minds of the month
          </p>
        </div>
        <AnimatedButton className="text-primary font-label-md flex items-center gap-1 hover:gap-2 transition-all">
          View All{" "}
          <span
            className="material-symbols-outlined text-sm"
            data-icon="arrow_forward"
          >
            arrow_forward
          </span>
        </AnimatedButton>
      </motion.div>
      <div className="flex gap-stack-md overflow-x-auto pb-4 hide-scrollbar">
        {/* Creator Card 1 */}
        <motion.div variants={itemVariant} whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-48 text-center glass-card p-6 rounded-xl transition-transform cursor-pointer">
          <img
            className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary/20"
            data-alt="Professional portrait of a male AI engineer with a friendly expression, studio lighting, soft depth of field. The background is a minimalist dark tech environment with subtle purple light leaks, matching the premium Cue AI ecosystem's aesthetic of technical precision and sophisticated minimalist power."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjkgAYq5S5zfPbtsvfVkcBdbuvo0ILo-Po5r2r_6jxGyFIo2Zi53ykQ9U4SnB_RGIF623SdAnaOorO5K-0h5KK_FD9qx1vGKvkSPporp6HnzuS9n43MbSg9zs_gLif5hQZ8rw6jvdvrS9g5qUEqsPwn0tQ-IDCYeeqhuyEpsS5Uy6k4FZNNWfrzTWD_nrIFXiURppQllwkuUCqRNHUlisTrm_gIISjRiY1MnpVKOBJiyEq6i9K5kChuWc5O7VLnHqftEiQB9yBETc"
          />
          <h4 className="font-label-md text-on-surface font-bold">
            VectorMind
          </h4>
          <p className="text-on-surface-variant text-xs mb-3">MJ Expert</p>
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-[10px] rounded-full font-label-caps">
            PRO
          </span>
        </motion.div>
        {/* Creator Card 2 */}
        <motion.div variants={itemVariant} whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-48 text-center glass-card p-6 rounded-xl transition-transform cursor-pointer">
          <img
            className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary/20"
            data-alt="Cinematic portrait of a female digital artist, sharp focus, vibrant low-light studio photography. The mood is high-end and futuristic, featuring subtle cyan light accents on her face. The visual style is polished and professional, perfectly aligning with the Advanced Minimalist theme of the Cue AI marketplace."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu_QH2Ix-r2My2v3P0RqPiR5UVo0lS-34hKH-ZGfboNFZwPFTNVfqikuTwPwxuVaeLMrMV7PQZo8_Fxre59FfyaDkqvHveT31I-9RFCxQ0MSkBltBpDw7VO0VWUc7DA_vHHg3zAO5R1kgBl0U8EoSlkgZtoe-AJAQ9B6W6QmJuNypYAnfR1yKcqP29EWy7bSATfx6ijYugXNv5WBwlI3dvASvmqtLkjHBGC-v7aXDdlXcaPDRzv0RcXq2l4zCKtUtnktXhztwWRzk"
          />
          <h4 className="font-label-md text-on-surface font-bold">
            CyberAlice
          </h4>
          <p className="text-on-surface-variant text-xs mb-3">
            SDXL Specialist
          </p>
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-[10px] rounded-full font-label-caps">
            TOP SELLER
          </span>
        </motion.div>
        {/* Creator Card 3 */}
        <motion.div variants={itemVariant} whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-48 text-center glass-card p-6 rounded-xl transition-transform cursor-pointer">
          <img
            className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary/20"
            data-alt="A detailed headshot of a male creator in a tech-inspired setting, moody lighting with deep shadows and soft highlights. The color palette is dominated by dark tones and muted purples. The aesthetic reflects a sense of intelligent power and high-fidelity execution, consistent with the premium Cue AI brand identity."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ-gqooiH0hZ-CK9AIcTlaS-zQsHm-as6a5jMWWq0W_oo-4uS5OvoSA9_EommPlMfEo-6E-k86E8BW5-Fqzx_Xri4gt7QZ5wOl1uQJufT6GJeTpC9KtFAN8rEAp1UJuEViQg3hDzb-FooxHDpjex1-uBLCHWGqlbnhu0ZES0Q-GyHUsr6htHTuDtLrJA_a3V2sgjfLbRfURUN9kl204SMbNQ8JPLucbTh8XzcITpDz1-abiJujpJPqulR8Nt1P3XEAr4bFjfd_960"
          />
          <h4 className="font-label-md text-on-surface font-bold">
            PromptWizard
          </h4>
          <p className="text-on-surface-variant text-xs mb-3">DALL-E 3</p>
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-[10px] rounded-full font-label-caps">
            VERIFIED
          </span>
        </motion.div>
        {/* Creator Card 4 */}
        <motion.div variants={itemVariant} whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-48 text-center glass-card p-6 rounded-xl transition-transform cursor-pointer">
          <img
            className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary/20"
            data-alt="A portrait of a creative professional against a geometric glass background, reflecting soft ambient light in secondary cyan and primary purple hues. The composition is clean and modern, emphasizing high-fidelity digital art and technical sophistication. This visual style perfectly echoes the minimalist glassmorphism pillars of Cue AI."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6pxCsSO1INezmMj7n8GZ35S6O-89QKaSmWjLRaVngOTNzBT9-nwfVg6Jajoc3Mm06za2hAAdFTR7OvFkOISR6KSeaCRDCt0bPfRqR5EHVOqteFPEzNI5v5xHoOOvf6j4Z7iZLWu0fe1CfXfViEOTd5vYw_yEF3cIuGef52NgGVd7LFv6DlCmsAMO_M7dBl1lxxyFlgEQZTdjh7vaEOG_O8tlaWv8sa7cBP1RKqidSPdj8NUMlesEW_dB8xY7sPbUXnMVoRuszXos"
          />
          <h4 className="font-label-md text-on-surface font-bold">
            EtherealLens
          </h4>
          <p className="text-on-surface-variant text-xs mb-3">
            MJ Photographer
          </p>
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-[10px] rounded-full font-label-caps">
            RISING STAR
          </span>
        </motion.div>
        {/* Creator Card 5 */}
        <motion.div variants={itemVariant} whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-48 text-center glass-card p-6 rounded-xl transition-transform cursor-pointer">
          <img
            className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary/20"
            data-alt="A close-up shot of a tech creator, professional lighting with a soft gradient background of deep violet and black. The subject has a serious, focused expression, suggesting expertise and precision. The overall visual style is sleek and premium, fitting the high-end creator ecosystem of the Cue AI platform."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf9wU4k6UftH9Y1scM90qvKmu9XW0FFsN8YUdjbWKOYu6X-5xYh4sn6maOXvqSBYeZindqusqMr34rWMdN57ThEha740UCSLAvtVLOu4CiMYHVsEUd7gDUxeJCy3oYVuXKekR5F0cgZTM-b3Jpr66JGhICjKwK1td9Md75BfBft7_slXQDmO5CAzpDlqRcj64KpAD6twlP02EoVtJCozYws49c9Z2hryw1muG0rKUci8VhgyLcpSXLoiyk8n9AhKxxQZ5Eoa8tVmA"
          />
          <h4 className="font-label-md text-on-surface font-bold">
            NodeRunner
          </h4>
          <p className="text-on-surface-variant text-xs mb-3">
            Logic Architect
          </p>
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-[10px] rounded-full font-label-caps">
            ELITE
          </span>
        </motion.div>
      </div>
    </motion.section>
    {/* Search Results & Filters */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-stack-md mb-stack-md">
      <h3 className="font-headline-md text-headline-md text-on-surface">
        Explore Prompts{" "}
        <span className="text-on-surface-variant opacity-50 ml-2 font-body-md text-lg font-normal">
          (1,284)
        </span>
      </h3>
      <div className="flex items-center gap-4">
        <span className="text-on-surface-variant font-label-md text-xs">
          Sort by:
        </span>
        <select className="bg-surface-container border border-outline-variant/20 rounded-lg py-2 px-4 font-label-md text-on-surface focus:outline-none focus:border-primary">
          <option>Popular</option>
          <option>Newest</option>
          <option>Top Selling</option>
          <option>Price: Low to High</option>
        </select>
        <button className="p-2 bg-surface-container border border-outline-variant/20 rounded-lg lg:hidden">
          <span className="material-symbols-outlined" data-icon="filter_list">
            filter_list
          </span>
        </button>
      </div>
    </div>
    {/* Prompt Cards Grid */}
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-stack-md"
    >
      {/* Prompt Card 1 */}
      <motion.div
        variants={itemVariant}
        onClick={() => handlePromptClick(1)}
        className="glass-card rounded-xl overflow-hidden group cursor-pointer"
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            data-alt="Abstract 3D digital art featuring fluid obsidian-like shapes floating in a void, illuminated by intense bioluminescent purple and cyan neon lights. The surface textures are hyper-detailed and glass-like, catching light at the edges. The scene evokes a futuristic, advanced minimalist atmosphere with deep space depth and technical precision."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE9o6D3dav7ezBXWgdcvDbzLCvT8mDa1LeH87bVoHA7bCFzG7GZamCiwq8X67QV-BWjlXwBXeY1WupuxaiHWQaRj4_aU3uKqpHoSCLRK8ahk72vUSs1vgTiumooMt9_RKHfeHSN7lzn8waZP1xCMcf5anhsW8bc1-enwngbdzM35JYVB6FV-fgFmUX5HTOyXeehskCXjuC0g6bpktDEakEogJB9ySs6SnCS2njo1ZBZ5n_IqcuSDOSoZsnCFzJtt9UDx5XjLNxyHs"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <AnimatedButton className="w-full bg-white text-black font-bold py-2 rounded-lg text-sm primary-glow">
              Quick View
            </AnimatedButton>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-black/60 backdrop-blur-md text-secondary border border-secondary/30 px-3 py-1 rounded-full text-[10px] font-label-caps">
              STABLE DIFFUSION XL
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-body-md font-bold text-on-surface truncate pr-2">
              Cyberpunk Obsidian Landscapes
            </h4>
            <span className="text-secondary font-headline-md text-lg">
              $14.99
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <img
              className="w-5 h-5 rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX2J1nvwLA53ZCv12847WP0Id6suowFPW8CHcPb5Iven2pF7g2ITR0e6j3TMTNEQTUDTO9oQb0Zpy39lA4tJQA0KDCeu8VhH4HKKmj7JBpvVZ9zYEnEMOgIlH1OX81EPEocyTYusEJUf_xJ__WIKk_e4mgDIt2OwJELGNHw6HdUGye2ZaCK8HHvjSwkvesiEz-xV3L4Fe45NwOmGBDQYXXvy-gwqYCXsX6-9hfz7dAn0vFcL0hWUO_iFnOm2L5c_7t9Kdb-oI994E"
            />
            <span className="text-on-surface-variant text-xs">VectorMind</span>
            <span className="text-on-surface-variant text-xs ml-auto flex items-center gap-1">
              <span
                className="material-symbols-outlined text-[14px] text-primary"
                data-icon="star"
                data-weight="fill"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                star
              </span>{" "}
              4.9
            </span>
          </div>
        </div>
      </motion.div>
      {/* Prompt Card 2 */}
      <motion.div
        variants={itemVariant}
        onClick={() => handlePromptClick(2)}
        className="glass-card rounded-xl overflow-hidden group cursor-pointer"
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            data-alt="Minimalist architectural concept render of a futuristic desert dwelling made of white limestone and glass. High-key natural lighting with soft, sharp shadows. The composition is clean and airy, using the margin-desktop principle for an expansive feel. The visual style is premium and high-fidelity, echoing the aesthetic sophistication of high-end design tools."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACIOAY3C_LPPL9AeYrRRCt_fHC5YgrCjANxkxvgTkfNv29FVUU4yTLOeZMCionlgaRfEaBtIzXNX-Whm1V5YTi5S8GMgyiSKZzUenvmDTYEPO2Yl3ZznlY1ePFrTFklc1HPMohQvW29dCE4T0x_EDbn5dRjly4EOCUaboB8vY5_4cNdUm2i512weoCaZc0LEVZtgzK5PlSWCd8HKeGbQNnCYV4W9D59yQFshPP3zeYT2UAQYlcnMt0-uexg4y7pQhHIJEnv7yISok"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4">
            <span className="bg-black/60 backdrop-blur-md text-secondary border border-secondary/30 px-3 py-1 rounded-full text-[10px] font-label-caps">
              MIDJOURNEY v6
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-body-md font-bold text-on-surface truncate pr-2">
              Neolithic Minimalist Homes
            </h4>
            <span className="text-secondary font-headline-md text-lg">
              $22.00
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <img
              className="w-5 h-5 rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnphUbR70Pb8O2XSxwAV-Sf-rm0NsmQXJIQcL2ddSFUkn7sJilPtrDJIhFP07ExN4GpxJudriIo4L2UJsFePZFKFej1CiyXPb5_2hilNgsoFX2MJ-LNpWyrYGpsBv8CTChvIbxixrf_-05Gx_S2cgtZ515-2RCzef7cCBbfW4VFM12llLIRZXUvxlfp_5fPslUyNZ4-xHghfjuFywJn93u6PGMkitoiDma3uNS88SVAC3MvwnE1pNFrvG9uHX7POXcxIpbVlTcduE"
            />
            <span className="text-on-surface-variant text-xs">CyberAlice</span>
            <span className="text-on-surface-variant text-xs ml-auto flex items-center gap-1">
              <span
                className="material-symbols-outlined text-[14px] text-primary"
                data-icon="star"
                data-weight="fill"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                star
              </span>{" "}
              5.0
            </span>
          </div>
        </div>
      </motion.div>
      {/* Prompt Card 3 */}
      <motion.div
        variants={itemVariant}
        onClick={() => handlePromptClick(3)}
        className="glass-card rounded-xl overflow-hidden group cursor-pointer"
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            data-alt="A high-fidelity digital illustration of a robotic companion in a dense jungle environment, featuring vibrant green foliage and soft atmospheric lighting. The robot has a polished metallic finish that reflects the surrounding environment. The visual style is crisp and professional, using tiered dark surfaces and subtle glassmorphic elements characteristic of Cue AI."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEhmwdJjk_DzGDJF-lX8YacuIht5VWJlJejlE7sJ-wqT3vg9YrKWH92RpyQ-_gkxwn9m2oCXQmFJoKrvTchyhZsqcy1Xds-k_5G_l2NDxYrPz5BDHNQ3D0LwqJPWQPyX834a1u5r6C3NsvGJtfa1GEa7gIl9nKdCz2zynWCD4BUQWLiizDj01_n8DsedlL3xqK5orGrvhmEdyIUzb_m_623DoP05ObTq_C0zi8LbRWdDg023kBJfDLcCII0TspkvLLjFQZuFugXcQ"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4">
            <span className="bg-black/60 backdrop-blur-md text-secondary border border-secondary/30 px-3 py-1 rounded-full text-[10px] font-label-caps">
              DALL-E 3
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-body-md font-bold text-on-surface truncate pr-2">
              Eco-Mechanical Wildlife
            </h4>
            <span className="text-secondary font-headline-md text-lg">
              $9.99
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <img
              className="w-5 h-5 rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ7gv3XkK_QqYn2ExW3TNpk5eQd74zGtNXb588Eamq32avxCIHxV2E8MwdKoVv6F9x5rZGWvYk0dkDl9rGWq4JXvuHczr3cGK0OmmY89M6SArqBiVHL70kNK7XVhrtj1xGjPEF0cf4JPvQCo5CuZGFugh6UbpRTsVDD-tKtZTszBwGjSGelGMj14u2uSSElJVj6bVfPf7T8T95z1Bdu4eOhH1S9AZkCkizZQSRCzzmy0iHot0nzdWcj_5LLSRUdk-j_vigVq72Dm4"
            />
            <span className="text-on-surface-variant text-xs">
              PromptWizard
            </span>
            <span className="text-on-surface-variant text-xs ml-auto flex items-center gap-1">
              <span
                className="material-symbols-outlined text-[14px] text-primary"
                data-icon="star"
                data-weight="fill"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                star
              </span>{" "}
              4.7
            </span>
          </div>
        </div>
      </motion.div>
      {/* Prompt Card 4 */}
      <motion.div
        variants={itemVariant}
        onClick={() => handlePromptClick(4)}
        className="glass-card rounded-xl overflow-hidden group cursor-pointer"
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            data-alt="Dark aesthetic product photography of a high-end watch with internal clockwork visible, surrounded by ethereal smoke and glowing cyan light particles. The lighting is dramatic and moody, focusing on structural clarity and technical polish. The deep-mode execution uses translucency and light-borders to create an infinite vertical sense in a futuristic dark room."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkHMV1aIYLlEekSiD-6_TsHDz9dVxRQ26tsrv9SSKk-BQvGeh3-5qtR9SC42_wJy87qZIOmoqcu0xgAKMT_GUawrU2pThlz39lkI1oIEYBiVNLwlohh-VeMq1v_khM0pAfeNCZBwW-pra0XC46r2tQxrEnNxBn8H78W5yKjMYEJUjmKjlboUDdZH56T8fjKSJC3wcydqMghNcxUITfCoMmN2i0ZDPmZG17ugU2a5GtsOkGrI4yceGZGxbL2PqR0krIFpOsJKmSlKs"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4">
            <span className="bg-black/60 backdrop-blur-md text-secondary border border-secondary/30 px-3 py-1 rounded-full text-[10px] font-label-caps">
              MIDJOURNEY v6
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-body-md font-bold text-on-surface truncate pr-2">
              Luxury Chrono Visualizer
            </h4>
            <span className="text-secondary font-headline-md text-lg">
              $18.50
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <img
              className="w-5 h-5 rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrG8bc2occ-6qaskKx_79wxRRQ69UdP1lNYz02bUhLLyGL-S7EtmuW5VBLtDZ6KLuzT1vjFQEdch1C5KQF4koH7Q4oYQF05z0eHgmdcaHPSPobH6MT9nFQoSsvlbZ8SFOtnNuVL74IB2hL99liwzUwOGm7s_jFw7BuTUojD1zsAZ4dQ8MmD0zTFkFFqlQ9x3uuMjDMQ3PyK-VoS_Lxq0nlESJo3e-MTKsq6nK7xSvfLIDn4degX4v07009PP7NZb-Dj4dmgR5JHlg"
            />
            <span className="text-on-surface-variant text-xs">
              EtherealLens
            </span>
            <span className="text-on-surface-variant text-xs ml-auto flex items-center gap-1">
              <span
                className="material-symbols-outlined text-[14px] text-primary"
                data-icon="star"
                data-weight="fill"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                star
              </span>{" "}
              4.9
            </span>
          </div>
        </div>
      </motion.div>
      {/* Prompt Card 5 */}
      <motion.div
        variants={itemVariant}
        onClick={() => handlePromptClick(5)}
        className="glass-card rounded-xl overflow-hidden group cursor-pointer"
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            data-alt="Futuristic UI dashboard design displayed on a holographic glass interface, featuring complex data visualizations in vibrant primary purple and secondary cyan. The lighting is cinematic, with soft glow-borders and monospaced font accents. The atmosphere is that of a near-future operating system, emphasizing speed, aesthetic sophistication, and technical power for a premium developer ecosystem."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuALMWrEjv00ewjNsJZDuB206hQdttMpXGyoC2vfF2PqwVqC5Q5GF7bOlTjsQoyHcBAn_UWVdstOZBuryZs9QWZkVNkWzR2fCtOL795EHvPRkxAt_bm4XG4Wem-tOBUs8R3kQ5ExPzv7Np3EvfkiadBQoi6tys8YLxuDGkT76r4CNP7dqu8OLRjT9VIKRlRpbrGihmymIXwyyxBlNdlw90VcpIsNG-ePt2PIGoSFj7k8dJ_Gk7AAXGmz13jEgbLWH06CN1BkJx4ftks"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4">
            <span className="bg-black/60 backdrop-blur-md text-secondary border border-secondary/30 px-3 py-1 rounded-full text-[10px] font-label-caps">
              SDXL 1.0
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-body-md font-bold text-on-surface truncate pr-2">
              Holographic HUD Generator
            </h4>
            <span className="text-secondary font-headline-md text-lg">
              $25.00
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <img
              className="w-5 h-5 rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6qivmTkf_tG--Kksx6SgPge6iRVtmdV0YxGnVqYrRkp7c6TYo-eyGDyWfQkXxM9C972-FrL3FAY6auNdkjT3Cn-FzjMAuy8XpBcy8KqSF7EK18ocwCO-zSc5MLrirCpjIfrgN3fEGEdg251GYrJt03G_1APCECyNYbeY08ouzcNSavzWdx6Rw3QlbIfmAnZ0qw0vDXbILvCuEhldN8KlENf3-U8cIiXq9MYFE0KTK4CTFHE3km_ggYzt6NaHW9CrQWSEmx52IccM"
            />
            <span className="text-on-surface-variant text-xs">NodeRunner</span>
            <span className="text-on-surface-variant text-xs ml-auto flex items-center gap-1">
              <span
                className="material-symbols-outlined text-[14px] text-primary"
                data-icon="star"
                data-weight="fill"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                star
              </span>{" "}
              4.8
            </span>
          </div>
        </div>
      </motion.div>
      {/* Prompt Card 6 */}
      <motion.div variants={itemVariant} className="glass-card rounded-xl overflow-hidden group cursor-pointer border-dashed border-2 border-outline-variant/30 bg-transparent flex flex-col items-center justify-center min-h-[300px]">
        <span
          className="material-symbols-outlined text-outline-variant text-4xl mb-2"
          data-icon="add_circle"
        >
          add_circle
        </span>
        <p className="text-on-surface-variant font-label-caps">
          Sell your prompts
        </p>
        <AnimatedButton className="mt-4 px-6 py-2 border border-outline-variant/50 rounded-full text-xs font-bold hover:bg-white/5 transition-colors">
          Get Started
        </AnimatedButton>
      </motion.div>
    </motion.div>
    {/* Pagination */}
    <div className="mt-stack-xl flex justify-center items-center gap-4">
      <button className="p-2 border border-outline-variant/20 rounded-lg hover:bg-white/5 transition-colors disabled:opacity-30">
        <span className="material-symbols-outlined" data-icon="chevron_left">
          chevron_left
        </span>
      </button>
      <div className="flex gap-2">
        <button className="w-10 h-10 rounded-lg bg-primary text-on-primary font-bold">
          1
        </button>
        <button className="w-10 h-10 rounded-lg hover:bg-white/5 text-on-surface transition-colors">
          2
        </button>
        <button className="w-10 h-10 rounded-lg hover:bg-white/5 text-on-surface transition-colors">
          3
        </button>
        <span className="flex items-center px-2">...</span>
        <button className="w-10 h-10 rounded-lg hover:bg-white/5 text-on-surface transition-colors">
          12
        </button>
      </div>
      <button className="p-2 border border-outline-variant/20 rounded-lg hover:bg-white/5 transition-colors">
        <span className="material-symbols-outlined" data-icon="chevron_right">
          chevron_right
        </span>
      </button>
    </div>
  </main>
  {/* Footer */}
  <footer className="w-full py-stack-xl border-t border-outline-variant/20 bg-surface-container-lowest">
    <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-stack-lg">
      <div className="col-span-2 md:col-span-1">
        <span className="font-headline-md text-on-surface font-bold text-2xl block mb-4">
          Cue AI
        </span>
        <p className="text-on-surface-variant text-sm mb-6 max-w-xs">
          The precision engine for high-end digital creators and AI engineers.
        </p>
        <div className="flex gap-4">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="public">
              public
            </span>
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="code">
              code
            </span>
          </a>
        </div>
      </div>
      <div>
        <h5 className="font-label-caps text-label-caps text-tertiary mb-6">
          Product
        </h5>
        <ul className="space-y-4">
          <li>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm"
              href="#"
            >
              Marketplace
            </a>
          </li>
          <li>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm"
              href="#"
            >
              Playground
            </a>
          </li>
          <li>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm"
              href="#"
            >
              API Docs
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="font-label-caps text-label-caps text-tertiary mb-6">
          Resources
        </h5>
        <ul className="space-y-4">
          <li>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm"
              href="#"
            >
              Creator Guide
            </a>
          </li>
          <li>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm"
              href="#"
            >
              Community
            </a>
          </li>
          <li>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm"
              href="#"
            >
              Support
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="font-label-caps text-label-caps text-tertiary mb-6">
          Connect
        </h5>
        <ul className="space-y-4">
          <li>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm"
              href="#"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm"
              href="#"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm"
              href="#"
            >
              Discord
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-container-max mx-auto px-margin-desktop mt-stack-xl pt-stack-md border-t border-outline-variant/10 flex justify-between items-center">
      <span className="text-on-surface-variant text-xs">
        © 2024 Cue AI. Precision Prompting.
      </span>
      <div className="flex gap-6">
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-xs"
          href="#"
        >
          Legal
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-xs"
          href="#"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
    </motion.div>
  );
};

export default Marketplace;
