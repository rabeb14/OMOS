"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

export default function Contact() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].contact;

  return (
    <section id="contact" className="py-28 bg-gray-50 dark:bg-blue-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 tracking-tight text-blue-900 dark:text-white">
            {d.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {d.subtitle}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
            className="p-8 bg-white dark:bg-blue-900/30 rounded-2xl shadow-sm dark:shadow-black/20 border border-gray-100 dark:border-blue-800/30 transition-all duration-300 text-center group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-4xl mb-6 inline-block"
            >
              📞
            </motion.div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{d.call}</h3>
            <a
              href="tel:0912264780"
              className="text-gray-600 dark:text-gray-400 group-hover:text-blue-900 dark:group-hover:text-white font-medium transition-colors duration-300"
            >
              0912264780
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
            className="p-8 bg-white dark:bg-blue-900/30 rounded-2xl shadow-sm dark:shadow-black/20 border border-gray-100 dark:border-blue-800/30 transition-all duration-300 text-center group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-4xl mb-6 inline-block"
            >
              ✉️
            </motion.div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{d.email}</h3>
            <a
              href="mailto:contact@omos-international.com"
              className="text-gray-600 dark:text-gray-400 group-hover:text-blue-900 dark:group-hover:text-white font-medium transition-colors duration-300"
            >
              contact@omos-international.com
            </a>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">
            {d.ready}
          </p>

          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@omos-international.com"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block bg-blue-900 dark:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors"
          >
            {d.cta}
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}