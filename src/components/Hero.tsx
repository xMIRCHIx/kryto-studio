"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useStudio } from "@/context/StudioContext";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { settings } = useStudio();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Media Placeholder */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-accent-silver"
        >
          Premium Digital Agency
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6"
        >
          {settings?.name?.split(' ')[0] || 'Kryto'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">{settings?.name?.split(' ').slice(1).join(' ')}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl font-light"
        >
          {settings.bio}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-accent absolute top-0 left-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
