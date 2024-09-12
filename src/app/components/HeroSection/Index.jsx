"use client";
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import Button from '@/app/components/Button';
import { useEffect } from 'react';
import { useTheme } from '@/app/Theme'; 
import { TypeAnimation } from 'react-type-animation';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const { isDarkMode } = useTheme(); 
  const { scrollY } = useScroll();
  const router = useRouter();

  const yTransforms = [
    useTransform(scrollY, [0, 300], [0, -50]),
    useTransform(scrollY, [0, 300], [0, -100]),
    useTransform(scrollY, [0, 300], [0, -150]),
    useTransform(scrollY, [0, 300], [0, -200]),
    useTransform(scrollY, [0, 300], [0, -250]),
    useTransform(scrollY, [0, 300], [0, -300]),
    useTransform(scrollY, [0, 300], [0, -350]),
    useTransform(scrollY, [0, 300], [0, -400]),
  ];
  
  const xTransforms = [
    useTransform(scrollY, [0, 300], [0, 50]),
    useTransform(scrollY, [0, 300], [0, 100]),
    useTransform(scrollY, [0, 300], [0, 150]),
    useTransform(scrollY, [0, 300], [0, 200]),
    useTransform(scrollY, [0, 300], [0, 250]),
    useTransform(scrollY, [0, 300], [0, 300]),
    useTransform(scrollY, [0, 300], [0, 350]),
    useTransform(scrollY, [0, 300], [0, 400]),
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    });
  }, [controls]);

  const circles = [
    { top: '10%', left: '10%', size: '60px', index: 0 },
    { top: '20%', left: '30%', size: '80px', index: 1 },
    { top: '30%', left: '50%', size: '70px', index: 2 },
    { top: '40%', left: '70%', size: '90px', index: 3 },
    { top: '50%', left: '20%', size: '60px', index: 4 },
    { top: '60%', left: '40%', size: '80px', index: 5 },
    { top: '70%', left: '60%', size: '65px', index: 6 },
    { top: '60%', left: '80%', size: '75px', index: 7 },
  ];

  const handleViewCVClick = () => {
    window.open('https://read.cv/faqihhakim', '_blank');
  };

  const handleCollaborateClick = () => {
    router.push('/contact');
  };

  return (
    <section className={`relative h-screen flex items-center justify-center overflow-hidden ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <motion.div
        style={{ y: useTransform(scrollY, [0, 300], [0, -300]) }}
        className={`absolute inset-0 z-0 w-full h-full`}
      />
      <div className={`absolute inset-0 z-10`}>
        {circles.map((circle) => (
          <motion.div
            key={circle.index}
            style={{ 
              x: xTransforms[circle.index],
              y: yTransforms[circle.index],
              top: circle.top, 
              left: circle.left, 
              width: circle.size, 
              height: circle.size, 
              transform: `translate(-50%, -50%)`, 
              filter: `blur(8px)`, 
              opacity: 0.6,
            }}
            className={`absolute rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`}
          />
        ))}
      </div>

      <motion.div
        style={{ 
          x: useTransform(scrollY, [0, 300], [0, -100]), 
          opacity: useTransform(scrollY, [0, 300], [1, 0]), 
        }}
        className={`relative z-10 text-center px-6 py-12 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        initial={{ opacity: 0, x: 0 }} 
        animate={controls} 
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4">
          Hello, I`M
        </h1>
        <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4">
          <TypeAnimation
            sequence={[
              'Faqih Hakim',
              1000,
              'Data Enthusiast',
              1000,
              'Full-Stack Developer',
              1000,  
            ]}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          Let`s create something amazing together!
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            text="View My CV" 
            type="primary" 
            className="text-sm sm:text-base" 
            onClick={handleViewCVClick} 
          />
          <Button 
            text="Let's Collaborate" 
            type="secondary" 
            className="text-sm sm:text-base" 
            onClick={handleCollaborateClick} 
          />
        </div>
      </motion.div>
    </section>
  );
}
