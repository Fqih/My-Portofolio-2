"use client";

import Image from 'next/image';
import { useTheme } from '@/app/Theme';

export default function AboutMe() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`flex flex-col items-center justify-center min-h-screen px-6 py-12 pt-24 pb-10 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        <div className="mb-8">
          <Image
            src="/images/faqih.jpg"
            alt="Faqih Hakim"
            width={250}
            height={250}
            className="rounded-full shadow-lg"
            priority
          />
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed max-w-2xl">
            Hi, I`m <strong>Faqih Hakim</strong>, a passionate sophomore majoring in Informatics with a deep interest in coding, especially in web development and data analysis. 
            I`m always eager to learn new technologies and embark on exciting projects. 
            My goal is to become a versatile developer capable of making a significant impact in the tech world.
          </p>
          
        </div>
      </div>
    </section>
  );
}
