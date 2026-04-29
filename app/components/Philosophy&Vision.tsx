// "use client";

// import { motion, Variants } from "framer-motion";
// import { useLanguage } from "../LanguageContext";
// import { dict } from "../dictionaries";

// export default function PhilosophyVision() {
//   const { lang } = useLanguage();
//   const d = dict[lang as keyof typeof dict].philosophy;

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
//   };

//   return (
//     <section id="PhilosophyVision" className="py-20 bg-gray-50 dark:bg-blue-950 transition-colors duration-300">
//       <div className="max-w-[1400px] mx-auto px-6">

//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-900 dark:text-white"
//         >
//           {d.title}
//         </motion.h2>

//         {/* Philosophy */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
//           className="text-center max-w-none mx-auto mb-8"
//         >
//           <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
//             {d.subtitle}
//           </p>
//         </motion.div>

//         {/* Core Principles */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
//         >

//           <motion.div variants={itemVariants} className="p-8 bg-white dark:bg-blue-900/30 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-black/20 transition-shadow duration-300">
//             <h3 className="font-semibold text-xl mb-3 flex items-center gap-3 text-blue-900 dark:text-white"><span className="text-2xl">🎧</span> {d.listening}</h3>
//             <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//               {d.listeningDesc}
//             </p>
//           </motion.div>

//           <motion.div variants={itemVariants} className="p-8 bg-white dark:bg-blue-900/30 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-black/20 transition-shadow duration-300">
//             <h3 className="font-semibold text-xl mb-3 flex items-center gap-3 text-blue-900 dark:text-white"><span className="text-2xl">🎯</span> {d.commitment}</h3>
//             <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//               {d.commitmentDesc}
//             </p>
//           </motion.div>

//           <motion.div variants={itemVariants} className="p-8 bg-white dark:bg-blue-900/30 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-black/20 transition-shadow duration-300">
//             <h3 className="font-semibold text-xl mb-3 flex items-center gap-3 text-blue-900 dark:text-white"><span className="text-2xl">🤝</span> {d.relationships}</h3>
//             <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//               {d.relationshipsDesc}
//             </p>
//           </motion.div>

//           <motion.div variants={itemVariants} className="p-8 bg-white dark:bg-blue-900/30 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-black/20 transition-shadow duration-300">
//             <h3 className="font-semibold text-xl mb-3 flex items-center gap-3 text-blue-900 dark:text-white"><span className="text-2xl">🏆</span> {d.excellence}</h3>
//             <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//               {d.excellenceDesc}
//             </p>
//           </motion.div>

//         </motion.div>

//         {/* Core Pillars */}
//         <motion.h3
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="text-3xl font-bold text-center mb-6 text-blue-900 dark:text-white"
//         >
//           {d.pillarsTitle}
//         </motion.h3>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid md:grid-cols-3 gap-8"
//         >

//           <motion.div variants={itemVariants} className="p-8 bg-white dark:bg-blue-900/30 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-black/20 transition-shadow duration-300 text-center">
//             <h4 className="text-xl font-bold mb-4 text-blue-900 dark:text-white">{d.people}</h4>
//             <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//               {d.peopleDesc}
//             </p>
//           </motion.div>

//           <motion.div variants={itemVariants} className="p-8 bg-white dark:bg-blue-900/30 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-black/20 transition-shadow duration-300 text-center">
//             <h4 className="text-xl font-bold mb-4 text-blue-900 dark:text-white">{d.performance}</h4>
//             <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//               {d.performanceDesc}
//             </p>
//           </motion.div>

//           <motion.div variants={itemVariants} className="p-8 bg-white dark:bg-blue-900/30 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-black/20 transition-shadow duration-300 text-center">
//             <h4 className="text-xl font-bold mb-4 text-blue-900 dark:text-white">{d.partnerships}</h4>
//             <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//               {d.partnershipsDesc}
//             </p>
//           </motion.div>

//         </motion.div>

//       </div>
//     </section>
//   );
// }


"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

// ✅ Typage propre
type PhilosophyDict = {
  title: string;
  subtitle: string;
  listening: string;
  listeningDesc: string;
  commitment: string;
  commitmentDesc: string;
  relationships: string;
  relationshipsDesc: string;
  excellence: string;
  excellenceDesc: string;
  pillarsTitle: string;
  people: string;
  peopleDesc: string;
  performance: string;
  performanceDesc: string;
  partnerships: string;
  partnershipsDesc: string;
};

export default function PhilosophyVision() {
  const { lang } = useLanguage();

  // ✅ Fix TypeScript propre
  const d = dict[lang as keyof typeof dict].philosophy as PhilosophyDict;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <section
      id="PhilosophyVision"
  className="py-20 bg-gray-50 dark:bg-blue-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-center mb-6 text-blue-900 dark:text-white"
        >
          {d.title}
          <div className="h-1 w-26 bg-blue-500 mx-auto mt-3 rounded-full" />
        </motion.h2>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mx-auto mb-6"
        >
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {d.subtitle}
          </p>
        </motion.div>

        {/* Core Principles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            { icon: "🎧", title: d.listening, desc: d.listeningDesc },
            { icon: "🎯", title: d.commitment, desc: d.commitmentDesc },
            { icon: "🤝", title: d.relationships, desc: d.relationshipsDesc },
            { icon: "🏆", title: d.excellence, desc: d.excellenceDesc }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-5 bg-white dark:bg-blue-900/30 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-blue-900 dark:text-white">
                <span>{item.icon}</span> {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillars Title */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl font-bold text-center mb-5 text-blue-900 dark:text-white"
        >
          {d.pillarsTitle}
        </motion.h3>

        {/* Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5"
        >
          {[
            { title: d.people, desc: d.peopleDesc },
            { title: d.performance, desc: d.performanceDesc },
            { title: d.partnerships, desc: d.partnershipsDesc }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-5 bg-white dark:bg-blue-900/30 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <h4 className="text-base font-bold mb-2 text-blue-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
