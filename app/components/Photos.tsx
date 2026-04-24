"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

type ImageType = {
  src: string;
  titleKey: number;
  related?: string[];
};

const images: ImageType[] = [
  { src: "/p00.jpg", titleKey: 0, related: ["/p01.jpg", "/p03.jpg", "/p04.jpg"] },
  { src: "/p1.png", titleKey: 1 },
  { src: "/p2.png", titleKey: 2 },
  { src: "/p3.png", titleKey: 3 },
  { src: "/p4.png", titleKey: 4 },
  { src: "/p11.jpg", titleKey: 5, related: ["/p12.jpg", "/p13.jpg", "/p14.jpg"] },
  { src: "/test.png", titleKey: 6 },
  { src: "/test1.jpg", titleKey: 7, related: ["/test2.png", "/test3.png"] },
  { src: "/test4.png", titleKey: 8 },
  { src: "/test5.png", titleKey: 9, related: ["/test6.png", "/test7.png", "/test8.png", "/test9.png", "/test10.png"] },
  { src: "/test11.png", titleKey: 10, related: ["/test12.png"] },
  { src: "/t13.jpg", titleKey: 11, related: ["/test13.png", "/test14.png", "/test15.png"] },
];

export default function Gallery() {
  const [selected, setSelected] = useState<ImageType | null>(null);
  const [current, setCurrent] = useState<string>("");
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].photos;

  // 🔥 ESC pour fermer
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="photo" className="py-24 bg-white dark:bg-blue-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-16 text-blue-900 dark:text-white">
          {d.title}
        </h1>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-md"
              onClick={() => {
                setSelected(img);
                setCurrent(img.src);
              }}
            >
              <Image
                src={img.src}
                alt={d.items[img.titleKey]}
                width={400}
                height={300}
                className="object-cover w-full h-[260px] transition duration-500 group-hover:scale-105"
              />

              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Title */}
              <div className="absolute bottom-5 left-5 right-5 text-white text-lg font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 drop-shadow-xl">
                {d.items[img.titleKey]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col items-center max-w-5xl w-full"
            >
              {/* ❌ Bouton fermer */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white text-3xl hover:scale-110 transition"
              >
                ✕
              </button>

              {/* Image principale */}
              <Image
                src={current}
                alt="preview"
                width={600}
                height={550}
                className="rounded-2xl object-contain mb-6"
              />

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto">
                {[selected.src, ...(selected.related || [])].map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setCurrent(img)}
                    className={`cursor-pointer rounded-lg overflow-hidden border ${current === img ? "border-white" : "border-transparent"
                      }`}
                  >
                    <Image
                      src={img}
                      alt="thumb"
                      width={90}
                      height={60}
                      className="object-cover hover:opacity-80 transition"
                    />
                  </div>
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
