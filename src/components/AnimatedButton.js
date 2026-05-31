import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../animations/variants';

const AnimatedButton = ({ children, className = '', whileHover = { scale: 1.03 }, whileTap = { scale: 0.98 }, ...props }) => {
  const reduce = usePrefersReducedMotion();

  if (reduce) {
    return (
      <button className={className} {...props}>
        {children}
      </button>
    );
  }

  return (
    <motion.button whileHover={whileHover} whileTap={whileTap} className={className} {...props}>
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
