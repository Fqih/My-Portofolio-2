"use client";

const Button = ({ text, isActive, onClick, className = '', type = 'primary' }) => {
  const baseClasses = `px-4 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    isActive ? 'scale-105 shadow-md' : 'shadow-sm'
  }`;

  const typeClasses = type === 'primary'
    ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'
    : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${typeClasses} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
