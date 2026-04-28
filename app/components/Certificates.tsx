"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

const images = [
  "/certif1.png",
  "/certif2.png",
  "/certif3.png",
];

export default function Certificates() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].certificates;

  return (
    <section id="certif" className="pt-8 pb-28 bg-white dark:bg-blue-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl md:text-5xl font-bold mb-20 text-blue-900 dark:text-white"
        >
          {d.title}
        </motion.h2>

        {/* Certificates Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gray-50 dark:bg-blue-900/30 p-4 border border-gray-100 dark:border-blue-800/50 group transition-all duration-500"
            >
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`Certificate ${i + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
