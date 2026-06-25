import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FiArrowRight, FiStar, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AnimatedButton from '../components/AnimatedButton';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const ySpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const heroY = useTransform(ySpring, [0, 1], [0, 300]);
  const heroOpacity = useTransform(ySpring, [0, 0.2], [1, 0]);

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-on-background selection:bg-primary/30 selection:text-primary relative overflow-x-hidden">
      <Navbar />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-mesh-premium opacity-40 mix-blend-screen" />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }} 
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }} 
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[40%] right-[10%] w-[800px] h-[800px] bg-secondary/15 blur-[150px] rounded-full" 
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 pt-40 pb-20 px-6 min-h-screen flex flex-col justify-center items-center"
      >
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card mb-8 shadow-glass group cursor-pointer hover:border-primary/50 transition-colors">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            <span className="font-label-md text-sm text-on-surface-variant group-hover:text-white transition-colors">
              CueAI 2.0 is now available
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="font-display-xl text-5xl md:text-7xl lg:text-[90px] font-bold tracking-tight mb-8 leading-[1.05] text-on-surface">
            Engineer the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-aurora-pan bg-[length:200%_auto]">
              intelligence era
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="font-body-lg text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-12 leading-relaxed">
            The premium ecosystem for discovering, testing, and deploying high-performance AI prompts. Build faster with world-class intelligence.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <AnimatedButton magnetic variant="primary" className="py-4 text-lg w-full sm:w-auto">
              Start Building
            </AnimatedButton>
            <AnimatedButton magnetic variant="ghost" className="py-4 text-lg w-full sm:w-auto flex items-center gap-2 group">
              Explore Marketplace <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </AnimatedButton>
          </motion.div>
        </motion.div>

        {/* 3D Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: 'spring', stiffness: 50 }}
          className="mt-24 w-full max-w-6xl relative z-20"
          style={{ perspective: 1000 }}
        >
          <div className="rounded-2xl border border-white/10 glass-card p-2 shadow-premium bg-surface-dim/80 backdrop-blur-2xl">
            <div className="h-8 border-b border-white/5 flex items-center px-4 gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-error" />
              <div className="w-3 h-3 rounded-full bg-secondary-container" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden relative group">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" alt="Dashboard" className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
               
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card p-6 rounded-2xl border border-white/10 w-full max-w-md shadow-glow-primary"
               >
                 <div className="flex gap-4 mb-4">
                    <span className="text-primary font-bold">System</span>
                    <span className="text-on-surface font-mono text-sm">Initialize hyper-optimized rendering sequence.</span>
                 </div>
                 <div className="flex gap-4">
                    <span className="text-secondary font-bold">Output</span>
                    <span className="text-on-surface-variant font-mono text-sm border-r-2 border-secondary pr-1 animate-pulse">Generating premium UI components...</span>
                 </div>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Feature Grid with Reveal */}
      <section className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { icon: <FiTrendingUp />, title: "Unmatched Quality", desc: "Every prompt is rigorously tested against edge cases to ensure production readiness." },
            { icon: <FiStar />, title: "Premium Engineering", desc: "Crafted by the top 1% of AI engineers and verified by our proprietary evaluation model." },
            { icon: <FiUsers />, title: "Elite Community", desc: "Join a curated network of forward-thinking developers pushing the boundaries of AI." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-2xl text-primary mb-6 group-hover:scale-110 group-hover:text-secondary transition-all shadow-glow-primary">
                {feature.icon}
              </div>
              <h3 className="font-headline-md text-2xl mb-4 text-on-surface">{feature.title}</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* Deep Space CTA */}
      <section className="py-40 px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-card rounded-[3rem] p-12 md:p-24 text-center border border-white/10 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-screen"
          />
          
          <div className="relative z-10">
            <h2 className="font-display-xl text-4xl md:text-6xl font-bold mb-6 text-on-surface">Ready to ascend?</h2>
            <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">Experience the highest caliber of AI tools. Your next breakthrough is just one prompt away.</p>
            <AnimatedButton magnetic variant="primary" className="py-4 px-12 text-lg">
              Get Started Now
            </AnimatedButton>
          </div>
        </motion.div>
      </section>

      {/* Premium Footer */}
      <footer className="border-t border-white/10 py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-headline-md text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">CueAI © 2026</div>
          <div className="flex gap-8 font-label-md text-sm text-on-surface-variant">
            {['Twitter', 'GitHub', 'Discord', 'Terms'].map(link => (
              <a key={link} href="#" className="hover:text-white transition-colors hover:shadow-glow-primary">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
