import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { pageVariants, pageTransition, staggerContainer, itemVariant } from '../animations/variants';
const premiumCardHover = {
  rest: {
    y: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
const CountUp = ({ to, delay = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, delay, ease: 'easeOut' });
    return controls.stop;
  }, [count, to, delay]);

  return <motion.span>{rounded}</motion.span>;
};

// Shared variants imported from src/animations/variants.js

const Home = () => {
  useEffect(() => {
    // Dynamic header background change on scroll
    const handleScroll = () => {
        const header = document.querySelector('header');
        if (header) {
          if (window.scrollY > 20) {
              header.classList.add('bg-background/80', 'py-2');
              header.classList.remove('bg-background/60', 'py-0');
          } else {
              header.classList.remove('bg-background/80', 'py-2');
              header.classList.add('bg-background/60', 'py-0');
          }
        }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div 
      initial="initial" 
      animate="in" 
      exit="out" 
      variants={pageVariants} 
      transition={pageTransition}
      className="bg-background text-on-background selection:bg-primary/30 selection:text-primary min-h-screen font-body-md overflow-x-hidden"
    >
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm h-16 flex justify-between items-center px-margin-desktop transition-all duration-300 ease-out">
        <div className="flex items-center gap-stack-md">
          <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">Cue AI</span>
          <div className="hidden md:flex gap-base">
            <Link className="font-body-md text-body-md text-primary font-bold border-b-2 border-primary pb-1" to="/">Marketplace</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors px-stack-sm py-1 rounded hover:bg-white/5" to="/feed">Feed</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors px-stack-sm py-1 rounded hover:bg-white/5" to="/playground">Playground</Link>
          </div>
        </div>
        <div className="flex items-center gap-stack-sm">
          <button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-white/5 rounded-full transition-colors">notifications</button>
          <button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-white/5 rounded-full transition-colors">account_circle</button>
          <motion.button variants={premiumCardHover}
initial="rest"
whileHover="hover"
style={{
  transformStyle: "preserve-3d",
  willChange: "transform"
}} whileTap={{ scale: 0.98 }} className="bg-primary text-on-primary font-bold px-stack-md py-2 rounded-lg hover:brightness-110 transition-all duration-300 primary-glow">Create</motion.button>
        </div>
      </header>
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative w-full py-stack-xl flex flex-col items-center justify-center overflow-hidden min-h-[921px]">
          <div className="hero-gradient absolute inset-0 z-0"></div>
          <div className="noise-overlay absolute inset-0 z-0"></div>
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            animate="show" 
            className="relative z-10 max-w-container-max mx-auto px-margin-desktop flex flex-col items-center text-center"
          >
            <motion.div variants={itemVariant} className="inline-flex items-center gap-base px-3 py-1 glass-card rounded-full mb-stack-md">
              <span className="bg-secondary/10 text-secondary font-label-caps text-label-caps px-2 py-0.5 rounded-full">New</span>
              <span className="text-label-md font-label-md text-on-surface-variant">Version 2.0 Playground is now live</span>
            </motion.div>
            <motion.h1 variants={itemVariant} className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-stack-sm leading-tight max-w-4xl">
              The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">Prompt Engineering</span>
            </motion.h1>
            <motion.p variants={itemVariant} className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-lg">
              Discover, deploy, and monetize high-performance AI prompts. The premium ecosystem built for creators and engineers to scale their AI workflows.
            </motion.p>
            <motion.div variants={itemVariant} className="flex flex-col md:flex-row gap-stack-md">
              <motion.button whileHover={{
  scale: 1.04,
  y: -2,
  boxShadow:
    "0 20px 50px rgba(124,58,237,.35)"
}}
whileTap={{
  scale: 0.97,
  y: 1
}}
transition={{
  type: "spring",
  stiffness: 400,
  damping: 20
}} whileTap={{ scale: 0.95 }} className="bg-primary text-on-primary font-bold px-stack-xl py-4 rounded-xl text-lg hover:brightness-110 transition-all duration-300 primary-glow">
                Start Exploring
              </motion.button>
              <motion.button whileHover={{
  scale: 1.04,
  y: -2,
  boxShadow:
    "0 20px 50px rgba(124,58,237,.35)"
}}
whileTap={{
  scale: 0.97,
  y: 1
}}
transition={{
  type: "spring",
  stiffness: 400,
  damping: 20
}} whileTap={{ scale: 0.95 }} className="glass-card text-on-surface font-bold px-stack-xl py-4 rounded-xl text-lg hover:bg-white/5 transition-all">
                View Marketplace
              </motion.button>
            </motion.div>
            
            {/* Abstract Animated Visual */}
            <motion.div variants={itemVariant} className="mt-stack-xl relative w-full max-w-5xl h-[400px] rounded-3xl overflow-hidden glass-card">
              <img className="w-full h-full object-cover opacity-50 mix-blend-overlay" alt="A cinematic, abstract visualization of artificial intelligence using flowing purple and cyan energy ribbons. The ribbons twist and intertwine in a dark, infinite void, creating a sense of complex neural networks. Deep space depth is maintained with dark background-surface colors and subtle glowing highlights reflecting off semi-translucent surfaces. The overall mood is high-tech, futuristic, and intellectually powerful." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD95kV8ZAM3XlYTiUvocVnmGhzUNuP2kRFvVOaicUS5Vrq2teAd5iwnfeBa9hA0W3MWbgUYyCHT7B0tlmRg7Hk5M-IxaS0eLQVpUyZuHXIn8Q1oDSNVERMWBbUH5mWS7fdQLJ8rGmVNflKRzRIhMOzeZ3Z3ae7MBG9YStu6TaNFOZ-vHCR-i3S1-DIrQMeHgrA79959Vnw7J__EadrnHbjwyqwb5CPPVVterYCTsn_v2k0ZHGjRb-z_Woo5tAtpCKW319pD5tbah28" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-primary/20 blur-[100px] animate-pulse"></div>
                <div className="w-48 h-48 bg-secondary/20 blur-[80px] animate-pulse delay-700"></div>
              </div>
            </motion.div>
          </motion.div>
        </section>
        
        {/* Stats Grid */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
viewport={{
  once: true,
  amount: 0.15
}}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-container-max mx-auto px-margin-desktop py-stack-xl border-y border-outline-variant/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-stack-md text-center">
            <motion.div variants={itemVariant}>
              <p className="font-display-xl-mobile md:text-headline-lg font-bold text-primary"><CountUp to={50} delay={0.2} />k+</p>
              <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest mt-2">Verified Prompts</p>
            </motion.div>
            <motion.div variants={itemVariant}>
              <p className="font-display-xl-mobile md:text-headline-lg font-bold text-secondary"><CountUp to={10} delay={0.4} />k+</p>
              <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest mt-2">Top Creators</p>
            </motion.div>
            <motion.div variants={itemVariant}>
              <p className="font-display-xl-mobile md:text-headline-lg font-bold text-on-surface"><CountUp to={2} delay={0.6} />.4M</p>
              <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest mt-2">Daily Generations</p>
            </motion.div>
            <motion.div variants={itemVariant}>
              <p className="font-display-xl-mobile md:text-headline-lg font-bold text-tertiary"><CountUp to={99} delay={0.8} />.9%</p>
              <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest mt-2">Execution Rate</p>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Featured Creators */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
viewport={{
  once: true,
  amount: 0.15
}}
          viewport={{ once: true, amount: 0.2 }}
          className="py-stack-xl"
        >
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <motion.div variants={itemVariant} className="flex justify-between items-end mb-stack-lg">
              <div>
                <h2 className="font-headline-lg text-on-surface mb-2">Featured Creators</h2>
                <p className="font-body-md text-on-surface-variant">The minds behind the most successful AI implementations.</p>
              </div>
              <button className="text-primary font-label-md flex items-center gap-1 hover:underline">
                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </motion.div>
            
            <div className="flex gap-stack-md overflow-x-auto pb-8 snap-x no-scrollbar">
              {/* Creator Profile 1 */}
              <motion.div variants={itemVariant} variants={premiumCardHover}
initial="rest"
whileHover="hover"
style={{
  transformStyle: "preserve-3d",
  willChange: "transform"
}} className="min-w-[280px] glass-card p-stack-md rounded-2xl snap-start transition-transform duration-300">
                <img className="w-16 h-16 rounded-full mb-stack-sm object-cover border-2 border-primary/20" alt="Close up portrait of a male digital artist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKbThFHeM7RkVJ457kCUg0xRh7nW9AOQwGS61n3SXvB7fFc6ujtgJaS6IbfLqp_Ld1Zp36bmFNKQDbSMpR8aMvD2OcYnjxIcewtwdQwwWAjQwN426k6Qo26bk8i06FwluUIJ4BXs5a7PAwfRwSu8oVKgGJCTUNwIJQ2yIglYgGNGZJlGVhvmZUVLPl2Qcug9s9N53K9xtH2zd_XXWr5_JAuOCtPK1EY5rFwY7YU8CJQsT58O4LDV8VhRA9mXBIAn67QLsQGHcJxXI" />
                <h3 className="font-headline-md text-[20px] text-on-surface">Alex Rivera</h3>
                <p className="font-label-md text-secondary mb-stack-sm">@alxr_vfx</p>
                <p className="font-body-md text-on-surface-variant line-clamp-2 mb-stack-md">Expert in cinematic lighting and hyper-realistic Midjourney structures.</p>
                <div className="flex items-center justify-between border-t border-outline-variant/10 pt-stack-sm">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">1.2k Prompts</span>
                  <span className="flex items-center text-primary"><span className="material-symbols-outlined text-sm">star</span> 4.9</span>
                </div>
              </motion.div>
              
              {/* Creator Profile 2 */}
              <motion.div variants={itemVariant} variants={premiumCardHover}
initial="rest"
whileHover="hover"
style={{
  transformStyle: "preserve-3d",
  willChange: "transform"
}} className="min-w-[280px] glass-card p-stack-md rounded-2xl snap-start transition-transform duration-300">
                <img className="w-16 h-16 rounded-full mb-stack-sm object-cover border-2 border-secondary/20" alt="Portrait of a female AI researcher" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwvDnOZd_berSu3QGtH5pVLonCt_vvSGz6zr95Brvnh-f7T8M1J1xu2NknVdw4MkisUHVBZmEbjpVNzX0j25EMGRa8J-Aj34y5PSnOqcIpSiKEEh00AqOK6Ili__FUGGI6--uwfPGSl4h9Xv3cR__zZF_RfnS_dq7U-eN5B5WWZr4WJS9H19Pjkl4lfyHrF11a8dKQqv2amxguodrh0vd1DYpMK1ltt-aq6udKJqeR04YRTP3LtHk2umfzmO6MON5gRxPR3x720VU" />
                <h3 className="font-headline-md text-[20px] text-on-surface">Sarah Chen</h3>
                <p className="font-label-md text-secondary mb-stack-sm">@sarah_codes</p>
                <p className="font-body-md text-on-surface-variant line-clamp-2 mb-stack-md">Specializing in Python generation and complex business logic for GPT-4.</p>
                <div className="flex items-center justify-between border-t border-outline-variant/10 pt-stack-sm">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">840 Prompts</span>
                  <span className="flex items-center text-primary"><span className="material-symbols-outlined text-sm">star</span> 5.0</span>
                </div>
              </motion.div>
              
              {/* Creator Profile 3 */}
              <motion.div variants={itemVariant} variants={premiumCardHover}
initial="rest"
whileHover="hover"
style={{
  transformStyle: "preserve-3d",
  willChange: "transform"
}} className="min-w-[280px] glass-card p-stack-md rounded-2xl snap-start transition-transform duration-300">
                <img className="w-16 h-16 rounded-full mb-stack-sm object-cover border-2 border-primary/20" alt="Profile of a digital creator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCviIxuRhdSoPZnhPtnC5ZBmGKhG_UE5OVlhkMRwjHtcP91_8UxD2bxkk6Qd07-WEGp1lk4tIkK-rkjg5wZzYRYJIT5EfA4mdXnEUDFBvuCFYAp2v6xSOIv9c0-Jew4eaSB7o6tgqjIlD-Xz5k7PdFQdbti9aVSSrIRP670UJkJpXvrLdKo2qOAgTFTi0rs4e7GSqLj8k0szQ2fFmc3pY-d2euYqj2qG_qDHmMRJq1zm1X5g-fHk_IINOKQnvfzpsthL0j5omB7E9M" />
                <h3 className="font-headline-md text-[20px] text-on-surface">Marcus Thorne</h3>
                <p className="font-label-md text-secondary mb-stack-sm">@m_thorne</p>
                <p className="font-body-md text-on-surface-variant line-clamp-2 mb-stack-md">Master of surreal architecture and organic geometry in DALL-E 3.</p>
                <div className="flex items-center justify-between border-t border-outline-variant/10 pt-stack-sm">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">2.5k Prompts</span>
                  <span className="flex items-center text-primary"><span className="material-symbols-outlined text-sm">star</span> 4.8</span>
                </div>
              </motion.div>
              
              {/* Creator Profile 4 */}
              <motion.div variants={itemVariant} variants={premiumCardHover}
initial="rest"
whileHover="hover"
style={{
  transformStyle: "preserve-3d",
  willChange: "transform"
}} className="min-w-[280px] glass-card p-stack-md rounded-2xl snap-start transition-transform duration-300">
                <img className="w-16 h-16 rounded-full mb-stack-sm object-cover border-2 border-secondary/20" alt="Creative female artist portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1XJU-j9_Js7CVGS5jSP6D5ja4bsJJwGn440bqaZJT3zFzbMf6EwtHktgZ3Jg3P2vaMFy22edaUQ08dB68sm-_7W-OtVsk42WLPOR1zECVtYY5vcRE44nCu0skwMiV-Jl_zzqTX86uZW9W3XuzkBnKo9a-d0Nc0HpBRkwH8AdP92kjLDjzFaSDMtX2BhNVuT6sde9opvUpNZ2VbuYDsYz71h0w9_2L-9uwa9v1ZscODYmGCg1eZ33gBJmDX5L9nHkfwqGy5Synjvk" />
                <h3 className="font-headline-md text-[20px] text-on-surface">Elena Solas</h3>
                <p className="font-label-md text-secondary mb-stack-sm">@elenasolas</p>
                <p className="font-body-md text-on-surface-variant line-clamp-2 mb-stack-md">Expert in brand identity and vector-style generation workflows.</p>
                <div className="flex items-center justify-between border-t border-outline-variant/10 pt-stack-sm">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">3.1k Prompts</span>
                  <span className="flex items-center text-primary"><span className="material-symbols-outlined text-sm">star</span> 4.9</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Trending Prompts (Grid) */}
        <section className="py-stack-xl bg-surface-container-low/30">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-stack-md mb-stack-lg">
              <div>
                <h2 className="font-headline-lg text-on-surface mb-2">Trending Prompts</h2>
                <p className="font-body-md text-on-surface-variant">Top performing blueprints for production-ready outputs.</p>
              </div>
              <div className="flex gap-base overflow-x-auto no-scrollbar">
                <button className="px-4 py-2 rounded-full glass-card border-primary text-primary font-label-md">All</button>
                <button className="px-4 py-2 rounded-full glass-card hover:border-primary/50 text-on-surface-variant font-label-md transition-all">Midjourney</button>
                <button className="px-4 py-2 rounded-full glass-card hover:border-primary/50 text-on-surface-variant font-label-md transition-all">GPT-4</button>
                <button className="px-4 py-2 rounded-full glass-card hover:border-primary/50 text-on-surface-variant font-label-md transition-all">Stable Diffusion</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
              {/* Prompt Card 1 */}
              <motion.div variants={itemVariant} variants={premiumCardHover}
initial="rest"
whileHover="hover"
style={{
  transformStyle: "preserve-3d",
  willChange: "transform"
}} className="glass-card group rounded-2xl overflow-hidden cursor-pointer">
                <div className="aspect-square relative overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Cyber-Renaissance Architecture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_NiY2SYkgVFNEkZZJS_VU_rYosT9dgB4f1-QAesKHdDIzCOun8wxYOyK23hnCilKq47GHf1gvTaoniykWCDCm0ZL2BzIluWoWFk0GDyW2kliT8_P6A5DgcngWuTQoSmXOwvB2VbwnW0ybBuCitivk5us5feEhz1WANw7hxNlHqljIkggYVyL33c5XI6P_V_syzSOrII5j7Wq3BIScZCeQeb0duwE3NGn-ywUnUfQ5729-HsMyMytTfRia2l9J0QKCkavvEt3IlCs" />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-secondary font-label-caps text-[10px]">MIDJOURNEY</div>
                </div>
                <div className="p-stack-md">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-headline-md text-[18px] text-on-surface group-hover:text-primary transition-colors">Cyber-Renaissance Architecture</h4>
                    <span className="font-bold text-on-surface">$12.00</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant text-sm mb-stack-md">Generate stunning structural designs merging 15th-century style with 22nd-century tech.</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img className="w-6 h-6 rounded-full" alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXJCcuyXW2lr3vwUCunsEeYRB63BCAnWe-CRc_gYT-bQBCx_dRFbe9ARO1JPt7vfZll3iTBMFY6nlHYgSwI1ewV9Sbc-aZ7Rr33eEIY2-_3ESyvEHRAvANttnafIn8LsfFiOJdNQuqeuYnI57_xLaQUBXL_oh3Oobe_7i6N1TFwplQP4ExnmidLr7gQchmdyyLE9WxHSQKg3JTcpFpdT-B9UbvJF3qruE0ewnILD9d80W0-XXsMikQBBp1ppwRrr2tbYDxGcuD9dM" />
                      <span className="text-xs text-on-surface-variant">by @alxr_vfx</span>
                    </div>
                    <button className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-sm">shopping_bag</span>
                    </button>
                  </div>
                </div>
              </motion.div>
              
              {/* Prompt Card 2 */}
              <motion.div variants={itemVariant} variants={premiumCardHover}
initial="rest"
whileHover="hover"
style={{
  transformStyle: "preserve-3d",
  willChange: "transform"
}} className="glass-card group rounded-2xl overflow-hidden cursor-pointer">
                <div className="aspect-square relative overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Advanced Microservice Logic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD25jclAWx8AC4lNQcSnxFeAebASnIWeDrvfbZX9Tpaf9Mn70zrfCIplqIve7zwjp0cGIaljmZS7ox9w-QrSc_QqwAg-FV1Wu96mAsuq7EpU9Wv3Bxwj8eY9sSW5FLOQhL7DVOcKXPnfu_QmtGOvvUaVO7Kq6mXjp0TjuJHLnFOsRxe7FdzhHhXOzAdePY1B8y9ajqQ_Wb_s-Rya45MEmq9AlVnV2WU4G7nnRBt7sSf0CFO1AYcZ2Aq647y2k9sh75hUhTjZidqy-4" />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-primary font-label-caps text-[10px]">GPT-4</div>
                </div>
                <div className="p-stack-md">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-headline-md text-[18px] text-on-surface group-hover:text-primary transition-colors">Advanced Microservice Logic</h4>
                    <span className="font-bold text-on-surface">$24.00</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant text-sm mb-stack-md">The ultimate prompt for generating scalable Go microservices with clean architecture.</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img className="w-6 h-6 rounded-full" alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM3HzqCaz3lqVJDgbKaR-D02hxacNQFcDZmxkhoXQmIprZFa-YJzWhyeX9hgnCCaiwITCQ_iLIISddfjW72VHt0rjkOF3QmHYsarih2fAaxxivybKp09oxRicnEPXaso40rx_gLbSyx06etxmjVtgAUP8ppS__haI0ZcZViQ1j_9-2ImWsb_jR1KjTxx995minya_YWieYQfF6bWkTtkJ1FU-8N_a9-n3Hm3NqGK9SxGKGCdQTRaV45-iC1YsLmZBRDVOTejAxhk0" />
                      <span className="text-xs text-on-surface-variant">by @sarah_codes</span>
                    </div>
                    <button className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-sm">shopping_bag</span>
                    </button>
                  </div>
                </div>
              </motion.div>
              
              {/* Prompt Card 3 */}
              <motion.div variants={itemVariant} variants={premiumCardHover}
initial="rest"
whileHover="hover"
style={{
  transformStyle: "preserve-3d",
  willChange: "transform"
}} className="glass-card group rounded-2xl overflow-hidden cursor-pointer">
                <div className="aspect-square relative overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Editorial UI Concept Kit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-N7w7wfDlhHuTKaLhx0V1yZaA86ESWm2UXQxWXwlkpnY4Ll3_LWzhgtelmsB5DpuW7uV84gh4Ce6sQm-o-si_7JIDnL9Ds9NvoavJeJ3iWxPKoy0m1L-qKL9sTJVSSav1mfH4mYOoQUiUECmWaVmSJjDh-bpZwQZUeWr3ioTbrzVjCAhHnIGnqUN1W41-zpHCctJYeaGnLxdUYBiQIAK0aUm4EgPkuhHvKBOGOmpuh6nVURZcZmbT8rQmxj5Ee8xjj1CheH9DR8I" />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-secondary font-label-caps text-[10px]">DALL-E 3</div>
                </div>
                <div className="p-stack-md">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-headline-md text-[18px] text-on-surface group-hover:text-primary transition-colors">Editorial UI Concept Kit</h4>
                    <span className="font-bold text-on-surface">$18.00</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant text-sm mb-stack-md">Create high-end web layouts that mimic professional editorial magazines and SaaS dashboards.</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img className="w-6 h-6 rounded-full" alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKJE8hdDl8p3g-Vo_rEzeIAoB27p5ev74u5Wbfla_2t1JLNBM4IH4veI75aCpJTynscrBgwpTVDOcNMP2eTw0tQll2i8xIeOh2i7rcnGn3ftIUXiFC6CUCYUgFwwhopTRbhvRlSMYBnHPGuBtH8AJzyeC8DchGwTgMyMy4YKpergkPYq6p3Y-nx7SdMTK6EwYZhHPmMWj_02xFetYCLp1UG_DxHGIlPydiOnGzKw7JOhohYOmUIe8bevbuzgyStIO7HRl1uWUA9Ag" />
                      <span className="text-xs text-on-surface-variant">by @elenasolas</span>
                    </div>
                    <button className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-sm">shopping_bag</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Popular Categories (Bento Grid) */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
viewport={{
  once: true,
  amount: 0.15
}}
          viewport={{ once: true, amount: 0.2 }}
          className="py-stack-xl"
        >
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <h2 className="font-headline-lg text-on-surface mb-stack-lg">Explore Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-md h-auto md:h-[600px]">
              {/* Large Tile */}
              <motion.div variants={itemVariant} whileHover={{ scale: 1.01 }} className="md:col-span-8 glass-card rounded-3xl relative overflow-hidden group cursor-pointer border-primary/20">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Photorealistic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-LepDJ-P7I5-95Joz8Oy3pniryZYbafaNW0mXf06tSFUmIIw2GXjrh-alO-IaiHz-XEsaT9PtEaX1xxqVh1TIYahwHQkfclIQ9m0NJg9lxJcIwNBT2MVKiUMzsJBjmngLvEa6US_HhD307ryr0_QLt3Q8mKEIJGkYEHQTb2cqszE0u998GC0a_iMeWU5viQ6b2vM2DCsIcCR4imI5Z5FrlDs8VSny7HAJKJqKfCEqaj2tRVXp7x6Fc7scjz-m7rJhlfGfuZHd5Dc" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-stack-lg">
                  <h3 className="font-display-xl-mobile md:text-headline-lg text-on-surface mb-2">Photorealistic</h3>
                  <p className="font-body-md text-on-surface-variant max-w-md">Prompts engineered for absolute realism, perfect for commercial photography and film pre-viz.</p>
                </div>
              </motion.div>
              
              {/* Small Tile Top */}
              <motion.div variants={itemVariant} variants={premiumCardHover}
initial="rest"
whileHover="hover"
style={{
  transformStyle: "preserve-3d",
  willChange: "transform"
}} className="md:col-span-4 glass-card rounded-3xl relative overflow-hidden group cursor-pointer">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" alt="Business Logic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv-uYSWlzLMJharRpQ-NWS_dnjV5tXE2tsfC06WPdeEFMiO4bC913bbIsT-Zm4gzzNQT8ZRExseDYqhQxDDuC2zWb1Xjeo--PSoB0sm0wyQdlVqGk7NZxs0pDEcuq9_wApWq4OwPcyZoLK_EqnTLZOJh4kjY-4__IU9jV6VPHsz-FA1HAuxOTGanf4QZHydZOnEMUoXy-FQM8-NT7p1cFAmy2lWBrIKDwA9NswLPKDvfc_kzhHBcDEvYHzwKXePeuy2Xec62jnnJ8" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-stack-md">
                  <h3 className="font-headline-md text-on-surface mb-1">Business Logic</h3>
                  <p className="font-label-md text-on-surface-variant">Workflow automation &amp; reasoning</p>
                </div>
              </motion.div>
              
              {/* Small Tile Bottom */}
              <motion.div variants={itemVariant} variants={premiumCardHover}
initial="rest"
whileHover="hover"
style={{
  transformStyle: "preserve-3d",
  willChange: "transform"
}} className="md:col-span-4 glass-card rounded-3xl relative overflow-hidden group cursor-pointer border-secondary/20">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" alt="Code Generation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBD0BKvdv4uQX93CUonlINYfTRJ5OyAdApdUQwJ7jIlb4FgZ1XOyxni7i9JjYLWIUHp64Bi86Jh1_fvEs2dkUUceENNdnQXAwwijffVP_4BoFbqdZybfPEHgy-QTE6UQ8nUONKhICaUwCoZGjpA3CAD4-qG-0Z_QhZs02I2w85tL1m--cD82dT87tAsF9ETBBKvSiQVrS-p58vFgqzJuLs1WoV0NUGosm_QhsKMi2OFbHlHBgODzMZdwgnrjPgi5kJ4FlxWarA5fI" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-stack-md">
                  <h3 className="font-headline-md text-on-surface mb-1">Code Generation</h3>
                  <p className="font-label-md text-on-surface-variant">Scripts, dApps, and architectures</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Social Proof */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
viewport={{
  once: true,
  amount: 0.15
}}
          viewport={{ once: true, amount: 0.2 }}
          className="py-stack-xl border-t border-outline-variant/10"
        >
          <div className="max-w-container-max mx-auto px-margin-desktop text-center">
            <motion.p variants={itemVariant} className="font-label-caps text-label-caps text-on-surface-variant mb-stack-lg tracking-widest uppercase">Trusted by leading AI laboratories</motion.p>
            <motion.div variants={itemVariant} className="flex flex-wrap justify-center items-center gap-x-stack-xl gap-y-stack-md opacity-50 grayscale hover:grayscale-0 transition-all">
              <span className="font-headline-md text-on-surface font-bold opacity-80">NEURALIS</span>
              <span className="font-headline-md text-on-surface font-bold opacity-80">SYNTHETIC</span>
              <span className="font-headline-md text-on-surface font-bold opacity-80">QUANTUM AI</span>
              <span className="font-headline-md text-on-surface font-bold opacity-80">VECTOR LABS</span>
              <span className="font-headline-md text-on-surface font-bold opacity-80">GHOST ARCH</span>
            </motion.div>
            
            <div className="mt-stack-xl grid grid-cols-1 md:grid-cols-3 gap-stack-md">
              <motion.div variants={itemVariant} className="glass-card p-stack-md rounded-2xl text-left border-l-2 border-primary">
                <p className="font-body-md text-on-surface italic mb-stack-md">"Cue AI has fundamentally changed how our agency handles rapid prototyping. The prompt quality is unmatched."</p>
                <p className="font-label-md text-on-surface font-bold">— Jordan Blake, Creative Lead</p>
              </motion.div>
              <motion.div variants={itemVariant} className="glass-card p-stack-md rounded-2xl text-left border-l-2 border-secondary">
                <p className="font-body-md text-on-surface italic mb-stack-md">"The monetization tools are seamless. I've built a six-figure creator business strictly through this ecosystem."</p>
                <p className="font-label-md text-on-surface font-bold">— Sarah Chen, Developer</p>
              </motion.div>
              <motion.div variants={itemVariant} className="glass-card p-stack-md rounded-2xl text-left border-l-2 border-on-surface">
                <p className="font-body-md text-on-surface italic mb-stack-md">"It's like an operating system for the next generation of engineers. Clean, fast, and incredibly high-fidelity."</p>
                <p className="font-label-md text-on-surface font-bold">— Alex Rivera, AI Artist</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Final CTA */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
viewport={{
  once: true,
  amount: 0.15
}}
          viewport={{ once: true, amount: 0.5 }}
          className="py-stack-xl relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-margin-desktop relative z-10 text-center">
            <motion.div variants={itemVariant} className="glass-card p-stack-xl rounded-[40px] border-primary/30">
              <h2 className="font-display-xl-mobile md:text-display-xl text-on-surface mb-stack-sm">Ready to lead the economy?</h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg">
                Join 10,000+ creators building the future of generative intelligence. Early access slots are closing soon.
              </p>
              <motion.button whileHover={{
  scale: 1.04,
  y: -2,
  boxShadow:
    "0 20px 50px rgba(124,58,237,.35)"
}}
whileTap={{
  scale: 0.97,
  y: 1
}}
transition={{
  type: "spring",
  stiffness: 400,
  damping: 20
}} whileTap={{ scale: 0.95 }} className="bg-primary text-on-primary font-bold px-stack-xl py-5 rounded-2xl text-xl hover:brightness-110 transition-all primary-glow">
                Join the Creator Economy
              </motion.button>
              <p className="font-label-md text-on-surface-variant mt-stack-md">Free to join. No hidden fees. Precision guaranteed.</p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-stack-xl bg-surface-container-lowest border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-stack-lg">
          <div className="col-span-2 md:col-span-1">
            <span className="font-headline-md text-on-surface block mb-stack-md">Cue AI</span>
            <p className="font-label-md text-on-surface-variant">The premium ecosystem for prompt engineers and creative visionaries.</p>
          </div>
          <div className="flex flex-col gap-stack-sm">
            <span className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase mb-2">Product</span>
            <a className="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Marketplace</a>
            <a className="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Playground</a>
            <a className="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
          </div>
          <div className="flex flex-col gap-stack-sm">
            <span className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase mb-2">Resources</span>
            <a className="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Creator Resources</a>
            <a className="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Documentation</a>
            <a className="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">API Support</a>
          </div>
          <div className="flex flex-col gap-stack-sm">
            <span className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase mb-2">Legal</span>
            <a className="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <div className="flex gap-stack-sm mt-4">
              <a className="text-on-surface-variant hover:text-primary" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="text-on-surface-variant hover:text-primary" href="#"><span className="material-symbols-outlined">share</span></a>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop mt-stack-xl pt-stack-md border-t border-outline-variant/10 text-center">
          <p className="font-label-caps text-label-caps text-on-surface-variant">© 2024 Cue AI. Precision Prompting.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Home;