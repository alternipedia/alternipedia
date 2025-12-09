'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/(components)/ui/tabs";
import {
  BoxIcon,
  CircleDollarSign,
  History,
  HouseIcon,
  PanelsTopLeftIcon,
  Pencil,
} from "lucide-react";
import ArticleText from "@/app/[lang]/wiki/[slug]/[bias]/(client-renders)/article-text";
import DiscussionText from "@/app/[lang]/wiki/[slug]/[bias]/(client-renders)/discussion-text";
import ReadText from "@/app/[lang]/wiki/[slug]/[bias]/(client-renders)/read-text";
import EditText from "@/app/[lang]/wiki/[slug]/[bias]/(client-renders)/edit-text";
import HistoryText from "@/app/[lang]/wiki/[slug]/[bias]/(client-renders)/history-text";
import ClientLoadedSignal from '@/app/[lang]/wiki/[slug]/[bias]/(client-renders)/load-signal';
import Bias from "@/app/[lang]/wiki/[slug]/[bias]/bias";
import ContentEditorComponent from "@/app/[lang]/wiki/[slug]/[bias]/(client-renders)/editor";
import Read from '@/app/[lang]/wiki/[slug]/[bias]/read';
import { useEffect, useRef, useState } from 'react';
import HistoryPage from '@/app/[lang]/wiki/[slug]/[bias]/(client-renders)/history';
import TalkPage from './(client-renders)/talk';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/app/(components)/ui/tooltip';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { isMobile } from 'react-device-detect';

interface WikiTabsProps {
  bias: string;
  slug: string;
  lang: string;
  revision?: any;
  wikipediaData?: any;
}

