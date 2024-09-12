import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTheme } from '@/app/Theme';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen, toggleSidebar]);

  const linkClasses = `group flex items-center p-4 cursor-pointer relative rounded-md transition-colors duration-300 ease-in-out ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-200'}`;
  const underlineClasses = `absolute left-0 bottom-0 w-full h-[3px] bg-current transform scale-x-0 transition-transform duration-300 ${isDarkMode ? 'bg-gray-400' : 'bg-gray-700'} group-hover:scale-x-100`;

  const buttonClasses = `flex items-center px-4 py-2 rounded-full text-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`;

  return (
    <>
      <div className={`fixed inset-0 bg-black opacity-50 z-10 ${isSidebarOpen ? 'block' : 'hidden'}`} />
      <div ref={sidebarRef} className={`fixed top-0 left-0 w-64 h-full  transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-20`}>
        <button onClick={toggleSidebar} className="text-2xl absolute top-4 right-4 text-gray-800 dark:text-gray-100">
          &times;
        </button>
        <div className="flex items-center justify-center mt-8">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
        </div>
        <div className="mt-8 flex-1">
          <Link href="/" legacyBehavior>
            <a className={linkClasses}>
              Home
              <span className={underlineClasses} />
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={linkClasses}>
              About Me
              <span className={underlineClasses} />
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={linkClasses}>
              Contact Me
              <span className={underlineClasses} />
            </a>
          </Link>
        </div>
        <div className="flex justify-center mt-auto mb-4">
          <button onClick={toggleDarkMode} className={buttonClasses}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
