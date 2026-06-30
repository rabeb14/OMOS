"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../providers/ThemeProvider";
import { useLanguage } from "../../context/LanguageContext";
import { dict } from "../../lib/dictionaries";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const LANGUAGES: { code: "en" | "fr" | "ar"; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "العربية" },
  ];
  const currentLang = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  const d = dict[lang as keyof typeof dict].nav;
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: d.history, href: "/#history" },
    { name: d.philosophy, href: "/philosophy" },
    { name: d.business, href: "/business" },
    { name: d.hsse, href: "/hsse" },
    { name: d.partners, href: "/partners" },
    { name: d.references, href: "/references" },
    { name: d.media, href: "/media" },
    { name: d.contact, href: "/contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full md:py-4 flex items-center justify-center z-50 bg-transparent transition-all duration-300 py-4 md:py-4"
    >
      {/* Mobile Logo - left side */}
      <Link href="/" className="absolute left-4 sm:left-6 md:hidden p-2 z-50 mt-2 sm:mt-0">
        <Image
          src="/logo1.png"
          alt="logo"
          width={100}
          height={100}
          className="object-contain w-10"
        />
      </Link>

      {/* Mobile Toggle Button */}
      <button
        className="absolute right-4 sm:right-6 md:hidden p-2 z-50 focus:outline-none mt-2 sm:mt-0"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        <div className={`w-6 h-0.5 mb-1.5 transition-all bg-white`} style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }}></div>
        <div className={`w-6 h-0.5 mb-1.5 transition-all bg-white`} style={{ opacity: mobileMenuOpen ? 0 : 1 }}></div>
        <div className={`w-6 h-0.5 transition-all bg-white`} style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }}></div>
      </button>

      {/* Desktop Menu — centered pill */}
      {/* Desktop Navbar */}
<div className="hidden md:flex w-full max-w-7xl mx-auto items-center justify-center px-6">

  {/* PILL CONTAINER */}
  <div className="flex items-center gap-1 bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-full px-2 py-1.5 shadow-sm border border-white/40 dark:border-white/10">

    {/* LEFT → LOGO */}
    <Link href="/" className="flex items-center px-2" dir="ltr">
      <Image
        src="/logo1.png"
        alt="logo"
        width={100}
        height={100}
        className="object-contain w-10 md:w-12"
      />
    </Link>

    {/* DIVIDER */}
    <div className="h-6 w-[1px] bg-gray-300 dark:bg-white/20" />

    {/* MENU */}
    {navLinks.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
          pathname === link.href || (link.href === "/#history" && pathname === "/")
            ? "bg-white dark:bg-brand-800 text-gray-900 dark:text-white shadow-sm"
            : "text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/10"
        }`}
      >
        {link.name}
      </Link>
    ))}

    {/* DIVIDER */}
    <div className="h-6 w-[1px] bg-gray-300 dark:bg-white/20" />

    {/* LANGUAGE SWITCHER */}
    <div className="relative">
      <button
        onClick={() => setLangMenuOpen(!langMenuOpen)}
        className="flex items-center gap-1 px-3 py-2 rounded-full text-[13px] font-medium text-gray-700 dark:text-gray-200 hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-300"
        aria-label="Change language"
      >
        <span className="font-bold">{currentLang.label}</span>
      </button>
      <AnimatePresence>
        {langMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 right-0 bg-white dark:bg-brand-900 rounded-xl shadow-lg border border-gray-200 dark:border-white/10 py-1 min-w-[110px] z-50"
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setLangMenuOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                  lang === l.code
                    ? "bg-gray-100 dark:bg-white/10 font-bold text-gray-900 dark:text-white"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
                }`}
              >
                <span>{l.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    {/* DIVIDER */}
    <div className="h-6 w-[1px] bg-gray-300 dark:bg-white/20" />

    {/* RIGHT → THEME BUTTON */}
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="p-2 rounded-full hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-300"
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
          >
            ☀️
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>

  </div>

</div>

      {/* Dark Mode Toggle — right side */}


      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-brand-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl flex flex-col p-6 gap-6 md:hidden z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  pathname === link.href || (link.href === "/#history" && pathname === "/")
                    ? "text-brand-100"
                    : "text-white hover:text-brand-100"
                }`}
              >
                {link.name}
              </Link>
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

              {/* Language Switcher Mobile */}
              <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                      lang === l.code
                        ? "bg-[#2F80ED] text-white shadow-lg shadow-[#2F80ED]/30"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
