"use client";

import React, { createContext, useContext, useState } from "react";

type HelpContextType = {
  activePage: string;
  setActivePage: (id: string) => void;
  pagesOrder: string[];
  setPagesOrder: (pages: string[]) => void;
};

const HelpContext = createContext<HelpContextType | undefined>(undefined);

// Single source of truth for help navigation: an ordered array of items.
// Edit this array to change both the pager order and the tree data.
export const HELP_STRUCTURE: Array<{
  id: string;
  name: string;
  children?: string[];
}> = [
  {
    id: "intro",
    name: "Intro",
    children: ["editing-policy", "bias", "reporting", "media"],
  },
  { id: "editing-policy", name: "Editing Policy" },
  { id: "bias", name: "Bias Profile" },
  { id: "reporting", name: "Reporting & Moderation" },
  { id: "media", name: "Media Uploads" },
];

// Derived exports for backwards compatibility.
export const DEFAULT_PAGES_ORDER = HELP_STRUCTURE.map((i) => i.id);

export const HELP_ITEMS: Record<string, { name: string; children?: string[] }> =
  HELP_STRUCTURE.reduce((acc, item) => {
    acc[item.id] = { name: item.name, children: item.children };
    return acc;
  }, {} as Record<string, { name: string; children?: string[] }>);

export function HelpProvider({
  children,
  initial = "intro",
}: {
  children: React.ReactNode;
  initial?: string;
}) {
  const [activePage, setActivePage] = useState<string>(initial);
  const [pagesOrder, setPagesOrder] = useState<string[]>(DEFAULT_PAGES_ORDER);

  return (
    <HelpContext.Provider
      value={{ activePage, setActivePage, pagesOrder, setPagesOrder }}
    >
      {children}
    </HelpContext.Provider>
  );
}

export function useHelp() {
  const ctx = useContext(HelpContext);
  if (!ctx) throw new Error("useHelp must be used within HelpProvider");
  return ctx;
}

export default HelpContext;
