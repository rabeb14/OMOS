"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

export default function References() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].references;

  // Multi-image mapping for each service in the list
  const galleryData = [
    { images: ["/p00.png", "/piperaks2.jpg", "/piperaks3.jpg"] }, // 01. pipe raks
    { images: ["/specialized1.jpg", "/specialized2.png", "/specialized3.png"] }, // 02. Specialized Welding
    { images: ["/storage1.jpg", "/storage3.png"] }, // 03. storage tanks
    { images: ["/aa.png", "/image_2.png", "/a1.png", "/a2.png"] }, // 04. Pipeline Integrity
    { images: ["/a4.png"] }, // 05. Pipeline Cleaning
    { images: ["/test1.jpg", "/a23.png", "/a24.png"] }, // 06. Intelligent pigging
    { images: ["/a25.png"] }, // 07. Pipeline repair
    { images: ["/pipeinspection.png"] }, // 07. Pipeline inspection
    { images: ["/a17.png", "/a18.png", "/a19.png", "/a20.png", "/a21.png", "/a22.png"] }, // 08. Fleet & Rotating equipment maintenance
    // { images: ["/test11.png", "/test12.png"] }, // 09. Explosion-Proof
    { images: ["/a13.png", "/a14.png", "/a15.png", "/a16.png"] }, // 10. Logistics Support Base for Offshore and Onshore Operations
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Reset image index when service changes
  useEffect(() => {
    setCurrentImgIndex(0);
  }, [activeIndex]);

  const activeService = galleryData[activeIndex];

  return (
    <section id="ref" className="py-24 bg-gray-50 dark:bg-blue-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-blue-900 dark:text-white"
        >
          {d.title}
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12">

          {/* Left Side: Scrollable Service List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-4 ref-scrollbar"
          >
            {d.serviceList.map((title, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 border flex items-center justify-between group ${activeIndex === index
                  ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-500/30 transform scale-[1.02]"
                  : "bg-white dark:bg-blue-900/30 border-gray-100 dark:border-blue-800/50 hover:bg-blue-50 dark:hover:bg-blue-800/80 hover:border-blue-200 dark:hover:border-blue-700"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-sm font-bold ${activeIndex === index ? "text-blue-200" : "text-gray-400 dark:text-blue-500"}`}>
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className={`font-bold text-base md:text-lg ${activeIndex === index ? "text-white" : "text-gray-800 dark:text-gray-200"}`}>
                    {title}
                  </span>
                </div>
                {/* Arrow Icon */}
                <span className={`transform transition-transform duration-300 ${activeIndex === index ? "text-white translate-x-1" : "text-gray-300 dark:text-blue-700 group-hover:text-blue-500"}`}>
                  →
                </span>
              </button>
            ))}
          </motion.div>

          {/* Right Side: Interactive Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 flex flex-col gap-6"
          >
            {/* Main Image Container */}
            <div className="relative aspect-video lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl group bg-white dark:bg-blue-900/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeIndex}-${currentImgIndex}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeService.images[currentImgIndex]}
                    alt={d.serviceList[activeIndex]}
                    fill
                    className="object-contain"
                  />



                  {/* Arrows for multi-image */}
                  {activeService.images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => { e.stopPropagation(); setCurrentImgIndex((prev) => (prev > 0 ? prev - 1 : activeService.images.length - 1)) }}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition"
                      >
                        ←
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setCurrentImgIndex((prev) => (prev < activeService.images.length - 1 ? prev + 1 : 0)) }}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition"
                      >
                        →
                      </button>
                    </div>
                  )}


                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnails (Only if multiple images) */}
            {activeService.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 ref-scrollbar">
                {activeService.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${currentImgIndex === idx ? "border-blue-500 scale-105" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                  >
                    <Image src={img} alt="thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .ref-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .ref-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .ref-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(59, 130, 246, 0.2);
          border-radius: 20px;
        }
        .dark .ref-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(30, 58, 138, 0.5);
        }
      `}} />
    </section>
  );
}
