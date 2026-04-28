"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

export default function History() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].history;
  const [activeIndex, setActiveIndex] = useState(0);

  const milestones = [
    { date: (d as any).milestone1?.date || "1997-2017", title: (d as any).milestone1?.title || "Experience", content: d.p1 },
    { date: (d as any).milestone2?.date || "2017", title: (d as any).milestone2?.title || "ETPAK", content: d.p2 },
    { date: (d as any).milestone3?.date || "2022", title: (d as any).milestone3?.title || "OMOS", content: d.p3 },
    { date: (d as any).milestone4?.date || "2026", title: (d as any).milestone4?.title || "Expansion", content: d.p4 }
  ];

  return (
    <section id="history" className="py-24 bg-gray-50 dark:bg-blue-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title - Compact & Elegant */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white uppercase tracking-tighter">
            {d.title}
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_#3b82f6]" />
        </motion.div>

        {/* Industrial Pipeline Timeline */}
        <div className="relative mb-24 px-8">

          {/* Main Pipeline Body */}
          <div className="absolute top-1/2 left-0 right-0 h-4 bg-gradient-to-b from-gray-300 via-gray-100 to-gray-400 dark:from-slate-800 dark:via-slate-600 dark:to-slate-900 -translate-y-1/2 rounded-full border border-gray-400/20 dark:border-white/5 shadow-inner">
            {/* Inner "Flow" Glow */}
            <motion.div
              initial={false}
              animate={{ width: `${(activeIndex / (milestones.length - 1)) * 100}%` }}
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-[0_0_15px_#3b82f6] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
            </motion.div>
          </div>

          {/* Milestone Valves / Ports */}
          <div className="relative flex justify-between items-center">
            {milestones.map((m, index) => (
              <div key={index} className="flex flex-col items-center">

                {/* Date above */}
                <motion.span
                  animate={{
                    opacity: activeIndex === index ? 1 : 0.5,
                    y: activeIndex === index ? -10 : 0
                  }}
                  className={`text-sm font-black mb-8 transition-colors duration-300 ${activeIndex === index ? "text-blue-600 dark:text-blue-400" : "text-gray-400 dark:text-gray-600"
                    }`}
                >
                  {m.date}
                </motion.span>

                {/* Valve Handle / Node */}
                <button
                  onClick={() => setActiveIndex(index)}
                  className="group relative z-10 flex items-center justify-center outline-none"
                >
                  {/* Flange / Outer Ring */}
                  <div className={`
                    w-10 h-10 rounded-full border-4 transition-all duration-500 flex items-center justify-center
                    ${activeIndex === index
                      ? "bg-white dark:bg-blue-500 border-blue-600 dark:border-white shadow-[0_0_20px_#3b82f6] scale-110"
                      : "bg-gray-200 dark:bg-slate-800 border-gray-300 dark:border-slate-700 hover:border-blue-400"}
                  `}>
                    {/* Inner Core */}
                    <div className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-blue-600 dark:bg-white" : "bg-gray-400 dark:bg-slate-600"}`} />
                  </div>

                  {/* Title Tooltip-style */}
                  <motion.span
                    animate={{ opacity: activeIndex === index ? 1 : 0 }}
                    className="absolute top-12 whitespace-nowrap text-[10px] font-black uppercase tracking-widest text-blue-900/60 dark:text-blue-300/60"
                  >
                    {m.title}
                  </motion.span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Content Area - Premium Card */}
        <div className="relative max-w-4xl mx-auto min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white dark:bg-blue-900/20 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-blue-800/50 shadow-2xl dark:shadow-none relative group"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-[5rem] -z-10 transition-colors group-hover:bg-blue-500/10" />

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="hidden md:block w-1 h-24 bg-gradient-to-b from-blue-600 to-transparent rounded-full" />
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-blue-900 dark:text-white leading-tight">
                    {milestones[activeIndex].title} <span className="text-blue-500 ml-2">— {milestones[activeIndex].date}</span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
                    {milestones[activeIndex].content}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
