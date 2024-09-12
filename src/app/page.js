'use client'
import Navbar from './components/Navbar';
import { useTheme } from './Theme';
import HeroSection from './components/HeroSection/Index';
import StatsSection from './components/StatsSection';
import ToolsSection from './components/ToolsSection';


export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div>
      <HeroSection />
      <div className={`min-h-screen  ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-800'}`}>
          <StatsSection />
          <ToolsSection />
      </div>
    </div>
  );
}
