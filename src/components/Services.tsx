"use client";

import { motion } from "framer-motion";
import { Globe, Layers, Smartphone, Video } from "lucide-react";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="services" className="relative z-20 bg-background pt-32 pb-40 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Our Expertise
          </h2>
          <p className="text-gray-400 max-w-xl text-lg font-light">
            We deliver uncompromising quality across core development and editing disciplines, ensuring your digital presence is nothing short of extraordinary.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Web Development */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-10 overflow-hidden transition-all duration-500 hover:border-accent/50 hover:bg-white/[0.04]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12">
              <Globe size={120} className="text-accent" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-8 border border-accent/20 group-hover:border-accent/50 transition-colors">
                <Globe className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                Web Development
              </h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm">
                Modern, fast, and scalable websites built with robust frameworks. We craft custom solutions focusing on advanced architecture, accessibility, and exceptional user experience.
              </p>
              
              <div className="mt-8 flex gap-2 flex-wrap">
                {["Next.js", "React", "TypeScript", "Tailwind"].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-px bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/20 group-hover:via-accent/0 group-hover:to-accent/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
          </motion.div>

          {/* App Development */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-10 overflow-hidden transition-all duration-500 hover:border-emerald-500/50 hover:bg-white/[0.04]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12">
              <Smartphone size={120} className="text-emerald-500" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
                <Smartphone className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                App Development
              </h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm">
                High-performance mobile and desktop applications. We build seamless cross-platform experiences tailored to elevate user engagement and streamline operations.
              </p>
              
              <div className="mt-8 flex gap-2 flex-wrap">
                {["React Native", "Flutter", "iOS", "Android"].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/20 group-hover:via-emerald-500/0 group-hover:to-emerald-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
          </motion.div>

          {/* Video Editing */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-10 overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:bg-white/[0.04]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
              <Video size={120} className="text-purple-500" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center mb-8 border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                <Video className="text-purple-400" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                High-End Video Editing
              </h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm">
                Cinematic post-production that captivates your audience. From dynamic motion graphics to flawless color grading, we craft visual narratives that elevate your brand's story.
              </p>
              
              <div className="mt-8 flex gap-2 flex-wrap">
                {["Motion Graphics", "VFX", "Color Grading", "Sound Design"].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-px bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-purple-500/0 group-hover:to-purple-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
          </motion.div>

          {/* Website Redesign */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-10 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:bg-white/[0.04]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12">
              <Layers size={120} className="text-blue-500" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                <Layers className="text-blue-400" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                Website Redesign
              </h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm">
                Transform your outdated website into a high-converting, modern digital masterpiece with our signature premium UI/UX.
              </p>
              
              <div className="mt-8 flex gap-2 flex-wrap">
                {["UI/UX Design", "Conversion Optimization", "Modernization", "Rebranding"].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-blue-500/0 group-hover:to-blue-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
