"use client"

import React, { useEffect, useRef, useState } from "react"
import { useParams } from "next/navigation"
import {
  expandAllFeature,
  hotkeysCoreFeature,
  searchFeature,
  selectionFeature,
  syncDataLoaderFeature,
  TreeState,
} from "@headless-tree/core"
import { useTree } from "@headless-tree/react"
import {
  Calendar,
  CircleXIcon,
  Eye,
  FilterIcon,
  FolderIcon,
  FolderOpenIcon,
} from "lucide-react";
import Link from "next/link"

import { Input } from "@/app/(components)/ui/input";
import { Tree, TreeItem, TreeItemLabel } from "@/app/(components)/ui/tree";

interface Item {
  name: string
  children?: string[]
  // optional slug for article leaves
  slug?: string
  watching: boolean
}

interface SerializedSaved {
  articleId: number
  title: string
  slug: string
  savedAt: string // ISO string
  watching?: boolean
}

// `items` will be built dynamically from the `saved` prop inside the component.

const indent = 20

export default function Component({ saved }: { saved?: SerializedSaved[] }) {
  // Build the items record from the saved prop.
  // Group saved articles by the date (YYYY-MM-DD) they were savedAt.
  const items: Record<string, Item> = {}

  // root node
  items["root"] = { name: "Saved", children: [], watching: false }

  if (saved && saved.length > 0) {
    // Group by YYYY-MM-DD
    const groups = new Map<string, SerializedSaved[]>()
    saved.forEach((s) => {
      // Use user's local timezone to determine the date the article was saved in their locale
      const local = new Date(s.savedAt)
      const yyyy = local.getFullYear()
      const mm = String(local.getMonth() + 1).padStart(2, "0")
      const dd = String(local.getDate()).padStart(2, "0")
      const date = `${yyyy}-${mm}-${dd}`
      const arr = groups.get(date) || []
      arr.push(s)
      groups.set(date, arr)
    })

    // Sort dates descending (newest first)
    const sortedDates = Array.from(groups.keys()).sort((a, b) => (a < b ? 1 : -1))

    sortedDates.forEach((date) => {
      const articles = groups.get(date) || []
      const dateId = date
      items[dateId] = { name: date, children: [], watching: false }
      items["root"].children!.push(dateId)

      // Sort articles by savedAt ascending within the date (chronological)
      articles
        .sort((a, b) => (a.savedAt < b.savedAt ? -1 : 1))
        .forEach((art) => {
          const articleId = `a-${art.articleId}-${art.slug}`
          items[dateId].children!.push(articleId)
          items[articleId] = {
            name: art.title,
            slug: art.slug,
            watching: !!art.watching,
          }
        })
    })
  }
  // Store the initial expanded items to reset when search is cleared.
  // Expand all folder (date) nodes by default so everything is open.
  const initialExpandedItems = Object.keys(items).filter(
    (id) => (items[id].children?.length ?? 0) > 0
  )
  const [state, setState] = useState<Partial<TreeState<Item>>>({})
  const [searchValue, setSearchValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const params = useParams()
  const lang = params?.lang ?? "en"

  const tree = useTree<Item>({
    state,
    setState,
    initialState: {
      expandedItems: initialExpandedItems,
    },
    indent,
    rootItemId: "root",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId] ?? undefined,
      getChildren: (itemId) => items[itemId]?.children ?? [],
    },
    features: [
      syncDataLoaderFeature,
      hotkeysCoreFeature,
      selectionFeature,
      searchFeature,
      expandAllFeature,
    ],
  })

  // Handle clearing the search
  const handleClearSearch = () => {
    setSearchValue("")

    // Manually trigger the tree's search onChange with an empty value
    // to ensure item.isMatchingSearch() is correctly updated.
    const searchProps = tree.getSearchInputElementProps()
    if (searchProps.onChange) {
      const syntheticEvent = {
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement> // Cast to the expected event type
      searchProps.onChange(syntheticEvent)
    }

    // Reset tree state to initial expanded items
    setState((prevState) => ({
      ...prevState,
      expandedItems: initialExpandedItems,
    }))

    // Clear custom filtered items
    setFilteredItems([])

    if (inputRef.current) {
      inputRef.current.focus()
      // Also clear the internal search input
      inputRef.current.value = ""
    }
  }

  // Keep track of filtered items separately from the tree's internal search state
  const [filteredItems, setFilteredItems] = useState<string[]>([])

  // This function determines if an item should be visible based on our custom filtering
  const shouldShowItem = (itemId: string) => {
    if (!searchValue || searchValue.length === 0) return true
    return filteredItems.includes(itemId)
  }

  // Update filtered items when search value changes
  useEffect(() => {
    if (!searchValue || searchValue.length === 0) {
      setFilteredItems([])
      return
    }

    // Get all items
    const allItems = tree.getItems()

    // First, find direct matches
    const directMatches = allItems
      .filter((item) => {
        const name = item.getItemName().toLowerCase()
        return name.includes(searchValue.toLowerCase())
      })
      .map((item) => item.getId())

    // Then, find all parent IDs of matching items
    const parentIds = new Set<string>()
    directMatches.forEach((matchId) => {
      let item = tree.getItems().find((i) => i.getId() === matchId)
      while (item?.getParent && item.getParent()) {
        const parent = item.getParent()
        if (parent) {
          parentIds.add(parent.getId())
          item = parent
        } else {
          break
        }
      }
    })

    // Find all children of matching items
    const childrenIds = new Set<string>();
    directMatches.forEach((matchId) => {
      const item = tree.getItems().find((i) => i.getId() === matchId)
      if (item && item.isFolder()) {
        // Get all descendants recursively
        const getDescendants = (itemId: string) => {
          const children = items[itemId]?.children || []
          children.forEach((childId) => {
            childrenIds.add(childId)
            if (items[childId]?.children?.length) {
              getDescendants(childId)
            }
          })
        }

        getDescendants(item.getId());
      }
    })

    // Combine direct matches, parents, and children
    setFilteredItems([
      ...directMatches,
      ...Array.from(parentIds),
      ...Array.from(childrenIds),
    ])

    // Keep all folders expanded during search to ensure all matches are visible
    // Store current expanded state first
    const currentExpandedItems = tree.getState().expandedItems || []

    // Get all folder IDs that need to be expanded to show matches
    const folderIdsToExpand = allItems
      .filter((item) => item.isFolder())
      .map((item) => item.getId())

    // Update expanded items in the tree state
    setState((prevState) => ({
      ...prevState,
      expandedItems: [
        ...new Set([...currentExpandedItems, ...folderIdsToExpand]),
      ],
    }))
  }, [searchValue, tree])

  return (
    <div className="flex h-full flex-col gap-2 *:nth-2:grow">
      <div className="relative w-full overflow-hidden">
        <Input
          ref={inputRef}
          className="peer ps-9 w-full max-w-full min-w-0"
          value={searchValue}
          onChange={(e) => {
            const value = e.target.value
            setSearchValue(value)

            // Apply the search to the tree's internal state as well
            const searchProps = tree.getSearchInputElementProps()
            if (searchProps.onChange) {
              searchProps.onChange(e)
            }

            if (value.length > 0) {
              // If input has at least one character, expand all items
              tree.expandAll()
            } else {
              // If input is cleared, reset to initial expanded state
              setState((prevState) => ({
                ...prevState,
                expandedItems: initialExpandedItems,
              }))
              setFilteredItems([])
            }
          }}
          // Prevent the internal search from being cleared on blur
          onBlur={(e) => {
            // Prevent default blur behavior
            e.preventDefault()

            // Re-apply the search to ensure it stays active
            if (searchValue && searchValue.length > 0) {
              const searchProps = tree.getSearchInputElementProps()
              if (searchProps.onChange) {
                const syntheticEvent = {
                  target: { value: searchValue },
                } as React.ChangeEvent<HTMLInputElement>
                searchProps.onChange(syntheticEvent)
              }
            }
          }}
          type="search"
          placeholder="Filter items..."
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <FilterIcon className="size-4" aria-hidden="true" />
        </div>
        {searchValue && (
          <button
            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 transition-[color,box-shadow] outline-none hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Clear search"
            onClick={handleClearSearch}
          >
            <CircleXIcon className="size-4" aria-hidden="true" />
          </button>
        )}
      </div>

      <Tree indent={indent} tree={tree}>
        {searchValue && filteredItems.length === 0 ? (
          <p className="px-3 py-4 text-center text-sm">
            No items found for "{searchValue}"
          </p>
        ) : (
          tree.getItems().map((item) => {
            const isVisible = shouldShowItem(item.getId())
            const id = item.getId()
            const data = item.getItemData() as Item
            const name = item.getItemName();
            const isFolder = item.isFolder();
            const slug = data?.slug ?? id
            const watching = data.watching;

            return (
              <TreeItem
                key={id}
                item={item}
                data-visible={isVisible || !searchValue}
                className="data-[visible=false]:hidden cursor-pointer"
              >
                <TreeItemLabel className="dark:bg-neutral-800 dark:hover:bg-neutral-700/50">
                  <span className="flex items-center gap-2 w-full">
                    {isFolder && (
                      <Calendar className="pointer-events-none size-4 text-muted-foreground" />
                    )}
                    {isFolder ? (
                      // If this is a date-folder and its ID is an ISO date, format it for the user's locale.
                      /^\d{4}-\d{2}-\d{2}$/.test(id) ? (
                        (() => {
                          try {
                            const d = new Date(id)
                            if (isNaN(d.getTime())) return name
                            return (
                              <span className="text-muted-foreground">
                                {new Intl.DateTimeFormat(undefined, {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }).format(d)}
                              </span>
                            )
                          } catch (e) {
                            return name
                          }
                        })()
                      ) : (
                        name
                      )
                    ) : (
                        <div className="flex flex-row w-full min-w-0 items-center gap-2">
                          <Link href={`/${lang}/wiki/${encodeURIComponent(slug)}/wikipedia`} className="inline-flex flex-1 min-w-0 truncate">{name}</Link>
                          {watching && (
                            <div className="inline-flex flex-none"><Eye size={22} /></div>
                          )}
                        </div>
                    )}
                  </span>
                </TreeItemLabel>
              </TreeItem>
            )
          })
        )}
      </Tree>
    </div>
  )
}
