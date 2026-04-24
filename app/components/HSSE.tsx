"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

export default function HSSE() {
  const [selected, setSelected] = useState<string | null>(null);
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].hsse;

  return (
    <section id="hsse" className="py-24 bg-gray-50 dark:bg-blue-950 text-black dark:text-white overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Titre centré */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {d.title}
        </motion.h2>

        {/* Images */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid md:grid-cols-2 gap-10"
        >

          {/* Image 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl dark:shadow-black/30 group cursor-pointer transition-shadow duration-500"
            onClick={() => setSelected("/hsse1.png")}
          >
            <Image
              src="/hsse1.png"
              alt="Safety"
              width={600}
              height={400}
              className="object-cover w-full h-[350px] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500 ease-out"></div>

            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] drop-shadow-md">
              {d.safety}
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl dark:shadow-black/30 group cursor-pointer transition-shadow duration-500"
            onClick={() => setSelected("/hsse2.png")}
          >
            <Image
              src="/hsse2.png"
              alt="Environment"
              width={600}
              height={400}
              className="object-cover w-full h-[350px] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500 ease-out"></div>

            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] drop-shadow-md">
              {d.environment}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-blue-950/90 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected}
                alt="preview"
                width={1000}
                height={700}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
