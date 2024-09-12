"use client";

import Button from '@/app/components/Button'; 
import { useTheme } from '@/app/Theme';

export default function ContactMe() {
  const { isDarkMode } = useTheme();

  const handleEmailClick = () => {
    window.location.href = 'mailto:mhmdfkih21@gmail.com';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.link/qn5sq0', '_blank');
  };

  return (
    <section
      className={`flex flex-col items-center justify-center min-h-screen px-6 py-16 pt-32 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold mb-8">Let`s Collaborate!</h1>
        <p className="text-lg leading-relaxed text-center mb-12 max-w-2xl">
          I`m always open to new opportunities and collaborations. Feel free to reach out via email or WhatsApp if you`d like to work together on a project or just have a chat!
        </p>

        <div className="flex space-x-4">
          <Button 
            text="Email Me" 
            onClick={handleEmailClick} 
            type="primary" 
          />
          
          <Button 
            text="WhatsApp Me" 
            onClick={handleWhatsAppClick} 
            type="secondary" 
          />
        </div>
      </div>
    </section>
  );
}
