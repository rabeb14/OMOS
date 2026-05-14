"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { dict } from "../../lib/dictionaries";

export default function Contact() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].contact;

  return (
    <section id="contact" className="pt-11 pb-8 bg-gray-50 dark:bg-brand-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight text-[#0B2C4D] dark:text-white">
              {d.title}
            </h1>
            <div className="h-1 w-24 bg-brand-500 mx-auto mb-4 rounded-full" />
            <p className="text-gray-600 dark:text-gray-200 max-w-2xl mx-auto text-base md:text-lg">
              {d.subtitle}
            </p>
          </motion.div>

          {/* Office Cards */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Tunisia - Head Office */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              className="p-5 sm:p-6 md:p-7 bg-white/90 dark:bg-brand-800/40 rounded-2xl shadow-md dark:shadow-black/30 border border-gray-100 dark:border-brand-400/15 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🇹🇳</span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    {d.headOffice}
                  </h3>
                  <span className="text-xs font-medium text-brand-500">Tunisia</span>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5">📍</span>
                  <span className="text-gray-600 dark:text-gray-300">Tunisia</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>📞</span>
                  <span className="text-gray-600 dark:text-gray-300">+216 24 339 166</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>✉️</span>
                  <span className="text-gray-600 dark:text-gray-300">contact@omos-international.com</span>
                </div>
              </div>
            </motion.div>

            {/* Libya - Branch */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              className="p-5 sm:p-6 md:p-7 bg-white/90 dark:bg-brand-800/40 rounded-2xl shadow-md dark:shadow-black/30 border border-gray-100 dark:border-brand-400/15 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🇱🇾</span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    {d.branchOffice}
                  </h3>
                  <span className="text-xs font-medium text-brand-500">Libya</span>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5">📍</span>
                  <span className="text-gray-600 dark:text-gray-300">Libya</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>📞</span>
                  <span className="text-gray-600 dark:text-gray-300">+218 91 226 4780</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>✉️</span>
                  <span className="text-gray-600 dark:text-gray-300">contact@omos-international.com</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            className="mt-10"
          >
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
              {d.ourLocation}
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-md dark:shadow-black/30 border border-gray-100 dark:border-brand-400/15">
              <iframe
                src="https://www.google.com/maps?q=36.742889,10.303194&z=17&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            </div>
          </motion.div>
        </div>
    </section>
  );
}
