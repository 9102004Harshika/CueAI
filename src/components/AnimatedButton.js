import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../animations/variants';

const AnimatedButton = ({ 
  children, 
  className = '', 
  variant = 'primary', // 'primary', 'secondary', 'ghost', 'gradient'
  whileHover = { scale: 1.02 }, 
  whileTap = { scale: 0.98 }, 
  magnetic = false,
  ...props 
}) => {
  const reduce = usePrefersReducedMotion();
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!buttonRef.current || reduce) return;
    const { left, top } = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setPosition({ x, y });
  };

  const baseStyles = "relative overflow-hidden flex items-center justify-center transition-all duration-300 font-medium";
  
  const variants = {
    primary: "bg-surface-dim text-white rounded-full px-6 py-2 border border-white/10 hover:border-primary/50 shadow-glass hover:shadow-glow-primary",
    secondary: "bg-transparent text-white rounded-full px-6 py-2 border border-white/20 hover:bg-white/5",
    gradient: "bg-gradient-to-r from-primary to-secondary text-white rounded-full px-6 py-2 shadow-glow-primary",
    ghost: "bg-transparent text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5"
  };

  if (reduce) {
    return (
      <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }}
      whileHover={whileHover}
      whileTap={whileTap}
      animate={magnetic && isHovered ? { x: (position.x - 50) * 0.1, y: (position.y - 20) * 0.1 } : { x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={`${baseStyles} ${variants[variant]} ${className} group`}
      {...props}
    >
      {/* Spotlight Effect */}
      {isHovered && variant !== 'ghost' && (
        <div
          className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(208, 188, 255, 0.15), transparent 80%)`,
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default AnimatedButton;
