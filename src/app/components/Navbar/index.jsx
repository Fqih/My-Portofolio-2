"use client";
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useTheme } from '@/app/Theme';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import Themettoggle from './Themetoggle';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 left-0 right-0 transition-shadow duration-300 mx-4 mt-4 z-40`} 
      style={{ height: '70px' }}
    >
      <div className={`relative p-3 backdrop-blur-lg rounded-xl shadow-xl  ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-slate-200 text-gray-900'}`}>
        <nav className="p-2 flex items-center justify-between">
          <button onClick={toggleSidebar} className="text-2xl lg:hidden">
            <FaBars />
          </button>

          <div className="text-lg font-bold flex-1 text-center lg:text-left lg:flex-none">
            Faqih Hakim
          </div>

          <Navigation isDarkMode={isDarkMode} />

          <Themettoggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </nav>

        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </motion.nav>
  );
};

export default Navbar;