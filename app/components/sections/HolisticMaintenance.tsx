"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { dict } from "../../lib/dictionaries";
import { useTheme } from "../providers/ThemeProvider";

const spots = [
  { id: 0, side: "left"  as const, dotX: 26, dotY: 28 }, //1
  { id: 2, side: "left"  as const, dotX: 50, dotY: 60 }, //3
  { id: 4, side: "right" as const, dotX: 20, dotY: 51 }, //5
  { id: 1, side: "right" as const, dotX: 46, dotY: 34 }, //2
  { id: 3, side: "right" as const, dotX: 72, dotY: 53 }, //4
];

export default function HolisticMaintenance() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const d = dict[lang as keyof typeof dict].business;

  const left = spots.filter((s) => s.side === "left");
  const right = spots.filter((s) => s.side === "right");

  return (
    <section
      id="Businesses"
      className="pt-4 sm:pt-5 pb-12 sm:pb-16 bg-[#e7edf4] dark:bg-[#003554] text-white overflow-hidden min-h-[100svh] lg:min-h-[100dvh]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── Desktop layout ── */}
        <div className="relative hidden lg:grid gap-4 min-h-[80vh]" style={{ gridTemplateColumns: "1fr 2fr 1fr", gridTemplateRows: "auto 1fr" }}>

          {/* Left cards - span both rows */}
          <div className="row-span-2 flex flex-col justify-between py-12 gap-1">
            {left.map((s, idx) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative bg-[#003554] from-white/[0.07] to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl hover:border-brand-400/30 transition-colors duration-300"
              >
                {/* Number badge */}
                <span className="absolute -top-3 -right-3 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-500 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white shadow-lg shadow-brand-500/40">
                  {s.id + 1}
                </span>
                <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-400 mb-1.5 sm:mb-2">
                  {d.cards[s.id].title}
                </h4>
                <div className="w-6 sm:w-8 h-0.5 bg-brand-500/50 mb-1.5 sm:mb-2 rounded-full" />
                <ul className="space-y-1 sm:space-y-1.5">
                  {d.cards[s.id].desc.map((pt: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-[10px] sm:text-[11px] text-gray-300/90 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-400 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Title - center top */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center self-start pt-4 text-[#0B2C4D] dark:text-white"
          >
            {d.title}
            <div className="h-1 w-24 bg-brand-500 mx-auto mt-3 rounded-full " />
          </motion.h2>

          {/* Right cards - span both rows */}
          <div className="row-span-2 flex flex-col justify-between py-12 gap-4">
            {right.map((s, idx) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative bg-[#003554] from-white/[0.07] to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl hover:border-brand-400/30 transition-colors duration-300"
              >
                {/* Number badge */}
                <span className="absolute -top-3 -left-3 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-500 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white shadow-lg shadow-brand-500/40">
                  {s.id + 1}
                </span>
                <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-400 mb-1.5 sm:mb-2">
                  {d.cards[s.id].title}
                </h4>
                <div className="w-6 sm:w-8 h-0.5 bg-brand-500/50 mb-1.5 sm:mb-2 rounded-full" />
                <ul className="space-y-1 sm:space-y-1.5">
                  {d.cards[s.id].desc.map((pt: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-[10px] sm:text-[11px] text-gray-300/90 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-400 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Center image - below title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={theme === "light" ? "/bus4.png" : "/business2.png"}
                alt="Industrial Maintenance Overview"
                fill
                className="object-contain drop-shadow-[0_0_60px_rgba(0,166,251,0.15)]"
              />
              {/* Hotspot numbered dots */}
              {spots.map((s) => (
                <div
                  key={s.id}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${s.dotX}%`, top: `${s.dotY}%` }}
                >
                  <span className="absolute -inset-2 bg-brand-400/20 rounded-full animate-ping" />
                  <span className="relative flex items-center justify-center w-6 h-6 bg-brand-500 rounded-full border-2 border-white shadow-[0_0_20px_rgba(0,166,251,0.5)] text-[10px] font-bold text-white">
                    {s.id + 1}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── Mobile title ── */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:hidden text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4 text-[#0B2C4D] dark:text-white"
        >
          {d.title}
          <div className="h-1 w-24 bg-brand-500 mx-auto mt-3 rounded-full" />
        </motion.h2>

        {/* ── Mobile layout ── */}
        <div className="lg:hidden space-y-4 mt-4">
          <div className="relative aspect-video">
            <Image
              src={theme === "light" ? "/bus4.png" : "/business2.png"}
              alt="Industrial Maintenance Overview"
              fill
              className="object-cover opacity-80"
            />
            {/* Numbered hotspot dots on mobile image */}
            {spots.map((s) => (
              <div
                key={s.id}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${s.dotX}%`, top: `${s.dotY}%` }}
              >
                <span className="absolute -inset-1.5 bg-brand-400/20 rounded-full animate-ping" />
                <span className="relative flex items-center justify-center w-5 h-5 bg-brand-500 rounded-full border-2 border-white shadow-[0_0_12px_rgba(0,166,251,0.5)] text-[9px] font-bold text-white">
                  {s.id + 1}
                </span>
              </div>
            ))}
          </div>
          {d.cards.map((card: { title: string; desc: readonly string[] }, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#003554] from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-brand-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-brand-500/40 shrink-0">
                  {i + 1}
                </span>
                <h4 className="text-sm font-bold uppercase text-brand-400">
                  {card.title}
                </h4>
              </div>
              <div className="w-8 h-0.5 bg-brand-500/50 mb-2 rounded-full ml-10" />
              <ul className="space-y-1.5 ml-10">
                {card.desc.map((pt: string, j: number) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed">
                    <span className="mt-1 w-1 h-1 rounded-full bg-brand-400 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
