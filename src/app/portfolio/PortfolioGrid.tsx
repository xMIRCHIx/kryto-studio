"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const getYoutubeVideoId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  }
  return null;
};

export default function PortfolioGrid({ items }: { items: any[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {items.map((item) => {
        const isVideo = item.category === "Video Editing" || item.link.includes("youtube.com") || item.link.includes("youtu.be");
        const videoId = isVideo ? getYoutubeVideoId(item.link) : null;

        return (
          <motion.div 
            key={item.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="bg-white/[0.02] border border-white/5 hover:border-accent/30 rounded-3xl overflow-hidden group transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-video bg-black/50 overflow-hidden shrink-0">
              {videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                  title={item.title}
                  className="w-full h-full border-0 relative z-10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : item.thumbnail_url ? (
                <img src={item.thumbnail_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-0" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black relative z-0">
                  <span className="text-gray-600 font-medium">{item.category}</span>
                </div>
              )}
              
              {/* Overlay with View Button ONLY for Non-Videos */}
              {!videoId && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto"
                  >
                    <ExternalLink size={18} /> View Project
                  </a>
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-3 gap-2">
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300 shrink-0">
                  {item.category}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              {item.description && (
                <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed mt-auto">{item.description}</p>
              )}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
