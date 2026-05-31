import React from "react";

const Profile = () => (
  <>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Cue AI | User Dashboard</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Geist:wght@600;700&amp;family=JetBrains+Mono:wght@500&amp;display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
    <script id="tailwind-config" dangerouslySetInnerHTML={{__html: `
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-primary-container": "#340080",
                    "secondary": "#4cd7f6",
                    "surface-container-highest": "#353439",
                    "tertiary-fixed": "#e2e2e2",
                    "secondary-fixed": "#acedff",
                    "on-error": "#690005",
                    "inverse-primary": "#6d3bd7",
                    "on-tertiary-container": "#282a2a",
                    "tertiary-container": "#909191",
                    "on-tertiary-fixed": "#1a1c1c",
                    "error": "#ffb4ab",
                    "tertiary-fixed-dim": "#c6c6c7",
                    "on-tertiary": "#2f3131",
                    "on-primary-fixed-variant": "#5516be",
                    "outline-variant": "#494454",
                    "on-surface": "#e4e1e7",
                    "secondary-fixed-dim": "#4cd7f6",
                    "on-secondary-fixed-variant": "#004e5c",
                    "inverse-on-surface": "#303034",
                    "surface-tint": "#d0bcff",
                    "surface-variant": "#353439",
                    "primary-fixed": "#e9ddff",
                    "inverse-surface": "#e4e1e7",
                    "primary-fixed-dim": "#d0bcff",
                    "on-secondary-container": "#00424e",
                    "surface-bright": "#39393d",
                    "secondary-container": "#03b5d3",
                    "primary-container": "#a078ff",
                    "surface-dim": "#131317",
                    "on-primary": "#3c0091",
                    "background": "#131317",
                    "surface-container-high": "#2a292e",
                    "error-container": "#93000a",
                    "on-secondary": "#003640",
                    "surface-container-low": "#1b1b1f",
                    "surface": "#131317",
                    "tertiary": "#c6c6c7",
                    "on-secondary-fixed": "#001f26",
                    "surface-container": "#1f1f23",
                    "on-error-container": "#ffdad6",
                    "on-primary-fixed": "#23005c",
                    "outline": "#958ea0",
                    "primary": "#d0bcff",
                    "on-tertiary-fixed-variant": "#454747",
                    "on-surface-variant": "#cbc3d7",
                    "on-background": "#e4e1e7",
                    "surface-container-lowest": "#0e0e12"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "stack-lg": "48px",
                    "stack-md": "24px",
                    "margin-mobile": "20px",
                    "gutter": "24px",
                    "base": "8px",
                    "stack-sm": "12px",
                    "stack-xl": "80px",
                    "stack-xs": "4px",
                    "container-max": "1280px",
                    "margin-desktop": "64px"
            },
            "fontFamily": {
                    "body-lg": ["Inter"],
                    "label-md": ["Inter"],
                    "headline-lg-mobile": ["Geist"],
                    "body-md": ["Inter"],
                    "display-xl-mobile": ["Geist"],
                    "headline-md": ["Geist"],
                    "headline-lg": ["Geist"],
                    "label-caps": ["JetBrains Mono"],
                    "display-xl": ["Geist"]
            },
            "fontSize": {
                    "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
                    "label-md": ["14px", {"lineHeight": "1.4", "letterSpacing": "0", "fontWeight": "500"}],
                    "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
                    "display-xl-mobile": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "headline-md": ["30px", {"lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "headline-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                    "label-caps": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "500"}],
                    "display-xl": ["72px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700"}]
            }
          },
        },
      }
    `}}></script>
    <style dangerouslySetInnerHTML={{__html: `
        .glass-card {
            background: rgba(22, 22, 30, 0.6);
            backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-top-color: rgba(255, 255, 255, 0.15);
        }
        .glow-primary {
            box-shadow: 0 0 20px rgba(208, 188, 255, 0.25);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #353439; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #494454; }
    `}} />

    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm h-16 flex justify-between items-center px-margin-desktop transition-all duration-300 ease-out">
        <div className="flex items-center gap-stack-md">
          <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">Cue AI</span>
          <nav className="hidden md:flex gap-gutter font-body-md text-body-md">
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Marketplace</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Feed</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Playground</a>
          </nav>
        </div>
        <div className="flex items-center gap-stack-sm">
          <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-bold glow-primary transition-all active:scale-95">Create</button>
          <div className="flex gap-stack-xs">
            <button className="p-2 text-on-surface-variant hover:bg-white/5 rounded-full transition-colors">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-white/5 rounded-full transition-colors">
              <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
            </button>
          </div>
        </div>
      </header>
      {/* Sidebar Navigation */}
      <aside className="h-full w-64 fixed left-0 top-16 bg-surface-container-low/40 backdrop-blur-lg border-r border-outline-variant/10 flex flex-col py-stack-md gap-stack-sm hidden md:flex">
        <div className="px-6 mb-stack-sm">
          <h2 className="text-on-surface font-headline-md font-bold text-label-md">Categories</h2>
          <p className="text-on-surface-variant text-[12px]">Browse by model</p>
        </div>
        <nav className="flex flex-col">
          <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all" href="#">
            <span className="material-symbols-outlined" data-icon="category">category</span>
            <span className="font-label-md text-label-md">All Prompts</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all" href="#">
            <span className="material-symbols-outlined" data-icon="image">image</span>
            <span className="font-label-md text-label-md">Midjourney</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all" href="#">
            <span className="material-symbols-outlined" data-icon="chat">chat</span>
            <span className="font-label-md text-label-md">ChatGPT</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all" href="#">
            <span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
            <span className="font-label-md text-label-md">Stable Diffusion</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all" href="#">
            <span className="material-symbols-outlined" data-icon="brush">brush</span>
            <span className="font-label-md text-label-md">DALL-E</span>
          </a>
        </nav>
        <div className="mt-auto px-6 py-stack-md border-t border-outline-variant/10">
          <a className="flex items-center gap-3 py-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </a>
          <a className="flex items-center gap-3 py-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined" data-icon="terminal">terminal</span>
            <span className="font-label-md text-label-md">Playground</span>
          </a>
        </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="md:ml-64 mt-16 p-margin-mobile md:p-stack-lg max-w-[1440px] mx-auto min-h-screen">
        {/* Header Section */}
        <header className="mb-stack-lg">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Creator Dashboard</h1>
          <p className="text-on-surface-variant font-body-md">Welcome back, Alex. Here's what's happening in your creative ecosystem.</p>
        </header>
        {/* Bento Grid Overview Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-stack-lg">
          <div className="glass-card p-6 rounded-xl flex flex-col justify-between h-32 hover:scale-[1.02] transition-transform cursor-default">
            <div className="flex justify-between items-start">
              <span className="text-secondary font-label-caps uppercase">Purchases</span>
              <span className="material-symbols-outlined text-secondary" data-icon="shopping_bag">shopping_bag</span>
            </div>
            <div className="text-3xl font-bold font-headline-md">12</div>
          </div>
          <div className="glass-card p-6 rounded-xl flex flex-col justify-between h-32 hover:scale-[1.02] transition-transform cursor-default">
            <div className="flex justify-between items-start">
              <span className="text-primary font-label-caps uppercase">Saved Prompts</span>
              <span className="material-symbols-outlined text-primary" data-icon="bookmark">bookmark</span>
            </div>
            <div className="text-3xl font-bold font-headline-md">148</div>
          </div>
          <div className="glass-card p-6 rounded-xl md:col-span-2 flex flex-col justify-between h-32 hover:scale-[1.02] transition-transform cursor-default bg-primary-container/10 border-primary/20">
            <div className="flex justify-between items-start">
              <span className="text-on-surface font-label-caps uppercase">Active Subscription</span>
              <span className="material-symbols-outlined text-secondary" data-icon="star" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-2xl font-bold font-headline-md text-primary">Pro Creator Tier</div>
                <div className="text-on-surface-variant text-[12px]">Renews Oct 24, 2024</div>
              </div>
              <button className="text-secondary font-label-md hover:underline">Manage</button>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
          {/* Recent Activity Feed */}
          <section className="lg:col-span-2 flex flex-col gap-stack-md">
            <div className="flex justify-between items-center">
              <h3 className="font-headline-md text-headline-md">Recent Activity</h3>
              <button className="text-primary font-label-md">View All</button>
            </div>
            <div className="flex flex-col gap-base">
              {/* Activity Item 1 */}
              <div className="glass-card p-base rounded-xl flex gap-stack-sm items-center group cursor-pointer hover:bg-white/5 transition-colors">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A highly detailed digital artwork featuring flowing silk-like textures in deep violet and electric blue, illuminated by a soft cinematic rim light. The aesthetic is abstract yet mathematically precise, mirroring the style of high-end generative AI output in a dark, tech-focused environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtyul1sQcj4il1AZPoQUpGghrh3Nv3fhlgsASd4O9z8lC0sd3OkhY7WHc1HTooyHe6Ipn8fUCty3XtLtYWhLnzAqZgPnEqlhdmRWVmPHVBVT2oFuAW828j9ZxVb1pPQCrONPMG3bVp9lETRRNKmxYQ7v95GR-7u0CT1jbuaMDGUaOGIqpAu9NbX99cHu4OXU7AKmuNbBGQv1d-tG_rZ8LR82-FSEc48OiNjM35mqej6ImlIEK2RoJG5Cha4r8qj7iE6E7g-3Po3PM"/>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h4 className="font-body-md font-bold text-on-surface">Cybernetic Architecture 01</h4>
                    <span className="text-on-surface-variant text-[12px]">2h ago</span>
                  </div>
                  <p className="text-on-surface-variant text-label-md line-clamp-1 italic">"A futuristic monolithic structure rising from a desert of black glass..."</p>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded text-[10px] font-label-caps uppercase">Midjourney v6</span>
                    <span className="text-on-surface-variant text-[12px]">by @neuro_artist</span>
                  </div>
                </div>
              </div>
              {/* Activity Item 2 */}
              <div className="glass-card p-base rounded-xl flex gap-stack-sm items-center group cursor-pointer hover:bg-white/5 transition-colors">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Intricate geometric patterns rendered in a 3D glassmorphic style with subtle caustic light effects. The palette consists of frosted whites and translucent cyans against a deep obsidian background. The mood is sophisticated, echoing advanced interface design and technical precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCifpuA3Rsng1nrBv0Ot5lN9znSi0CbGtmREmqfrQRWQLqX8L-D5BTL33OnyOV5kk8PCDUsY5l5QC4U_4ZCFT-Zjen1GK8g9oXn33SABsNcMCdMSjjxDh2MjJFn3DldzbS4p_sFj3BeQFWFRWxUxySB-D8ENtSbtL7hnnypd7E5SulYo28qO6hF3vrA5s_xmIUFP54ZBow1Pg5JvKVfks3WtK87FFhK0GKFGHpHhPxf91kpNS7rWs--8GGq8eT23la5V4O6eHCTSMI"/>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h4 className="font-body-md font-bold text-on-surface">Hyper-Realist UI Mockups</h4>
                    <span className="text-on-surface-variant text-[12px]">5h ago</span>
                  </div>
                  <p className="text-on-surface-variant text-label-md line-clamp-1 italic">"A glassmorphic dashboard interface for a quantum computing terminal..."</p>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded text-[10px] font-label-caps uppercase">DALL-E 3</span>
                    <span className="text-on-surface-variant text-[12px]">by @prompt_engineer</span>
                  </div>
                </div>
              </div>
              {/* Activity Item 3 */}
              <div className="glass-card p-base rounded-xl flex gap-stack-sm items-center group cursor-pointer hover:bg-white/5 transition-colors">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="An ethereal digital render of light beams refracting through complex crystal structures. Vibrant spectrum of colors including deep purples, magentas, and electric blues dancing across faceted surfaces. The atmosphere is mystical and highly advanced, representing light-speed data processing in a futuristic setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQu7okn4ORI6oXxQuR2kho1P06k1w-KyznyroHQGeuQt22oYI64o7TGbB-TYzDPpJpKYJo781zEOdk7bUulGcTuSrlrp8iZln1K12nsADnk71SOdsdSmmyhoQGkuOlZXPQYJPfTxaVq07sKBseSr8JPjuPlymCr2D3qr0Wqka8Euvr67JI9j9F4H2dzpprf0SELWl_JADT6iQQEFlfa8VNw2LH2t7h8-jFun5dkY8eJq2txO6p6aN-PrpOcyBuC_SSKAF5oj1zzIw"/>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h4 className="font-body-md font-bold text-on-surface">Neon Light Refraction</h4>
                    <span className="text-on-surface-variant text-[12px]">Yesterday</span>
                  </div>
                  <p className="text-on-surface-variant text-label-md line-clamp-1 italic">"Macro shot of light passing through a synthetic prism in high contrast..."</p>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded text-[10px] font-label-caps uppercase">Stable Diffusion XL</span>
                    <span className="text-on-surface-variant text-[12px]">by @light_master</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Sidebar: Collections & Subscriptions */}
          <aside className="flex flex-col gap-stack-lg">
            {/* My Collections */}
            <div className="flex flex-col gap-stack-sm">
              <div className="flex justify-between items-center">
                <h3 className="font-headline-md text-headline-md text-on-surface">Collections</h3>
                <button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined" data-icon="add">add</span></button>
              </div>
              <div className="grid grid-cols-1 gap-base">
                <div className="glass-card p-4 rounded-xl flex items-center justify-between group hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-surface-container-highest rounded flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary" data-icon="folder">folder</span>
                    </div>
                    <div>
                      <p className="font-body-md font-bold">Concept Art</p>
                      <p className="text-[12px] text-on-surface-variant">42 Prompts</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
                </div>
                <div className="glass-card p-4 rounded-xl flex items-center justify-between group hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-surface-container-highest rounded flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary" data-icon="folder">folder</span>
                    </div>
                    <div>
                      <p className="font-body-md font-bold">Logo Templates</p>
                      <p className="text-[12px] text-on-surface-variant">18 Prompts</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
                </div>
                <div className="glass-card p-4 rounded-xl flex items-center justify-between group hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-surface-container-highest rounded flex items-center justify-center">
                      <span className="material-symbols-outlined text-tertiary" data-icon="folder">folder</span>
                    </div>
                    <div>
                      <p className="font-body-md font-bold">UI Kit Basics</p>
                      <p className="text-[12px] text-on-surface-variant">88 Prompts</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
                </div>
              </div>
            </div>
            {/* Subscription Management Card */}
            <div className="glass-card overflow-hidden rounded-2xl relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-8xl" data-icon="auto_awesome">auto_awesome</span>
              </div>
              <div className="p-6 relative z-10">
                <div className="bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-1 rounded w-fit mb-3">CURRENT TIER</div>
                <h4 className="font-headline-md text-2xl mb-1">Elite Creator</h4>
                <p className="text-on-surface-variant text-label-md mb-6">Unlimited generations, priority support, and 50% marketplace commission.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-label-md">
                    <span className="text-on-surface-variant">Generations used</span>
                    <span className="text-on-surface">452 / ∞</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-2/3"></div>
                  </div>
                </div>
                <button className="w-full py-3 bg-white text-background font-bold rounded-lg hover:bg-secondary transition-colors">Upgrade Tier</button>
              </div>
            </div>
          </aside>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full py-stack-xl bg-surface-container-lowest border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-stack-lg">
          <div className="col-span-2 md:col-span-1">
            <span className="font-headline-md text-on-surface block mb-4">Cue AI</span>
            <p className="text-on-surface-variant text-label-md">© 2024 Cue AI. Precision Prompting.</p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-tertiary font-label-caps">PRODUCT</span>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Playground</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Marketplace</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">API</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-tertiary font-label-caps">CREATOR RESOURCES</span>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Guides</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Documentation</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Community</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-tertiary font-label-caps">LEGAL</span>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Privacy</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md" href="#">Terms</a>
            <div className="flex gap-4 mt-2">
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="brand_awareness">brand_awareness</span></a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="terminal">terminal</span></a>
            </div>
          </div>
        </div>
      </footer>
      <script dangerouslySetInnerHTML={{__html: `
        // Micro-interactions for glass cards
        document.querySelectorAll('.glass-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
            });
        });
    `}} />
    </div>
  </>
);

export default Profile;
