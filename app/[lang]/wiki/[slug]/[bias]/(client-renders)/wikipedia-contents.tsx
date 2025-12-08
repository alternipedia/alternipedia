"use client";

import { useState, useEffect } from "react";
import Contents from "@/app/[lang]/wiki/[slug]/[bias]/(client-renders)/contents";
// Read headings directly from the global window store set by the server-side
// rendered component (WikiTabs) to avoid coupling to a provider component.

interface WikipediaContentsProps {
  slug: string;
  language: string;
  bias: string;
}

interface Heading {
  id: string;
  depth: number;
  title: string;
}

export default function WikipediaContents({ slug, language, bias }: WikipediaContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  
  useEffect(() => {
    // Get headings from the global window store (no API call!)
    const wikipediaHeadings = (typeof window !== 'undefined' && (window as any).__wikipediaHeadings) ? (window as any).__wikipediaHeadings : [];
    setHeadings(wikipediaHeadings as any);

    // Also listen for updates in case the provider mounts after the contents
    const handler = (e: any) => {
      const data = e?.detail || ((typeof window !== 'undefined' && (window as any).__wikipediaHeadings) ? (window as any).__wikipediaHeadings : []);
      setHeadings(data);
    };
    window.addEventListener('wikipediaHeadingsUpdated', handler as EventListener);
    
    return () => {
      window.removeEventListener('wikipediaHeadingsUpdated', handler as EventListener);
    };
  }, [bias]);
  
  return <Contents headings={headings} />;
}