import React from 'react';
import { motion } from 'framer-motion';
import { itemVariant, usePrefersReducedMotion } from '../animations/variants';

const SectionReveal = ({ children, className = '', ...props }) => {
  const reduce = usePrefersReducedMotion();

  const variants = reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : itemVariant;

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default SectionReveal;
