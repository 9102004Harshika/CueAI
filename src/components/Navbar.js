import React from "react";
import logo from "../assets/logo.png";
import searchIcon from "../assets/searchIcon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-outline-variant px-6 py-3 flex justify-between items-center h-16">
      <div className="flex items-center gap-3 cursor-pointer">
        <img src={logo} width={32} alt="logo" className="h-8 w-8 object-contain" />
        <span className="text-xl font-display font-semibold text-on-background tracking-tight">CueAI</span>
      </div>
      
      <div className="flex-1 max-w-xl mx-8 hidden md:block">
        <form className="relative flex items-center">
          <img src={searchIcon} width={16} alt="search" className="absolute left-4 opacity-50" />
          <input
            type="text"
            id="search"
            placeholder="Search prompts, creators, models..."
            className="w-full bg-surface border border-outline-variant text-on-surface text-sm rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
          />
        </form>
      </div>

      <div className="flex items-center gap-4 font-body text-sm font-medium">
        <Link to="/docs" className="text-on-surface-variant hover:text-on-surface transition-colors px-3 py-2 mr-2">
          Developers
        </Link>
        <Link to="/login" className="text-on-surface-variant hover:text-on-surface transition-colors px-3 py-2">
          Log in
        </Link>
        <Link to="/signup" className="bg-on-background text-background hover:bg-secondary px-4 py-2 rounded-md transition-colors shadow-sm font-semibold">
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
