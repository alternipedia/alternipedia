"use client"

import React from "react";

import { useEffect, useState, useRef } from 'react';

const indent = 20

interface Heading {
  id: string;
  depth: number;
  title: string;
}

interface ContentsProps {
  headings?: Heading[];
}

function HeadingItem({ heading, active, index, containerRef }: { heading: Heading, active: boolean, index: number, containerRef?: React.RefObject<HTMLDivElement | null> }) {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(heading.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // TODO: check for rapid page jumps, and if the page jumped to the top, set the scroll to top: 0

    const isElementNearViewport = (el: any, offset = 40) => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // visible region extended by ±offset
      const aboveViewport = rect.bottom < -offset;
      const belowViewport = rect.top > vh + offset;

      return !(aboveViewport || belowViewport);
    }

    setNavIsVisible(isElementNearViewport(document.getElementById('nav'), 40));

    if (navIsVisible) {
      document.getElementById('left-sidebar')?.scrollTo({ top: 0 });
      document.getElementById('right-sidebar')?.scrollTo({ top: 0 });
    }
  });

  useEffect(() => {
    if (active && btnRef.current) {
      if (!navIsVisible) {
        try {
          btnRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        } catch (e) {
          btnRef.current.scrollIntoView();
        }
      }
    }
  });

  if (!heading || !heading.title) {
    return null;
  }

  return (
    <div
      style={{ paddingLeft: `${(heading.depth) * indent}px` }}
      className="flex items-center gap-2 py-1"
    >
      <button
        ref={btnRef}
        data-toc-index={index}
        onClick={handleClick}
        // TODO: highlight active section
        className={`text-left text-sm text-gray-700 dark:text-neutral-400  hover:text-blue-600 hover:underline cursor-pointer text-ellipsis ${active ? 'font-semibold' : ''}`}
        // className={`text-left text-sm text-gray-700 hover:text-blue-600 hover:underline cursor-pointer text-ellipsis ${active ? '' : ''}`}
      >
        {heading.title}
      </button>
    </div>
  );
}

export default function Contents({ headings = [] }: ContentsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const tocRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleScroll = () => {
      if (!mediaQuery.matches) {
        setActiveIndex(null);
        return;
      }

      // Select all the elements you want to observe
      const observed = headings.map(h => document.getElementById(h.id)).filter(el => el !== null) as HTMLElement[];
      let minTop = Infinity;
      let closestIdx: number | null = null

      observed.forEach((el, idx) => {
        const top = el.getBoundingClientRect().top;

        if (top >= 0 && top <= window.innerHeight && top < minTop) {
          minTop = top;
          closestIdx = idx;
        }
      });

      if (closestIdx !== null) {
        setActiveIndex(closestIdx);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // recheck if screen resizes across the breakpoint
    const handleResize = () => handleScroll();
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [headings]);

  if (headings.length === 0) {
    return (
      <div className="flex h-full flex-col gap-2">
        <div className="text-sm text-gray-500 italic">
          Table of contents will appear here when viewing an article.
        </div>
      </div>
    );
  }

  return (
    <div ref={tocRef} className="flex h-full flex-col gap-1 overflow-y-auto">
      {headings.map((heading, index) => {
        heading['id'] = heading.title.replace(/\s+/g, '_')
        return (
          <HeadingItem key={`${heading['id']}-${index}`} heading={heading} active={activeIndex === index} index={index} containerRef={tocRef} />
        );
      })}
    </div>
  );
}