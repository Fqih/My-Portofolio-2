"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/app/Theme';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 300], [0, 220]); 
  const contentY = useTransform(scrollY, [0, 300], [0, -100]);
  const lineWidth = useTransform(scrollY, [0, 300], ['0%', '100%']); 

  const { isDarkMode } = useTheme();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const stats = [
    { label: 'Project', value: 25 },
    { label: 'Hour Experience', value: 1500 },
    { label: 'Course', value: 25 },
    { label: 'Certification', value: 10 },
  ];

  return (
    <section
      ref={ref}
      className={`relative py-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
    >
      <motion.div
        style={{ width: lineWidth }}
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 h-1 ${isDarkMode ? 'bg-gray-600' : 'bg-black'}`}
      />
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 bg-cover bg-center"
      >
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 text-center px-4 md:px-8"
      >
        <h2 className="text-3xl font-bold mb-8">My Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className={`p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }} 
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-2">
                <CountUp 
                  end={stat.value} 
                  duration={2.5} 
                  separator="," 
                  start={inView ? 0 : undefined} 
                  suffix="+"
                />
              </h3>
              <p className={`text-gray-600 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
