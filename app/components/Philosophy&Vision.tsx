"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

export default function PhilosophyVision() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].philosophy;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <section id="PhilosophyVision" className="py-24 bg-gray-50 dark:bg-blue-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-4xl font-bold text-center mb-12 text-blue-900 dark:text-white"
        >
          {d.title}
        </motion.h2>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            {d.subtitle}
          </p>
        </motion.div>

        {/* Core Principles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >

          <motion.div variants={itemVariants} className="p-8 bg-white dark:bg-blue-900/30 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-black/20 transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-3 flex items-center gap-3 text-blue-900 dark:text-white"><span className="text-2xl">🎧</span> {d.listening}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {d.listeningDesc}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8 bg-white dark:bg-blue-900/30 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-black/20 transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-3 flex items-center gap-3 text-blue-900 dark:text-white"><span className="text-2xl">🤝</span> {d.commitment}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {d.commitmentDesc}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8 bg-white dark:bg-blue-900/30 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-black/20 transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-3 flex items-center gap-3 text-blue-900 dark:text-white"><span className="text-2xl">🌱</span> {d.relationships}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {d.relationshipsDesc}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8 bg-white dark:bg-blue-900/30 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-black/20 transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-3 flex items-center gap-3 text-blue-900 dark:text-white"><span className="text-2xl">⚙️</span> {d.excellence}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {d.excellenceDesc}
            </p>
          </motion.div>

        </motion.div>

        {/* Core Pillars */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-3xl font-bold text-center mb-10 text-blue-900 dark:text-white"
        >
          {d.pillarsTitle}
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >

          <motion.div variants={itemVariants} className="p-8 bg-blue-900 dark:bg-white rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-4 text-white dark:text-black">{d.people}</h4>
            <p className="text-gray-300 dark:text-gray-600 leading-relaxed">
              {d.peopleDesc}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8 bg-blue-900 dark:bg-white rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-4 text-white dark:text-black">{d.performance}</h4>
            <p className="text-gray-300 dark:text-gray-600 leading-relaxed">
              {d.performanceDesc}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8 bg-blue-900 dark:bg-white rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-4 text-white dark:text-black">{d.partnerships}</h4>
            <p className="text-gray-300 dark:text-gray-600 leading-relaxed">
              {d.partnershipsDesc}
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}