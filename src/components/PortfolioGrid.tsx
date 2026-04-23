"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, PlayCircle, Laptop, FileText } from "lucide-react";
import Image from "next/image";

const getYoutubeVideoId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) return match[2];
  return null;
};

const LazyYoutubePlayer = ({ videoId, title }: { videoId: string; title: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (isPlaying) {
    return (
      <iframe 
        src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`} 
        title={title} 
        className="w-full h-full border-0 relative z-10" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <div 
      className="w-full h-full relative cursor-pointer group flex items-center justify-center bg-black"
      onClick={() => setIsPlaying(true)}
    >
      <Image 
        src={thumbnailUrl} 
        alt={title} 
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
      <PlayCircle size={64} className="text-white z-20 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-300" />
    </div>
  );
};

export default function PortfolioGrid({ items }: { items: any[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((item) => {
        const isYoutube = item.link.includes("youtube.com") || item.link.includes("youtu.be");
        const videoId = isYoutube ? getYoutubeVideoId(item.link) : null;
        const isDrive = item.link.includes("drive.google.com");

        return (
          <motion.div 
            key={item.id} 
            variants={itemVariants} 
            whileHover={{ y: -8, boxShadow: "0 10px 30px -10px rgba(14,165,233,0.15)" }} 
            className="bg-white/[0.02] border border-white/5 hover:border-accent/30 rounded-3xl overflow-hidden group transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-video bg-black/50 overflow-hidden shrink-0 border-b border-white/5">
              {videoId ? (
                <LazyYoutubePlayer videoId={videoId} title={item.title} />
              ) : item.thumbnail_url ? (
                <Image 
                  src={item.thumbnail_url} 
                  alt={item.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 relative z-0" 
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-[#050505] relative z-0">
                  {item.category.includes("Video") ? <PlayCircle size={48} className="text-gray-700 mb-2" /> : <Laptop size={48} className="text-gray-700 mb-2" />}
                  <span className="text-gray-600 font-medium text-sm">{item.category}</span>
                </div>
              )}

              {!videoId && (
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20 backdrop-blur-sm">
                  <a href={item.link} target="_blank" rel="noreferrer" className="bg-accent hover:bg-accent/90 shadow-[0_0_20px_rgba(14,165,233,0.4)] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto">
                    {isDrive ? <><FileText size={18} /> View File</> : <><ExternalLink size={18} /> Visit Site</>}
                  </a>
                </div>
              )}
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-3 gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300 shrink-0">
                  {item.category.includes("Video") || isYoutube ? <PlayCircle size={12} className="text-purple-400" /> : <Laptop size={12} className="text-accent" />}
                  {item.category}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              {item.description && <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed mt-auto">{item.description}</p>}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
