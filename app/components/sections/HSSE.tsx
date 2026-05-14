// "use client";

// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { useLanguage } from "../../context/LanguageContext";
// import { dict } from "../../lib/dictionaries";

// const images = [
//   "/certif1.png",
//   "/certif2.png",
//   "/certif3.png",
// ];
// export default function HSSE() {
//   const [selected, setSelected] = useState<string | null>(null);
//   const { lang } = useLanguage();
//   const d = dict[lang as keyof typeof dict].hsse;
//   const c = dict[lang as keyof typeof dict].certificates;


//   return (
//     <section id="hsse" className="pt-24 pb-8 bg-white dark:bg-blue-950 text-blue-900 dark:text-white overflow-hidden transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Titre centré */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="text-4xl md:text-5xl font-bold text-center mb-16"
//         >
//           {d.title}
//         </motion.h2>

//         {/* Images */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
//           }}
//           className="grid md:grid-cols-2 gap-12"
//         >

//           {/* Image 1 */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
//             }}
//             className="flex flex-col items-center group"
//           >
//             <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gray-50 dark:bg-blue-900/30 p-2 border border-gray-200 dark:border-blue-800/50">
//               <Image
//                 src="/QHSSE1.jpeg"
//                 alt="Safety"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </motion.div>

//           {/* Image 2 */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
//             }}
//             className="flex flex-col items-center group"
//           >
//             <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gray-50 dark:bg-blue-900/30 p-2 border border-gray-200 dark:border-blue-800/50">
//               <Image
//                 src="/QHSSE2.jpeg"
//                 alt="Environment"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </motion.div>

//         </motion.div>
//       </div>
//       <div id="certif" className="max-w-7xl mx-auto px-6 text-center pt-24 border-t border-gray-100 dark:border-blue-900/50">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="text-4xl md:text-5xl font-bold mb-20 text-blue-900 dark:text-white"
//         >
//           {c.title}
//         </motion.h2>

//         {/* Certificates Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
//           }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-10"
//         >
//           {images.map((img, i) => (
//             <motion.div
//               key={i}
//               variants={{
//                 hidden: { opacity: 0, scale: 0.9, y: 20 },
//                 visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//               }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gray-50 dark:bg-blue-900/30 p-4 border border-gray-100 dark:border-blue-800/50 group transition-all duration-500"
//             >
//               <div className="relative w-full h-full">
//                 <Image
//                   src={img}
//                   alt={`Certificate ${i + 1}`}
//                   fill
//                   className="object-contain"
//                 />
//               </div>

//               {/* Subtle Overlay on Hover */}
//               <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500" />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { dict } from "../../lib/dictionaries";

const images = [
  "/certif1.png",
  "/certif2.png",
  "/certif3.png",
];

const hsseImages = [
  "/h1.jpeg",
  "/h2.jpeg",
  "/h3.jpeg",
];

export default function HSSE() {
  const { lang } = useLanguage();

  const d = dict[lang as keyof typeof dict].hsse;
  const c = dict[lang as keyof typeof dict].certificates;

  return (
    <section id="hsse" className="min-h-[100svh] lg:min-h-[100dvh] bg-gray-50 dark:bg-gradient-to-br dark:from-[#0B2C4D] dark:via-[#003554] dark:to-[#0B2C4D] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B2C4D] dark:text-white mb-4">
            {d.title}
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-16 bg-[#2F80ED]" />
            <div className="w-2 h-2 bg-[#2F80ED] rounded-full" />
            <div className="h-[2px] w-16 bg-[#2F80ED]" />
          </div>
        </motion.div>

        {/* HSSE Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-10"
        >
          {hsseImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(11, 44, 77, 0.15)" }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <Image
                src={img}
                alt={`HSSE ${index + 1}`}
                fill
                className="object-contain p-2"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B2C4D] dark:text-white mb-4">
            {c.title}
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-16 bg-[#2F80ED]" />
            <div className="w-2 h-2 bg-[#2F80ED] rounded-full" />
            <div className="h-[2px] w-16 bg-[#2F80ED]" />
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(11, 44, 77, 0.15)" }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <Image
                src={img}
                alt={`Certificate ${index + 1}`}
                fill
                className="object-contain p-4"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}