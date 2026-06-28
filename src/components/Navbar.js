import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bell, User, LayoutDashboard, Compass, PlaySquare, FileText, ShoppingBag } from 'lucide-react';
import NotificationDrawer from './NotificationDrawer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3); // Mock initial unread count
  const navigate = useNavigate();
  const location = useLocation();

  // Temporary mock auth state until Context is wired
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    // Basic socket connection happens in NotificationDrawer
  }, []);

  const navLinks = [
    { name: 'Marketplace', path: '/marketplace', icon: ShoppingBag },
    { name: 'Playground', path: '/playground', icon: PlaySquare },
    { name: 'Feed', path: '/feed', icon: Compass },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-outline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center shadow-[0_0_12px_rgba(37,99,235,0.5)]">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-display font-bold text-on-background">
              Cue<span className="text-blue-400">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-primary bg-surface-variant' 
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-variant'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Auth / Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <button 
                  onClick={() => setIsNotificationsOpen(true)}
                  className="relative p-2 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-error rounded-full border-2 border-surface"></span>
                  )}
                </button>
                <button 
                  onClick={() => setIsAuthenticated(false)}
                  className="w-9 h-9 rounded-full bg-surface-variant flex items-center justify-center hover:bg-outline transition-colors"
                >
                  <User className="w-5 h-5 text-on-surface" />
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm font-medium text-on-surface-variant hover:text-on-surface">
                  Log in
                </Link>
                <Link to="/signup" className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-blue-500 transition-all shadow-[0_0_14px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-on-surface-variant hover:text-on-surface focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-outline bg-surface"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-on-surface hover:text-on-surface hover:bg-surface-variant"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {!isAuthenticated && (
                <div className="mt-4 pt-4 border-t border-outline flex flex-col space-y-2 px-3">
                  <Link to="/login" className="text-center py-2 text-on-surface font-medium border border-outline rounded-lg">Log in</Link>
                  <Link to="/signup" className="text-center py-2 text-on-primary font-medium bg-primary rounded-lg">Sign up</Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <NotificationDrawer 
        isOpen={isNotificationsOpen} 
        onClose={() => setIsNotificationsOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
