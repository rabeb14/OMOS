
// "use client";

// import { motion } from "framer-motion";
// import { useLanguage } from "../../context/LanguageContext";
// import { dict } from "../../lib/dictionaries";
// import Image from "next/image";

// export default function PhilosophyVision() {
//   const { lang } = useLanguage();
//   const d = dict[lang as keyof typeof dict].philosophy;

//   const principles = [
//     {
//       icon: "🎧",
//       title: "Listening is the Key to Understanding",
//       desc: "We prioritize active listening to fully grasp our clients' unique needs and challenges."
//     },
//     {
//       icon: "🎯",
//       title: "We Deliver What We Promise",
//       desc: "Accountability is fundamental; our commitment is our bond."
//     },
//     {
//       icon: "🤝",
//       title: "Positive Relationships",
//       desc: "We are dedicated to fostering and maintaining strong, positive relationships with both our employees and our clients."
//     },
//     {
//       icon: "🏆",
//       title: "Expertise and Efficiency",
//       desc: "We deploy all our expertise and resources to complete tasks not only on time, but also in a cost-effective manner without compromising quality."
//     }
//   ];

//   const corePillars = [
//     {
//       icon: "👥",
//       title: "People",
//       desc: "Our personnel are at the heart of our success. We recognize their immense value and are deeply committed to providing a supportive work environment, ongoing encouragement, and comprehensive personal development opportunities necessary to achieve our collective goals."
//     },
//     {
//       icon: "📈",
//       title: "Performance",
//       desc: "Getting it right the first time, every time is our mantra. We are passionate about safely delivering exceptional quality customer service. We embrace teamwork and collectively assume responsibility for delivering the highest standard of service possible."
//     },
//     {
//       icon: "🤝",
//       title: "Partnerships",
//       desc: "We believe in building enduring relationships rather than just executing transactions. We listen intently to our customers and build strong partnerships based on mutual trust and a deep understanding of their specific needs."
//     }
//   ];

//   return (
//     <section id="PhilosophyVision" className="relative min-h-[100svh] lg:min-h-[100dvh] bg-[#e7edf4] dark:bg-gradient-to-br dark:from-[#0B2C4D] dark:via-[#003554] dark:to-[#0B2C4D]">
//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/newhero1.jpeg"
//           alt="Philosophy background"
//           fill
//           priority
//           className="object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-white/70 dark:bg-[#0B2C4D]/70" />
//       </div>

//       <div className="relative z-10">
//       {/* Hero Section */}
//       <div className="relative min-h-[35vh] flex items-center overflow-hidden">
//         {/* Background decorative elements */}
//         {/* <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
//           <div className="absolute top-20 right-20 w-96 h-96 bg-[#2F80ED] rounded-full blur-3xl" />
//           <div className="absolute bottom-20 right-40 w-64 h-64 bg-[#0B2C4D] rounded-full blur-3xl" />
//         </div> */}

//         {/* Subtle curved lines */}
//         {/* <div className="absolute right-0 top-0 h-full w-1/3 opacity-5">
//           <svg viewBox="0 0 200 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//             <path d="M0 0 Q100 200 50 400 T0 800" stroke="#2F80ED" strokeWidth="2" fill="none"/>
//             <path d="M50 0 Q150 200 100 400 T50 800" stroke="#2F80ED" strokeWidth="1.5" fill="none"/>
//             <path d="M100 0 Q200 200 150 400 T100 800" stroke="#2F80ED" strokeWidth="1" fill="none"/>
//           </svg>
//         </div> */}

//         <div className="relative z-10 max-w-7xl mx-auto px-4 py-2 w-full">
//           {/* Centered Title and Subtitle */}
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B2C4D] dark:text-white mb-3 tracking-tight">
//               Philosophy & Vision
//             </h1>

//             {/* Decorative line with dot */}
//             <div className="flex items-center justify-center gap-2 mb-3">
//               <div className="h-[2px] w-10 bg-[#2F80ED]" />
//               <div className="w-1.5 h-1.5 bg-[#2F80ED] rounded-full" />
//               <div className="h-[2px] w-10 bg-[#2F80ED]" />
//             </div>

