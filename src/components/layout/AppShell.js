import SideNav from './SideNav';
import AppTopNav from './AppTopNav';
import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const AppShell = ({
  children,
  activeNavItem,
  searchPlaceholder,
  mainClassName = 'ml-64 mt-16 min-h-[calc(100vh-64px)] bg-background',
}) => (
  <div className="bg-background text-on-background min-h-screen font-body antialiased relative">
    <SideNav activeItem={activeNavItem} />
    <AppTopNav searchPlaceholder={searchPlaceholder} />
    
    <AnimatePresence mode="wait">
      <motion.main 
        key={activeNavItem || 'page'} 
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`${mainClassName} relative z-10 px-8 py-6`}
      >
        <div className="max-w-[1400px] mx-auto">
          {children}
        </div>
      </motion.main>
    </AnimatePresence>
  </div>
);

export default AppShell;
