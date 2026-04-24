"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

const images = [
  "/certif1.png",
  "/certif2.png",
  "/certif3.png",
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function Certificates() {
  const [[page, direction], setPage] = useState([0, 0]);
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].certificates;

  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section id="certif" className="py-28 bg-white dark:bg-blue-950 text-center overflow-hidden transition-colors duration-300">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-4xl font-bold mb-16 text-blue-900 dark:text-white"
      >
        {d.title}
      </motion.h1>

      {/* Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        className="relative flex justify-center items-center"
      >
        {/* Image principale agrandie */}
        <div className="relative w-[550px] h-[700px] overflow-hidden rounded-xl shadow-2xl dark:shadow-black/40 bg-gray-50 dark:bg-blue-900/30">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
              className="absolute inset-0"
            >
              <Image
                src={images[imageIndex]}
                alt="certificat"
                fill
                className="object-contain p-4"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bouton gauche */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-1/2 -translate-x-[350px] z-20 text-blue-900 dark:text-white text-4xl hover:scale-125 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] p-4 hidden md:block"
        >
          ‹
        </button>

        {/* Bouton droit */}
        <button
          onClick={() => paginate(1)}
          className="absolute right-1/2 translate-x-[350px] z-20 text-blue-900 dark:text-white text-4xl hover:scale-125 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] p-4 hidden md:block"
        >
          ›
        </button>

        {/* Boutons mobiles (plus proches des bords sur petit écran) */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-2 z-20 text-blue-900 dark:text-white text-4xl p-4 md:hidden"
        >
          ‹
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-2 z-20 text-blue-900 dark:text-white text-4xl p-4 md:hidden"
        >
          ›
        </button>
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              const newDirection = i > imageIndex ? 1 : -1;
              setPage([page + (i - imageIndex), newDirection]);
            }}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${i === imageIndex ? "bg-blue-900 dark:bg-white scale-125" : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
