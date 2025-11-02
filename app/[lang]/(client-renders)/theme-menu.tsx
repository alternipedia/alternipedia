"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button } from "@/app/(components)/ui/button";

type Theme = "light" | "dark" | "system";

export default function ThemeMenu() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const raw = localStorage.getItem("theme");
      if (raw === "light" || raw === "dark" || raw === "system") return raw;
    } catch (e) { }
    return "system";
  });

  useLayoutEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) { 
      console.error("Failed to set theme in localStorage:", e);
    }
    // Read existing cookie value and only reload if the cookie value actually changes.
    // This prevents unnecessary full-page reloads when the user clicks the same theme.
    let previousCookie: string | null = null;
    try {
      const m = document.cookie.match("(?:^|; )theme=([^;]*)");
      previousCookie = m ? decodeURIComponent(m[1]) : null;
    } catch (e) {
      // swallow parse errors
      console.error("Failed to read theme cookie:", e);
    }

    try {
      document.cookie = `theme=${encodeURIComponent(theme)}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    } catch (e) {
      console.error("Failed to set theme cookie:", e);
    }

    // Only reload when the previously-stored cookie value is different from the
    // new theme. If there was no previous cookie (null) we treat that as a change
    // and reload so server-rendered bits pick up the new theme.
    if (previousCookie !== theme) {
      try {
        window.location.reload();
      } catch (e) {
        // If reload fails for any reason just log it — this is non-fatal.
        console.error("Failed to reload after theme change:", e);
      }
    }
  }, [theme]);

  function applyTheme(t: Theme) {
    const el = document.documentElement;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (t === "dark") {
      el.classList.add("dark");
    } else if (t === "light") {
      el.classList.remove("dark");
    } else {
      // system
      if (prefersDark) el.classList.add("dark");
      else el.classList.remove("dark");
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={() => setTheme("light")} className="cursor-pointer">Light</Button>
      <Button onClick={() => setTheme("dark")} className="cursor-pointer">Dark</Button>
      <Button onClick={() => setTheme("system")} className="cursor-pointer">System</Button>
    </div>
  );
}
