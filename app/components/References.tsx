"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

export default function References() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].references;

  const data = [
    { Item: "1", Services: "Steel Structural Works", Project_Summary: "Pipe Racks", Client: "OMV WAHA Field" },
    { Item: "2", Services: "Specialized Fabrication", Project_Summary: "Helium Acid Unit", Client: "ICF (SIMG)" },
    { Item: "3", Services: "Tank construction", Project_Summary: "Sulfuric acid storage tank 5000 T", Client: "ICF (SIMG)" },
    { Item: "4", Services: "Tank Construction", Project_Summary: "Hot Water Storage Tank", Client: "CINQUIÉME SAISON (SIMG)" },
    { Item: "5", Services: "Tank Construction", Project_Summary: "Phosphoric Acid Storage Tank", Client: "TAFCO (SIMG)" },
    { Item: "6", Services: "Pipeline Services", Project_Summary: "Pipeline Integrity", Client: "(SSET)" },
    { Item: "7", Services: "Pipeline Services", Project_Summary: "Pipeline Cleaning", Client: "(SIDC)" },
    { Item: "8", Services: "Pipeline Services", Project_Summary: "Pipeline Internal Inspection by Intelligent pigging", Client: "(SIDC)" },
    { Item: "9", Services: "Pipeline Services", Project_Summary: "Pipeline repair", Client: "(SIDC)" },
    { Item: "10", Services: "Fleet Maintenance", Project_Summary: "Vehicles maintenance", Client: "OMV WAHA Field" },
    { Item: "11", Services: "Fleet Maintenance", Project_Summary: "Mechanical & electrical repairs", Client: "OMV NAWARA Field" },
    { Item: "12", Services: "Fleet Maintenance", Project_Summary: "Preventive maintenance", Client: "FIELDS SECURITY" },
    { Item: "13", Services: "General Maintenance", Project_Summary: "Acid Job maintenance", Client: "EXLOG" },
    { Item: "14", Services: "General Maintenance", Project_Summary: "Water Shut-Off", Client: "EXLOG" },
    { Item: "15", Services: "General Maintenance", Project_Summary: "SWD project", Client: "PETROSTAR" },
    { Item: "16", Services: "General Maintenance", Project_Summary: "Jet pump installation", Client: "FATY Well Services" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  // Translation handler
  const serviceKey = activeItem.Services as keyof typeof d.services;
  const translatedService = d.services[serviceKey] || activeItem.Services;

  return (
    <section id="ref" className="py-24 bg-gray-50 dark:bg-blue-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-blue-900 dark:text-white"
        >
          {d.title}
        </motion.h1>

        {/* Interactive Showcase Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12">
          
          {/* Left Side: Scrollable Client List */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-4 ref-scrollbar"
          >
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 border flex items-center justify-between group ${
                  activeIndex === index 
                    ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-500/30 transform scale-[1.02]" 
                    : "bg-white dark:bg-blue-900/30 border-gray-100 dark:border-blue-800/50 hover:bg-blue-50 dark:hover:bg-blue-800/80 hover:border-blue-200 dark:hover:border-blue-700"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-sm font-mono font-bold ${activeIndex === index ? "text-blue-200" : "text-gray-400 dark:text-blue-500"}`}>
                    {item.Item.padStart(2, '0')}
                  </span>
                  <span className={`font-bold text-lg ${activeIndex === index ? "text-white" : "text-gray-800 dark:text-gray-200"}`}>
                    {item.Client}
                  </span>
                </div>
                {/* Arrow Icon */}
                <span className={`transform transition-transform duration-300 ${activeIndex === index ? "text-white translate-x-1" : "text-gray-300 dark:text-blue-700 group-hover:text-blue-500"}`}>
                  →
                </span>
              </button>
            ))}
          </motion.div>

          {/* Right Side: Dynamic Content Display */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 h-[300px] lg:h-[400px] relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 bg-white dark:bg-blue-900/40 border border-gray-200 dark:border-blue-800/50 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-xl flex flex-col justify-center overflow-hidden"
              >
                {/* Decorative background circle */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-50 dark:bg-blue-800/20 rounded-full blur-2xl z-0"></div>

                <div className="relative z-10">
                  {/* Service Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-bold text-sm uppercase tracking-wider mb-6 shadow-sm border border-blue-100 dark:border-blue-900">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-3"></span>
                    {translatedService}
                  </div>

                  {/* Client Name */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                    {activeItem.Client}
                  </h3>

                  {/* Project Summary */}
                  <div className="border-l-4 border-blue-500 pl-5 py-1.5">
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                      {activeItem.Project_Summary}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .ref-scrollbar::-webkit-scrollbar {
          width: 6px;
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