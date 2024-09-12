import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Navigation = ({ isDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="hidden lg:flex flex-1 justify-center space-x-9">
      <a href="/" className="relative flex items-center space-x-1 group font-bold">
        <span>Home</span>
        <span className="absolute bottom-[-1px] right-[-1px] w-full h-0.5 bg-current transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </a>
      <a href="/about" className="relative font-bold flex items-center space-x-1 group">
        <span>About Me</span>
        <span className="absolute bottom-[-1px] right-[-1px] w-full h-0.5 bg-current transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </a>
      <a href="/contact" className="relative flex font-bold items-center space-x-1 group">
        <span>Contact Me</span>
        <span className="absolute bottom-[-1px] right-[-1px] w-full h-0.5 bg-current transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </a>
    </div>
  );
};

export default Navigation;