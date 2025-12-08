"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PageView() {
  const pathname = usePathname();
  const params = useSearchParams();
  const lastSent = useRef<string | null>(null);

  useEffect(() => {
    try {
      const href = typeof window !== "undefined" ? window.location.href : pathname || "";
      // avoid duplicate sends for the same URL
      if (!href || lastSent.current === href) return;

      const payload = {
        uri: href,
        referrer: typeof document !== "undefined" ? document.referrer : null,
        lang: typeof navigator !== "undefined" ? navigator.language : null,
      } as any;

      // Prefer keepalive fetch for SPA navigation; fall back to regular fetch.
      try {
        fetch("/api/page-view", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          // @ts-ignore - keepalive is supported in browsers
          keepalive: true,
        }).catch(() => {
          /* swallow errors */
        });
      } catch (err) {
        // older browsers
        void fetch("/api/page-view", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).catch(() => {});
      }

      lastSent.current = href;
    } catch (err) {
      // non-blocking: analytics failures should not affect app
      // eslint-disable-next-line no-console
      console.warn("PageView tracking failed:", err);
    }
  }, [pathname, params]);

  return <span id="analytics" className="hidden" />;
}