export default function WikiTabs({ bias, slug, lang, revision = null, wikipediaData = null }: WikiTabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams?.get('mode');
  const [isTalkTab, setIsTalkTab] = useState(searchParams?.get('content') === 'talk');
  const [headings, setHeadings] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const dict = getDictionary(lang as Locale);
  const isWikipedia = bias === 'wikipedia';
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState("0px");
  const requestedRevisionParam = searchParams?.get('revision');
  const isRevisionParamNumeric = !!requestedRevisionParam && /^\d+$/.test(requestedRevisionParam);
  const showRevisionBanner = isRevisionParamNumeric && !(revision && revision.violatesLaw);
  const revisionDateString = revision?.createdAt ? new Date(revision.createdAt).toLocaleString(lang || 'en') : null;

  const getDefaultOuterTab = (isTalkTab: boolean) => {
    return isTalkTab ? 'tab-2' : 'tab-1'; // article
  };

  const getDefaultInnerTab = (mode?: string | null) => {
    switch (mode) {
      case 'edit': return 'tab-2';
      case 'history': return 'tab-3';
      default: return 'tab-1'; // read
    }
  };

  const handleOuterTabChange = (value: string) => {
    if (!searchParams) return;
    const params = new URLSearchParams(searchParams.toString());
    let talk: string;
    switch (value) {
      case 'tab-2': talk = 'talk'; break;
      default: talk = '';
    }
    if (!talk) {
      params.delete('content');
    } else {
      params.set('content', talk);
    }
    params.delete('mode');
    // Update URL without triggering navigation
    window.history.replaceState(null, '', `?${params.toString()}`);
  }

  const handleInnerTabChange = (value: string) => {
    if (!searchParams) return;
    const params = new URLSearchParams(searchParams.toString());
    let mode: string;
    switch (value) {
      case 'tab-2': mode = 'edit'; break;
      case 'tab-3': mode = 'history'; break;
      default: mode = 'read';
    }
    params.set('mode', mode);
    params.delete('content');
    // Update URL without triggering navigation
    window.history.replaceState(null, '', `?${params.toString()}`);
  };

  useEffect(() => {
    if (!revision) return;
    if (!revision.revisionBlocks) {
      setHeadings([]);
      return;
    }
    let newHeadings: any[] = [];
    revision.revisionBlocks.forEach((rb: any) => {
      if (rb.block.type === 'heading') {
        let heading = { title: rb.block.content.content[0].text, depth: rb.block.content.attrs.level };
        newHeadings.push(heading);
      }
    });
    setHeadings(newHeadings);
  }, [revision]);

  useEffect(() => {
    // Ensure we only render the interactive Tabs after client mount to avoid
    // hydration mismatches caused by Radix's internally generated ids.
    setMounted(true);
  }, []);

  // If this is a Wikipedia page, derive headings from the server-provided
  // `wikipediaData` (already fetched in `page.tsx`) and set them into state.
  useEffect(() => {
    if (!isWikipedia) return;
    if (!wikipediaData || !Array.isArray(wikipediaData.sections)) {
      setHeadings([]);
      return;
    }

    const newHeadings: any[] = wikipediaData.sections.map((s: any, idx: number) => {
      const title = s.title || `Section ${idx + 1}`;
      const depth = typeof s.depth === 'number' ? s.depth : 1;
      const id = String(title).replace(/\s+/g, '_');
      return { id, depth, title };
    });

    newHeadings.splice(0, 1);

    setHeadings(newHeadings);
  }, [isWikipedia, wikipediaData]);

  // Publish headings to the global store so sidebar/components can read them
  // without needing a dedicated provider component. This mimics the old
  // `WikipediaDataProvider` behavior but keeps the source of truth here.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      (window as any).__wikipediaHeadings = headings || [];
      const evt = new CustomEvent('wikipediaHeadingsUpdated', { detail: headings || [] });
      window.dispatchEvent(evt);
    } catch (e) {
      // ignore
    }
  }, [headings]);

  useEffect(() => {
    if (isTalkTab && isWikipedia) {
      // delete content param and reset to article tab
      if (!searchParams) return;
      const params = new URLSearchParams(searchParams.toString());
      params.delete('content');
      const qs = params.toString();
      const url = `${window.location.pathname}${qs ? `?${qs}` : ''}`;
      router.replace(url);
      setIsTalkTab(false);
    }
  }, [bias, slug, lang, isTalkTab, mode]);

  useEffect(() => {
    const sendThemeToIframe = (iframe: HTMLIFrameElement | null) => {
      if (!iframe) return;
      try {
        // Read theme cookie named 'theme'. If absent default to 'light'.
        const m = document.cookie.match(/(?:^|; )theme=([^;]+)/);
        const theme = m ? decodeURIComponent(m[1]) : 'light';
        const origin = window.location.origin;
        iframe.contentWindow?.postMessage({ type: 'theme', theme }, origin);
      } catch (e) {
        // ignore
      }
    };

    const handleMessage = (event: MessageEvent) => {
      // wiki-height messages come from the iframe and contain the height
      if (event.data?.type === "wiki-height") {
        setHeight(event.data.height + "px");
        return;
      }

      // The iframe posts { type: 'iframe-ready' } when its listener is attached.
      if (event.data?.type === 'iframe-ready' && iframeRef.current && event.source === iframeRef.current.contentWindow) {
        // send current theme to the iframe
        sendThemeToIframe(iframeRef.current);
        return;
      }
    };

    window.addEventListener("message", handleMessage);

    // Also send theme once on mount in case the iframe is already ready/loaded
    sendThemeToIframe(iframeRef.current);

    return () => window.removeEventListener("message", handleMessage);
  }, [isWikipedia, slug, lang]);

  // When iframe load state changes to loaded, push theme as a fallback
  useEffect(() => {
    if (!iframeRef.current) return;
    if (!loaded) return;
    try {
      const iframe = iframeRef.current;
      const m = document.cookie.match(/(?:^|; )theme=([^;]+)/);
      const theme = m ? decodeURIComponent(m[1]) : 'light';
      const origin = window.location.origin;
      iframe.contentWindow?.postMessage({ type: 'theme', theme }, origin);
    } catch (e) {
      // ignore
    }
  }, [loaded]);

  return (
    <div className={`relative w-full mb-6 ${isWikipedia ? '' : 'wikipedia-article'}`}>
      {mounted ? (
        <Tabs onValueChange={handleOuterTabChange} defaultValue={getDefaultOuterTab(isTalkTab)} suppressHydrationWarning={true} id="wiki-tabs">
          {/* If the URL explicitly requested a numeric revision (e.g. ?revision=123),
              show an informational banner reminding the user they're viewing a
              specific revision (don't hit the DB again — page.tsx already loaded it). */}
          {showRevisionBanner && (
            <div className="mb-4 rounded border border-yellow-200 bg-yellow-50 p-3 text-sm text-yellow-900">
              <div className="flex items-start gap-3">
                <BoxIcon className="mt-0.5" size={18} aria-hidden="true" />
                <div>
                  <div>
                    {revisionDateString ? `You are viewing a specific revision from ${revisionDateString}.` : `You are viewing a specific revision (${requestedRevisionParam}).`}
                  </div>
                  <div className="mt-1">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (!searchParams) return;
                        const params = new URLSearchParams(searchParams.toString());
                        params.delete('revision');
                        const qs = params.toString();
                        const url = `${window.location.pathname}${qs ? `?${qs}` : ''}`;
                        router.push(url);
                      }}
                      className="underline"
                    >
                      View the latest version
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="relative flex items-end justify-between border-b border-border">
            {/* Title on the left */}
            <div
              data-article-title
              className={`text-neutral-800 dark:text-neutral-300 text-3xl font-normal pb-2 truncate`}
            >
              {wikipediaData?.title ? String(wikipediaData.title) : revision?.title ? String(revision.title) : decodeURIComponent(slug.replaceAll('_', ' '))}
            </div>

            {/* Article and Talk tabs floated to the right */}
            <TabsList className="relative h-auto w-auto gap-0.5 bg-transparent p-0">
              <TabsTrigger
                value="tab-1"
                className="overflow-hidden rounded-b-none data-[state=active]:border-x data-[state=active]:border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none data-[state=active]:border-b data-[state=active]:border-b-background data-[state=active]:-mb-px data-[state=inactive]:cursor-pointer dark:data-[state=active]:bg-neutral-900 dark:data-[state=active]:border-b-neutral-900"
              >
                <ArticleText />
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                disabled={isWikipedia}
                className={`overflow-hidden rounded-b-none data-[state=active]:border-x data-[state=active]:border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none data-[state=active]:border-b data-[state=active]:border-b-background data-[state=active]:-mb-px dark:data-[state=active]:bg-neutral-900 dark:data-[state=active]:border-b-neutral-900 ${isWikipedia ? 'cursor-not-allowed pointer-events-auto!' : 'data-[state=inactive]:cursor-pointer'}`}
              >
                <DiscussionText />
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="tab-1">
            {/* Edit tabs */}
            <Tabs
              defaultValue={getDefaultInnerTab(mode)}
              onValueChange={handleInnerTabChange}
              suppressHydrationWarning={true}
              id="inner-tabs"
            >
              <TabsList className="text-foreground mb-3 h-auto gap-2 rounded-none border-b bg-transparent px-0 py-1 w-full justify-start">
                <TabsTrigger
                  value="tab-1"
                  className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary relative after:absolute after:left-0 after:right-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:shadow-none data-[state=inactive]:cursor-pointer transition-all duration-150 ease-out [&[data-state=active]]:bg-transparent [&[data-state=active]]:transition-all [&[data-state=active]]:duration-1000 [&[data-state=active]]:ease-out"
                >
                  <HouseIcon
                    className="-ms-0.5 me-1.5 opacity-60"
                    size={16}
                    aria-hidden="true"
                  />
                  <ReadText />
                </TabsTrigger>
                <TabsTrigger
                  disabled={isWikipedia}
                  value="tab-2"
                  className={`hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary relative after:absolute after:left-0 after:right-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:shadow-none ${isWikipedia ? 'cursor-not-allowed pointer-events-auto!' : 'data-[state=inactive]:cursor-pointer'} transition-all duration-150 ease-out [&[data-state=active]]:bg-transparent [&[data-state=active]]:transition-all [&[data-state=active]]:duration-1000 [&[data-state=active]]:ease-out`}
                >
                  <Pencil
                    className="-ms-0.5 me-1.5 opacity-60"
                    size={16}
                    aria-hidden="true"
                  />
                  <EditText />
                </TabsTrigger>
                <TabsTrigger
                  disabled={isWikipedia}
                  value="tab-3"
                  className={`hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary relative after:absolute after:left-0 after:right-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:shadow-none ${isWikipedia ? 'cursor-not-allowed pointer-events-auto!' : 'data-[state=inactive]:cursor-pointer'} transition-all duration-150 ease-out [&[data-state=active]]:bg-transparent [&[data-state=active]]:transition-all [&[data-state=active]]:duration-1000 [&[data-state=active]]:ease-out`}
                >
                  <History
                    className="-ms-0.5 me-1.5 opacity-60"
                    size={16}
                    aria-hidden="true"
                  />
                  <HistoryText />
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tab-1">
                {/* Start Article */}
                {isWikipedia ? (
                  <>
                    {loaded && (
                      <ClientLoadedSignal />
                    )}

                    <div className="self-stretch p-4 m-2 bg-blue-50 border-l-4 border-blue-400 rounded-r flex items-center">
                      <img
                        src="/wikipedia.png"
                        alt="Wikipedia Bias"
                        width={40}
                        className="flex-shrink-0 mr-4"
                      />

                      <div className="flex flex-col justify-center flex-1 relative">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-blue-800">
                            {dict.article.biasIntro.wikipedia.part1}
                            <a
                              href={`https://${lang}.wikipedia.org/wiki/${encodeURIComponent(slug)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-1 text-blue-600 hover:underline active:underline"
                            >
                              {dict.article.biasIntro.wikipedia.part2}
                            </a>
                          </p>

                          <TooltipProvider delayDuration={0}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <a
                                  href="https://donate.wikimedia.org/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-2 bg-white border border-gray-200 rounded-sm p-2 cursor-pointer hover:bg-gray-100"
                                >
                                  <CircleDollarSign className="w-4 h-4" />
                                </a>
                              </TooltipTrigger>
                              <TooltipContent className="text-xs" showArrow>
                                Wikipedia provides their content for free. Consider donating to help keep it that way.
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </div>

                    <iframe
                      ref={iframeRef}
                      onLoad={() => setLoaded(true)}
                      id="wikiFrame"
                      src={`/api/wiki-proxy?slug=${slug}&lang=${lang}`}
                      className={`block relative left-1/2 -translate-x-1/2 ${isMobile ? 'w-[calc(100%+2rem)] -ml-4' : 'w-full'}`}
                      style={{
                        height,
                        border: 'none',
                        overflow: 'hidden',
                      }}
                    />
                  </>
                ) : (
                  <>
                    <Bias language={lang} slug={slug} bias={bias} />
                    <Read slug={slug} lang={lang} bias={bias} revision={revision} />
                  </>
                )}
              </TabsContent>
              <TabsContent value="tab-2">
                {isWikipedia ? (
                  <>{/* Null */}</>
                ) : (
                  <>
                    <ClientLoadedSignal />
                    <ContentEditorComponent key={revision?.id} revision={revision} slug={slug} lang={lang} bias={bias} />
                  </>
                )}
              </TabsContent>
              <TabsContent value="tab-3">
                {isWikipedia ? (
                  <>{/* Null */}</>
                ) : (
                  <div className="text-muted-foreground pt-1 text-center text-xs">
                    <ClientLoadedSignal />
                    <HistoryPage />
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="tab-2">
            {!isWikipedia && (
              <section>
                <ClientLoadedSignal />
                <TalkPage language={lang} slug={slug} bias={bias} />
              </section>
            )}
          </TabsContent>
        </Tabs>
      ) : (
        // Non-interactive server fallback: keeps markup simple and stable so
        // hydration won't see attribute differences for Radix-generated ids.
        <div id="wiki-tabs" aria-hidden={true} className="pb-4">
          <div className="relative flex items-end justify-between border-b border-border">
            <div
              data-article-title
              className={`text-neutral-800 text-3xl font-normal pb-2 truncate`}
            >
              {wikipediaData?.title ? String(wikipediaData.title) : revision?.title ? String(revision.title) : decodeURIComponent(slug.replaceAll('_', ' '))}
            </div>
            <div className="flex gap-2 opacity-50">
              <span className="px-3 py-2 text-sm">Article</span>
              <span className="px-3 py-2 text-sm">Talk</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}