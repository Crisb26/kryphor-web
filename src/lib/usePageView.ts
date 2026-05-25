"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function usePageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname }),
    }).catch(() => {}); // fire and forget — never block the UI
  }, [pathname]);
}
