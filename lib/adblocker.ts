// hooks/useAdBlockDetector.ts
"use client";
import { useEffect, useState } from "react";

// hello world

async function detectAdBlock(timeout = 1500): Promise<boolean> {
  return new Promise((resolve) => {
    let resolved = false;

    const cleanup = (fakeAd: HTMLElement | null, script: HTMLScriptElement | null) => {
      try {
        if (fakeAd && fakeAd.parentNode) fakeAd.parentNode.removeChild(fakeAd);
        if (script && script.parentNode) script.parentNode.removeChild(script);
      } catch (e) {
        // ignore cleanup errors
      }
    };

    // 1. DOM check
    const fakeAd = document.createElement("div");
    fakeAd.className = "adsbygoogle";
    // keep it present but unobtrusive so page CSS can still apply
    fakeAd.style.width = "1px";
    fakeAd.style.height = "1px";
    fakeAd.style.position = "absolute";
    fakeAd.style.left = "-9999px";
    fakeAd.style.top = "0";
    document.body.appendChild(fakeAd);

    // allow the browser one frame to apply computed styles
    requestAnimationFrame(() => {
      const computed = window.getComputedStyle(fakeAd);
      const rectsEmpty = fakeAd.getClientRects().length === 0;
      const offsetHidden = fakeAd.offsetParent === null || fakeAd.offsetHeight === 0;
      const domRemoved = !document.body.contains(fakeAd);
      // consider hidden if removed or definitely zero-sized/hidden via CSS
      const domHidden = domRemoved || rectsEmpty || offsetHidden || computed.display === "none" || computed.visibility === "hidden";

      // 2. Network check
      const script = document.createElement("script");
      let timer: number | undefined;

      const onDone = (result: boolean) => {
        if (resolved) return;
        resolved = true;
        cleanup(fakeAd, script);
        if (timer) window.clearTimeout(timer);
        resolve(result);
      };

      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      script.type = "text/javascript";

      script.onerror = () => {
        // network blocked — strong indicator
        onDone(true);
      };
      script.onload = () => {
        // script loaded successfully — less likely to be blocked. Only treat as blocked
        // if the fake ad element was removed from the DOM entirely (strong signal).
        onDone(domRemoved);
      };

      document.head.appendChild(script);

      // safety timeout: if neither event fires, fall back to DOM-only heuristic
      timer = window.setTimeout(() => {
        // be conservative: only report blocked when element was removed from DOM
        onDone(domRemoved);
      }, timeout);
    });
  });
}

export function useAdBlockDetector() {
  const [isAdBlocked, setIsAdBlocked] = useState(false);

  useEffect(() => {
    let cancelled = false;
    if (typeof window === "undefined") return;

    detectAdBlock().then((detected) => {
      if (!cancelled) setIsAdBlocked(detected);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return isAdBlocked;
}