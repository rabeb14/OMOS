"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

export default function Businesses() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].business;

  return (
    <section id="Businesses" className="py-24 bg-blue-900 dark:bg-blue-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-4xl font-bold text-center mb-16"
        >
          {d.title}
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-5 gap-8">

          {d.cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors duration-300 shadow-lg"
            >
              
              {/* Title */}
              <h3 className="text-lg font-semibold mb-4 leading-tight">
                {item.title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-white mb-5 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>

              {/* List */}
              <ul className="space-y-3 text-gray-400 text-sm">
                {item.desc.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-white/50">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}