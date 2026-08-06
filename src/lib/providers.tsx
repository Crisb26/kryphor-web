"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { usePageView } from "@/lib/usePageView";

export type Theme = "light";
export type Lang = "es" | "en";

interface AppCtx {
  theme: Theme;
  lang: Lang;
  toggleLang: () => void;
}

const AppContext = createContext<AppCtx>({
  theme: "light",
  lang: "es",
  toggleLang: () => {},
});

function PageViewTracker() {
  usePageView();
  return null;
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const theme: Theme = "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    try {
      const l = localStorage.getItem("kl-lang") as Lang;
      if (l === "es" || l === "en") setLang(l);
    } catch {}
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "es" ? "en" : "es";
    setLang(next);
    try { localStorage.setItem("kl-lang", next); } catch {}
  };

  return (
    <AppContext.Provider value={{ theme, lang, toggleLang }}>
      <PageViewTracker />
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
