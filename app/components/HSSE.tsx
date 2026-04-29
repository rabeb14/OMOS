// "use client";

// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { useLanguage } from "../LanguageContext";
// import { dict } from "../dictionaries";

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
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

const images = [
  "/certif1.png",
  "/certif2.png",
  "/certif3.png",
];

export default function HSSE() {
  const { lang } = useLanguage();

  const d = dict[lang as keyof typeof dict].hsse;
  const c = dict[lang as keyof typeof dict].certificates;

  return (
  <section id="hsse" className="py-10 bg-white dark:bg-blue-950">

      <div className="max-w-5xl mx-auto px-1">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-900 dark:text-white">
          {d.title}
          <div className="h-1 w-26 bg-blue-500 mx-auto mt-3 rounded-full" />
        </h2>

        {/* Images sans cadre */}
        <div className="grid md:grid-cols-3 gap-2">

          {/* Image 1 */}
          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/QHSSE1.jpeg"
              alt="Safety"
              fill
              className="object-contain"
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/QHSSE2.jpeg"
              alt="Environment"
              fill
              className="object-contain"
            />
          </div>
          {/* Image 3 */}
          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/QHSSE3.jpeg"
              alt="Environment"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="max-w-5xl mx-auto px-4 text-center mt-16">

        <h2 className="text-4xl font-bold mb-10 text-blue-900 dark:text-white">
          {c.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-[3/4]">
              <Image
                src={img}
                alt={`Certificate ${i + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}