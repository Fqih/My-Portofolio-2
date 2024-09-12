import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Themettoggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="hidden lg:flex items-center space-x-4">
      <button
        onClick={toggleDarkMode}
        className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-300 dark:bg-gray-100 dark:hover:bg-gray-300"
      >
        {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
      </button>
    </div>
  );
};

export default Themettoggle;