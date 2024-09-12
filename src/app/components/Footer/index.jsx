"use client";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTheme } from '@/app/Theme';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`p-6 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} border-t border-gray-200`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-8 md:space-y-0">
        {/* Links */}
        <div className="mb-4 md:mb-0">
          <ul className="flex flex-wrap space-x-4">
            <li>
              <a href="/" className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Home</a>
            </li>
            <li>
              <a href="/about" className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>About</a>
            </li>
            <li>
              <a href="/contact" className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Contact Me</a>
            </li>
            <li>
              <a href="https://read.cv/faqihhakim" className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>See My CV</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 text-center md:text-right">
          <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Follow Me</h2>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="https://www.instagram.com/fqihhkim21_/" target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:underline ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              <FaInstagram size={24} />
            </a>
            <a href="https://github.com/Fqih" target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:underline ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/faqih-hakim/" target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:underline ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className={`text-center rounded-lg py-4 mt-8 ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-600'} border-t border-gray-300`}>
        <p>&copy; {new Date().getFullYear()} Muhammad Faqih Hakim. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
