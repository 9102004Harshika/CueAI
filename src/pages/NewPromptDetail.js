import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import { pageVariants, pageTransition, staggerContainer, itemVariant } from '../animations/variants';
import SectionReveal from '../components/SectionReveal';
import AnimatedButton from '../components/AnimatedButton';

const NewPromptDetail = () => {
  const { id } = useParams();

  return (
    <motion.div
      initial="initial" 
      animate="in" 
      exit="out" 
      variants={pageVariants} 
      transition={pageTransition}
    >
      <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Geist:wght@600;700&family=JetBrains+Mono:wght@400;500&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..900&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body { background-color: #0B0B0F; color: #e4e1e7; }\n        .glass-card {\n            background: rgba(22, 22, 30, 0.6);\n            backdrop-filter: blur(24px);\n            border: 1px solid rgba(255, 255, 255, 0.08);\n            border-top-color: rgba(255, 255, 255, 0.15);\n        }\n        .primary-glow-btn {\n            background: linear-gradient(135deg, #d0bcff 0%, #a078ff 100%);\n            box-shadow: 0 0 20px rgba(160, 120, 255, 0.2);\n            transition: all 0.3s ease-out;\n        }\n        .primary-glow-btn:hover {\n            box-shadow: 0 0 30px rgba(160, 120, 255, 0.4);\n            transform: translateY(-1px);\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n    "
    }}
  />
  {/* TopNavBar */}
  <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm flex justify-between items-center px-margin-desktop h-16 transition-all duration-300 ease-out">
    <div className="flex items-center gap-stack-md">
      <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
        Cue AI
      </span>
      <div className="hidden md:flex gap-base ml-stack-md">
        <Link
          className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors px-3 py-1"
          to="/marketplace"
        >
          Marketplace
        </Link>
        <Link
          className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors px-3 py-1"
          to="/feed"
        >
          Feed
        </Link>
        <Link
          className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors px-3 py-1"
          to="/playground"
        >
          Playground
        </Link>
      </div>
    </div>
    <div className="flex items-center gap-stack-sm">
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-bold transition-all hover:opacity-90">
        <span className="material-symbols-outlined">add</span> Create
      </button>
      <div className="flex gap-2">
        <button className="p-2 rounded-full hover:bg-white/5 transition-colors text-on-surface-variant">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 rounded-full hover:bg-white/5 transition-colors text-on-surface-variant">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </div>
  </nav>
  <motion.main 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
    className="pt-24 pb-stack-xl max-w-container-max mx-auto px-margin-desktop grid grid-cols-12 gap-gutter"
  >
    {/* Main Content Area */}
    <motion.div variants={itemVariant} className="col-span-12 lg:col-span-8 flex flex-col gap-stack-md">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
        <Link className="hover:text-primary transition-colors" to="/marketplace">
          Marketplace
        </Link>
        <span className="material-symbols-outlined text-[16px]">
          chevron_right
        </span>
        <a className="hover:text-primary transition-colors" href="#">
          Midjourney
        </a>
        <span className="material-symbols-outlined text-[16px]">
          chevron_right
        </span>
        <span className="text-on-surface">Cyberpunk Nexus</span>
      </div>
      {/* Preview Section */}
      <div className="glass-card rounded-xl overflow-hidden aspect-[16/9] relative group">
        <img
          alt="Cyberpunk Cityscape"
          className="w-full h-full object-cover"
          data-alt="A highly detailed and cinematic cyberpunk cityscape at night, featuring towering skyscrapers with neon holographic advertisements in vibrant shades of magenta, cyan, and deep violet. The atmosphere is dense with a misty, rain-slicked texture, catching the glow of the city lights to create a rich, volumetric lighting effect. Floating vehicles with luminous trails navigate between architectural spires, while a large, glowing moon hangs in the smoggy atmosphere. The aesthetic is ultra-modern and futuristic, captured with a professional wide-angle lens for maximum depth and visual impact."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCabjjNc24N_wBKUtJrSlN7sfyHSYCtoEQTECoKHa6EdEXyGP5mIvktwCHSwXUt9J2iSN-NVNhsZ0-naGbtKIHkQH-IXDcn_sO73nUewc-pLhX-wgv2145RQj57PUYeNN5rLakZ2FG6bTCLJMWdNeBHOU5Ng4nMOL8-2SgUfnyepf0tXdZvDBItjt6qmRbANwkwLFxcBOpwLKzbq2oCYYLnYKZ9D8pa4sb0esacedN2G-Q_YvoVWSLe5QjvGqA8fzPWYEVQ_TqJEnk"
        />
        <div className="absolute bottom-0 left-0 w-full p-stack-md bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <span className="font-label-caps text-label-caps text-secondary-fixed bg-secondary-container/20 px-2 py-1 rounded-full w-fit">
              MIDJOURNEY V6
            </span>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tighter">
              Cyberpunk Nexus Environment
            </h1>
          </div>
          <AnimatedButton className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all">
            <span className="material-symbols-outlined">fullscreen</span>
          </AnimatedButton>
        </div>
      </div>
      {/* Tabs Navigation */}
      <div className="flex border-b border-outline-variant/20 gap-stack-md">
        <button
          className="font-label-md text-label-md pb-stack-sm border-b-2 border-primary text-primary transition-all"
          id="tab-info"
        >
          Prompt Info
        </button>
        <button
          className="font-label-md text-label-md pb-stack-sm border-b-2 border-transparent text-on-surface-variant hover:text-on-surface transition-all"
          id="tab-reviews"
        >
          Ratings &amp; Reviews
        </button>
        <button
          className="font-label-md text-label-md pb-stack-sm border-b-2 border-transparent text-on-surface-variant hover:text-on-surface transition-all"
          id="tab-related"
        >
          Related Prompts
        </button>
      </div>
      {/* Tab Content: Info */}
      <div
        className="flex flex-col gap-stack-md animate-in fade-in duration-500"
        id="content-info"
      >
        <div className="glass-card p-stack-md rounded-xl flex flex-col gap-stack-sm">
          <h3 className="font-label-caps text-label-caps text-tertiary">
            DESCRIPTION
          </h3>
          <p className="text-on-surface-variant leading-relaxed">
            Generate hyper-realistic cyberpunk environments with extreme detail.
            This prompt excels at producing complex architectural layers,
            volumetric lighting, and intricate texture work perfect for concept
            art, film storyboarding, and high-fidelity game environments.
            Optimized for Midjourney V6.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mt-stack-sm">
            <div className="flex flex-col gap-1">
              <span className="font-label-caps text-label-caps text-tertiary">
                ASPECT RATIO
              </span>
              <span className="font-label-md text-label-md text-on-surface">
                16:9
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-caps text-label-caps text-tertiary">
                STYLIZATION
              </span>
              <span className="font-label-md text-label-md text-on-surface">
                High (750)
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-caps text-label-caps text-tertiary">
                MODEL
              </span>
              <span className="font-label-md text-label-md text-on-surface">
                v 6.0
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-caps text-label-caps text-tertiary">
                RAW MODE
              </span>
              <span className="font-label-md text-label-md text-on-surface">
                Enabled
              </span>
            </div>
          </div>
        </div>
        <div className="glass-card p-stack-md rounded-xl flex flex-col gap-stack-sm">
          <h3 className="font-label-caps text-label-caps text-tertiary">
            PARAMETERS &amp; GUIDANCE
          </h3>
          <div className="bg-black/40 p-4 rounded-lg border border-outline-variant/10">
            <code className="font-label-caps text-label-caps text-primary leading-loose">
              [Subject] atmospheric neon cityscape, cinematic lighting,
              hyper-realistic, intricate detail, unreal engine 5 render,
              volumetric fog --ar 16:9 --v 6.0 --style raw
            </code>
          </div>
          <p className="text-on-surface-variant text-sm mt-2">
            * After purchase, you will receive the full base prompt and 5
            specific variations for different weather and time-of-day settings.
          </p>
        </div>
      </div>
    </motion.div>
    {/* Sidebar / Action Panel */}
    <motion.aside variants={itemVariant} className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
      {/* Purchase Card */}
      <div className="glass-card p-stack-md rounded-xl flex flex-col gap-stack-md sticky top-24">
        <div className="flex justify-between items-center">
          <span className="font-headline-md text-headline-md text-on-surface font-bold">
            $14.99
          </span>
          <div className="flex items-center gap-1 bg-secondary/10 px-2 py-1 rounded text-secondary">
            <span
              className="material-symbols-outlined text-[16px]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span className="font-label-md text-label-md">4.9 (128)</span>
          </div>
        </div>
        <div className="flex flex-col gap-stack-sm">
          <AnimatedButton className="primary-glow-btn w-full py-4 rounded-lg font-bold text-on-primary-container text-body-md flex items-center justify-center gap-2 group">
            Buy Now{" "}
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </AnimatedButton>
          <AnimatedButton className="w-full py-4 rounded-lg font-bold border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-on-surface">
            <span className="material-symbols-outlined">bookmark</span> Add to
            Collection
          </AnimatedButton>
        </div>
        <hr className="border-outline-variant/10" />
        {/* Benefits List */}
        <ul className="flex flex-col gap-stack-sm">
          <li className="flex items-center gap-3 text-on-surface-variant font-label-md">
            <span className="material-symbols-outlined text-secondary text-[20px]">
              verified
            </span>{" "}
            Full prompt with instructions
          </li>
          <li className="flex items-center gap-3 text-on-surface-variant font-label-md">
            <span className="material-symbols-outlined text-secondary text-[20px]">
              auto_awesome
            </span>{" "}
            5 Prompt variations included
          </li>
          <li className="flex items-center gap-3 text-on-surface-variant font-label-md">
            <span className="material-symbols-outlined text-secondary text-[20px]">
              help
            </span>{" "}
            Creator support guaranteed
          </li>
        </ul>
        <hr className="border-outline-variant/10" />
        {/* Creator Info Section */}
        <div className="flex flex-col gap-stack-sm">
          <h3 className="font-label-caps text-label-caps text-tertiary">
            CREATOR
          </h3>
          <div className="flex items-center gap-stack-sm">
            <img
              alt="Creator Portrait"
              className="w-12 h-12 rounded-full border border-primary/20"
              data-alt="A professional studio headshot of a modern digital artist in their late twenties with short-cropped hair and a confident expression. They are wearing a minimalist black turtleneck against a neutral, dark gray background. The lighting is soft and directional, highlighting the contours of their face with a high-end editorial feel. The overall image has a sharp, high-resolution aesthetic suitable for a premium tech professional's profile, maintaining a cool and sophisticated color temperature."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnL9pyMQZ7V7SHuJsfnaWlXkciKOGHluwADci-jvebOT8irVSKGh7KWJbRBVcC0aemlDekOXJoCy5yW60sJMCS8Ps7-86yd5y7uwd8hctC9g6sadJxGHbNXFA4ToTmleKCuZa2YSJKwOX6FQOH93c5albZx_TnolxkQ4Ok_72zaQgDqViY49eFm8I92pu63HBaJLDyP14efME9d9GgzIkp8n_1A2ISRYZ9s7h7jj5FT5km2g_0fCU20BiEs3nquHo1hZgANT8TLXM"
            />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-bold">
                @AuraSynthetics
              </span>
              <span className="text-xs text-on-surface-variant">
                Top Seller • 2.4k Sales
              </span>
            </div>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Expert in architectural AI generation and cinematic lighting design.
            Focusing on the intersection of reality and simulation.
          </p>
          <AnimatedButton className="w-full py-2 mt-2 rounded-lg font-bold bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all">
            Subscribe
          </AnimatedButton>
        </div>
      </div>
    </motion.aside>
  </motion.main>
  {/* Footer */}
  <footer className="w-full py-stack-xl bg-surface-container-lowest border-t border-outline-variant/20">
    <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-stack-lg">
      <div className="flex flex-col gap-stack-sm">
        <span className="font-headline-md text-on-surface font-bold tracking-tighter">
          Cue AI
        </span>
        <p className="text-on-surface-variant text-sm max-w-xs">
          The premier marketplace for high-performance AI prompts. Built for
          creators, by creators.
        </p>
      </div>
      <div className="flex flex-col gap-stack-sm">
        <h4 className="font-label-caps text-label-caps text-tertiary">
          Product
        </h4>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-sm"
          href="#"
        >
          Marketplace
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-sm"
          href="#"
        >
          Pricing
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-sm"
          href="#"
        >
          API
        </a>
      </div>
      <div className="flex flex-col gap-stack-sm">
        <h4 className="font-label-caps text-label-caps text-tertiary">
          Creator Resources
        </h4>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-sm"
          href="#"
        >
          Selling Guide
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-sm"
          href="#"
        >
          Prompt Engineering
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-sm"
          href="#"
        >
          Creator Fund
        </a>
      </div>
      <div className="flex flex-col gap-stack-sm">
        <h4 className="font-label-caps text-label-caps text-tertiary">
          Connect
        </h4>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-sm"
          href="#"
        >
          Twitter
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-sm"
          href="#"
        >
          Discord
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-sm"
          href="#"
        >
          GitHub
        </a>
      </div>
    </div>
    <div className="max-w-container-max mx-auto px-margin-desktop mt-stack-xl flex justify-between items-center text-xs text-on-surface-variant border-t border-outline-variant/10 pt-8">
      <span>© 2024 Cue AI. Precision Prompting.</span>
      <div className="flex gap-4">
        <a className="hover:text-primary" href="#">
          Legal
        </a>
        <a className="hover:text-primary" href="#">
          Privacy
        </a>
      </div>
    </div>
  </footer>
    </motion.div>
  );
};

export default NewPromptDetail;
