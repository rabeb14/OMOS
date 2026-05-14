import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statique HTML/CSS/JS — compatible hébergement mutualisé OVH (Apache)
  output: "export",

  // Génère des URLs avec slash final (ex: /about/ au lieu de /about)
  // → meilleure compatibilité avec Apache (OVH) qui sert index.html depuis chaque dossier
  trailingSlash: true,

  // Désactive l'optimisation d'image Next.js (nécessite un serveur Node)
  // Les images seront servies telles quelles depuis /public
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
