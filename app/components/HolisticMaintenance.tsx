"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { dict } from "../dictionaries";

const hotspots = [
  {
    id: 0,
    x: "20%", y: "30%",
    color: "#00d2ff"
  },
  {
    id: 1,
    x: "50%", y: "20%",
    color: "#00d2ff"
  },
  {
    id: 3,
    x: "70%", y: "45%",
    color: "#00d2ff"
  },
  {
    id: 2,
    x: "55%", y: "85%",
    color: "#00d2ff"
  },
  {
    id: 4,
    x: "80%", y: "56%",
    color: "#00d2ff"
  }
];

export default function HolisticMaintenance() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].business;
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="Businesses" className="py-24 bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl md:text-4xl font-bold text-center mb-12 text-blue-900 dark:text-white"
        >
          {d.title}
          <div className="h-1 w-26 bg-blue-500 mx-auto mt-3 rounded-full" />
        </motion.h2>

        {/* Diagramme Interactif */}
        <div className="relative aspect-video w-[80%] mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black/40">
          <Image
            src="/holistic.png"
            alt="Holistic Industrial View"
            fill
            className="object-cover opacity-60"
          />

          {/* Overlay avec lignes et hotspots */}
          <div className="absolute inset-0">
            {hotspots.map((spot) => {
              // On force le côté pour certains points ou on utilise la logique auto
              const forceSide: { [key: number]: 'left' | 'right' } = {
                2: 'right', // Pipeline Services à droite
              };

              const side = forceSide[spot.id] || (parseInt(spot.x) > 50 ? 'left' : 'right');
              const sideClass = side === 'left' ? 'right-full mr-4' : 'left-full ml-4';

              return (
                <div
                  key={spot.id}
                  className="absolute"
                  style={{ left: spot.x, top: spot.y }}
                >
                  {/* Hotspot Pulse */}
                  <motion.button
                    onClick={() => setActive(active === spot.id ? null : spot.id)}
                    whileHover={{ scale: 1.2 }}
                    className="relative flex items-center justify-center w-8 h-8 z-20 group"
                  >
                    <span className="absolute inset-0 rounded-full bg-blue-500/50 animate-ping"></span>
                    <span className="relative w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow-[0_0_15px_#60a5fa] group-hover:bg-white transition-colors"></span>

                    {/* Label fixe (Format Image) */}
                    <div className={`absolute ${sideClass} px-4 py-2 bg-blue-900/90 backdrop-blur-md border border-blue-400/50 rounded-lg whitespace-nowrap hidden md:block shadow-xl`}>
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-100">
                        {d.cards[spot.id].title}
                      </p>
                    </div>
                  </motion.button>
                </div>
              );
            })}
          </div>

          {/* Carte de détails flottante */}
          <AnimatePresence>
            {active !== null && (
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.9 }}
                className="absolute right-6 top-6 bottom-6 w-80 bg-blue-950/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 z-30 shadow-2xl overflow-y-auto"
              >
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 text-white/50 hover:text-white"
                >
                  ✕
                </button>
                <h3 className="text-xl font-bold text-blue-400 mb-6 uppercase tracking-tight">
                  {d.cards[active].title}
                </h3>
                <div className="w-12 h-1 bg-blue-500 mb-6"></div>
                <ul className="space-y-4">
                  {d.cards[active].desc.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6] shrink-0"></span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info mobile si rien n'est sélectionné */}
        <div className="mt-10 text-center md:hidden">
          <p className="text-blue-600/60 dark:text-blue-300/60 text-sm animate-pulse">
            {lang === "fr" ? "Touchez les points pour plus de détails" : "Tap points for more details"}
          </p>
        </div>

      </div>
    </section>
  );
}
