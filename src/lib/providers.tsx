"use client";
import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";
export type Lang = "es" | "en";

interface AppCtx {
  theme: Theme;
  lang: Lang;
  toggleTheme: () => void;
  toggleLang: () => void;
}

const AppContext = createContext<AppCtx>({
  theme: "dark",
  lang: "es",
  toggleTheme: () => {},
  toggleLang: () => {},
});

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    try {
      const t = localStorage.getItem("kl-theme") as Theme;
      if (t === "light" || t === "dark") {
        setTheme(t);
        document.documentElement.setAttribute("data-theme", t);
      }
      const l = localStorage.getItem("kl-lang") as Lang;
      if (l === "es" || l === "en") setLang(l);
    } catch {}
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("kl-theme", next); } catch {}
  };

  const toggleLang = () => {
    const next: Lang = lang === "es" ? "en" : "es";
    setLang(next);
    try { localStorage.setItem("kl-lang", next); } catch {}
  };

  return (
    <AppContext.Provider value={{ theme, lang, toggleTheme, toggleLang }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
