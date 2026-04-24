"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].hero;

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-blue-950">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
        }}
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-950/80 via-blue-900/50 to-blue-950/90 backdrop-blur-[2px]"></div>

      {/* Subtle Glow */}
      <div className="absolute z-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full top-[-100px] left-[-100px] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mb-4"
        >
          <Image
            src="/logo.png"
            alt="OMOS Logo"
            width={200}
            height={200}
            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight"
        >
          {d.title1} <br />
          <span className="text-gray-300">
            {d.title2}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl"
        >
          {d.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
        >
          <motion.a
            href="#history"
            whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white text-blue-900 px-8 py-3.5 rounded-xl font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center"
          >
            {d.discover}
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="border border-white/30 backdrop-blur-sm px-8 py-3.5 rounded-xl text-white flex items-center justify-center hover:border-white/60"
          >
            {d.contact}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
