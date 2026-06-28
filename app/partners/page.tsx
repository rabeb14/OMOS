"use client";

// =============================================================================
// PartnersPage — Page "Our Partners"
// -----------------------------------------------------------------------------
// Navigation par logos cliquables avec affichage dynamique du contenu.
// Pour HIZEN : affiche 2 cartes séparées (une par produit).
// Pour les autres : une seule carte.
// Cartes sans titre de partenaire, seulement le contenu.
// =============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { dict } from "../lib/dictionaries";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
type Product = {
  tagline: string;
  description: string;
  image: string;
};

type Partner = {
  logo: string;
  name: string;
  isCortem?: boolean; // Pour mettre en valeur le logo Cortem
  products: Product[];
};

// Map partner names to their logos
const LOGO_MAP: Record<string, string> = {
  "HIZEN": "/hizen.png",
  "SIDC": "/part2.png",
  "CORTEM GROUP": "/cortem.png"
};

// Map products to their images by partner name and product index
const PRODUCT_IMAGE_MAP: Record<string, string[]> = {
  "HIZEN": ["/partenaire1.png", "/partenaire2.png"],
  "SIDC": ["/partenaire3.png"],
  "CORTEM GROUP": ["/partenaire4.png"]
};

// -----------------------------------------------------------------------------
// Données des partenaires (chargées depuis le dictionnaire)
// -----------------------------------------------------------------------------
function getPartnersFromDict(lang: string): Partner[] {
  const partnersDict = dict[lang as keyof typeof dict].partners.list;
  return partnersDict.map((partner) => ({
    logo: LOGO_MAP[partner.name] || "/partenaire1.png",
    name: partner.name,
    isCortem: partner.name === "CORTEM GROUP",
    products: partner.products.map((product, index) => {
      const images = PRODUCT_IMAGE_MAP[partner.name] || ["/partenaire1.png"];
      return {
        tagline: product.tagline,
        description: product.description,
        image: images[index] || "/partenaire1.png"
      };
    })
  }));
}