//             <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
//               At OMOS, our philosophy is anchored in a set of core principles that drive our operations and relationships
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Principles Section */}
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
//         >
//           {principles.map((principle, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(11, 44, 77, 0.15)" }}
//               className="bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100 dark:border-white/10 transition-all duration-300"
//             >
//               <div className="w-12 h-12 bg-blue-50 dark:bg-[#2F80ED]/20 rounded-xl flex items-center justify-center mb-3">
//                 <span className="text-2xl">{principle.icon}</span>
//               </div>
//               <h3 className="text-sm font-bold text-[#0B2C4D] dark:text-white mb-2 leading-tight">
//                 {principle.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-3">
//                 {principle.desc}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Core Pillars Section */}
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-8"
//         >
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0B2C4D] dark:text-white mb-4">
//             Our Core Pillars
//           </h2>
//           {/* Decorative line with dot */}
//           <div className="flex items-center justify-center gap-2">
//             <div className="h-[2px] w-12 bg-[#2F80ED]" />
//             <div className="w-1.5 h-1.5 bg-[#2F80ED] rounded-full" />
//             <div className="h-[2px] w-12 bg-[#2F80ED]" />
//           </div>
//         </motion.div>

//         <div className="space-y-5">
//           {corePillars.map((pillar, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               whileHover={{ scale: 1.01, boxShadow: "0 16px 32px rgba(11, 44, 77, 0.15)" }}
//               className="bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-8 shadow-lg border border-gray-100 dark:border-white/10 transition-all duration-300 flex flex-col md:flex-row items-start gap-4 md:gap-6"
//             >
//               <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#2F80ED] to-[#0B2C4D] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
//                 <span className="text-3xl">{pillar.icon}</span>
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-lg md:text-xl font-extrabold text-[#0B2C4D] dark:text-white mb-2">
//                   {pillar.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base line-clamp-4">
//                   {pillar.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       </div>

//     </section>
//   );
// }

// ------------------------------------------------------------------------------------------------

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { dict } from "../../lib/dictionaries";
import Image from "next/image";

export default function PhilosophyVision() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].philosophy;

  const principles = [
    {
      icon: "🎧",
      title: d.listening,
      desc: d.listeningDesc
    },
    {
      icon: "🎯",
      title: d.commitment,
      desc: d.commitmentDesc
    },
    {
      icon: "🤝",
      title: d.relationships,
      desc: d.relationshipsDesc
    },
    {
      icon: "🏆",
      title: d.excellence,
      desc: d.excellenceDesc
    }
  ];

  const corePillars = [
    {
      icon: "👥",
      title: d.people,
      desc: d.peopleDesc
    },
    {
      icon: "📈",
      title: d.performance,
      desc: d.performanceDesc
    },
    {
      icon: "🤝",
      title: d.partnerships,
      desc: d.partnershipsDesc
    }
  ];

  return (
    <section
      id="PhilosophyVision"
      // FIX: replaced min-h-[100svh]/min-h-[100dvh] with a single min-h-screen
      // + w-full. Les unités svh/dvh sont mal supportées sur Safari iOS < 16
      // et peuvent provoquer des espaces blancs ou un scroll horizontal.
      // position relative explicite pour le background Image fill.
      className="relative w-full min-h-screen bg-[#e7edf4] dark:bg-gradient-to-br dark:from-[#0B2C4D] dark:via-[#003554] dark:to-[#0B2C4D]"
    >
      {/* Background image */}
      {/*
        FIX: le wrapper du background était absolute inset-0 sans hauteur
        explicite sur le parent — sur Safari le parent pouvait se retrouver
        en height:0 avant que le contenu soit peint.
        On s'assure que le parent section a min-h-screen (ci-dessus)
        et que ce wrapper ne crée pas de nouveau contexte de stacking inutile.
      */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/newhero1.jpeg"
          alt="Philosophy background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/70 dark:bg-[#0B2C4D]/70" />
      </div>

      {/*
        FIX: ajout de w-full sur le wrapper z-10 pour éviter que Webkit
        ne lui attribue une largeur auto incorrecte dans certains contextes flex.
        Ajout de pb-10 pour garantir un padding bas sur iOS (safe area).
      */}
      <div className="relative z-10 w-full pb-10">

        {/* Hero Section */}
        {/*
          FIX: min-h-[35vh] peut se comporter différemment sur Safari mobile
          (hauteur de la barre d'adresse non comptée). On remplace par
          min-h-[200px] md:min-h-[35vh] pour un comportement prévisible.
          overflow-hidden retiré du parent flex — il peut clipper des enfants
          positionnés sur certains moteurs Webkit.
        */}
        <div className="relative min-h-[200px] md:min-h-[35vh] flex items-center">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-6">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B2C4D] dark:text-white mb-3 tracking-tight">
                {d.title}
              </h1>

              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-[2px] w-10 bg-[#2F80ED]" />
                <div className="w-1.5 h-1.5 bg-[#2F80ED] rounded-full" />
                <div className="h-[2px] w-10 bg-[#2F80ED]" />
              </div>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {d.subtitle}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Principles Section */}
        {/*
          FIX: ajout de w-full et pb-4 pour éviter que la grille ne soit
          coupée en bas sur iOS Safari quand le clavier virtuel est ouvert
          ou que la barre de navigation réduit la hauteur visible.
        */}
        <div className="w-full max-w-7xl mx-auto px-6 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // FIX: ajout de items-stretch pour que toutes les cartes aient
            // la même hauteur dans la grille sur Safari (évite les hauteurs
            // variables qui créent des espaces visuels incohérents).
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(11, 44, 77, 0.15)" }}
                // FIX: ajout de flex flex-col pour que le contenu interne
                // s'étire correctement sur toute la hauteur de la carte
                // (corrige les espaces vides sous le texte sur Mac Safari).
                className="flex flex-col bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100 dark:border-white/10 transition-all duration-300"
              >
                {/*
                  FIX: flex-shrink-0 sur l'icône pour éviter qu'elle
                  soit écrasée sur les petits écrans iOS.
                */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-[#2F80ED]/20 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-2xl">{principle.icon}</span>
                </div>
                <h3 className="text-sm font-bold text-[#0B2C4D] dark:text-white mb-2 leading-tight">
                  {principle.title}
                </h3>
                {/*
                  FIX: ajout de flex-1 pour que le paragraphe pousse vers
                  le bas et aligne le bas de toutes les cartes sur la grille.
                */}
                <p className="flex-1 text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-3">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Pillars Section */}
        <div className="w-full max-w-7xl mx-auto px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0B2C4D] dark:text-white mb-4">
              {d.pillarsTitle}
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-[2px] w-12 bg-[#2F80ED]" />
              <div className="w-1.5 h-1.5 bg-[#2F80ED] rounded-full" />
              <div className="h-[2px] w-12 bg-[#2F80ED]" />
            </div>
          </motion.div>

          <div className="space-y-5">
            {corePillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.01, boxShadow: "0 16px 32px rgba(11, 44, 77, 0.15)" }}
                // FIX: ajout de w-full et min-w-0 pour éviter le dépassement
                // horizontal sur iOS Safari (flex child overflow bug).
                className="w-full min-w-0 bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-8 shadow-lg border border-gray-100 dark:border-white/10 transition-all duration-300 flex flex-col md:flex-row items-start gap-4 md:gap-6"
              >
                {/*
                  FIX: flex-shrink-0 déjà présent — conservé.
                  Tailles explicites en pixels via w-14/h-14 conservées
                  car Webkit respecte mieux les tailles fixes que les
                  tailles relatives dans les enfants flex.
                */}
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#2F80ED] to-[#0B2C4D] rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-3xl">{pillar.icon}</span>
                </div>
                {/*
                  FIX: min-w-0 sur flex-1 pour éviter que le texte
                  dépasse le conteneur sur iOS (bug classique flex + text).
                */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-extrabold text-[#0B2C4D] dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base line-clamp-4">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
