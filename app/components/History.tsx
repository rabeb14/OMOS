"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

export default function History() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].history;

  return (
    <section id="history" className="py-24 bg-white dark:bg-blue-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-4xl md:text-5xl font-bold mb-20 text-center text-blue-900 dark:text-white"
        >
          {d.title}
        </motion.h2>

        {/* Premium Vertical Roadmap Pipeline */}
        <div className="relative mt-24 w-full max-w-5xl mx-auto pb-12">
          
          {/* Main Vertical Oil Pipeline */}
          <div className="absolute top-0 bottom-0 left-[2rem] md:left-1/2 w-3 md:w-4 bg-gradient-to-r from-blue-300 via-blue-100 to-blue-400 dark:from-gray-800 dark:via-gray-400 dark:to-gray-800 transform md:-translate-x-1/2 shadow-xl z-0 border-x border-blue-200/50 dark:border-gray-900/50"></div>

          {/* Cards */}
          <div className="flex flex-col gap-16 px-4 md:px-0">
            {[
              { title: "Origins", icon: "🌍", text: d.p1, delay: 0.1 },
              { title: "Experience", icon: "💼", text: d.p2, delay: 0.2 },
              { title: "ETPAK", icon: "🏗️", text: d.p3, delay: 0.3 },
              { title: "OMOS", icon: "🚀", text: d.p4, delay: 0.4 },
              { title: "Future", icon: "📈", text: d.p5, delay: 0.5 },
              { title: "Partnerships", icon: "🤝", text: d.p6, delay: 0.6 },
            ].map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
                  className={`relative w-full flex ${isLeft ? "md:justify-start" : "md:justify-end"} items-center group`}
                >
                  {/* Central Node (Pipe Joint & Valve) */}
                  <div className="absolute left-[2rem] md:left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
                    {/* Top Flange */}
                    <div className="w-8 md:w-10 h-2 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 dark:from-gray-900 dark:via-gray-500 dark:to-gray-900 rounded-sm border border-blue-300 dark:border-gray-950 shadow-sm"></div>
                    
                    {/* Main Valve Body */}
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-200 to-blue-400 dark:from-slate-700 dark:to-slate-900 rounded-full flex items-center justify-center border-[3px] border-blue-100 dark:border-slate-500 shadow-[inset_0_3px_10px_rgba(0,0,0,0.1),0_5px_15px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_5px_15px_rgba(0,0,0,0.6),0_10px_20px_rgba(0,0,0,0.5)] z-10 group-hover:border-blue-400 transition-colors duration-300">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 dark:bg-blue-950 rounded-full flex items-center justify-center shadow-[inset_0_0_8px_rgba(0,0,0,0.3)] dark:shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] border border-blue-700 dark:border-gray-900">
                        <span className="text-lg md:text-xl drop-shadow-md text-white">{item.icon}</span>
                      </div>
                    </div>

                    {/* Bottom Flange */}
                    <div className="w-8 md:w-10 h-2 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 dark:from-gray-900 dark:via-gray-500 dark:to-gray-900 rounded-sm border border-blue-300 dark:border-gray-950 shadow-sm -mt-[1px]"></div>
                  </div>

                  {/* Connecting Horizontal Pipe (Mobile) */}
                  <div className="md:hidden absolute top-1/2 left-[2rem] transform -translate-y-1/2 h-2 w-12 bg-gradient-to-b from-blue-300 via-blue-100 to-blue-400 dark:from-gray-800 dark:via-gray-400 dark:to-gray-800 border-y border-blue-200/50 dark:border-gray-900/50 z-0 flex items-center justify-end shadow-md">
                    {/* Card-side Flange */}
                    <div className="w-2 h-6 bg-gradient-to-b from-blue-400 via-blue-200 to-blue-500 dark:from-gray-900 dark:via-gray-500 dark:to-gray-900 rounded-sm border border-blue-300 dark:border-gray-950 -mr-1"></div>
                  </div>

                  {/* Card Container */}
                  <div className={`w-full ml-[5rem] md:ml-0 md:w-[45%] relative`}>
                    
                    {/* Connecting Horizontal Pipe (Desktop) */}
                    <div className={`hidden md:flex absolute top-1/2 transform -translate-y-1/2 h-2 bg-gradient-to-b from-blue-300 via-blue-100 to-blue-400 dark:from-gray-800 dark:via-gray-400 dark:to-gray-800 border-y border-blue-200/50 dark:border-gray-900/50 ${isLeft ? "right-[-12%] w-[12%] justify-start" : "left-[-12%] w-[12%] justify-end"} z-0 items-center shadow-md`}>
                      {/* Card-side Flange */}
                      <div className={`w-2 h-6 bg-gradient-to-b from-blue-400 via-blue-200 to-blue-500 dark:from-gray-900 dark:via-gray-500 dark:to-gray-900 rounded-sm border border-blue-300 dark:border-gray-950 ${isLeft ? "-ml-1" : "-mr-1"}`}></div>
                    </div>

                    {/* Content Card */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="relative z-10 bg-white/90 dark:bg-blue-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl dark:shadow-black/30 border border-gray-100 dark:border-blue-700/50 flex flex-col items-start md:items-center text-left md:text-center group-hover:border-blue-400 dark:group-hover:border-blue-400 transition-colors duration-300"
                    >
                      {/* Step Indicator */}
                      <span className="mb-4 px-4 py-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest rounded-full shadow-inner border border-blue-100 dark:border-blue-800">
                        {item.title}
                      </span>
                      
                      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}