// =============================================================================
// Composant principal
// =============================================================================
export default function PartnersPage() {
  const { lang } = useLanguage();
  const d = dict[lang as keyof typeof dict].partners;
  const [activePartner, setActivePartner] = useState(0);
  const PARTNERS = getPartnersFromDict(lang);

  return (
    <main className="relative min-h-[100svh] lg:min-h-[100dvh] bg-[#e7edf4] dark:bg-gradient-to-br dark:from-[#0B2C4D] dark:via-[#003554] dark:to-[#0B2C4D] overflow-hidden">

      {/* Grille décorative */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#2F80ED 1px, transparent 1px), linear-gradient(90deg, #2F80ED 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Cercles décoratifs */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#2F80ED]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-[#0B2C4D]/20 dark:bg-[#2F80ED]/20 rounded-full blur-3xl" />
      </div>

      <section className="relative z-10 pt-6 sm:pt-8 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2C4D] dark:text-white uppercase tracking-tight mb-4">
              {d.title}
            </h1>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-[2px] w-16 bg-[#2F80ED]" />
              <div className="w-2 h-2 bg-[#2F80ED] rounded-full" />
              <div className="h-[2px] w-16 bg-[#2F80ED]" />
            </div>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {d.subtitle}
            </p>
          </motion.div>

          {/* Logo Navigation Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10"
          >
            {PARTNERS.map((partner, index) => (
              <button
                key={index}
                onClick={() => setActivePartner(index)}
                className={`relative flex items-center justify-center transition-all duration-300 ${
                  activePartner === index
                    ? "scale-110"
                    : "opacity-70 hover:opacity-100 hover:scale-105"
                }`}
              >
                <div
                  className={`relative p-3 rounded-2xl transition-all duration-300 ${
                    activePartner === index
                      ? "bg-white shadow-[0_8px_30px_rgba(47,128,237,0.3)] border-2 border-[#2F80ED]"
                      : "bg-white/50 border-2 border-transparent"
                  }`}
                >
                  <div
                    className={`relative ${
                      partner.isCortem
                        ? "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
                        : "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
                    }`}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Partner Content Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePartner}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {PARTNERS[activePartner].name === "HIZEN" ? (
                // HIZEN: Display TWO separate cards stacked vertically
                <div className="flex flex-col gap-8">
                  {PARTNERS[activePartner].products.map((product, idx) => (
                    <ProductCard key={idx} product={product} logo={PARTNERS[activePartner].logo} />
                  ))}
                </div>
              ) : (
                // Others: Display single card with tabs
                <PartnerCard partner={PARTNERS[activePartner]} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mt-16 overflow-hidden bg-gradient-to-br from-[#0B2C4D] via-[#1a4a7a] to-[#2F80ED] dark:from-[#003554] dark:via-[#0B2C4D] dark:to-[#003554] rounded-3xl p-8 md:p-14 shadow-2xl"
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#2F80ED]/30 rounded-full blur-3xl" />

            <div className="relative text-center">
              <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#7FB8FF] uppercase mb-3">
                {d.joinUs}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
                {d.ctaTitle}
              </h3>
              <p className="text-white/80 max-w-xl mx-auto mb-7 text-sm sm:text-base">
                {d.ctaSubtitle}
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0B2C4D] font-semibold px-7 py-3.5 rounded-xl shadow-2xl hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300"
              >
                {d.ctaButton}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// =============================================================================
// ProductCard — Carte produit unique horizontale (pour HIZEN)
// =============================================================================
function ProductCard({ product, logo }: { product: Product; logo: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="group relative bg-white/85 dark:bg-white/5 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-[0_25px_70px_-15px_rgba(47,128,237,0.4)] border border-white/60 dark:border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-1"
    >
      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2F80ED] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Corner accents */}
      <span className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#2F80ED]/40 rounded-tl-lg pointer-events-none" />
      <span className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#2F80ED]/40 rounded-br-lg pointer-events-none" />

      <div className="flex flex-col lg:flex-row">
        {/* Image column */}
        <div className="lg:w-[48%] relative">
          <div className="relative w-full h-64 sm:h-80 lg:h-full lg:min-h-[350px] overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-white dark:to-gray-100 flex items-center justify-center">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#2F80ED]/5 to-transparent group-hover:from-[#2F80ED]/15 transition-colors duration-500" />
            <Image
              src={product.image}
              alt="Product"
              fill
              className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content column */}
        <div className="lg:w-[52%] p-6 sm:p-8 flex flex-col justify-center">
          {/* Tagline */}
          <div className="flex items-start gap-1.5 mb-3">
            <svg className="w-3.5 h-3.5 mt-1 text-[#2F80ED] shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-[#2F80ED] uppercase tracking-wider leading-snug">
              {product.tagline}
            </span>
          </div>

          {/* Decorative line */}
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[2px] w-10 bg-[#2F80ED]" />
            <div className="w-1.5 h-1.5 bg-[#2F80ED] rounded-full" />
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#2F80ED]/30 to-transparent" />
          </div>

          {/* Description */}
          <div className="relative">
            <svg
              className="absolute -top-2 -left-1 w-8 h-8 text-[#2F80ED]/15 dark:text-white/10"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
            </svg>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify pl-6">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// =============================================================================
// PartnerCard — Carte partenaire avec navigation par onglets pour produits multiples
// =============================================================================
function PartnerCard({ partner }: { partner: Partner }) {
  const [activeProduct, setActiveProduct] = useState(0);
  const hasMultipleProducts = partner.products.length > 1;
  const product = partner.products[activeProduct];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="group relative bg-white/85 dark:bg-white/5 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-[0_25px_70px_-15px_rgba(47,128,237,0.4)] border border-white/60 dark:border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-1"
    >
      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2F80ED] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Corner accents */}
      <span className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#2F80ED]/40 rounded-tl-lg pointer-events-none" />
      <span className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#2F80ED]/40 rounded-br-lg pointer-events-none" />

      <div className="flex flex-col lg:flex-row">
        {/* Image column */}
        <div className="lg:w-[48%] relative">
          <div className="relative w-full h-64 sm:h-80 lg:h-full lg:min-h-[350px] overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-white dark:to-gray-100 flex items-center justify-center">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#2F80ED]/5 to-transparent group-hover:from-[#2F80ED]/15 transition-colors duration-500" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={product.image}
                  alt="Product"
                  fill
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Content column */}
        <div className="lg:w-[52%] p-6 sm:p-8 flex flex-col justify-center">
          {/* Logo only (no name/title) */}
          {/* <div className="flex justify-center mb-5">
            <div className="relative w-20 h-20 bg-white rounded-2xl shadow-xl ring-2 ring-[#2F80ED]/20 group-hover:ring-[#2F80ED]/60 group-hover:shadow-[0_10px_40px_rgba(47,128,237,0.35)] transition-all duration-500 flex items-center justify-center">
              <Image
                src={partner.logo}
                alt="Partner logo"
                fill
                className="object-contain p-3"
              />
            </div>
          </div> */}

          {/* Product tabs (only if multiple products) */}
          {hasMultipleProducts && (
            <div className="flex flex-wrap gap-2 mb-5 justify-center">
              {partner.products.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProduct(idx)}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                    activeProduct === idx
                      ? "bg-gradient-to-r from-[#0B2C4D] to-[#2F80ED] text-white shadow-lg shadow-[#2F80ED]/30 scale-105"
                      : "bg-white/70 dark:bg-white/10 text-[#0B2C4D] dark:text-gray-300 hover:bg-[#2F80ED]/10 hover:text-[#2F80ED]"
                  }`}
                >
                  {p.tagline.length > 30 ? `Product ${idx + 1}` : p.tagline}
                </button>
              ))}
            </div>
          )}

          {/* Animated content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {/* Tagline */}
              <div className="flex items-start gap-1.5 mb-3">
                <svg className="w-3.5 h-3.5 mt-1 text-[#2F80ED] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm font-semibold text-[#2F80ED] uppercase tracking-wider leading-snug">
                  {product.tagline}
                </span>
              </div>

              {/* Decorative line */}
              <div className="flex items-center gap-2 mb-4">
                <div className="h-[2px] w-10 bg-[#2F80ED]" />
                <div className="w-1.5 h-1.5 bg-[#2F80ED] rounded-full" />
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#2F80ED]/30 to-transparent" />
              </div>

              {/* Description */}
              <div className="relative">
                <svg
                  className="absolute -top-2 -left-1 w-8 h-8 text-[#2F80ED]/15 dark:text-white/10"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify pl-6">
                  {product.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
