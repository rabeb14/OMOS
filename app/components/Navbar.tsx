"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLanguage();

  const d = dict[lang as keyof typeof dict].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: d.history, href: "#history" },
    { name: d.philosophy, href: "#PhilosophyVision" },
    { name: d.business, href: "#Businesses" },
    { name: d.hsse, href: "#hsse" },
    { name: d.references, href: "#ref" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full px-6 md:px-8 py-4 flex items-center z-50 border-b transition-all duration-500 ease-in-out ${scrolled || mobileMenuOpen
        ? "bg-blue-950/95 backdrop-blur-xl border-white/10 shadow-lg"
        : "bg-gradient-to-b from-blue-950/80 to-transparent border-transparent"
        } text-white`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 mr-10 cursor-pointer z-50">
        <Image
          src="/logo.png"
          alt="logo"
          width={70}
          height={70}
          className="object-contain"
        />
        <span className="font-semibold text-lg tracking-wide hidden sm:block">OMOS</span>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="ml-auto md:hidden p-2 z-50 focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }}></div>
        <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" style={{ opacity: mobileMenuOpen ? 0 : 1 }}></div>
        <div className="w-6 h-0.5 bg-white transition-all" style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }}></div>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-[15px] font-medium items-center ml-auto">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="relative group py-2">
            {link.name}
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-x-100"></span>
          </a>
        ))}



        {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="ml-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-300"
          aria-label="Toggle dark mode"
        >
          <AnimatePresence mode="wait">
            {theme === "light" ? (
              <motion.span
                key="moon"
                initial={{ opacity: 0, rotate: -90, scale: 0 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0 }}
                transition={{ duration: 0.3 }}
                className="block text-lg"
              >
                🌙
              </motion.span>
            ) : (
              <motion.span
                key="sun"
                initial={{ opacity: 0, rotate: 90, scale: 0 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0 }}
                transition={{ duration: 0.3 }}
                className="block text-lg"
              >
                ☀️
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Language Toggles */}
        {/* <div className="ml-2 flex gap-1 bg-white/10 p-1 rounded-lg">
          <button
            onClick={() => setLang("en")}
            className={`px-2.5 py-1 text-sm font-bold rounded ${lang === "en" ? "bg-white text-blue-950" : "text-white hover:bg-white/20"
              } transition-colors`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("fr")}
            className={`px-2.5 py-1 text-sm font-bold rounded ${lang === "fr" ? "bg-white text-blue-950" : "text-white hover:bg-white/20"
              } transition-colors`}
          >
            FR
          </button>
        </div> */}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-blue-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl flex flex-col p-6 gap-6 md:hidden z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white hover:text-blue-300 transition-colors"
              >
                {link.name}
              </a>
            ))}



            <div className="h-[1px] w-full bg-white/10 my-2"></div>

            <div className="flex items-center justify-between">
              {/* Dark Mode Toggle Mobile */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 text-white"
              >
                <span className="p-2 rounded-lg bg-white/10">
                  {theme === "light" ? "🌙" : "☀️"}
                </span>
                <span className="font-medium">Theme</span>
              </button>

              {/* Language Mobile */}
              {/* <div className="flex gap-1 bg-white/10 p-1 rounded-lg">
                <button
                  onClick={() => { setLang("en"); setMobileMenuOpen(false); }}
                  className={`px-3 py-1 text-sm font-bold rounded ${lang === "en" ? "bg-white text-blue-950" : "text-white hover:bg-white/20"
                    }`}
                >
                  EN
                </button>
                <button
                  onClick={() => { setLang("fr"); setMobileMenuOpen(false); }}
                  className={`px-3 py-1 text-sm font-bold rounded ${lang === "fr" ? "bg-white text-blue-950" : "text-white hover:bg-white/20"
                    }`}
                >
                  FR
                </button>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
