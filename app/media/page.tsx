"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { dict } from "../lib/dictionaries";

export default function MediaPage() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].media;

  return (
    <main className="min-h-[100svh] lg:min-h-[100dvh] bg-gray-50 dark:bg-gradient-to-br dark:from-[#0B2C4D] dark:via-[#003554] dark:to-[#0B2C4D] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B2C4D] dark:text-white mb-4">
            {d.title}
          </h1>
          <div className="h-1 w-24 bg-[#2F80ED] mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            {d.subtitle}
          </p>
        </motion.div>

        {/* Brochure Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#2F80ED] to-[#003554] rounded-2xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-16 h-16 md:w-20 md:h-20 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2C4D] dark:text-white mb-3">
                {d.downloadBrochure}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {d.brochureDesc}
              </p>
              <a
                href="/OMOS_Company_Profile_2026.pdf"
                download
                className="inline-flex items-center gap-3 bg-[#2F80ED] hover:bg-[#1a5bb8] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {d.downloadButton}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            For more information, please contact us at{" "}
            <a
              href="mailto:contact@omos-international.com"
              className="text-[#2F80ED] hover:underline"
            >
              contact@omos-international.com
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
