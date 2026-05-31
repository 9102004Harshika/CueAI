import { useReducedMotion } from 'framer-motion';

// Shared animation variants and helpers used across the app.
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

export const pageTransition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.5
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};
export const itemVariant = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export function usePrefersReducedMotion() {
  // Wrap framer-motion hook for easier imports
  return useReducedMotion();
}
