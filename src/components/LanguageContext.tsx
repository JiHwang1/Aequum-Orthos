"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import translations from "@/data/translations.json";

type Language = "EN" | "KR";

export const LanguageContext = createContext({
  lang: "EN" as Language,
  toggleLang: () => {},
  t: (key: string): string => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("EN");

  // Prevent hydration mismatch by optionally defaulting on mount or ignore for pure static text
  const toggleLang = () => setLang((prev) => (prev === "EN" ? "KR" : "EN"));

  const t = (key: string): string => {
    const dict = translations[lang] as Record<string, string>;
    if (dict && dict[key]) {
      return dict[key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
