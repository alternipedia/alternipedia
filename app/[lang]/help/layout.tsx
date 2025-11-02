"use client";

import React, { useEffect, useState } from "react"
import {
  createOnDropHandler,
  dragAndDropFeature,
  hotkeysCoreFeature,
  keyboardDragAndDropFeature,
  selectionFeature,
  syncDataLoaderFeature,
} from "@headless-tree/core"
import { AssistiveTreeDescription, useTree } from "@headless-tree/react"
import { FolderIcon, FolderOpenIcon } from "lucide-react"
import {
  Tree,
  TreeDragLine,
  TreeItem,
  TreeItemLabel,
} from "@/app/(components)/ui/tree";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { Button } from "@/app/(components)/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/app/(components)/ui/pagination"


interface Item {
  name: string
  children?: string[]
}

// Items are provided from the single source of truth in context

const indent = 20;

import { HelpProvider, useHelp, HELP_ITEMS } from "./context";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

function HelpLayoutContent({ children }: { children: React.ReactNode }) {
  // local state for the tree data (drag/drop) — use the single source of truth
  const [items, setItems] = useState<Record<string, Item>>(HELP_ITEMS);
  const { activePage, setActivePage, pagesOrder, setPagesOrder } = useHelp();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navigateTo = (id: string) => {
    setActivePage(id);
    try {
      const params = new URLSearchParams(searchParams?.toString() ?? "");
      params.set("page", id);
      const url = `${pathname}${params.toString() ? `?${params.toString()}` : ""}`;
      router.replace(url);
    } catch (e) {
      // ignore url update errors
    }
  };

  // helper to produce a flattened pages order from items (depth-first)
  const rootId = pagesOrder?.[0] ?? "intro";
  const flattenOrder = (itemsMap: Record<string, Item>, root = rootId) => {
    const out: string[] = [];
    const visited = new Set<string>();
    const visit = (id: string) => {
      if (visited.has(id)) return;
      visited.add(id);
      out.push(id);
      const children = itemsMap[id]?.children ?? [];
      for (const c of children) visit(c);
    };
    if (itemsMap[root]) visit(root);
    // append any orphaned nodes not reachable from root
    for (const k of Object.keys(itemsMap)) if (!visited.has(k)) out.push(k);
    return out;
  };

  const tree = useTree<Item>({
    initialState: {
      expandedItems: [pagesOrder?.[0] ?? rootId],
      selectedItems: [activePage],
    },
    indent,
  rootItemId: pagesOrder?.[0] ?? rootId,
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    canReorder: true,
    onDrop: createOnDropHandler((parentItem, newChildrenIds) => {
      setItems((prevItems: Record<string, Item>) => {
        const next = {
          ...prevItems,
          [parentItem.getId()]: {
            ...prevItems[parentItem.getId()],
            children: newChildrenIds,
          },
        };
        try {
          const newOrder = flattenOrder(next);
          setPagesOrder(newOrder);
        } catch (e) {
          // ignore ordering update failures
        }
        return next;
      });
    }),
    dataLoader: {
      getItem: (itemId) => items[itemId] ?? undefined,
      getChildren: (itemId) => items[itemId]?.children ?? [],
    },
    features: [
      syncDataLoaderFeature,
      selectionFeature,
      hotkeysCoreFeature,
      dragAndDropFeature,
      keyboardDragAndDropFeature,
    ],
  });

  // Keep the tree selection in sync with the shared activePage state.
  useEffect(() => {
    try {
      // headless-tree may expose setSelectedItems; guard via any
      const t: any = tree;
      if (typeof t.setSelectedItems === "function") {
        t.setSelectedItems([activePage]);
      } else if (typeof t.setSelection === "function") {
        // fallback if API differs
        t.setSelection([activePage]);
      }
    } catch (e) {
      // no-op if tree doesn't support programmatic selection
    }
  }, [activePage, tree]);

  // helpers for mobile pagination: compute index from pagesOrder
  const currentIndex = Math.max(pagesOrder.indexOf(activePage), 0);

  return (
    <div className="container mx-auto flex w-full dark:bg-neutral-900 py-8">
      <div className="h-full w-full flex flex-col text-center mx-20">
        <h1 className="text-4xl font-bold mb-6">Help & Support</h1>

        <div className="flex flex-col lg:flex-row w-full">
          <div className="hidden lg:flex lg:flex-1 lg:mb-4">
            <div className="flex h-full flex-col gap-2 *:first:grow">
              <Tree indent={indent} tree={tree}>
                <AssistiveTreeDescription tree={tree} />
                {tree.getItems().map((item) => {
                  const id = item.getId();
                  const isActive = id === activePage;
                  return (
                    <TreeItem key={id} item={item} asChild>
                      <div
                        onClick={() => navigateTo(id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") navigateTo(id);
                        }}
                        role="button"
                        tabIndex={0}
                        className={
                          "w-full text-left flex items-center gap-2 cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50" +
                          (isActive ? " bg-primary/10 text-primary font-medium" : " hover:bg-slate-50")
                        }
                      >
                        <TreeItemLabel item={item} className="flex-1 w-full !pr-6" />
                      </div>
                    </TreeItem>
                  );
                })}
                <TreeDragLine />
              </Tree>
            </div>
          </div>

          <div className="flex flex-1 lg:hidden">
            <Pagination>
              <PaginationContent className="w-full justify-between gap-3">
                <PaginationItem>
                  <Button
                    variant="ghost"
                    className="group aria-disabled:pointer-events-none aria-disabled:opacity-50 cursor-pointer"
                    aria-disabled={currentIndex === 0 ? true : undefined}
                    role={currentIndex === 0 ? "link" : undefined}
                    onClick={() => navigateTo(pagesOrder[Math.max(currentIndex - 1, 0)])}
                  >
                    <ArrowLeftIcon
                      className="-ms-1 opacity-60 transition-transform group-hover:-translate-x-0.5"
                      size={16}
                      aria-hidden="true"
                    />
                    Previous
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button
                    variant="ghost"
                    className="group aria-disabled:pointer-events-none aria-disabled:opacity-50 cursor-pointer"
                    aria-disabled={currentIndex === pagesOrder.length - 1 ? true : undefined}
                    role={currentIndex === pagesOrder.length - 1 ? "link" : undefined}
                    onClick={() => navigateTo(pagesOrder[Math.min(currentIndex + 1, pagesOrder.length - 1)])}
                  >
                    Next
                    <ArrowRightIcon
                      className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                      size={16}
                      aria-hidden="true"
                    />
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          <div className="flex flex-3 flex-col">
            <div className="mb-6 mt-6 lg:mt-0 lg:mb-0 lg:mx-4 w-full text-left">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  // read ?page= from the URL and use it as the initial active page if valid
  const searchParams = useSearchParams();
  const pageParam = searchParams?.get("page") ?? undefined;
  const initial = pageParam && HELP_ITEMS[pageParam] ? pageParam : undefined;

  return (
    <HelpProvider initial={initial}>
      <HelpLayoutContent>{children}</HelpLayoutContent>
    </HelpProvider>
  );
}