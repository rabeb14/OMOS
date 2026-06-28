"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { dict } from "../../lib/dictionaries";

export default function References() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].references;

  // Multi-image mapping for each service in the list
  const galleryData = [
    {  images: ["/storage-tanks.png","/storagetanks2.png","/storagetanks3.png"] }, // 01. storage tanks
    { images: ["/integrity.png"] }, // 04. Pipeline Integrity
    { images: ["/a4.png"] }, // 05. Pipeline Cleaning
    { images: ["/pigging.png"] }, // 06. Intelligent pigging
    { images: ["/a25.png"] }, // 07. Pipeline repair
    { images: ["/pipe-rak.png"] }, // 02. pipe raks 
    {images:  ["/specialized.png"]}, // 10. Logistics Support Base for Offshore and Onshore Operations
    { images: ["/a17.png", "/a18.png", "/a19.png","/fleet4.png"] }, // 08. Fleet  maintenance
    { images: ["/a20.png", "/a21.png"]},//Rotating equipment
    { images: ["/logistics1.png", "/logistics2.png"] }, //logistic support 
    
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const activeService = galleryData[activeIndex];

  return (
  <section id="ref" className="min-h-[100svh] lg:min-h-[100dvh] bg-gray-50 dark:bg-gradient-to-br dark:from-[#0B2C4D] dark:via-[#003554] dark:to-[#0B2C4D] py-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-10"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B2C4D] dark:text-white mb-4">
              {d.title}
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-16 bg-[#2F80ED]" />
              <div className="w-2 h-2 bg-[#2F80ED] rounded-full" />
              <div className="h-[2px] w-16 bg-[#2F80ED]" />
            </div>
          </motion.div>

          {/* 3-column layout: Left list | Center image | Right list */}
          <div className="hidden lg:flex gap-4 xl:gap-6 mt-6 items-stretch">

            {/* Left categories (first 5) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-[22%] shrink-0 flex flex-col justify-center gap-2 xl:gap-3"
            >
              {d.serviceList.slice(0, Math.ceil(d.serviceList.length / 2)).map((title, index) => (
                <motion.button
                  key={index}
                  onClick={() => { setActiveIndex(index); setCurrentImgIndex(0); }}
                  whileHover={{ y: -2, boxShadow: "0 8px 25px rgba(47, 128, 237, 0.15)" }}
                  className={`text-left px-3 py-2.5 xl:px-4 xl:py-3 rounded-xl transition-all duration-300 border-2 flex items-center gap-2 xl:gap-3 group ${activeIndex === index
                    ? "bg-[#2F80ED] border-[#2F80ED] shadow-lg shadow-[#2F80ED]/30 scale-[1.02]"
                    : "bg-white dark:bg-white/10 border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/20 hover:border-[#2F80ED] dark:hover:border-[#2F80ED]/50"
                    }`}
                >
                  <span className={`text-[10px] xl:text-xs font-bold shrink-0 w-5 h-5 xl:w-6 xl:h-6 rounded-md flex items-center justify-center ${activeIndex === index ? "bg-white/20 text-white" : "bg-[#2F80ED]/10 text-[#2F80ED] dark:bg-[#2F80ED]/20 dark:text-blue-300"}`}>
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className={`font-semibold text-sm xl:text-base ${activeIndex === index ? "text-white" : "text-[#0B2C4D] dark:text-white"}`}>
                    {title}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Center image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex flex-col gap-4"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group bg-white dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/10">
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
                      className="object-contain p-4"
                    />
                    {activeService.images.length > 1 && (
                      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => { e.stopPropagation(); setCurrentImgIndex((prev) => (prev > 0 ? prev - 1 : activeService.images.length - 1)) }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition"
                        >←</button>
                        <button
                          onClick={(e) => { e.stopPropagation(); setCurrentImgIndex((prev) => (prev < activeService.images.length - 1 ? prev + 1 : 0)) }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition"
                        >→</button>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              {activeService.images.length > 1 && (
                <div className="flex gap-3 justify-center">
                  {activeService.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImgIndex(idx)}
                      className={`relative w-20 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${currentImgIndex === idx ? "border-[#2F80ED] scale-105 shadow-lg shadow-[#2F80ED]/20" : "border-transparent opacity-60 hover:opacity-100"}`}
                    >
                      <Image src={img} alt="thumbnail" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Right categories (remaining) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-[22%] shrink-0 flex flex-col justify-center gap-2 xl:gap-3"
            >
              {d.serviceList.slice(Math.ceil(d.serviceList.length / 2)).map((title, i) => {
                const index = i + Math.ceil(d.serviceList.length / 2);
                return (
                  <motion.button
                    key={index}
                    onClick={() => { setActiveIndex(index); setCurrentImgIndex(0); }}
                    whileHover={{ y: -2, boxShadow: "0 8px 25px rgba(47, 128, 237, 0.15)" }}
                    className={`text-left px-3 py-2.5 xl:px-4 xl:py-3 rounded-xl transition-all duration-300 border-2 flex items-center gap-2 xl:gap-3 group ${activeIndex === index
                      ? "bg-[#2F80ED] border-[#2F80ED] shadow-lg shadow-[#2F80ED]/30 scale-[1.02]"
                      : "bg-white dark:bg-white/10 border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/20 hover:border-[#2F80ED] dark:hover:border-[#2F80ED]/50"
                      }`}
                  >
                    <span className={`text-[10px] xl:text-xs font-bold shrink-0 w-5 h-5 xl:w-6 xl:h-6 rounded-md flex items-center justify-center ${activeIndex === index ? "bg-white/20 text-white" : "bg-[#2F80ED]/10 text-[#2F80ED] dark:bg-[#2F80ED]/20 dark:text-blue-300"}`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={`font-semibold text-sm xl:text-base ${activeIndex === index ? "text-white" : "text-[#0B2C4D] dark:text-white"}`}>
                      {title}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Mobile layout: stacked */}
          <div className="lg:hidden flex flex-col gap-4 mt-8">
            {/* Mobile image first */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/10">
              <Image
                src={activeService.images[currentImgIndex]}
                alt={d.serviceList[activeIndex]}
                fill
                className="object-contain p-4"
              />
              {activeService.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-3">
                  <button
                    onClick={() => setCurrentImgIndex((prev) => (prev > 0 ? prev - 1 : activeService.images.length - 1))}
                    className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center text-sm"
                  >←</button>
                  <button
                    onClick={() => setCurrentImgIndex((prev) => (prev < activeService.images.length - 1 ? prev + 1 : 0))}
                    className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center text-sm"
                  >→</button>
                </div>
              )}
            </div>
            {activeService.images.length > 1 && (
              <div className="flex gap-2 justify-center flex-wrap">
                {activeService.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${currentImgIndex === idx ? "border-[#2F80ED] scale-105 shadow-lg shadow-[#2F80ED]/20" : "border-transparent opacity-60"}`}
                  >
                    <Image src={img} alt="thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
            {/* Mobile service list - 2 columns on sm */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {d.serviceList.map((title, index) => (
                <motion.button
                  key={index}
                  onClick={() => { setActiveIndex(index); setCurrentImgIndex(0); }}
                  whileHover={{ y: -2 }}
                  className={`text-left px-3 py-2.5 rounded-xl transition-all duration-300 border-2 flex items-center gap-2 ${activeIndex === index
                    ? "bg-[#2F80ED] border-[#2F80ED] shadow-lg shadow-[#2F80ED]/30"
                    : "bg-white dark:bg-white/10 border-gray-200 dark:border-white/10"
                    }`}
                >
                  <span className={`text-[10px] font-bold shrink-0 w-5 h-5 rounded-md flex items-center justify-center ${activeIndex === index ? "bg-white/20 text-white" : "bg-[#2F80ED]/10 text-[#2F80ED] dark:bg-[#2F80ED]/20 dark:text-blue-300"}`}>
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className={`font-semibold text-sm ${activeIndex === index ? "text-white" : "text-[#0B2C4D] dark:text-white"}`}>
                    {title}
                  </span>
                </motion.button>
              ))}
            </div>
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
