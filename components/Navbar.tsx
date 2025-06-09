'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-40 bg-gray-800/80 backdrop-blur-md border-b border-blue-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">M</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-6">
          <NavLink href="#home">首页</NavLink>
          <NavLink href="#advantages">核心优势</NavLink>
          <NavLink href="#team">团队</NavLink>
          <NavLink href="#market">市场</NavLink>
          <NavLink href="#progress">商业进展</NavLink>
          <NavLink href="#investment">融资信息</NavLink>
          <NavLink href="#roadmap">发展规划</NavLink>
        </div>
        
        <motion.button
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors hidden md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContactClick}
        >
          联系我们
        </motion.button>
        
        <div className="md:hidden">
          <button className="text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      className="text-gray-200 hover:text-blue-500 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

export default Navbar;
