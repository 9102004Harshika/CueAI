import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition, staggerContainer, itemVariant } from '../animations/variants';
import SectionReveal from '../components/SectionReveal';
import AnimatedButton from '../components/AnimatedButton';

const CreatorProfile = () => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Cue AI | Creator Profile</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Geist:wght@600;700&family=JetBrains+Mono:wght@400;500&display=swap"
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
        "\n    body {\n      background-color: #0B0B0F;\n      color: #e4e1e7;\n      -webkit-font-smoothing: antialiased;\n    }\n    .glass-surface {\n      background: rgba(22, 22, 30, 0.6);\n      backdrop-filter: blur(20px);\n      border: 1px solid rgba(255, 255, 255, 0.05);\n      border-top: 1px solid rgba(255, 255, 255, 0.1);\n    }\n    .primary-glow {\n      box-shadow: 0 0 20px rgba(208, 188, 255, 0.25);\n    }\n    .inner-glow {\n      box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.05);\n    }\n    .masonry-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n      grid-auto-rows: 10px;\n      gap: 24px;\n    }\n    .material-symbols-outlined {\n      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n    }\n  "
    }}
  />
  {/* TopNavBar Implementation */}
  <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm transition-all duration-300 ease-out">
    <div className="flex justify-between items-center w-full px-margin-desktop h-16">
      <div className="flex items-center gap-stack-md">
        <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
          Cue AI
        </span>
        <div className="hidden md:flex gap-stack-md">
          <Link
            className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
            to="/marketplace"
          >
            Marketplace
          </Link>
          <Link
            className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
            to="/feed"
          >
            Feed
          </Link>
          <Link
            className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
            to="/playground"
          >
            Playground
          </Link>
        </div>
      </div>
        <div className="flex items-center gap-stack-md">
        <AnimatedButton className="bg-primary text-on-primary font-bold px-4 py-2 rounded-lg inner-glow transition-all active:scale-95">
          Create
        </AnimatedButton>
        <div className="flex gap-stack-sm text-on-surface-variant">
          <span
            className="material-symbols-outlined cursor-pointer hover:bg-white/5 p-2 rounded-full"
            data-icon="notifications"
          >
            notifications
          </span>
          <span
            className="material-symbols-outlined cursor-pointer hover:bg-white/5 p-2 rounded-full"
            data-icon="account_circle"
          >
            account_circle
          </span>
        </div>
      </div>
    </div>
  </header>
  <main className="pt-16 pb-stack-xl">
    {/* Hero Banner */}
    <section className="relative h-[450px] w-full overflow-hidden">
      <img
        alt="Hero Background"
        className="w-full h-full object-cover opacity-60"
        data-alt="A sprawling cinematic wide shot of a futuristic neon city under a deep purple and cyan sky. The architecture is sharp and brutalist with glowing digital billboards casting reflections onto rain-slicked dark streets. The lighting is moody and high-contrast, dominated by the brand's primary purple and secondary cyan glow, creating a sophisticated and technologically advanced atmosphere."
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCuTKhgCc-YRo-kqDA8QoKcy7JOFe7g1griykQ83mw7KKAICvy7DE4mrObhNgxkWt5rpPsJQW3YMnfrzhI2Cd-GR8jxvKc4qaICFKChSZk7bqHhXkLRHQZsDF5ju9Hnlw56IR5wJ5yZFP5Ip3zPCBT8Qvtcp0CofxjOLPRk-vpALL7IEDmRSWUdeWkeCEuvOsjmHd2iWaX-uHZLvDgegrobAXT0_R7ERB0IHAmQnU6o1jRx5fhztb8ryw-9HvNfKd4JS4A9MzkgnE"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-full px-margin-desktop pb-stack-md flex flex-col md:flex-row items-end gap-stack-md">
        <div className="relative group">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-background glass-surface">
            <img
              alt="Creator Avatar"
              className="w-full h-full object-cover"
              data-alt="A high-detail professional headshot portrait of a digital artist with a calm expression, softly lit by purple and blue rim lighting. The subject has dark hair and sharp features, wearing minimalist technical apparel. The background is a blurred studio environment with hints of high-end computer hardware and glowing accent lights."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiJYEe8MifseNyYAN7KcoQV5ipZX7QHsujjb1q3UKT-a1U1RXwjzCacPGA6pfiU1KjtXxLn-cyIaAtuAylL_K0OdjkpsLzaYGnZ3dLRr8eiad2pxGkD3Ivrk0C-iMXZsFWbwa_c-OKn0nvi3QqS2nzDzKMyguOcRzv88ux-g3rHldmKU6pouspsSajESAgyzOpyvGxeyFKF_LJTuykPG7pIET1i_L5ZDJ3fKRczOsLD3OixHTB_J3oNqQdZE3WR3-kEK1xFfhOMu4"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary rounded-full p-1 border-4 border-background">
            <span
              className="material-symbols-outlined text-[20px]"
              data-icon="verified"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              verified
            </span>
          </div>
        </div>
        <div className="flex-1 pb-stack-xs">
          <h1 className="font-display-xl text-display-xl text-on-surface leading-tight">
            Aether Void
          </h1>
          <div className="flex items-center gap-stack-md mt-stack-xs">
            <div className="flex items-center gap-stack-xs text-on-surface-variant">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
                Expert Creator
              </span>
              <span className="w-1 h-1 rounded-full bg-outline-variant" />
              <span className="text-label-md font-label-md">
                Joined Oct 2023
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-stack-sm pb-stack-xs">
          <div className="glass-surface px-stack-md py-stack-sm rounded-xl text-center min-w-[100px]">
            <div className="font-headline-md text-headline-md text-on-surface">
              12.4k
            </div>
            <div className="font-label-caps text-label-caps text-on-surface-variant">
              Followers
            </div>
          </div>
          <div className="glass-surface px-stack-md py-stack-sm rounded-xl text-center min-w-[100px]">
            <div className="font-headline-md text-headline-md text-on-surface">
              892
            </div>
            <div className="font-label-caps text-label-caps text-on-surface-variant">
              Creations
            </div>
          </div>
          <AnimatedButton className="bg-primary text-on-primary-container font-bold px-8 py-4 rounded-xl primary-glow transition-all hover:scale-[1.02] active:scale-95">
            Follow
          </AnimatedButton>
        </div>
      </div>
    </section>
    {/* Sub Navigation */}
    <nav className="sticky top-16 z-40 bg-background/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-margin-desktop flex gap-stack-lg h-14 items-center">
        <a
          className="text-primary font-bold border-b-2 border-primary h-full flex items-center px-2"
          href="#"
        >
          Creations
        </a>
        <a
          className="text-on-surface-variant hover:text-on-surface transition-colors h-full flex items-center px-2"
          href="#"
        >
          Collections
        </a>
        <a
          className="text-on-surface-variant hover:text-on-surface transition-colors h-full flex items-center px-2"
          href="#"
        >
          Prompts
        </a>
        <a
          className="text-on-surface-variant hover:text-on-surface transition-colors h-full flex items-center px-2"
          href="#"
        >
          Analytics
        </a>
      </div>
    </nav>
    {/* Main Content Layout */}
    <div className="max-w-container-max mx-auto px-margin-desktop mt-stack-lg grid grid-cols-12 gap-gutter">
      {/* Sidebar */}
      <aside className="col-span-12 lg:col-span-3 space-y-stack-md">
        <div className="glass-surface p-stack-md rounded-2xl">
          <h3 className="font-label-caps text-label-caps text-secondary mb-stack-sm">
            About
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Exploring the intersection of generative geometry and dark
            brutalism. I specialize in Midjourney architecture and Stable
            Diffusion textures for near-future game environments.
          </p>
          <div className="mt-stack-md flex gap-stack-sm">
            <span
              className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer"
              data-icon="language"
            >
              language
            </span>
            <span
              className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer"
              data-icon="terminal"
            >
              terminal
            </span>
            <span
              className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer"
              data-icon="alternate_email"
            >
              alternate_email
            </span>
          </div>
        </div>
        <div className="glass-surface p-stack-md rounded-2xl">
          <h3 className="font-label-caps text-label-caps text-secondary mb-stack-sm">
            Top Models
          </h3>
          <div className="space-y-stack-sm">
            <div className="flex items-center justify-between">
              <span className="text-label-md font-label-md">Midjourney v6</span>
              <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-label-caps">
                62%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-label-md font-label-md">
                Stable Diffusion XL
              </span>
              <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-label-caps">
                28%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-label-md font-label-md">DALL-E 3</span>
              <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-label-caps">
                10%
              </span>
            </div>
          </div>
        </div>
        <div className="glass-surface p-stack-md rounded-2xl">
          <h3 className="font-label-caps text-label-caps text-secondary mb-stack-sm">
            Latest Prompts
          </h3>
          <div className="space-y-stack-sm">
            <div className="group cursor-pointer">
              <div className="font-label-md text-on-surface group-hover:text-primary transition-colors">
                Obsidian Void Arch...
              </div>
              <div className="text-xs text-on-surface-variant font-label-caps">
                $14.00
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="font-label-md text-on-surface group-hover:text-primary transition-colors">
                Cybernetic Haze Pt. 2
              </div>
              <div className="text-xs text-on-surface-variant font-label-caps">
                $9.00
              </div>
            </div>
          </div>
        </div>
      </aside>
      {/* Content Canvas */}
      <section className="col-span-12 lg:col-span-9">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariant} className="glass-surface rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
            <div className="aspect-square relative overflow-hidden">
              <img
                alt="Creation 1"
                className="w-full h-full object-cover"
                data-alt="A highly complex 3D fractal sculpture made of iridescent obsidian and liquid chrome, floating in a dark vacuum. Shards of light in purple and cyan reflect off the metallic surfaces. The composition is asymmetrical and intricate, showcasing technical precision and a futuristic aesthetic typical of high-end generative art."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSI_1E5S-5aqNSwiNxb57j2Wo131QT_pP_fMTRv-vSIik7QM2fS96pxd07fZgrmOmeqx7Tb2jr7BLX9eZ4RvsbCAyDUISob2U1w8VPaS7mEDOGf9Ctuq4gV5EeZrLKczN67DQfgmzEeEsiTRYbcqM9zUUf4zYrfXHivX-ICsPe6vNTvJ-jUOgq-wIt-Yz_vugRbn6ihyG8y0_-ky6r6CMRBBkstHsuYVLquRsZjkUKWL2Zq6NO7EgP6Wu87RfKV3xdbh_GCSfmt1M"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-stack-md">
                <span
                  className="material-symbols-outlined text-white"
                  data-icon="favorite"
                >
                  favorite
                </span>
                <span
                  className="material-symbols-outlined text-white"
                  data-icon="shopping_cart"
                >
                  shopping_cart
                </span>
              </div>
            </div>
            <div className="p-stack-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-label-md text-on-surface">
                    Neural Architecture v1
                  </h4>
                  <p className="text-xs text-on-surface-variant">
                    Midjourney v6
                  </p>
                </div>
                <div className="text-secondary font-label-caps">$12</div>
              </div>
            </div>
          </motion.div>
          {/* Card 2 */}
          <motion.div variants={itemVariant} className="glass-surface rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                alt="Creation 2"
                className="w-full h-full object-cover"
                data-alt="An ethereal abstract landscape featuring rolling hills of digital velvet in deep indigo. Wispy trails of glowing cyan mist flow through the valleys under a sky filled with multiple luminous moons. The mood is tranquil and otherworldly, emphasizing a minimalist yet powerful color palette of dark purples and bright neon accents."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA95PsmmxcOElS1uA-JN5slvhMY0v_mqe9NvMlEvXQ_1jwd9XWH1y0i29ud-va95F4EpYhPSySln8g8soDRrG8YeWaScJOqchS4U77dfV2TDJ4DHZrHmQ8p_9vsVzVDkFw_5gYHlGGKev4uBqAbfrlBxznKZBYSPMym3JQj33E77eALX3c1clMGc8NICAFSDO2zXqjIO8RTihphs9NGDp1_FGfZfSp3M7R6lYizkwE2TP9OO_EGRUslbuEMrbvg_d6N_YxHliqtc7k"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-stack-md">
                <span
                  className="material-symbols-outlined text-white"
                  data-icon="favorite"
                >
                  favorite
                </span>
                <span
                  className="material-symbols-outlined text-white"
                  data-icon="shopping_cart"
                >
                  shopping_cart
                </span>
              </div>
            </div>
            <div className="p-stack-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-label-md text-on-surface">
                    Velvet Sky Abstract
                  </h4>
                  <p className="text-xs text-on-surface-variant">
                    Stable Diffusion
                  </p>
                </div>
                <div className="text-secondary font-label-caps">$18</div>
              </div>
            </div>
          </motion.div>
          {/* Card 3 */}
          <motion.div variants={itemVariant} className="glass-surface rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
            <div className="aspect-square relative overflow-hidden">
              <img
                alt="Creation 3"
                className="w-full h-full object-cover"
                data-alt="A portrait of a biomechanical figure with skin made of translucent ceramic and glowing internal circuitry. The eyes are bright cyan LED orbs. The lighting is dramatic, with a strong purple key light from the side creating deep shadows. The overall aesthetic is clean, medical, and highly advanced."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8wBiOfbxR50QI21rwZ6TwUqYiedLudQhUi_tU4qtcEfw-KV6xq_NyT4DFwG4Ya6N2FjlKgZYD4caGeEPL0I8Uk77nwaJiE4mC1UKttgyKPGreMaM7LVRYz0Q5CWYSirWN3egHPZJWLyfqhvRG0TmqynNE-iBmd1FGMQW0aaRlN69mDvl6DdsgYsE4XkMAerne8lHxjdsjKHQLcEHouElPXG7Vsiu25csN-dnr64lYIV80KzUhEsi0mIqISg2lVfSYxL7N-tv9j2o"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-stack-md">
                <span
                  className="material-symbols-outlined text-white"
                  data-icon="favorite"
                >
                  favorite
                </span>
                <span
                  className="material-symbols-outlined text-white"
                  data-icon="shopping_cart"
                >
                  shopping_cart
                </span>
              </div>
            </div>
            <div className="p-stack-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-label-md text-on-surface">
                    Biotech Portrait #4
                  </h4>
                  <p className="text-xs text-on-surface-variant">
                    Midjourney v6
                  </p>
                </div>
                <div className="text-secondary font-label-caps">$15</div>
              </div>
            </div>
          </motion.div>
          {/* Card 4 (Bento-style tall) */}
          <motion.div variants={itemVariant} className="glass-surface rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 md:row-span-2">
            <div className="h-full relative overflow-hidden">
              <img
                alt="Creation 4"
                className="w-full h-full object-cover"
                data-alt="A vertical composition showing a futuristic monolithic tower rising out of a thick layer of dark clouds. The tower is illuminated by millions of tiny cyan lights representing windows, and a massive beam of purple light shoots from the top into a starry cosmos. The scene is epic and grand, emphasizing verticality and technical precision."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsUonT9Z-ydceU1ZylXZ6i35uAUVhlqlJNFSg6ATtFZtWukerJmaef8oBxxYpvhjDoNB2P4pxAHX76xU2Iz8a3DFdTbiGaUqXXVcBl8CmW8SGG7pEWWYFj80_bnMOmfoYXf9_r4lP-ChSSWCkwyyx31Ce6p9ruMcMJrp3ekJo9PyQx7r_ncGKOBbv8UXQlQo8Un6KleOzAYMBN4tT_mT4OIpH25bE07XOgYPdtPV9FFu1HJDDxN9rpfxuOYrFH7gKtnfc1wrxsTok"
              />
              <div className="absolute bottom-0 left-0 w-full p-stack-md bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="font-label-md text-on-surface">
                  The Monolith Project
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Collection: Obelisk
                </p>
              </div>
            </div>
          </motion.div>
          {/* Card 5 */}
          <motion.div variants={itemVariant} className="glass-surface rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
            <div className="aspect-video relative overflow-hidden">
              <img
                alt="Creation 5"
                className="w-full h-full object-cover"
                data-alt="A wide cinematic landscape of a rocky alien desert under two giant ringed planets. The rocks are sharp and dark, with veins of glowing purple energy running through them. The lighting is low and atmospheric, highlighting the textures of the sand and stone. A high-fidelity digital painting style."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBw46DXjQt6RuiDll7bKiJb9aOitp3ocz3vKcfxH2N1TTUny146nyvj5NDC9ZRUN27L-NHmjiV697hFrY3wSJkG1EJvWTugUBVplp-wnO_32NZs6VWXL1ztCw_bIw7wUDGGOc3tv6KIFald-A1XdY3MpsgLVYZfSAPbuExPf20Q7_cU2vzxhUdaWeQwlmW6-Z-YVM4DkrSTMey1jLIlqrNjv3kPZzCGNuschF2E8Gdi6-YCKdNcIZb8G7uV81wl3tqHuhW1jRMSB4"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-stack-md">
                <span
                  className="material-symbols-outlined text-white"
                  data-icon="favorite"
                >
                  favorite
                </span>
                <span
                  className="material-symbols-outlined text-white"
                  data-icon="shopping_cart"
                >
                  shopping_cart
                </span>
              </div>
            </div>
            <div className="p-stack-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-label-md text-on-surface">
                    Obsidian Dunes
                  </h4>
                  <p className="text-xs text-on-surface-variant">
                    Stable Diffusion
                  </p>
                </div>
                <div className="text-secondary font-label-caps">$25</div>
              </div>
            </div>
          </motion.div>
          {/* Card 6 */}
          <motion.div variants={itemVariant} className="glass-surface rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
            <div className="aspect-square relative overflow-hidden">
              <img
                alt="Creation 6"
                className="w-full h-full object-cover"
                data-alt="A macro shot of a complex AI-generated mechanical watch movement. The gears are made of matte black titanium with purple rubies and cyan glowing springs. The depth of field is shallow, focusing on the center of the mechanism. The visual style is hyper-realistic and extremely detailed."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjo-VMscetr4GHPyKnMD--nvaZdDrNDEU3tCSB1QjeYaT4MuqiE_ERernw40Vti3paaOE2Ekr_dkQF9i0KEIhwmesU0eS9-qEU221ew69S9JMTrizIU0eIkH9KUTZHLPv5XFb9sMdzBKU5phokHQt5llcZahhnx0uJXxJZCV7EwWWZtC4DfdasQV25NBo9FG6O-CtiGtNQzQicb3CAS78sOBSEvjxwkYoEQ0PbUzNzvvHUoPZ6wmDRjF7Dswcg3Ncg7GUBDtwCm9k"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-stack-md">
                <span
                  className="material-symbols-outlined text-white"
                  data-icon="favorite"
                >
                  favorite
                </span>
                <span
                  className="material-symbols-outlined text-white"
                  data-icon="shopping_cart"
                >
                  shopping_cart
                </span>
              </div>
            </div>
            <div className="p-stack-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-label-md text-on-surface">
                    Chronos Core
                  </h4>
                  <p className="text-xs text-on-surface-variant">DALL-E 3</p>
                </div>
                <div className="text-secondary font-label-caps">$30</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  </main>
  {/* Footer Implementation */}
  <footer className="w-full py-stack-xl bg-surface-container-lowest border-t border-outline-variant/20">
    <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-stack-lg">
      <div className="col-span-1">
        <span className="font-headline-md text-on-surface">Cue AI</span>
        <p className="mt-stack-sm text-on-surface-variant text-label-md">
          © 2024 Cue AI. Precision Prompting.
        </p>
      </div>
      <div className="flex flex-col gap-stack-xs">
        <span className="font-label-caps text-label-caps text-on-surface-variant mb-stack-xs">
          Product
        </span>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-label-md"
          href="#"
        >
          Marketplace
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-label-md"
          href="#"
        >
          Playground
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-label-md"
          href="#"
        >
          API
        </a>
      </div>
      <div className="flex flex-col gap-stack-xs">
        <span className="font-label-caps text-label-caps text-on-surface-variant mb-stack-xs">
          Resources
        </span>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-label-md"
          href="#"
        >
          Creator Academy
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-label-md"
          href="#"
        >
          Documentation
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-label-md"
          href="#"
        >
          Showcase
        </a>
      </div>
      <div className="flex flex-col gap-stack-xs">
        <span className="font-label-caps text-label-caps text-on-surface-variant mb-stack-xs">
          Connect
        </span>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-label-md"
          href="#"
        >
          Twitter
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-label-md"
          href="#"
        >
          Discord
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-label-md"
          href="#"
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
</motion.div>
);

export default CreatorProfile;
