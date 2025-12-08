
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useHelp } from "./context";

export default function Page() {
  const { activePage } = useHelp();
  const params = useParams();
  const lang = params?.lang ?? "en";

  const [PageComponent, setPageComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        // dynamic import from the language folder, e.g. ./(en)/company
        const mod = await import(`./(${lang})/${activePage}`);
        if (mounted) setPageComponent(() => mod.default ?? null);
      } catch (e) {
        // fallback if page not found
        if (mounted) {
          setPageComponent(() => () => (
            <div className="w-full justify-center text-center">
              <h2 className="text-2xl font-bold">Page not found</h2>
              <p>No content for "{activePage}" in language "{lang}".</p>
            </div>
          ));
        }
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, [activePage, lang]);

  if (!PageComponent) return <div>Loading help content…</div>;

  return <PageComponent />;
}