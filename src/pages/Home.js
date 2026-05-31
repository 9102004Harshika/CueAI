import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, animate, useScroll, useSpring } from 'framer-motion';
import { pageVariants, pageTransition, staggerContainer, itemVariant } from '../animations/variants';

// Premium card hover with 3D tilt
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
    y: -12,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Enhanced CountUp with spring physics
const CountUp = ({ to, delay = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const springValue = useSpring(rounded, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2.5,
      delay,
      ease: [0.22, 1, 0.36, 1]
    });
    return controls.stop;
  }, [count, to, delay]);

  return <motion.span>{springValue}</motion.span>;
};

// Spotlight card effect
const SpotlightCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${className}`}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 58, 237, 0.15), transparent 40%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

// Magnetic button effect
const MagneticButton = ({ children, className, onClick }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * 0.15,
      y: (e.clientY - centerY) * 0.15,
    });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 20) {
          header.classList.add('bg-background/95', 'shadow-lg', 'backdrop-blur-2xl');
          header.classList.remove('bg-background/60');
        } else {
          header.classList.remove('bg-background/95', 'shadow-lg', 'backdrop-blur-2xl');
          header.classList.add('bg-background/60');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      {/* Enhanced Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm h-16 flex justify-between items-center px-margin-desktop transition-all duration-500"
      >
        <div className="flex items-center gap-stack-md">
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface cursor-pointer"
          >
            Cue AI
          </motion.span>
          <nav className="hidden md:flex gap-base">
            {[
              { name: 'Marketplace', path: '/' },
              { name: 'Feed', path: '/feed' },
              { name: 'Playground', path: '/playground' }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  className={`font-body-md text-body-md ${index === 0
                    ? 'text-primary font-bold border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-on-surface'
                    } px-stack-sm py-1 rounded hover:bg-white/5 transition-all duration-300 relative group`}
                  to={item.path}
                >
                  {item.name}
                  {index === 0 && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-stack-sm">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-white/5 rounded-full transition-colors relative"
          >
            notifications
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full"
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            account_circle
          </motion.button>
          <MagneticButton className="bg-primary text-on-primary font-bold px-stack-md py-2 rounded-lg hover:brightness-110 transition-all duration-300 primary-glow relative overflow-hidden group">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Create</span>
          </MagneticButton>
        </div>
      </motion.header>

      <main className="pt-16">
        {/* Ultra-Premium Hero Section */}
        <section className="relative w-full py-stack-xl flex flex-col items-center justify-center overflow-hidden min-h-[921px]">
          <motion.div
            style={{ opacity: heroOpacity }}
            className="hero-gradient absolute inset-0 z-0"
          />
          <div className="noise-overlay absolute inset-0 z-0" />
          <FloatingParticles />

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
            animate={{
              x: [0, 80, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
            animate={{
              x: [0, -80, 0],
              y: [0, -50, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            style={{ y: heroY }}
            className="relative z-10 max-w-container-max mx-auto px-margin-desktop flex flex-col items-center text-center"
          >
            {/* Animated badge */}
            <motion.div
              variants={itemVariant}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-base px-3 py-1 glass-card rounded-full mb-stack-md cursor-pointer group"
            >
              <motion.span
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(168, 85, 247, 0.7)',
                    '0 0 0 12px rgba(168, 85, 247, 0)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-secondary/10 text-secondary font-label-caps text-label-caps px-2 py-0.5 rounded-full"
              >
                New
              </motion.span>
              <span className="text-label-md font-label-md text-on-surface-variant group-hover:text-on-surface transition-colors">
                Version 2.0 Playground is now live
              </span>
            </motion.div>

            {/* Hero headline with sequential word reveal */}
            <motion.h1
              variants={itemVariant}
              className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-stack-sm leading-tight max-w-4xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                The Future of{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto]"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                style={{ backgroundSize: '200% 200%' }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                Prompt Engineering
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariant}
              className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-lg"
            >
              Discover, deploy, and monetize high-performance AI prompts. The premium ecosystem built for creators and engineers to scale their AI workflows.
            </motion.p>

            {/* CTA Buttons with magnetic effect */}
            <motion.div
              variants={itemVariant}
              className="flex flex-col md:flex-row gap-stack-md"
            >
              <MagneticButton className="bg-primary text-on-primary font-bold px-stack-xl py-4 rounded-xl text-lg hover:brightness-110 transition-all duration-300 primary-glow relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%', skewX: -15 }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 20px 50px rgba(124,58,237,.2)',
                      '0 25px 60px rgba(124,58,237,.4)',
                      '0 20px 50px rgba(124,58,237,.2)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-xl"
                />
                <span className="relative z-10 flex items-center gap-2">
                  Start Exploring
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </MagneticButton>

              <MagneticButton className="glass-card text-on-surface font-bold px-stack-xl py-4 rounded-xl text-lg hover:bg-white/10 transition-all relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">View Marketplace</span>
              </MagneticButton>
            </motion.div>

            {/* Enhanced hero visual */}
            <motion.div
              variants={itemVariant}
              className="mt-stack-xl relative w-full max-w-5xl h-[400px] rounded-3xl overflow-hidden glass-card group"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                alt="AI Visualization"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD95kV8ZAM3XlYTiUvocVnmGhzUNuP2kRFvVOaicUS5Vrq2teAd5iwnfeBa9hA0W3MWbgUYyCHT7B0tlmRg7Hk5M-IxaS0eLQVpUyZuHXIn8Q1oDSNVERMWBbUH5mWS7fdQLJ8rGmVNflKRzRIhMOzeZ3Z3ae7MBG9YStu6TaNFOZ-vHCR-i3S1-DIrQMeHgrA79959Vnw7J__EadrnHbjwyqwb5CPPVVterYCTsn_v2k0ZHGjRb-z_Woo5tAtpCKW319pD5tbah28"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="w-64 h-64 bg-primary/20 blur-[100px]"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.8
                  }}
                  className="w-48 h-48 bg-secondary/20 blur-[80px]"
                />
              </div>

              {/* Floating decoration elements */}
              <motion.div
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 8, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl border border-white/10 rounded-2xl"
              />
              <motion.div
                animate={{
                  y: [0, 25, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-secondary/20 to-primary/20 backdrop-blur-xl border border-white/10 rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-on-surface-variant cursor-pointer"
            >
              <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
              <div className="w-6 h-10 rounded-full border-2 border-current p-1">
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-3 bg-current rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced Stats Grid */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-container-max mx-auto px-margin-desktop py-stack-xl border-y border-outline-variant/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-stack-md text-center relative">
            {[
              { value: 50, suffix: 'k+', label: 'Verified Prompts', color: 'text-primary', delay: 0.2 },
              { value: 10, suffix: 'k+', label: 'Top Creators', color: 'text-secondary', delay: 0.4 },
              { value: 2, suffix: '.4M', label: 'Daily Generations', color: 'text-on-surface', delay: 0.6 },
              { value: 99, suffix: '.9%', label: 'Execution Rate', color: 'text-tertiary', delay: 0.8 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
                className="group cursor-default"
              >
                <motion.p
                  className={`font-display-xl-mobile md:text-headline-lg font-bold ${stat.color}`}
                  whileHover={{ scale: 1.1 }}
                >
                  <CountUp to={stat.value} delay={stat.delay} />
                  {stat.suffix}
                </motion.p>
                <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest mt-2">
                  {stat.label}
                </p>
                <motion.div
                  className={`h-1 w-20 mx-auto mt-3 rounded-full ${stat.color.replace('text', 'bg')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Featured Creators with spotlight */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="py-stack-xl relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08),transparent_50%)]" />

          <div className="max-w-container-max mx-auto px-margin-desktop relative">
            <motion.div
              variants={itemVariant}
              className="flex justify-between items-end mb-stack-lg"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-3"
                >
                  Featured Creators
                </motion.div>
                <h2 className="font-headline-lg text-on-surface mb-2">Featured Creators</h2>
                <p className="font-body-md text-on-surface-variant">The minds behind the most successful AI implementations.</p>
              </div>
              <motion.button
                whileHover={{ x: 5 }}
                className="text-primary font-label-md flex items-center gap-1 hover:underline"
              >
                View All
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="material-symbols-outlined text-sm"
                >
                  arrow_forward
                </motion.span>
              </motion.button>
            </motion.div>

            <div className="flex gap-stack-md overflow-x-auto pb-8 snap-x no-scrollbar">
              {[
                {
                  name: "Alex Rivera",
                  handle: "@alxr_vfx",
                  description: "Expert in cinematic lighting and hyper-realistic Midjourney structures.",
                  prompts: "1.2k",
                  rating: "4.9",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKbThFHeM7RkVJ457kCUg0xRh7nW9AOQwGS61n3SXvB7fFc6ujtgJaS6IbfLqp_Ld1Zp36bmFNKQDbSMpR8aMvD2OcYnjxIcewtwdQwwWAjQwN426k6Qo26bk8i06FwluUIJ4BXs5a7PAwfRwSu8oVKgGJCTUNwIJQ2yIglYgGNGZJlGVhvmZUVLPl2Qcug9s9N53K9xtH2zd_XXWr5_JAuOCtPK1EY5rFwY7YU8CJQsT58O4LDV8VhRA9mXBIAn67QLsQGHcJxXI",
                  border: "border-primary/20"
                },
                {
                  name: "Sarah Chen",
                  handle: "@sarah_codes",
                  description: "Specializing in Python generation and complex business logic for GPT-4.",
                  prompts: "840",
                  rating: "5.0",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwvDnOZd_berSu3QGtH5pVLonCt_vvSGz6zr95Brvnh-f7T8M1J1xu2NknVdw4MkisUHVBZmEbjpVNzX0j25EMGRa8J-Aj34y5PSnOqcIpSiKEEh00AqOK6Ili__FUGGI6--uwfPGSl4h9Xv3cR__zZF_RfnS_dq7U-eN5B5WWZr4WJS9H19Pjkl4lfyHrF11a8dKQqv2amxguodrh0vd1DYpMK1ltt-aq6udKJqeR04YRTP3LtHk2umfzmO6MON5gRxPR3x720VU",
                  border: "border-secondary/20"
                },
                {
                  name: "Marcus Thorne",
                  handle: "@m_thorne",
                  description: "Master of surreal architecture and organic geometry in DALL-E 3.",
                  prompts: "2.5k",
                  rating: "4.8",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCviIxuRhdSoPZnhPtnC5ZBmGKhG_UE5OVlhkMRwjHtcP91_8UxD2bxkk6Qd07-WEGp1lk4tIkK-rkjg5wZzYRYJIT5EfA4mdXnEUDFBvuCFYAp2v6xSOIv9c0-Jew4eaSB7o6tgqjIlD-Xz5k7PdFQdbti9aVSSrIRP670UJkJpXvrLdKo2qOAgTFTi0rs4e7GSqLj8k0szQ2fFmc3pY-d2euYqj2qG_qDHmMRJq1zm1X5g-fHk_IINOKQnvfzpsthL0j5omB7E9M",
                  border: "border-primary/20"
                },
                {
                  name: "Elena Solas",
                  handle: "@elenasolas",
                  description: "Expert in brand identity and vector-style generation workflows.",
                  prompts: "3.1k",
                  rating: "4.9",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1XJU-j9_Js7CVGS5jSP6D5ja4bsJJwGn440bqaZJT3zFzbMf6EwtHktgZ3Jg3P2vaMFy22edaUQ08dB68sm-_7W-OtVsk42WLPOR1zECVtYY5vcRE44nCu0skwMiV-Jl_zzqTX86uZW9W3XuzkBnKo9a-d0Nc0HpBRkwH8AdP92kjLDjzFaSDMtX2BhNVuT6sde9opvUpNZ2VbuYDsYz71h0w9_2L-9uwa9v1ZscODYmGCg1eZ33gBJmDX5L9nHkfwqGy5Synjvk",
                  border: "border-secondary/20"
                }
              ].map((creator, index) => (
                <SpotlightCard key={index} className="group">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    variants={premiumCardHover}
                    initial="rest"
                    whileHover="hover"
                    className="min-w-[280px] glass-card p-stack-md rounded-2xl snap-start cursor-pointer"
                    style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
                  >
                    <motion.img
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`w-16 h-16 rounded-full mb-stack-sm object-cover border-2 ${creator.border}`}
                      alt={creator.name}
                      src={creator.image}
                    />
                    <h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors duration-300">
                      {creator.name}
                    </h3>
                    <p className="font-label-md text-secondary mb-stack-sm">{creator.handle}</p>
                    <p className="font-body-md text-on-surface-variant line-clamp-2 mb-stack-md">
                      {creator.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-outline-variant/10 pt-stack-sm">
                      <span className="font-label-caps text-label-caps text-on-surface-variant">
                        {creator.prompts} Prompts
                      </span>
                      <span className="flex items-center text-primary">
                        <motion.span
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                          className="material-symbols-outlined text-sm"
                        >
                          star
                        </motion.span>
                        {' '}{creator.rating}
                      </span>
                    </div>
                  </motion.div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Continue with remaining sections... */}
        {/* I'll add the rest in the next message due to character limits */}
        {/* Enhanced Trending Prompts */}
        <section className="py-stack-xl bg-surface-container-low/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

          <div className="max-w-container-max mx-auto px-margin-desktop relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-stack-md mb-stack-lg"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-bold uppercase tracking-wider mb-3"
                >
                  Trending Now
                </motion.div>
                <h2 className="font-headline-lg text-on-surface mb-2">Trending Prompts</h2>
                <p className="font-body-md text-on-surface-variant">Top performing blueprints for production-ready outputs.</p>
              </div>
              <div className="flex gap-base overflow-x-auto no-scrollbar">
                {['All', 'Midjourney', 'GPT-4', 'Stable Diffusion'].map((filter, index) => (
                  <motion.button
                    key={filter}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-2 rounded-full glass-card font-label-md transition-all ${index === 0 ? 'border-primary text-primary shadow-lg shadow-primary/20' : 'hover:border-primary/50 text-on-surface-variant'
                      }`}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
              {[
                {
                  title: "Cyber-Renaissance Architecture",
                  price: "$12.00",
                  description: "Generate stunning structural designs merging 15th-century style with 22nd-century tech.",
                  tag: "MIDJOURNEY",
                  tagColor: "text-secondary",
                  author: "@alxr_vfx",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_NiY2SYkgVFNEkZZJS_VU_rYosT9dgB4f1-QAesKHdDIzCOun8wxYOyK23hnCilKq47GHf1gvTaoniykWCDCm0ZL2BzIluWoWFk0GDyW2kliT8_P6A5DgcngWuTQoSmXOwvB2VbwnW0ybBuCitivk5us5feEhz1WANw7hxNlHqljIkggYVyL33c5XI6P_V_syzSOrII5j7Wq3BIScZCeQeb0duwE3NGn-ywUnUfQ5729-HsMyMytTfRia2l9J0QKCkavvEt3IlCs",
                  authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXJCcuyXW2lr3vwUCunsEeYRB63BCAnWe-CRc_gYT-bQBCx_dRFbe9ARO1JPt7vfZll3iTBMFY6nlHYgSwI1ewV9Sbc-aZ7Rr33eEIY2-_3ESyvEHRAvANttnafIn8LsfFiOJdNQuqeuYnI57_xLaQUBXL_oh3Oobe_7i6N1TFwplQP4ExnmidLr7gQchmdyyLE9WxHSQKg3JTcpFpdT-B9UbvJF3qruE0ewnILD9d80W0-XXsMikQBBp1ppwRrr2tbYDxGcuD9dM"
                },
                {
                  title: "Advanced Microservice Logic",
                  price: "$24.00",
                  description: "The ultimate prompt for generating scalable Go microservices with clean architecture.",
                  tag: "GPT-4",
                  tagColor: "text-primary",
                  author: "@sarah_codes",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD25jclAWx8AC4lNQcSnxFeAebASnIWeDrvfbZX9Tpaf9Mn70zrfCIplqIve7zwjp0cGIaljmZS7ox9w-QrSc_QqwAg-FV1Wu96mAsuq7EpU9Wv3Bxwj8eY9sSW5FLOQhL7DVOcKXPnfu_QmtGOvvUaVO7Kq6mXjp0TjuJHLnFOsRxe7FdzhHhXOzAdePY1B8y9ajqQ_Wb_s-Rya45MEmq9AlVnV2WU4G7nnRBt7sSf0CFO1AYcZ2Aq647y2k9sh75hUhTjZidqy-4",
                  authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM3HzqCaz3lqVJDgbKaR-D02hxacNQFcDZmxkhoXQmIprZFa-YJzWhyeX9hgnCCaiwITCQ_iLIISddfjW72VHt0rjkOF3QmHYsarih2fAaxxivybKp09oxRicnEPXaso40rx_gLbSyx06etxmjVtgAUP8ppS__haI0ZcZViQ1j_9-2ImWsb_jR1KjTxx995minya_YWieYQfF6bWkTtkJ1FU-8N_a9-n3Hm3NqGK9SxGKGCdQTRaV45-iC1YsLmZBRDVOTejAxhk0"
                },
                {
                  title: "Editorial UI Concept Kit",
                  price: "$18.00",
                  description: "Create high-end web layouts that mimic professional editorial magazines and SaaS dashboards.",
                  tag: "DALL-E 3",
                  tagColor: "text-secondary",
                  author: "@elenasolas",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-N7w7wfDlhHuTKaLhx0V1yZaA86ESWm2UXQxWXwlkpnY4Ll3_LWzhgtelmsB5DpuW7uV84gh4Ce6sQm-o-si_7JIDnL9Ds9NvoavJeJ3iWxPKoy0m1L-qKL9sTJVSSav1mfH4mYOoQUiUECmWaVmSJjDh-bpZwQZUeWr3ioTbrzVjCAhHnIGnqUN1W41-zpHCctJYeaGnLxdUYBiQIAK0aUm4EgPkuhHvKBOGOmpuh6nVURZcZmbT8rQmxj5Ee8xjj1CheH9DR8I",
                  authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKJE8hdDl8p3g-Vo_rEzeIAoB27p5ev74u5Wbfla_2t1JLNBM4IH4veI75aCpJTynscrBgwpTVDOcNMP2eTw0tQll2i8xIeOh2i7rcnGn3ftIUXiFC6CUCYUgFwwhopTRbhvRlSMYBnHPGuBtH8AJzyeC8DchGwTgMyMy4YKpergkPYq6p3Y-nx7SdMTK6EwYZhHPmMWj_02xFetYCLp1UG_DxHGIlPydiOnGzKw7JOhohYOmUIe8bevbuzgyStIO7HRl1uWUA9Ag"
                }
              ].map((prompt, index) => (
                <SpotlightCard key={index} className="group h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    variants={premiumCardHover}
                    initial="rest"
                    whileHover="hover"
                    className="glass-card rounded-2xl overflow-hidden cursor-pointer h-full"
                    style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
                  >
                    {/* Image with hover effects */}
                    <div className="aspect-square relative overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.12, rotate: 2 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full object-cover"
                        alt={prompt.title}
                        src={prompt.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                      {/* Tag with animation */}
                      <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full ${prompt.tagColor} font-label-caps text-[10px] shadow-lg`}
                      >
                        {prompt.tag}
                      </motion.div>

                      {/* Hover gradient overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-stack-md">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-headline-md text-[18px] text-on-surface group-hover:text-primary transition-colors duration-300 flex-1">
                          {prompt.title}
                        </h4>
                        <motion.span
                          whileHover={{ scale: 1.15 }}
                          className="font-bold text-on-surface ml-2 text-lg"
                        >
                          {prompt.price}
                        </motion.span>
                      </div>
                      <p className="font-body-md text-on-surface-variant text-sm mb-stack-md leading-relaxed">
                        {prompt.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-outline-variant/10">
                        <div className="flex items-center gap-2">
                          <motion.img
                            whileHover={{ scale: 1.3, rotate: 8 }}
                            className="w-6 h-6 rounded-full border border-white/20"
                            alt="Author"
                            src={prompt.authorImage}
                          />
                          <span className="text-xs text-on-surface-variant">by {prompt.author}</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-lg transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">shopping_bag</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Categories Bento Grid */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="py-stack-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.08),transparent_50%)]" />

          <div className="max-w-container-max mx-auto px-margin-desktop relative">
            <motion.div
              variants={itemVariant}
              className="mb-stack-lg"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-3"
              >
                Explore Categories
              </motion.div>
              <h2 className="font-headline-lg text-on-surface mb-2">Explore Categories</h2>
              <p className="font-body-md text-on-surface-variant">Specialized prompts for every use case</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-md h-auto md:h-[600px]">
              {/* Large Category Tile */}
              <motion.div
                variants={itemVariant}
                whileHover={{ scale: 1.01, y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="md:col-span-8 glass-card rounded-3xl relative overflow-hidden group cursor-pointer border-primary/20"
              >
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Photorealistic"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-LepDJ-P7I5-95Joz8Oy3pniryZYbafaNW0mXf06tSFUmIIw2GXjrh-alO-IaiHz-XEsaT9PtEaX1xxqVh1TIYahwHQkfclIQ9m0NJg9lxJcIwNBT2MVKiUMzsJBjmngLvEa6US_HhD307ryr0_QLt3Q8mKEIJGkYEHQTb2cqszE0u998GC0a_iMeWU5viQ6b2vM2DCsIcCR4imI5Z5FrlDs8VSny7HAJKJqKfCEqaj2tRVXp7x6Fc7scjz-m7rJhlfGfuZHd5Dc"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 right-0 p-stack-lg"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-full text-primary text-xs font-bold uppercase mb-3"
                  >
                    Most Popular
                  </motion.div>
                  <h3 className="font-display-xl-mobile md:text-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">
                    Photorealistic
                  </h3>
                  <p className="font-body-md text-on-surface-variant max-w-md leading-relaxed">
                    Prompts engineered for absolute realism, perfect for commercial photography and film pre-viz.
                  </p>
                </motion.div>

                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
                  }}
                />
              </motion.div>

              {/* Small Category Tiles */}
              <div className="md:col-span-4 flex flex-col gap-stack-md">
                {[
                  {
                    title: "Business Logic",
                    description: "Workflow automation & reasoning",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv-uYSWlzLMJharRpQ-NWS_dnjV5tXE2tsfC06WPdeEFMiO4bC913bbIsT-Zm4gzzNQT8ZRExseDYqhQxDDuC2zWb1Xjeo--PSoB0sm0wyQdlVqGk7NZxs0pDEcuq9_wApWq4OwPcyZoLK_EqnTLZOJh4kjY-4__IU9jV6VPHsz-FA1HAuxOTGanf4QZHydZOnEMUoXy-FQM8-NT7p1cFAmy2lWBrIKDwA9NswLPKDvfc_kzhHBcDEvYHzwKXePeuy2Xec62jnnJ8",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Code Generation",
                    description: "Scripts, dApps & architectures",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBD0BKvdv4uQX93CUonlINYfTRJ5OyAdApdUQwJ7jIlb4FgZ1XOyxni7i9JjYLWIUHp64Bi86Jh1_fvEs2dkUUceENNdnQXAwwijffVP_4BoFbqdZybfPEHgy-QTE6UQ8nUONKhICaUwCoZGjpA3CAD4-qG-0Z_QhZs02I2w85tL1m--cD82dT87tAsF9ETBBKvSiQVrS-p58vFgqzJuLs1WoV0NUGosm_QhsKMi2OFbHlHBgODzMZdwgnrjPgi5kJ4FlxWarA5fI",
                    gradient: "from-purple-500 to-pink-500",
                    border: "border-secondary/20"
                  }
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariant}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`flex-1 glass-card rounded-3xl relative overflow-hidden group cursor-pointer ${category.border || ''}`}
                  >
                    <motion.img
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                      alt={category.title}
                      src={category.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-stack-md">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`inline-block px-2 py-1 bg-gradient-to-r ${category.gradient} rounded-full text-white text-xs font-bold mb-3 shadow-lg`}
                      >
                        New
                      </motion.div>
                      <h3 className="font-headline-md text-on-surface mb-1 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {category.title}
                      </h3>
                      <p className="font-label-md text-on-surface-variant">{category.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Social Proof */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="py-stack-xl border-t border-outline-variant/10 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />

          <div className="max-w-container-max mx-auto px-margin-desktop text-center relative">
            <motion.p
              variants={itemVariant}
              className="font-label-caps text-label-caps text-on-surface-variant mb-stack-lg tracking-widest uppercase"
            >
              Trusted by leading AI laboratories
            </motion.p>

            <motion.div
              variants={itemVariant}
              className="flex flex-wrap justify-center items-center gap-x-stack-xl gap-y-stack-md opacity-50 grayscale hover:grayscale-0 transition-all mb-stack-xl"
            >
              {['NEURALIS', 'SYNTHETIC', 'QUANTUM AI', 'VECTOR LABS', 'GHOST ARCH'].map((company, index) => (
                <motion.span
                  key={company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.15, opacity: 1, filter: 'grayscale(0)' }}
                  className="font-headline-md text-on-surface font-bold opacity-80 cursor-pointer"
                >
                  {company}
                </motion.span>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
              {[
                {
                  quote: "Cue AI has fundamentally changed how our agency handles rapid prototyping. The prompt quality is unmatched.",
                  author: "— Jordan Blake, Creative Lead",
                  border: "border-primary",
                  gradient: "from-primary to-secondary"
                },
                {
                  quote: "The monetization tools are seamless. I've built a six-figure creator business strictly through this ecosystem.",
                  author: "— Sarah Chen, Developer",
                  border: "border-secondary",
                  gradient: "from-secondary to-primary"
                },
                {
                  quote: "It's like an operating system for the next generation of engineers. Clean, fast, and incredibly high-fidelity.",
                  author: "— Alex Rivera, AI Artist",
                  border: "border-on-surface",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((testimonial, index) => (
                <SpotlightCard key={index} className="h-full">
                  <motion.div
                    variants={itemVariant}
                    whileHover={{ y: -10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`glass-card p-stack-md rounded-2xl text-left border-l-2 ${testimonial.border} h-full relative overflow-hidden group`}
                  >
                    {/* Animated quote icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-xl mb-4 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="material-symbols-outlined text-white text-2xl">format_quote</span>
                    </motion.div>

                    <p className="font-body-md text-on-surface italic mb-stack-md leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-label-md text-on-surface font-bold">{testimonial.author}</p>

                    {/* Gradient line animation */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                  </motion.div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Ultimate Premium Final CTA */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="py-stack-xl relative overflow-hidden"
        >
          {/* Animated background orb */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[150px] pointer-events-none"
          />

          <div className="max-w-container-max mx-auto px-margin-desktop relative z-10 text-center">
            <motion.div
              variants={itemVariant}
              className="glass-card p-stack-xl rounded-[40px] border-primary/30 relative overflow-hidden"
            >
              {/* Rotating decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full blur-3xl"
              />

              <div className="relative">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
                >
                  🎉 Limited Time Offer
                </motion.div>

                <h2 className="font-display-xl-mobile md:text-display-xl text-on-surface mb-stack-sm leading-tight">
                  Ready to lead the{' '}
                  <motion.span
                    className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto]"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    creator economy
                  </motion.span>
                  ?
                </h2>

                <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg leading-relaxed">
                  Join <span className="text-primary font-bold">10,000+</span> creators building the future of generative intelligence.
                  Early access slots are closing soon.
                </p>

                <MagneticButton className="bg-primary text-on-primary font-bold px-stack-xl py-5 rounded-2xl text-xl hover:brightness-110 transition-all primary-glow relative overflow-hidden group shadow-2xl shadow-primary/30">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%', skewX: -15 }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(124, 58, 237, 0.7)',
                        '0 0 0 20px rgba(124, 58, 237, 0)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl"
                  />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Join the Creator Economy
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </MagneticButton>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="font-label-md text-on-surface-variant mt-stack-md flex items-center justify-center gap-4 flex-wrap"
                >
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-green-500 rounded-full"
                    />
                    Free to join
                  </span>
                  <span className="w-1 h-1 bg-on-surface-variant rounded-full" />
                  <span>No hidden fees</span>
                  <span className="w-1 h-1 bg-on-surface-variant rounded-full" />
                  <span>Precision guaranteed</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Enhanced Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full py-stack-xl bg-surface-container-lowest border-t border-outline-variant/20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />

        <div className="max-w-container-max mx-auto px-margin-desktop relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-stack-lg mb-stack-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-1"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="font-headline-md text-on-surface block mb-stack-md cursor-pointer"
              >
                Cue AI
              </motion.span>
              <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-stack-sm" />
              <p className="font-label-md text-on-surface-variant leading-relaxed">
                The premium ecosystem for prompt engineers and creative visionaries.
              </p>
            </motion.div>

            {[
              { title: 'Product', links: ['Marketplace', 'Playground', 'Pricing'] },
              { title: 'Resources', links: ['Creator Resources', 'Documentation', 'API Support'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] }
            ].map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="flex flex-col gap-stack-sm"
              >
                <span className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase mb-2">
                  {section.title}
                </span>
                {section.links.map((link, linkIndex) => (
                  <motion.a
                    key={linkIndex}
                    whileHover={{ x: 5, color: 'var(--primary)' }}
                    className="font-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                    href="#"
                  >
                    {link}
                  </motion.a>
                ))}
                {section.title === 'Legal' && (
                  <div className="flex gap-stack-sm mt-4">
                    {['public', 'share'].map((icon) => (
                      <motion.a
                        key={icon}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                        href="#"
                      >
                        <span className="material-symbols-outlined">{icon}</span>
                      </motion.a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-stack-md border-t border-outline-variant/10 text-center"
          >
            <p className="font-label-caps text-label-caps text-on-surface-variant">
              © 2024 Cue AI. Precision Prompting.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default Home;