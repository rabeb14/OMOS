"use client";

// =============================================================================
// LanguageContext — Support multilingue : Anglais (en), Français (fr), Arabe (ar)
// L'arabe utilise la direction RTL (right-to-left), gérée via l'attribut
// `dir` sur l'élément <html>.
// =============================================================================

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "fr" | "ar";

const RTL_LANGS: Lang[] = ["ar"];
const STORAGE_KEY = "omos-lang";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Charge la langue persistée au montage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && (saved === "en" || saved === "fr" || saved === "ar")) {
        setLangState(saved);
      }
    } catch {
      /* localStorage indisponible (mode privé, etc.) */
    }
  }, []);

  // Met à jour les attributs HTML (lang + dir) à chaque changement de langue
  useEffect(() => {
    const dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      /* ignore */
    }
  };

  const dir: "ltr" | "rtl" = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);