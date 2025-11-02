"use client";

import { Button } from "@/app/(components)/ui/button";
import { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;

    dataLayer?: any[];

    googletag?: any;
  }
}

export default function CookieBanner() {
  const [open, setOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // Only run cookie/storage checks on the client after mount to avoid
  // hydration mismatches between server and client HTML.
  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      const accepted = localStorage.getItem("cookie-consent");
      const expiraryDate = localStorage.getItem("cookieExpiryDateDate");
      const currentDate = new Date();

      if (accepted && expiraryDate) {
        const expiryDate = new Date(expiraryDate);
        if (currentDate > expiryDate) {
          setOpen(true);
          localStorage.removeItem("cookie-consent");
          localStorage.removeItem("cookieExpiryDateDate");
        } else {
          setOpen(false);
        }
      } else {
        setOpen(true);
      }
    }
  }, []);

  useEffect(() => {
    // Check if the device is mobile based on window width
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024); // Example breakpoint for mobile
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile); // Update on resize

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const params = useParams();
  const lang = params?.lang as string;
  const dict = getDictionary(lang as Locale);

  const handleCookieAccept = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      
      if (typeof window !== "undefined") {
        const date = new Date();
        date.setDate(date.getDate() + 30);
        localStorage.setItem("cookie-consent", "true");
        localStorage.setItem("cookieExpiryDateDate", date.toISOString());
      }
      window.location.reload();
    }, 300); // Match the transition duration
  };

  const handleCookieReject = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);

      // Update Google Consent Mode
      if (typeof window !== 'undefined' && window.gtag) {
        try {
          window.gtag('consent', 'update', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
          });
        } catch (e) {
          // best-effort; dataLayer fallback below
        }
      } else {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(['consent', 'update', { ad_storage: 'denied', analytics_storage: 'denied' }]);
      }

      // If you use GPT (googletag), request non-personalized ads immediately
      if (typeof window !== 'undefined' && window.googletag && window.googletag.pubads) {
        try {
          // 1 => non-personalized ads
          window.googletag.pubads().setRequestNonPersonalizedAds(1);
          // optionally refresh slots if they already loaded
          // window.googletag.pubads().refresh();
        } catch (err) {
          // ignore
        }
      }

      if (typeof window !== "undefined") {
        const date = new Date();
        date.setDate(date.getDate() + 30);
        localStorage.setItem("cookie-consent", "false");
        localStorage.setItem("cookieExpiryDateDate", date.toISOString());
      }

      window.location.reload();
    }, 300); // Match the transition duration
  };

  // Don't render anything on the server or before we've mounted on the client.
  if (!mounted) return null;
  if (!open) return null;

  return (
    <>
      {/* Dim overlay that appears while the cookie banner is open. It sits under the banner (z-40) */}
      <div
        id="cookie-overlay"
        aria-hidden
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
      />

      <div
        id="cookie-banner"
        className={
          `fixed left-0 right-0 z-50 border px-4 py-3 shadow-lg bg-gray-100 dark:bg-neutral-900 transition-all duration-300 ${isClosing ? "opacity-0 translate-y-full" : "opacity-100 translate-y-0"}`
          + `${isMobile ? "" : " bottom-0"}`
        }
        style={{
          bottom: isMobile ? "calc(env(safe-area-inset-bottom, 0px) + 0px)" : '',
        }}>
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center mx-10">
          <p className="text-sm mx-2">
            {dict.cookieMessage}
          </p>
          <div className="flex gap-2 max-md:flex-wrap">
            <Button onClick={handleCookieAccept} className="bg-neutral-700 hover:bg-neutral-600 text-white px-4 text-sm rounded transition cursor-pointer">
              {dict.accept}
            </Button>
            <Button onClick={handleCookieReject} className="bg-red-800 hover:bg-red-600 text-white px-4 text-sm rounded transition cursor-pointer">
              {dict.reject}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}