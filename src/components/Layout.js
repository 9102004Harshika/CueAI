import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-on-background">
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      
      {/* Simple Footer */}
      <footer className="bg-surface border-t border-outline mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-on-surface-variant">
            &copy; {new Date().getFullYear()} Cue AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
