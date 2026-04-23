"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, LogOut, UserCircle } from "lucide-react";
import { useStudio } from "@/context/StudioContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { settings, user, isAdmin, logout } = useStudio();

  const baseLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Appointment", href: "/appointment" },
    { name: "Contact", href: "/contact" },
  ];

  const navLinks = isAdmin 
    ? [...baseLinks, { name: "Dashboard", href: "/admin" }] 
    : baseLinks;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white cursor-pointer z-50 flex items-center gap-3">
          {settings?.profile_pic_url && (
            <img src={settings.profile_pic_url} alt="Logo" className="w-8 h-8 rounded-full object-cover" />
          )}
          <span>{settings?.name?.split(' ')[0] || 'Kryto'}<span className="text-accent">.</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          {user ? (
            <button
              onClick={logout}
              className="text-sm font-medium text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <LogOut size={16} /> Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <UserCircle size={16} /> Login
            </Link>
          )}

          <motion.a 
            href="https://wa.me/919294625866?text=Hi%20there%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20talk%20about%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="bg-accent hover:bg-accent/80 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] cursor-pointer inline-block"
          >
            Let&apos;s Talk
          </motion.a>
        </div>

        {/* Mobile Nav Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="border-t border-white/10 my-2 pt-2" />
          
          {user ? (
            <button
              onClick={() => { logout(); setMobileMenuOpen(false); }}
              className="text-base font-medium text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 cursor-pointer w-full text-left"
            >
              <LogOut size={18} /> Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="text-base font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <UserCircle size={18} /> Login
            </Link>
          )}
        </motion.div>
      )}
    </motion.nav>
  );
}
