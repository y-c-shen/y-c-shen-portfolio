'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import IconContainer from "@/components/IconContainer";
import ButtonContainer from "@/components/ButtonContainer";
import AboutContainer from "@/components/AboutContainer";
import ExperienceContainer from "@/components/ExperienceContainer";
import ProjectsContainer from "@/components/ProjectsContainer";

export default function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Hide scroll indicator after scrolling 100 pixels
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);  // cleanup when dismounted
  }, []); // empty dependency, so only runs on mount


  return (
    <div className="flex flex-col items-center min-h-screen font-[family-name:var(--font-geist-sans)] text-white relative">
      {/* Fixed gradient background that covers entire viewport */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-800 via-neutral-900 to-slate-900 -z-10" />
      {/* Enhanced overlay gradient for smoother blending */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-800/20 via-transparent to-neutral-900/40 pointer-events-none -z-10" />
      
      {/* Hero section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center min-h-screen w-full px-4 pt-16 relative z-10"
      >
        <div className="flex flex-col items-center text-center max-w-xl">
          <div className="flex items-center space-x-2 mb-6 text-neutral-400">
            <MapPin size={14} />
            <span className="text-sm">Montreal, 2025</span>
          </div>
          
          <motion.h1 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
          >
            Yejia Shen
          </motion.h1>
          
          <p className="text-neutral-300 mb-6">U2 Software Engineering @ McGill</p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="px-4 py-2 rounded-full bg-neutral-800/50 border border-neutral-700 text-sm mb-10"
          >
            <span className="text-yellow-400">Summer 2025:</span> Software Intern at Ampliwork
          </motion.div>
          
          <IconContainer />
          <ButtonContainer />
          
          {/* Scroll indicator */}
          {showScrollIndicator && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: showScrollIndicator ? 1 : 0 }}
              className="absolute bottom-12 flex flex-col items-center"
            >
              <span className="text-xs text-neutral-400 mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ChevronDown size={20} className="text-neutral-400" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Content sections with intersection observer */}
      <div className="w-full max-w-3xl px-6 relative z-10">
        <section id="about" className="py-24">
          <AboutContainer />
        </section>
        
        <section id="experience" className="py-24">
          <ExperienceContainer />
        </section>
        
        <section id="projects" className="py-24">
          <ProjectsContainer />
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full py-10 border-t border-neutral-800 mt-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center text-neutral-400 text-sm">
          <p>© {new Date().getFullYear()} Yejia Shen. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}