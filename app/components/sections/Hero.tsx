"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { dict } from "../../lib/dictionaries";
import Link from "next/link";

export default function Hero() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].hero;

  return (
    <section className="relative bg-transparent dark:bg-brand-950 px-2 sm:px-3 md:px-4 pt-2 pb-6 sm:pb-8 overflow-hidden">

  {/* Main rounded container */}
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative w-full min-h-[420px] sm:min-h-[480px] md:min-h-[520px] mx-auto rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
  >
    {/* Background image */}
    <Image
      src="/hero3.png"
      alt="Hero background"
      fill
      priority
      className="object-cover object-center z-0"
    />
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-0" />

    {/* Inner container */}
    <div className="relative z-10 w-full min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex flex-col px-4 sm:px-6 md:px-8 lg:px-9 xl:px-16 py-3 sm:py-4 md:py-6">

      {/* Top bar with logo */}
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo1.png"
            alt="OMOS"
            width={160}
            height={70}
            priority
            className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain"
          />
        </Link>
      </div>

      {/* Main content - centered */}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 sm:gap-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[1.15] tracking-tight text-white uppercase max-w-4xl"
        >
          {d.title1}{" "}
          <span className="text-brand-300">
            {d.title2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl leading-relaxed"
        >
          {d.subtitle}
        </motion.p>
      </div>

      {/* CTA */}
      <div className="flex items-end justify-center mt-3 sm:mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <motion.a
            href="#history"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 10px 40px rgba(5,130,202,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 bg-brand-950 dark:bg-white text-white dark:text-brand-950 font-semibold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {d.discover}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>

  </motion.div>
</section>
  );
}
