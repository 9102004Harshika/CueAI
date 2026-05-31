import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from '../animations/variants';
import SectionReveal from '../components/SectionReveal';
import AnimatedButton from '../components/AnimatedButton';

const Playground = () => {
  const [temperature, setTemperature] = useState(0.7);

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
      <title>Cue AI | Live Playground</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Geist:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        body {\n            background-color: #0B0B0F;\n            color: #e4e1e7;\n            overflow: hidden;\n        }\n        .glass-panel {\n            background: rgba(22, 22, 30, 0.6);\n            backdrop-filter: blur(24px);\n            border: 1px solid rgba(255, 255, 255, 0.08);\n            border-top: 1px solid rgba(255, 255, 255, 0.15);\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glow-button {\n            transition: all 0.3s ease-out;\n            box-shadow: 0 0 0 rgba(208, 188, 255, 0);\n        }\n        .glow-button:hover {\n            box-shadow: 0 0 20px rgba(208, 188, 255, 0.25);\n            transform: translateY(-1px);\n        }\n        .custom-scrollbar::-webkit-scrollbar {\n            width: 4px;\n        }\n        .custom-scrollbar::-webkit-scrollbar-track {\n            background: transparent;\n        }\n        .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: rgba(255, 255, 255, 0.1);\n            border-radius: 10px;\n        }\n        .code-editor {\n            font-family: 'JetBrains Mono', monospace;\n            resize: none;\n            caret-color: #d0bcff;\n        }\n        .code-editor:focus {\n            outline: none;\n            border-color: #d0bcff;\n            box-shadow: inset 0 0 10px rgba(208, 188, 255, 0.05);\n        }\n    "
        }}
      />
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm flex justify-between items-center px-margin-desktop h-16">
        <div className="flex items-center gap-stack-md">
          <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
            Cue AI
          </span>
          <nav className="hidden md:flex gap-stack-md ml-stack-lg">
            <Link
              className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md"
              to="/marketplace"
            >
              Marketplace
            </Link>
            <Link
              className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md"
              to="/feed"
            >
              Feed
            </Link>
            <Link
              className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md"
              to="/playground"
            >
              Playground
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-stack-sm">
          <AnimatedButton className="px-4 py-2 bg-primary text-on-primary font-bold rounded-lg transition-all duration-300 ease-out hover:bg-white/5 glow-button">
            Create
          </AnimatedButton>
          <div className="flex gap-stack-xs text-on-surface-variant">
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>
      </header>
      {/* SideNavBar (Hidden on Mobile) */}
      <aside className="hidden md:flex h-full w-64 fixed left-0 top-16 bg-surface-container-low/40 backdrop-blur-lg border-r border-outline-variant/10 flex-col py-stack-md gap-stack-sm z-40">
        <div className="px-6 mb-stack-sm">
          <h3 className="text-on-surface font-headline-md text-sm uppercase tracking-widest opacity-50">
            Categories
          </h3>
          <p className="font-label-md text-label-md text-on-surface-variant">
            Browse by model
          </p>
        </div>
        <nav className="flex flex-col">
          <a
            className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">category</span>
            <span className="font-label-md text-label-md">All Prompts</span>
          </a>
          <a
            className="flex items-center gap-3 px-6 py-3 bg-primary-container/20 text-primary border-r-2 border-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">image</span>
            <span className="font-label-md text-label-md">Midjourney</span>
          </a>
          <a
            className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">chat</span>
            <span className="font-label-md text-label-md">ChatGPT</span>
          </a>
          <a
            className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="font-label-md text-label-md">Stable Diffusion</span>
          </a>
          <a
            className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">brush</span>
            <span className="font-label-md text-label-md">DALL-E</span>
          </a>
        </nav>
      </aside>
      {/* Main Content: Playground */}
      <main className="flex-1 mt-16 ml-0 md:ml-64 p-gutter h-[calc(100vh-64px)] overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {/* Left Side: Prompt Editor */}
          <SectionReveal className="flex flex-col gap-stack-sm h-full">
            <div className="glass-panel rounded-xl flex-1 flex flex-col overflow-hidden">
              {/* Editor Header */}
              <div className="px-6 py-4 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low/30">
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    terminal
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant">
                    SYSTEM PROMPT EDITOR
                  </span>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-secondary-container/20 text-secondary border border-secondary/30 rounded-full hover:bg-secondary-container/40 transition-all active:scale-95">
                  <span className="material-symbols-outlined text-sm">bolt</span>
                  <span className="font-label-md text-xs">OPTIMIZE PROMPT</span>
                </button>
              </div>
              {/* Main Input Area */}
              <div className="flex-1 relative">
                <textarea
                  className="w-full h-full bg-transparent p-6 code-editor text-primary-fixed-dim leading-relaxed custom-scrollbar focus:ring-0 border-none"
                  placeholder="Type your instruction here... Use {{variable}} syntax for dynamic inputs."
                  defaultValue={""}
                />
              </div>
              {/* Editor Footer/Metadata */}
              <div className="px-6 py-3 border-t border-outline-variant/10 bg-surface-container-low/20 flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-xs">speed</span>
                    <span className="font-label-caps text-[10px]">
                      LATENCY: 120ms
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-xs">token</span>
                    <span className="font-label-caps text-[10px]">
                      TOKENS: 452 / 4096
                    </span>
                  </div>
                </div>
                <span className="font-label-caps text-[10px] text-secondary">
                  JSON MODE ACTIVE
                </span>
              </div>
            </div>
            {/* Settings Panel */}
            <div className="glass-panel rounded-xl p-6 grid grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-on-surface-variant text-[10px]">
                  MODEL SELECTOR
                </label>
                <select className="bg-surface-dim border border-outline-variant/20 rounded-lg px-3 py-2 text-label-md text-on-surface focus:border-primary transition-all appearance-none cursor-pointer">
                  <option>GPT-4o Platinum</option>
                  <option>Claude 3.5 Sonnet</option>
                  <option>Midjourney v6.1</option>
                  <option>Stable Diffusion 3</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-on-surface-variant text-[10px]">
                  TEMPERATURE <span className="text-primary ml-2" id="temp-val">
                    {temperature.toFixed(1)}
                  </span>
                </label>
                <input
                  className="w-full h-1 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary"
                  max={1}
                  min={0}
                  onChange={(event) => setTemperature(parseFloat(event.target.value))}
                  step={0.1}
                  type="range"
                  value={temperature}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-on-surface-variant text-[10px]">
                  MAX TOKENS
                </label>
                <input
                  className="bg-surface-dim border border-outline-variant/20 rounded-lg px-3 py-1.5 text-label-md text-on-surface focus:border-primary transition-all"
                  type="number"
                  defaultValue={2048}
                />
              </div>
            </div>
            <AnimatedButton className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl glow-button flex items-center justify-center gap-2 group transition-all">
              <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">
                play_arrow
              </span>
              EXECUTE PROMPT
            </AnimatedButton>
          </SectionReveal>
          {/* Right Side: Output Preview */}
          <SectionReveal className="flex flex-col h-full overflow-hidden">
              <div className="glass-panel rounded-xl flex-1 flex flex-col overflow-hidden relative">
              {/* Preview Tabs */}
              <div className="px-6 py-4 border-b border-outline-variant/10 flex items-center gap-6 bg-surface-container-low/30">
                <button className="flex items-center gap-2 text-primary border-b border-primary pb-1 font-label-caps text-xs">
                  <span className="material-symbols-outlined text-sm">
                    visibility
                  </span> PREVIEW
                </button>
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-all font-label-caps text-xs">
                  <span className="material-symbols-outlined text-sm">
                    data_object
                  </span> RAW JSON
                </button>
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-all font-label-caps text-xs">
                  <span className="material-symbols-outlined text-sm">history</span> VERSION HISTORY
                </button>
              </div>
              {/* Output Canvas */}
              <div className="flex-1 p-6 overflow-y-auto custom-scrollbar flex flex-col gap-stack-md">
                {/* Example Image Result */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="font-label-md text-secondary">
                      Visual Output
                    </span>
                    <span className="font-label-caps text-[10px] text-on-surface-variant">
                      1024x1024 • PNG
                    </span>
                  </div>
                  <div className="aspect-square w-full max-w-lg mx-auto relative group overflow-hidden rounded-xl border border-outline-variant/30">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-alt="A high-fidelity generative art piece depicting fluid, iridescent crystalline structures floating in a dark, infinite void. The aesthetic is extremely minimalist and futuristic, using a deep space color palette of charcoal black and obsidian with sharp, neon highlights of electric purple and cyan. The lighting is dramatic and cinematic, with soft glows reflecting off the polished glass-like surfaces of the abstract geometry."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4mbACwvoX0e-ujUijotyRWj9MLlUgakmflUdTF-r8uLJLQTvXMg_cqgC--4yGWewfarYmOBDNBE-9nK13EAFgqt0tpYnNsrC1tOlkEFVcH9PH38CBeleJHl4_-FlYVNxc4eVAXKsKNacM4dIlxPHf_9w1ORtUhVwsmYlF62j95bK9J9wiNdeMnGhDl6rXDFX3Wpo2aq3p2Rk5PMuWlBEMkQk3eySX4K6PQYS6UFCKkoiKTkU74KaKSDBTt1etaa9MEZ-8wfTWMIY"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center translate-y-full group-hover:translate-y-0 transition-transform">
                      <div className="flex gap-2">
                        <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-all">
                          <span className="material-symbols-outlined text-sm">
                            download
                          </span>
                        </button>
                        <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-all">
                          <span className="material-symbols-outlined text-sm">
                            share
                          </span>
                        </button>
                      </div>
                      <span className="bg-secondary/20 text-secondary text-[10px] px-2 py-1 rounded-full font-label-caps">
                        GENERATE NEW SEED
                      </span>
                    </div>
                  </div>
                </div>
                {/* Example Code Snippet */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="font-label-md text-primary">
                      Generated React Component
                    </span>
                    <button className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface transition-all">
                      <span className="material-symbols-outlined text-xs">
                        content_copy
                      </span>
                      <span className="font-label-caps text-[10px]">COPY CODE</span>
                    </button>
                  </div>
                  <pre className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/10 text-xs text-primary-fixed-dim leading-relaxed custom-scrollbar overflow-x-auto">
                    <code>
{`import React from "react";

const AIComponent = ({ data }) => {
  return (
    <div className="glass-morphism p-6 shadow-xl">
      <h2 className="font-bold text-2xl">{data.title}</h2>
      <p className="opacity-70">{data.description}</p>
    </div>
  );
};`}
                    </code>
                  </pre>
                </div>
                {/* Example Text Output */}
                <div className="flex flex-col gap-3">
                  <span className="font-label-md text-on-surface-variant">
                    Marketing Copy Analysis
                  </span>
                  <div className="p-5 bg-surface-container-low/40 rounded-xl border border-white/5 italic text-on-surface-variant leading-relaxed">
                    "The proposed campaign architecture leverages the 'minimalist
                    glass' aesthetic perfectly. It focuses on the juxtaposition of
                    high-tech precision and human-centric design. We recommend
                    increasing the focus on 'intelligent power' keywords to better
                    align with the Cue AI brand pillars."
                  </div>
                </div>
              </div>
              {/* Floating Action Button inside Preview */}
              <AnimatedButton className="absolute bottom-6 right-6 p-4 bg-secondary text-on-secondary rounded-full shadow-lg shadow-secondary/20 hover:scale-110 active:scale-95 transition-all flex items-center justify-center">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  magic_button
                </span>
              </AnimatedButton>
            </div>
          </SectionReveal>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full py-stack-md bg-surface-container-lowest border-t border-outline-variant/20 z-50">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-stack-md items-center">
          <div className="flex flex-col">
            <span className="font-headline-md text-on-surface text-xl">Cue AI</span>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-2">
              © 2024 Cue AI. Precision Prompting.
            </p>
          </div>
          <div className="flex gap-stack-md md:col-span-3 justify-end items-center">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-xs"
              href="#"
            >
              Product
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-xs"
              href="#"
            >
              Creator Resources
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-xs"
              href="#"
            >
              Legal
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-xs"
              href="#"
            >
              Twitter
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-xs"
              href="#"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Playground;
