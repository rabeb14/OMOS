"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { dict } from "../../lib/dictionaries";

export default function History() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].history;
  const [activeIndex, setActiveIndex] = useState(0);
  const [counter, setCounter] = useState(0);

  const milestones = [
    { date: d.milestone1.date, title: d.milestone1.title, icon: "1", content: d.p1 },
    { date: d.milestone2.date, title: d.milestone2.title, icon: "2", content: d.p2 },
    { date: d.milestone3.date, title: d.milestone3.title, icon: "3", content: d.p3 },
    { date: d.milestone4.date, title: d.milestone4.title, icon: "4", content: d.p4 },
  ];

  const stats = [
    { value: "25+", label: d.statsExp, icon: "⏱️" },
    { value: "100+", label: d.statsProjects, icon: "📊" },
    { value: "10+", label: d.statsPartners, icon: "🤝" },
    { value: "1", label: d.statsGoal, icon: "🎯" },
  ];

  // Counter animation for stats
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeIndex === 0) {
      interval = setInterval(() => {
        setCounter((prev) => (prev < 25 ? prev + 1 : 25));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="history" className="py-16 md:py-24 bg-gradient-to-b from-[#e8eef5] via-[#dfe8f0] to-[#c9d6e0] dark:from-brand-950 dark:via-brand-900 dark:to-brand-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-3 md:mb-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B2C4D] dark:text-white uppercase tracking-tight mb-2">
            {d.title}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-[2px] w-12 bg-blue-500 rounded-full" />
            <div className="h-2 w-2 bg-blue-500 rounded-full" />
            <div className="h-[2px] w-12 bg-blue-500 rounded-full" />
          </div>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative mb-8 md:mb-10 px-4 md:px-0">
          {/* Timeline Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 dark:bg-gray-600 -translate-y-1/2 rounded-full"
          />

          {/* Milestones */}
          <div className="relative flex justify-between items-center">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center cursor-pointer group relative z-10"
                onClick={() => setActiveIndex(index)}
              >
                {/* Year - Above the circle */}
                <span className={`text-sm md:text-base font-bold mb-3 transition-all duration-300 ${
                  activeIndex === index
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                }`}>
                  {milestone.date}
                </span>

                {/* Milestone Circle - On the line */}
                <div className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.6)] scale-110"
                    : "bg-white dark:bg-gray-800 shadow-md hover:scale-105 border-2 border-gray-200 dark:border-gray-600"
                }`}>
                  {/* Tank icon with progressive fill */}
                  <svg
                    viewBox="0 0 24 32"
                    className={`w-5 h-6 md:w-6 md:h-7 ${activeIndex === index ? "text-white" : "text-blue-500 dark:text-blue-400"}`}
                  >
                    {/* Tank outline */}
                    <rect x="3" y="4" width="18" height="24" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    {/* Tank top cap */}
                    <rect x="7" y="2" width="10" height="3" rx="1" fill="currentColor" />
                    {/* Fill level - progressive */}
                    <clipPath id={`tank-clip-${index}`}>
                      <rect x="4" y="5" width="16" height="22" />
                    </clipPath>
                    <rect
                      x="4"
                      y={27 - ((index + 1) / milestones.length) * 22}
                      width="16"
                      height={((index + 1) / milestones.length) * 22}
                      fill="currentColor"
                      clipPath={`url(#tank-clip-${index})`}
                      opacity="0.85"
                    />
                  </svg>

                  {/* Glow effect for active */}
                  {activeIndex === index && (
                    <motion.div
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 bg-blue-500 rounded-full -z-10"
                    />
                  )}
                </div>

                {/* Title - Below the circle */}
                <span className={`text-[10px] sm:text-[11px] md:text-xs font-semibold mt-3 text-center max-w-[80px] sm:max-w-[90px] md:max-w-[110px] leading-snug transition-all duration-300 ${
                  activeIndex === index
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400"
                }`}>
                  {milestone.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/60 dark:border-white/10"
        >
          <div className="flex flex-col md:flex-row" dir="ltr">
            {/* Left — Image */}
            <div className="relative w-full md:w-[40%] aspect-[4/3] md:aspect-auto">
              <Image
                src="/hero3.png"
                alt="Industrial Operations"
                fill
                className="object-cover"
              />
              {/* Blue Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-transparent" />
            </div>

            {/* Right — Content */}
            <div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <motion.h3
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 md:mb-5 uppercase tracking-tight"
                >
                  {milestones[activeIndex].title}
                  <span className="text-blue-600 dark:text-blue-400 ml-2 text-base md:text-lg font-normal">
                    — {milestones[activeIndex].date}
                  </span>
                </motion.h3>

                <motion.p
                  key={`content-${activeIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base lg:text-base text-justify"
                >
                  {milestones[activeIndex].content}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------------

