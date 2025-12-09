"use client";

import { Bookmark, BookmarkCheck, Bot, Download, Earth, Info, Loader, NotebookPen, Printer, QrCode, Quote, Speech, Star, Sword, Waypoints, X } from "lucide-react";
import { Button } from "@/app/(components)/ui/button";
import { useEffect, useState, useRef } from "react";
import LanguageSwitcher from "@/app/[lang]/wiki/[slug]/[bias]/(client-renders)/language-switcher";
import { useParams } from "next/navigation";
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/(components)/ui/dialog";
import CurrentUrlQRCode from "@/app/[lang]/wiki/[slug]/[bias]/(client-renders)/current-url-qr";
import ShortURL from "@/app/[lang]/wiki/[slug]/[bias]/(client-renders)/short-url";
import { useSession } from "next-auth/react";

export default function BottomTools() {
  const [showText, setShowText] = useState<boolean>(true);
  const [largeMobile, setLargeMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const params = useParams();
  const currentLang = params?.lang as Locale || 'en';
  const dict = getDictionary(currentLang);
  const { data: session, status } = useSession();
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);
  const bodyObserverRef = useRef<MutationObserver | null>(null);
  const targetObserverRef = useRef<MutationObserver | null>(null);
  const lastSavedStatusRequest = useRef<string | null>(null);

  // ========= Effect: Monitor saved article status =========
  useEffect(() => {
    if (typeof window === "undefined") return;

    const getTarget = () => document.getElementById("article-saved");

    const attach = () => {
      const target = getTarget();

      const observer = new MutationObserver((_mutations) => {
        if (timerRef.current) {
          window.clearTimeout(timerRef.current);
        }
        timerRef.current = window.setTimeout(() => {
          const t = getTarget();
          const found = t ? t.querySelector('#article-is-saved') : document.getElementById('article-is-saved');
          setIsSaved(Boolean(found));
          timerRef.current = null;
        }, 100);
      });

      if (target) {
        // initial read
        setIsSaved(Boolean(target.querySelector('#article-is-saved')));

        observer.observe(target, {
          childList: true,
          characterData: true,
          subtree: true,
        });

        targetObserverRef.current = observer;
      } else {
        // watch for the element to be inserted into the document
        setIsSaved(false);

        const bodyObserver = new MutationObserver((_mutations) => {
          const foundTarget = getTarget();
          if (foundTarget) {
            // capture initial state
            setIsSaved(Boolean(foundTarget.querySelector('#article-is-saved')));

            // start observing the real target for subsequent changes
            observer.observe(foundTarget, {
              childList: true,
              characterData: true,
              subtree: true,
            });

            targetObserverRef.current = observer;

            // stop observing body for insertion
            bodyObserver.disconnect();
            bodyObserverRef.current = null;
          }
        });

        bodyObserver.observe(document.body, { childList: true, subtree: true });
        bodyObserverRef.current = bodyObserver;
      }
    };

    // init
    attach();

    return () => {
      if (bodyObserverRef.current) {
        bodyObserverRef.current.disconnect();
        bodyObserverRef.current = null;
      }
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }
  }, []);

  useEffect(() => {
    if (!isSaved) {
      if (status === "authenticated") {
        const checkSaved = async () => {
          try {
            const rawSlug = Array.isArray(params?.slug) ? params?.slug[0] : params?.slug ?? ''
            // Normalize: decode any existing percent-encoding, replace underscores with spaces, then re-encode once
            const normalized = decodeURIComponent(String(rawSlug)).replace(/_/g, ' ')
            const key = `${normalized}::${currentLang}`
            // Deduplicate same request (helps avoid double requests from StrictMode / re-renders)
            if (lastSavedStatusRequest.current === key) return
            lastSavedStatusRequest.current = key

            const res = await fetch(`/api/saved/status?slug=${encodeURIComponent(normalized)}&language=${encodeURIComponent(currentLang)}`, { cache: 'no-store' })
            if (!res.ok) {
              // keep default
              return;
            }
            const json = await res.json()
            console.log(json);
            if (typeof json.saved === 'boolean') setIsSaved(json.saved)
          } catch (e) {
            // ignore
          }
        }

        checkSaved()
      }
    }
  }, [currentLang, params?.slug, status]);

  // ========= Effect: Handle scroll and outside clicks =========
  useEffect(() => {
    const nav = document.getElementById("nav");

    const isElementNearViewport = (el: any, offset = 40) => {
      if (!el) return true; // treat missing element as visible to avoid hiding the button
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // visible region extended by ±offset
      const aboveViewport = rect.bottom < -offset;
      const belowViewport = rect.top > vh + offset;

      return !(aboveViewport || belowViewport);
    };

    const handleScroll = () => {
      setShowText(isElementNearViewport(nav, 10));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // run once to set initial state
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the click is inside any dialog content/portal/overlay, don't close the menu.
      const target = event.target as Node;

      const clickedInsideDialog = ((): boolean => {
        // Only Elements support closest; text nodes do not.
        if (!(target instanceof Element)) return false;
        return Boolean(
          target.closest('[data-slot="dialog-content"], [data-slot="dialog-portal"], [data-slot="dialog-overlay"], [data-slot="dialog"], [role="dialog"]')
        );
      })();

      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(target) &&
        !buttonRef.current.contains(target) &&
        !clickedInsideDialog
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Safari iOS sometimes reflows the visual viewport when the address bar
    // hides/shows which can make position:fixed elements appear to 'jump'.
    // Keep the FAB pinned by using the visualViewport height delta and
    // applying it into a calc(...) together with the safe-area inset.
    const updateBottom = () => {
      const el = buttonRef.current;
      const menuEl = menuRef.current;

      // visualViewport may be undefined in some browsers; fall back to 0
      const vv = (window as any).visualViewport;
      const viewportDelta = vv ? Math.max(0, window.innerHeight - vv.height) : 0;

      // Keep using env(safe-area-inset-bottom) so devices with notches are fine.
      // We add the pixel delta so when the chrome hides the FAB stays glued to
      // the bottom of the visible viewport.
      const fabBottom = `calc(env(safe-area-inset-bottom, 0px) + 16px + ${viewportDelta}px)`;
      const menuBottom = `calc(env(safe-area-inset-bottom, 0px) + 68px + ${viewportDelta}px)`;

      if (el) el.style.bottom = fabBottom;
      if (menuEl) menuEl.style.bottom = menuBottom;
    };

    updateBottom();

    if ((window as any).visualViewport) {
      (window as any).visualViewport.addEventListener("resize", updateBottom);
      (window as any).visualViewport.addEventListener("scroll", updateBottom);
    }
    window.addEventListener("resize", updateBottom);

    return () => {
      if ((window as any).visualViewport) {
        (window as any).visualViewport.removeEventListener("resize", updateBottom);
        (window as any).visualViewport.removeEventListener("scroll", updateBottom);
      }
      window.removeEventListener("resize", updateBottom);
    };
  }, []);

  const toggleSaved = async () => {
    if (!session || !session.user) return
    if (!params?.slug) return

    try {
      const rawSlug = Array.isArray(params?.slug) ? params?.slug[0] : params?.slug ?? ''
      const slugParam = decodeURIComponent(String(rawSlug)).replace(/_/g, ' ')
      if (!isSaved) {
        setSaving(true);
        const res = await fetch('/api/saved', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug: String(slugParam), language: currentLang }),
        })
        if (res.ok) setIsSaved(true)
      } else {
        const res = await fetch(`/api/saved?slug=${encodeURIComponent(String(slugParam))}&language=${encodeURIComponent(currentLang)}`, {
          method: 'DELETE',
        })
        if (res.ok) setIsSaved(false)
      }
    } catch (e) {
      // ignore
    } finally {
      setSaving(false)
    }
  }

  return (
    <>
      <Button
        id="fab"
        ref={buttonRef}
        onClick={toggleMenu}
        className={`fixed right-8 aspect-square bg-gray-800 text-white shadow-sm hover:shadow-lg cursor-pointer lg:hidden z-50 hover:scale-105 justify-content-center flex flex-row items-center transition-transform transform-gpu will-change-transform ${isMenuOpen ? "bg-gray-700" : ""} bottom-[calc(env(safe-area-inset-bottom,0px)+16px)]`}>
        {isMenuOpen ? (
          <X className="-ms-1 opacity-60 inline flex-1 text-red-300" aria-hidden="true" />
        ) : (
          <Sword className="-ms-1 opacity-60 inline flex-1" aria-hidden="true" />
        )}
        <span
          className={
            "flex-2 " +
            (showText ? "inline-block " : "pointer-events-none hidden ") +
            (isMenuOpen ? "text-red-300" : "")
          }
          aria-hidden={!showText}
        >
          {isMenuOpen ? "Close" : dict.article.tools}
        </span>
      </Button>

      {isMenuOpen && (
        <div
          ref={menuRef}
          // className="fixed bottom-18 right-8 bg-gray-800 rounded-lg shadow-xl p-2 z-20 min-w-48 animate-in fade-in slide-in-from-bottom-2 duration-200 block lg:hidden w-[calc(100vw-4rem)] shadow-md"
          className="fixed right-8 bg-gray-800 rounded-lg p-2 z-50 min-w-48 animate-in fade-in slide-in-from-bottom-2 duration-200 block lg:hidden w-[calc(100vw-4rem)] shadow-md transform-gpu will-change-transform bottom-[calc(env(safe-area-inset-bottom,0px)+68px)]"
        >
          <div className="flex flex-col gap-1">

            <LanguageSwitcher currentLang={currentLang} mobile={true} />

            <div className="flex-row gap-1 inline-flex items-center w-full">
              <button className="px-4 w-full py-2.5 text-left text-sm text-white bg-gray-700 hover:bg-gray-900 rounded-md transition-colors cursor-pointer flex items-center gap-2">
                <div data-svg-wrapper data-property-1="Notes" className="relative">
                  <Speech className="text-gray-500" size={16} />
                </div>
                <div className="size- pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden text-white text-sm">
                  <div className="justify-start text-white text-sm font-normal leading-normal truncate">{dict.tools.textToSpeech}</div>
                </div>
              </button>
            </div>

            <div className="flex-row gap-1 inline-flex items-center w-full">
              <button className="px-4 w-full py-2.5 text-left text-sm text-white bg-gray-700 hover:bg-gray-900 rounded-md transition-colors cursor-pointer flex items-center gap-2">
                <div data-svg-wrapper data-property-1="Notes" className="relative">
                  <Earth className="text-gray-500" size={16} />
                </div>
                <div className="flex-1 pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden text-white text-sm">
                  <div className="justify-start text-white text-sm font-normal leading-normal truncate">{dict.tools.translate}</div>
                </div>
                <div className="ml-auto px-[5px] py-px bg-yellow-400 rounded-sm flex justify-center items-center gap-2.5">
                  <div className="justify-center text-white text-xs font-bold ">{dict.upgrade.pro}</div>
                </div>
              </button>
            </div>

            <div className="flex-row gap-1 inline-flex items-center w-full">
              <button className="px-4 w-full py-2.5 text-left text-sm text-white bg-gray-700 hover:bg-gray-900 rounded-md transition-colors cursor-pointer flex items-center gap-2">
                <div data-svg-wrapper data-property-1="Notes" className="relative">
                  <Waypoints className="text-gray-500" size={16} />
                </div>
                <div className="flex-1 pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden text-white text-sm">
                  <div className="justify-start text-white text-sm font-normal leading-normal truncate">{dict.tools.topicMap}</div>
                </div>
                <div className="ml-auto px-[5px] py-px bg-yellow-400 rounded-sm flex justify-center items-center gap-2.5">
                  <div className="justify-center text-white text-xs font-bold ">{dict.upgrade.pro}</div>
                </div>
              </button>
            </div>

            <div className="flex-row gap-1 inline-flex items-center w-full">
              <button className="px-4 w-full py-2.5 text-left text-sm text-white bg-gray-700 hover:bg-gray-900 rounded-md transition-colors cursor-pointer flex items-center gap-2">
                <div data-svg-wrapper data-property-1="Notes" className="relative">
                  <NotebookPen className="text-gray-500" size={16} />
                </div>
                <div className="flex-1 pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden text-white text-sm">
                  <div className="justify-start text-white text-sm font-normal leading-normal truncate">{dict.tools.notes}</div>
                </div>
                <div className="ml-auto px-[5px] py-px bg-yellow-400 rounded-sm flex justify-center items-center gap-2.5">
                  <div className="justify-center text-white text-xs font-bold ">{dict.upgrade.pro}</div>
                </div>
              </button>
            </div>

            <div className="flex-row gap-1 inline-flex items-center w-full">
              <button className="px-4 w-full py-2.5 text-left text-sm text-white bg-gray-700 hover:bg-gray-900 rounded-md transition-colors cursor-pointer flex items-center gap-2">
                <div data-svg-wrapper data-property-1="Notes" className="relative">
                  <Bot className="text-gray-500" size={16} />
                </div>
                <div className="flex-1 pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden text-white text-sm">
                  <div className="justify-start text-white text-sm font-normal leading-normal truncate">{dict.tools.wikipal}</div>
                </div>
                <div className="ml-auto px-[5px] py-px bg-yellow-400 rounded-sm flex justify-center items-center gap-2.5">
                  <div className="justify-center text-white text-xs font-bold ">{dict.upgrade.pro}</div>
                </div>
              </button>
            </div>

            <div className="flex-row gap-1 inline-flex items-center w-full">
              <button className="px-4 w-full py-2.5 text-left text-sm text-white bg-gray-700 hover:bg-gray-900 rounded-md transition-colors cursor-pointer flex items-center gap-2">
                <div data-svg-wrapper data-property-1="Notes" className="relative">
                  <Star className="text-gray-500" size={16} />
                </div>
                <div className="flex-1 pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden text-white text-sm">
                  <div className="justify-start text-white text-sm font-normal leading-normal truncate">{dict.tools.watchChanges}</div>
                </div>
                <div className="ml-auto px-[5px] py-px bg-yellow-400 rounded-sm flex justify-center items-center gap-2.5">
                  <div className="justify-center text-white text-xs font-bold ">{dict.upgrade.pro}</div>
                </div>
              </button>
            </div>

            <div className="flex-row gap-1 inline-flex items-center w-full">
              <button
                onClick={toggleSaved}
                disabled={saving}
                className="px-4 w-full py-2.5 text-left text-sm text-white bg-gray-700 hover:bg-gray-900 rounded-md transition-colors flex items-center gap-2">
                <div data-svg-wrapper data-property-1="Notes" className="relative">
                  {saving ? (
                    <Loader className="text-gray-500 animate-spin" size={16} />
                  ) : (
                    <>
                      {isSaved ? (
                        <BookmarkCheck className="text-gray-500" size={16} />
                      ) : (
                        <Bookmark className="text-gray-500" size={16} />
                      )}
                    </>
                  )}
                </div>
                <div className="size- pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden text-white text-sm">
                  <div className="justify-start text-white text-sm font-normal leading-normal truncate">
                    {saving ? 'Saving...' : (isSaved ? 'Article saved' : dict.tools.saveArticle)}
                  </div>
                </div>
              </button>
            </div>

            <div className="flex-row gap-1 inline-flex items-center w-full">
              <ShortURL mobile={true} />
            </div>

            <div className="flex-row gap-1 inline-flex items-center w-full">
              <button className="px-4 w-full py-2.5 text-left text-sm text-white bg-gray-700 hover:bg-gray-900 rounded-md transition-colors cursor-pointer flex items-center gap-2">
                <div data-svg-wrapper data-property-1="Notes" className="relative">
                  <Quote className="text-gray-500" size={16} />
                </div>
                <div className="size- pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden text-white text-sm">
                  <div className="justify-start text-white text-sm font-normal leading-normal truncate">{dict.tools.citePage}</div>
                </div>
              </button>
            </div>

            {largeMobile && (
              <>

                <div className="flex-row gap-1 inline-flex items-center w-full">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex-row gap-1 inline-flex items-center w-full">
                        <button className="px-4 w-full py-2.5 text-left text-sm text-white bg-gray-700 hover:bg-gray-900 rounded-md transition-colors cursor-pointer flex items-center gap-2">
                          <div data-svg-wrapper data-property-1="Notes" className="relative">
                            <QrCode className="text-gray-500" size={16} />
                          </div>
                          <div className="size- pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden text-white text-sm">
                            <div className="justify-start text-white text-sm font-normal leading-normal truncate">{dict.tools.QRCode}</div>
                          </div>
                        </button>
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="hidden">{dict.tools.QRCode}</DialogTitle>
                      </DialogHeader>
                      <div className="p-2">
                        {/* Render QR Code for current URL */}
                        <CurrentUrlQRCode size={260} />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="flex-row gap-1 inline-flex items-center w-full">
                  <button className="px-4 w-full py-2.5 text-left text-sm text-white bg-gray-700 hover:bg-gray-900 rounded-md transition-colors cursor-pointer flex items-center gap-2">
                    <div data-svg-wrapper data-property-1="Notes" className="relative">
                      <Download className="text-gray-500" size={16} />
                    </div>
                    <div className="size- pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden text-white text-sm">
                      <div className="justify-start text-white text-sm font-normal leading-normal truncate">{dict.tools.DownloadPDF}</div>
                    </div>
                  </button>
                </div>

                <div className="flex-row gap-1 inline-flex items-center w-full">
                  <button className="px-4 w-full py-2.5 text-left text-sm text-white bg-gray-700 hover:bg-gray-900 rounded-md transition-colors cursor-pointer flex items-center gap-2">
                    <div data-svg-wrapper data-property-1="Notes" className="relative">
                      <Printer className="text-gray-500" size={16} />
                    </div>
                    <div className="size- pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden text-white text-sm">
                      <div className="justify-start text-white text-sm font-normal leading-normal truncate">{dict.tools.printPage}</div>
                    </div>
                  </button>
                </div>

                <div className="flex-row gap-1 inline-flex items-center w-full">
                  <button className="px-4 w-full py-2.5 text-left text-sm text-white bg-gray-700 hover:bg-gray-900 rounded-md transition-colors cursor-pointer flex items-center gap-2">
                    <div data-svg-wrapper data-property-1="Notes" className="relative">
                      <Info className="text-gray-500" size={16} />
                    </div>
                    <div className="size- pr-1.5 flex justify-start items-center gap-2.5 overflow-hidden text-white text-sm">
                      <div className="justify-start text-white text-sm font-normal leading-normal truncate">{dict.tools.pageInfo}</div>
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}